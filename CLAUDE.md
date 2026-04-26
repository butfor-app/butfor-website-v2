# ButFor Website — Claude Context

## Project overview
Vue 3 SPA (single-page app) built with Vite and Tailwind CSS. Content is managed via a separate Strapi 4 CMS. The site is deployed on a Vultr VPS at butfor.co.

## Repos
- **Website (this repo):** `github.com/butfor-app/butfor-website-v2`
- **CMS (separate repo):** `github.com/butfor-app/butfor-website-CMS-v2`

## Tech stack
- Vue 3 + Vue Router (history mode) + Pinia
- Tailwind CSS
- Vite 5 build system
- `@vueuse/head` for per-page meta/SEO tags
- HubSpot Forms API v3 for lead capture
- Strapi 4 REST API for all dynamic content (articles, case studies, webinars, fireside chats, white papers)
- Nodemailer (Gmail SMTP) on Strapi for sending white paper PDFs by email

## Environment variables
All env vars are prefixed `VITE_` and live in `.env` (not committed). Key vars:
- `VITE_STRAPI_TOKEN` — Strapi API bearer token (also used by `scripts/generate-sitemap.js` at build time)
- `VITE_HUBSPOT_PORTAL_ID` — HubSpot portal ID
- `VITE_HUBSPOT_MASTER_FORM_ID` — fallback HubSpot form ID used when Strapi doesn't provide one

## Project structure
```
src/
  App.vue               — root layout, global meta/SEO, canonical URL, JSON-LD schema
  main.js               — app entry
  router/index.js       — all routes defined here
  pages/                — one file per page (or subfolder for content types)
    HomePage.vue
    ProductPage.vue
    Articles/
      ArticlesPage.vue  — listing
      ArticlePage.vue   — single article (fetches by :id from Strapi)
    CaseStudies/
    WebinarsPage.vue / WebinarInfoPage.vue
    FireSideChats/
    WhitePapers/
      WhitePapers.vue   — listing
      WhitePaper.vue    — single white paper with registration form + PDF download
    ...
  components/
    NavBar.vue          — top nav + announcement banner
    Footer.vue
    ContentRegistrationForm.vue  — HubSpot form used for webinars, fireside chats, white papers
    ButForForm.vue      — general contact/demo form
    HubspotForm.vue     — raw HubSpot embed wrapper
    ...
  composables/
    useStrapi.js        — shared fetch helper for Strapi API calls
scripts/
  generate-sitemap.js   — runs at build time, fetches all content IDs from Strapi, writes public/sitemap.xml
public/
  robots.txt
  sitemap.xml           — auto-generated at build time (do not edit manually)
```

## Key components

### ContentRegistrationForm.vue
Used on white paper, webinar, and fireside chat detail pages. Props:
- `formId` — HubSpot form ID
- `pageName` — sent to HubSpot as page context
- `buttonText` — defaults to "Register Now"
- `downloadUrl` — if set, triggers a programmatic file download after submit
- `sendDocumentUrl` — if set, POSTs `{ email, firstname }` to a Strapi endpoint to send the file by email
- `redirectTo` — if set, router.push after submit

### NavBar.vue
The announcement banner (top bar) is hardcoded in NavBar.vue. To change event details, edit the text and button label directly in that file.

### useStrapi composable
Wraps fetch calls to `https://butfor.co/strapi/api`. Always uses `VITE_STRAPI_TOKEN` from env.

## HubSpot forms
Portal ID and a master fallback form ID are in `.env`. Each content item in Strapi has an optional `hubspot_form_id` field — if unset, the master form is used. Forms are submitted via HubSpot Forms API v3 (`api.hsforms.com/submissions/v3/integration/submit`).

## White paper email flow
After a white paper form is submitted:
1. PDF download is triggered in-browser (programmatic `<a download>` click)
2. A fire-and-forget POST goes to `https://butfor.co/strapi/api/white-paper/send-document`
3. Strapi's nodemailer controller sends the PDF link to the user's email via Gmail SMTP

## Build & deploy

### Local dev
```bash
npm install
npm run dev       # starts Vite dev server at localhost:5173
```

### Build
```bash
npm run build     # generates sitemap then runs vite build
```
Build output goes to `dist/`. Includes brotli + gzip compressed versions of all assets, and image optimization (sharp/svgo — ~73% size reduction on PNGs).

### Deploy to server
Kim's deploy flow (run on the Vultr server):
```bash
cd /home/butfor/butfor-www
git pull
yarn build
```
Nginx serves the `dist/` folder. No separate deploy step needed — the build output is served directly.

## Server (Vultr VPS)
- Website files: `/home/butfor/butfor-www`
- Strapi CMS files: `/home/butfor/butfor-cms`
- Strapi runs via PM2 as `strapi:3005` on port 3005
- Nginx proxies `/strapi/` to port 3005 and serves the website's `dist/` for everything else
- Strapi env vars (Gmail credentials, Strapi token) are in `/home/butfor/butfor-cms/.env`

## Strapi content types
- `articles` → `/article/:id`
- `case-studies` → `/case-studies/:id`
- `webinars` → `/webinars/:id`
- `fireside-chats` → `/fireside-chat/:id`
- `white-papers` → `/white-papers/:id`

## SEO
- Per-page titles and meta descriptions set via `useHead()` in each page component
- Global Organization JSON-LD schema in `App.vue`
- Canonical URL updated on every route change in `App.vue`
- Sitemap auto-generated at build time by `scripts/generate-sitemap.js`

## Things NOT to do
- Do not commit `.env` — it contains secrets and is gitignored
- Do not edit `public/sitemap.xml` manually — it is overwritten on every build
- Do not add `"type": "module"` to `package.json` without testing — the build script has a warning about this but works fine as-is
