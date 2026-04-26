#!/usr/bin/env node
/**
 * Creates one HubSpot form per page.
 * Usage: HUBSPOT_API_TOKEN=<token> node scripts/create-hubspot-forms.js
 *
 * Outputs: scripts/hubspot-form-ids.json  (pageName → formId)
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

const PAGES = [
  "Product Page",
  "Pricing Page",
  "Subscription Page",
  "Sustainability Page",
  "ButFor vs Consultants",
  "ButFor vs Excel",
  "ButFor vs Internal",
  "Integrations Page",
  "Cost Estimator Page",
  "Policy Analyzer Page",
  "Careers Page",
  "Webinars Page",
  "Fireside Chats Page",
  "Contact Page",
  "Book Demo Page",
  "White Papers Page",
  "Articles Page",
  "Case Studies Page",
  "Solutions Page",
  "Landing Page",
  "Solutions - Enterprise",
  "Solutions - Insurance Companies",
  "Solutions - Claims Managers",
  "Solutions - Insurance Brokers",
  "Solutions - Law Firms",
  "Solutions - Risk & Compliance",
  "Solutions - Finance Analysts",
  "Solutions - Forensic Accountants",
  "Solutions - Executive Teams",
  "Solutions - Natural Disasters",
  "Solutions - Fire or Explosion",
  "Solutions - Equipment Breakdown",
  "Solutions - Cyber Attacks",
  "Solutions - Power Outages",
  "Solutions - Construction or Renovation",
  "Solutions - City Shutdowns",
  "Solutions - Pandemics",
  "Claims 101 Page",
  "Webinar - CrowdStrike & Business Interruption",
  "Fireside Chat - CrowdStrike & Business Interruption",
  "White Paper - When Disaster Strikes",
];

const token = process.env.HUBSPOT_API_TOKEN;
if (!token) {
  console.error("Error: HUBSPOT_API_TOKEN environment variable is not set.");
  process.exit(1);
}

function buildPayload(name) {
  return {
    name,
    formType: "hubspot",
    createdAt: new Date().toISOString(),
    configuration: {
      createNewContactForNewEmail: true,
      prePopulateKnownValues: true,
      allowLinkToResetKnownValues: false,
      lifecycleStages: [],
    },
    fieldGroups: [
      {
        groupType: "default_group",
        richTextType: "text",
        fields: [
          { name: "firstname", label: "First Name", required: true,  fieldType: "single_line_text", objectTypeId: "0-1" },
          { name: "lastname",  label: "Last Name",  required: true,  fieldType: "single_line_text", objectTypeId: "0-1" },
          { name: "email",     label: "Work Email", required: true,  fieldType: "single_line_text", objectTypeId: "0-1" },
        ],
      },
      {
        groupType: "default_group",
        richTextType: "text",
        fields: [
          { name: "company",  label: "Company Name", required: true,  fieldType: "single_line_text", objectTypeId: "0-1" },
          { name: "jobtitle", label: "Job Title",    required: true,  fieldType: "single_line_text", objectTypeId: "0-1" },
          { name: "phone",    label: "Phone",        required: false, fieldType: "phone",              objectTypeId: "0-1" },
        ],
      },
    ],
  };
}

function request(method, urlPath, body) {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : null;
    const options = {
      hostname: "api.hubapi.com",
      path: urlPath,
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        ...(payload ? { "Content-Length": Buffer.byteLength(payload) } : {}),
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        let parsed;
        try { parsed = JSON.parse(data); } catch { parsed = data; }
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(parsed);
        } else {
          const err = new Error(`HTTP ${res.statusCode}`);
          err.body = parsed;
          reject(err);
        }
      });
    });

    req.on("error", reject);
    if (payload) req.write(payload);
    req.end();
  });
}

const ALL_FIELDS = [
  { name: "firstname", label: "First Name",   required: true,  fieldType: "single_line_text", objectTypeId: "0-1" },
  { name: "lastname",  label: "Last Name",    required: true,  fieldType: "single_line_text", objectTypeId: "0-1" },
  { name: "email",     label: "Work Email",   required: true,  fieldType: "single_line_text", objectTypeId: "0-1" },
  { name: "company",   label: "Company Name", required: true,  fieldType: "single_line_text", objectTypeId: "0-1" },
  { name: "jobtitle",  label: "Job Title",    required: true,  fieldType: "single_line_text", objectTypeId: "0-1" },
  { name: "phone",     label: "Phone",        required: false, fieldType: "phone",            objectTypeId: "0-1" },
];

async function probe() {
  // Step 1: name + formType + configuration, no fieldGroups
  const base = {
    name: "ButFor - TEST",
    formType: "hubspot",
    createdAt: new Date().toISOString(),
    configuration: {
      createNewContactForNewEmail: true,
      prePopulateKnownValues: true,
      allowLinkToResetKnownValues: false,
      lifecycleStages: [],
    },
  };
  console.log("\n--- Step 1: bare minimum ---");
  console.log(JSON.stringify(base, null, 2));
  let form = await request("POST", "/marketing/v3/forms", base);
  console.log("OK →", form.id);
  await request("DELETE", `/marketing/v3/forms/${form.id}`);
  console.log("Deleted.\n");

  // Step 2: add fields back one at a time, splitting into two groups at field 4
  for (let i = 0; i < ALL_FIELDS.length; i++) {
    const all = ALL_FIELDS.slice(0, i + 1);
    const group1 = all.slice(0, 3);
    const group2 = all.slice(3);
    const fieldGroups = [
      { groupType: "default_group", richTextType: "text", fields: group1 },
      ...(group2.length ? [{ groupType: "default_group", richTextType: "text", fields: group2 }] : []),
    ];
    const payload = {
      name: "ButFor - TEST",
      formType: "hubspot",
      createdAt: new Date().toISOString(),
      configuration: {
        createNewContactForNewEmail: true,
        prePopulateKnownValues: true,
        allowLinkToResetKnownValues: false,
        lifecycleStages: [],
      },
      fieldGroups,
    };
    console.log(`--- Step 2.${i + 1}: adding field "${ALL_FIELDS[i].name}" (${all.length} total) ---`);
    console.log(JSON.stringify(payload, null, 2));
    form = await request("POST", "/marketing/v3/forms", payload);
    console.log("OK →", form.id);
    await request("DELETE", `/marketing/v3/forms/${form.id}`);
    console.log("Deleted.\n");
  }

  console.log("All probe steps passed. Proceeding with full payload for all forms.\n");
}

async function main() {
  // Optional: pass a page name as argv to create only that one form
  // e.g. node create-hubspot-forms.js "Claims 101 Page"
  const filter = process.argv[2] ? process.argv[2].trim() : null;
  const pagesToCreate = filter ? PAGES.filter((p) => p === filter) : PAGES;

  if (filter && pagesToCreate.length === 0) {
    console.error(`No page found matching "${filter}". Available pages:\n${PAGES.join("\n")}`);
    process.exit(1);
  }

  // --- Probe test ---
  try {
    await probe();
  } catch (err) {
    console.error("Probe FAILED:", err.message);
    console.error("Full error response:", JSON.stringify(err.body, null, 2));
    process.exit(1);
  }

  // Load existing mappings so we don't overwrite already-created forms
  const outPath = path.join(__dirname, "hubspot-form-ids.json");
  const mapping = fs.existsSync(outPath) ? JSON.parse(fs.readFileSync(outPath, "utf8")) : {};

  // --- Create filtered forms ---
  for (const pageName of pagesToCreate) {
    process.stdout.write(`Creating form for "${pageName}"... `);
    try {
      const form = await request("POST", "/marketing/v3/forms", buildPayload(`ButFor - ${pageName}`));
      mapping[pageName] = form.id;
      console.log(`OK → ${form.id}`);
    } catch (err) {
      console.error(`FAILED: ${err.message}`, err.body ? JSON.stringify(err.body) : "");
      mapping[pageName] = null;
    }
  }

  fs.writeFileSync(outPath, JSON.stringify(mapping, null, 2));
  console.log(`\nDone. Mapping saved to ${outPath}`);
  console.log(JSON.stringify(mapping, null, 2));
}

main().catch((err) => {
  console.error("Fatal:", err.message);
  process.exit(1);
});
