<template>
  <NavBar />
  <!-- <div id="master_wrapper"> -->
  <div id="scroll_anchor"></div>
  <Suspense>
    <RouterView />
  </Suspense>
  <!-- </div> -->
  <Footer />
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import { watch, ref, onMounted } from "vue";
import { useHead } from "@vueuse/head";

const GAS_URL = 'https://script.google.com/macros/s/AKfycbyHPmov8N810uIA690j8CSQ4RgeBjuGACR0VFqgu1Jq2j5OnTC5IpuNX4iOiLsjhEOL/exec';

let _visitorIpData = null;

function getOrCreateVisitorId() {
  const name = 'bf_vid';
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  if (match) return decodeURIComponent(match[1]);
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  const exp = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(uuid)}; expires=${exp}; path=/; SameSite=Lax`;
  return uuid;
}

function getUtmParams() {
  const stored = sessionStorage.getItem('bf_utm');
  if (stored) return JSON.parse(stored);
  const p = new URLSearchParams(window.location.search);
  const utm = {
    source: p.get('utm_source') || '',
    medium: p.get('utm_medium') || '',
    campaign: p.get('utm_campaign') || '',
  };
  sessionStorage.setItem('bf_utm', JSON.stringify(utm));
  return utm;
}

function getReferrer() {
  const stored = sessionStorage.getItem('bf_referrer');
  if (stored !== null) return stored;
  const ref = document.referrer || '';
  sessionStorage.setItem('bf_referrer', ref);
  return ref;
}

function sendVisit(pageUrl) {
  if (!GAS_URL.startsWith('http')) return;
  const utm = getUtmParams();
  fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify({
      timestamp: new Date().toISOString(),
      visitor_id: getOrCreateVisitorId(),
      ip: _visitorIpData?.ip ?? '',
      city: _visitorIpData?.city ?? '',
      region: _visitorIpData?.region ?? '',
      country: _visitorIpData?.country_name ?? '',
      org: _visitorIpData?.org ?? '',
      lat: _visitorIpData?.latitude ?? '',
      lon: _visitorIpData?.longitude ?? '',
      referrer: getReferrer(),
      utm_source: utm.source,
      utm_medium: utm.medium,
      utm_campaign: utm.campaign,
      url: pageUrl,
    }),
  }).catch(() => {});
}

const title =
  "ButFor: Automate Business Interruption Claims and Maximize Lost Income"; // Replace with your desired title
const description =
  "ButFor: Automate Complex Business Interruption Claims & Recover More. Streamline the process, save time, get expert guidance, reduce costs, and maximize your lost income. Visit butfor.co"; // Replace with your description
const route = useRoute();
const navRef = ref(null);

useHead({
  title,
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ButFor",
        "url": "https://butfor.co",
        "logo": "https://butfor.co/logo.png",
        "sameAs": ["https://www.linkedin.com/company/butfor"],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hello@butfor.co",
          "contactType": "customer support"
        },
        "description": "ButFor automates complex business interruption insurance claim preparation, helping consultants and firms save time, reduce errors, and maximize recoveries."
      })
    }
  ],
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "business interruption insurance, butfor, butfor.co, business interruption claim preparation, claim automation, business interruption",
    },
    {
      property: "og:title",
      content: "Simplify Complex Business Interruption Claims with ButFor",
    },
    {
      property: "og:description",
      content:
        "ButFor streamlines complex and catastrophic business interruption insurance claim preparation. Get expert guidance and maximize your recovery. Visit butfor.co",
    },
    { property: "og:url", content: "https://butfor.co" },
    { property: "og:image", content: "https://www.butfor.co/metal.jpg" },
    {
      property: "twitter:title",
      content: "Simplify Complex Business Interruption Claims with ButFor",
    },
    {
      property: "twitter:description",
      content:
        "ButFor streamlines complex and catastrophic business interruption insurance claim preparation. Get expert guidance and maximize your recovery. Visit butfor.co",
    },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:image", content: "https://www.butfor.co/metal.jpg" },
    {
      property: "linkedin:summary",
      content: "ButFor helps automate business interruption claims.",
    },
    { property: "linkedin:url", content: "https://butfor.co" },
    { property: "linkedin:image", content: "https://www.butfor.co/metal.jpg" },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://butfor.co" + (route.path == "/" ? "" : route.path),
    },
  ],
});

onMounted(async () => {
  try {
    const res = await fetch('https://ipapi.co/json/');
    _visitorIpData = await res.json();
  } catch {
    _visitorIpData = {};
  }
  sendVisit(window.location.href);
});

watch(
  () => route.query,
  (query) => {
    // console.log(route.path.includes("/product"));
    // console.log("Scrolling to top");
    if (route.path.includes("/product")) {
    } else {
      const navbarRef = document.querySelector("#scroll_anchor");
      navbarRef.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  },
);

watch(
  () => route.path,
  () => {
    // scrollToFaqs();
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://butfor.co" + route.path,
        },
      ],
    });
    if (_visitorIpData !== null) {
      sendVisit(window.location.href);
    }
  },
);
</script>

<style>
#app {
  @apply m-0 p-0;
  /* @apply w-[1440px] mx-auto; */
}
/* #master_wrapper {
  @apply w-[1440px] mx-auto;
} */
</style>
