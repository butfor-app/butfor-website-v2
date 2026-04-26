# ButFor Website — Developer Handoff

Hi! This doc covers everything you need to work on the ButFor marketing website on Windows.

---

## What this is
A Vue 3 marketing website (butfor.co) built with Vite and Tailwind CSS. Content like articles, case studies, webinars, fireside chats, and white papers is managed through a separate Strapi CMS also hosted on our Vultr server.

---

## Step 1 — Install the basics

Install these in order:

1. **Node.js v20** — https://nodejs.org (choose the LTS version)
2. **Git for Windows** — https://git-scm.com/download/win (use all default options during install)
3. **VS Code** — https://code.visualstudio.com

After installing VS Code, open it and install these extensions (Ctrl+Shift+X to open extensions):
- **Volar** (Vue language support) — search "Vue - Official"
- **Tailwind CSS IntelliSense** — search "Tailwind CSS IntelliSense"
- **GitLens** (optional but helpful) — search "GitLens"

---

## Step 2 — Set up GitHub access

You need SSH access to the GitHub org so you can clone and push.

1. Open **Git Bash** (installed with Git for Windows — search for it in Start)
2. Generate an SSH key:
```bash
ssh-keygen -t ed25519 -C "your@email.com"
```
Press Enter through all prompts (no passphrase needed).

3. Copy your public key:
```bash
cat ~/.ssh/id_ed25519.pub
```
Copy the whole output.

4. Go to https://github.com/settings/keys → click **New SSH key** → paste it in → save.

5. Ask Kim to add you to the `butfor-app` GitHub organization.

6. Test it works:
```bash
ssh -T git@github.com
```
You should see: `Hi [username]! You've successfully authenticated...`

---

## Step 3 — Clone the repo and install dependencies

Open **Git Bash** and run:
```bash
git clone git@github.com:butfor-app/butfor-website-v2.git
cd butfor-website-v2
npm install
```

---

## Step 4 — Add the .env file

Kim will send you a `.env` file. Place it in the root of the `butfor-website-v2` folder (same level as `package.json`).

It should look something like this (values filled in):
```
VITE_STRAPI_TOKEN=...
VITE_HUBSPOT_PORTAL_ID=...
VITE_HUBSPOT_MASTER_FORM_ID=...
```

**Never commit this file.** It's already in `.gitignore` so Git will ignore it automatically.

---

## Step 5 — Run locally

```bash
npm run dev
```

Open http://localhost:5173 in your browser. The site pulls live content from the production Strapi CMS so everything will look real.

---

## Step 6 — Set up Vercel (for preview deploys)

Kim uses Vercel to preview changes before pushing to the live server. You can do the same.

1. Install the Vercel CLI:
```bash
npm install -g vercel
```

2. Log in:
```bash
vercel login
```
Choose "Continue with GitHub" and follow the browser flow.

3. Ask Kim to add you to the ButFor Vercel team.

4. Link your local repo to the Vercel project:
```bash
vercel link
```
Choose the `butfor-app` team and the `butfor-website-v2` project.

5. To deploy a preview at any time:
```bash
vercel
```
It will give you a unique preview URL (e.g. `butfor-website-v2-abc123.vercel.app`) you can share with Kim to review before going live.

**Note:** The `.env` variables are already set up in Vercel by Kim. You don't need to add them yourself.

---

## Step 7 — Set up Claude Code (optional but recommended)

Claude Code lets you describe changes in plain English and Claude makes them directly in the code.

1. Install it:
```bash
npm install -g @anthropic/claude-code
```

2. You'll need an Anthropic account at https://claude.ai — sign up if you don't have one.

3. Start a session inside the project folder:
```bash
cd butfor-website-v2
claude
```

Claude automatically reads `CLAUDE.md` in this repo so it already knows how everything works. Just describe what you want.

**Example prompts:**
- "Change the announcement banner to say X and link to /webinars/6"
- "Add a new page at /about with this content: ..."
- "Update the meta description on the pricing page to say ..."

---

## Making changes

All pages are in `src/pages/`. Each page is a `.vue` file. Components shared across pages are in `src/components/`.

**Common tasks:**
- **Change page text/layout** → edit the `.vue` file for that page
- **Change nav or footer** → `src/components/NavBar.vue` or `src/components/Footer.vue`
- **Change the announcement banner** → top of `src/components/NavBar.vue`
- **Add a new static page** → create a `.vue` file in `src/pages/`, then add the route in `src/router/index.js`
- **Change meta title/description for a page** → find the `useHead()` call inside that page's `<script setup>`

---

## Deploying to production

The site is hosted on a Vultr VPS, not Vercel. To push to the live site:

1. Commit and push your changes to the `main` branch
2. SSH into the server (ask Kim for the credentials)
3. Run:
```bash
cd /home/butfor/butfor-www
git pull
yarn build
```

The build takes about 1 minute. Nginx automatically serves the new files — no restart needed.

---

## Key things to know

**HubSpot forms** — Lead capture forms use HubSpot's Forms API. The portal ID and a master form ID are in `.env`. Each webinar/white paper in Strapi can have its own `hubspot_form_id` — if not set, the master form is used as a fallback.

**White paper downloads** — When someone submits the white paper form, two things happen automatically: (1) the PDF downloads in their browser, (2) Strapi sends them an email with the PDF link via Gmail.

**Strapi CMS** — Content editors add/edit articles, webinars, case studies, etc. through the Strapi admin at `https://butfor.co/strapi/admin`. You shouldn't need to touch Strapi for most frontend work.

**Sitemap** — `public/sitemap.xml` is auto-generated every build. Don't edit it manually.

**Images** — Drop images in `src/assets/` or `public/`. They get automatically compressed at build time (~70% size reduction). Prefer `.png` or `.svg`.

---

## Repos
| Repo | What it is |
|------|-----------|
| `butfor-app/butfor-website-v2` | This repo — the Vue frontend |
| `butfor-app/butfor-website-CMS-v2` | Strapi CMS — manages content |

---

## Questions?
Ask Kim — she set all of this up and knows the server details, API keys, and HubSpot account.
