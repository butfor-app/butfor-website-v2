# ButFor Website — Developer Handoff

Hi! This doc covers everything you need to work on the ButFor marketing website.

---

## What this is
A Vue 3 marketing website (butfor.co) built with Vite and Tailwind CSS. Content like articles, case studies, webinars, fireside chats, and white papers is managed through a separate Strapi CMS also hosted on our Vultr server.

---

## Getting set up (Windows)

### Prerequisites
- Install [Node.js](https://nodejs.org) (v20+)
- Install [Git](https://git-scm.com)
- Install [VS Code](https://code.visualstudio.com) — recommended extensions: Volar (Vue), Tailwind CSS IntelliSense

### Clone and run locally
```bash
git clone git@github.com:butfor-app/butfor-website-v2.git
cd butfor-website-v2
npm install
```

You'll need a `.env` file in the root — ask Kim for this. It contains API keys and should never be committed to git.

```bash
npm run dev
```

This starts a local dev server at `http://localhost:5173`. The site will pull live content from the production Strapi CMS, so articles and webinars will show up normally.

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

You don't use Vercel or Netlify — the site is deployed directly to our Vultr server.

**Kim's deploy flow:**
1. Push your changes to the `main` branch on GitHub
2. SSH into the server (ask Kim for access)
3. Run:
```bash
cd /home/butfor/butfor-www
git pull
yarn build
```

That's it. Nginx serves the built files automatically. The build takes ~1 minute and includes automatic image compression and gzip/brotli compression.

---

## Repos
| Repo | What it is |
|------|-----------|
| `butfor-app/butfor-website-v2` | This repo — the Vue frontend |
| `butfor-app/butfor-website-CMS-v2` | Strapi CMS — manages content |

---

## Key things to know

**HubSpot forms** — Lead capture forms use HubSpot's Forms API. The portal ID and a master form ID are in `.env`. Each webinar/white paper in Strapi can have its own `hubspot_form_id` — if not set, the master form is used as a fallback.

**White paper downloads** — When someone submits the white paper form, two things happen automatically: (1) the PDF downloads in their browser, (2) Strapi sends them an email with the PDF link via Gmail.

**Strapi CMS** — Content editors add/edit articles, webinars, case studies, etc. through the Strapi admin at `https://butfor.co/strapi/admin`. You shouldn't need to touch Strapi for most frontend work.

**Sitemap** — `public/sitemap.xml` is auto-generated every build. Don't edit it manually.

**Images** — Drop images in `src/assets/` or `public/`. They get automatically compressed at build time (~70% size reduction). Prefer `.png` or `.svg` — the build converts them to WebP automatically.

---

## Using Claude Code for this project

Claude Code is a CLI tool that lets Claude read your codebase and make changes directly. It works great for this project.

**To install Claude Code:**
```bash
npm install -g @anthropic/claude-code
```

**To start a session:**
```bash
cd butfor-website-v2
claude
```

Claude will automatically read `CLAUDE.md` in the root of this repo, which gives it full context about how the project works. You can just describe what you want changed in plain English.

**Example prompts that work well:**
- "Change the announcement banner to say X and link to /webinars/6"
- "Add a new page at /about with this content: ..."
- "The white papers listing page needs a search bar"
- "Update the meta description on the pricing page to say ..."

---

## Questions?
Ask Kim — she set all of this up and knows the server details, API keys, and HubSpot account.
