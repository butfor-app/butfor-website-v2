# ButFor — Full Stack Site Audit
**Date:** 2026-04-24  
**Frontend:** `/Users/admin/ButFor/www/butfor-website-v2` — Vue 3 + Vite + Tailwind  
**CMS:** `/Users/admin/ButFor/www/butfor-website-CMS-v2` — Strapi 4.24.4  
**HubSpot Portal ID:** `39510047` (Region: `na1`)  
**Strapi Base URL:** `https://butfor.co/strapi/` *(hardcoded throughout — not env-var driven)*

---

## Table of Contents
1. [Pages Audit](#pages-audit)
2. [Components Audit](#components-audit)
3. [HubSpot Form ID Master List](#hubspot-form-id-master-list)
4. [Strapi Content Types Used](#strapi-content-types-used)
5. [Broken & Placeholder Content](#broken--placeholder-content)
6. [Production Concerns](#production-concerns)

---

## Pages Audit

### 1. Home Page
| Field | Value |
|---|---|
| **File** | `src/pages/HomePage.vue` |
| **Route** | `/` |
| **Purpose** | Main landing page — animated hero, solutions overview, features, FAQ |
| **Hero / Headline** | "Simplifying Complex Claims" / rotating text: "Butfor helps [consultants/enterprises] create and manage [many client claims/in-house claims] in one place" |
| **HubSpot Form** | None embedded directly |
| **CTA** | Links to solutions and product pages |
| **Strapi Data** | `useGeneralData()` store (solutions data) — no direct API calls |
| **Issues** | Hardcoded solutions data from store |

---

### 2. Product Page
| Field | Value |
|---|---|
| **File** | `src/pages/ProductPage.vue` |
| **Route** | `/product` |
| **Purpose** | Product features showcase — carousel slider, feature tabs, customer stories |
| **Hero / Headline** | "Get to know the ButFor platform" / "Preparing a business interruption claim has never been easier." |
| **HubSpot Form ID** | `83efaaa1-4ea3-4a48-b759-c2f345c5a1e3` |
| **CTA** | "LET'S GO" (default HubSpot form title) |
| **Strapi Data** | None — all data hardcoded |
| **Issues** | Placeholder images (`usecase_placeholder.png`) used 4×; feature slider data hardcoded in JS array |

---

### 3. Solutions Page (Dynamic)
| Field | Value |
|---|---|
| **File** | `src/pages/solutions/index.vue` |
| **Route** | `/solutions/:solutionKey` |
| **Purpose** | Solution-specific pages — renders based on company type, role, or claim type |
| **Hero / Headline** | Dynamic from solution data store |
| **HubSpot Form ID** | Dynamic: `solution_data.hubspot_form_id` |
| **CTA** | Dynamic per solution |
| **Strapi Data** | `useGeneralData()` store |
| **Issues** | None significant |

---

### 4. Claims 101 Page
| Field | Value |
|---|---|
| **File** | `src/pages/Claims101Page.vue` |
| **Route** | `/claims-101` |
| **Purpose** | Educational webinar/training content with registration |
| **Hero / Headline** | "Claims 101" + dynamic time and timezone from Strapi |
| **HubSpot Form ID** | Dynamic: `claim101.hubspot_form_id` (from Strapi) |
| **CTA** | Registration form |
| **Strapi Data** | `getClaims101()` → title, description, lesson_content, start_time, timezone, thumbnail, hubspot_form_id |
| **Issues** | Hardcoded Strapi URL prefix for image loading |

---

### 5. Articles Page
| Field | Value |
|---|---|
| **File** | `src/pages/Articles/ArticlesPage.vue` |
| **Route** | `/articles` |
| **Purpose** | Blog / articles listing |
| **Hero / Headline** | "Articles" |
| **HubSpot Form** | None |
| **Strapi Data** | `getArticles()` → all articles |
| **Issues** | None significant |

---

### 6. Article Detail Page
| Field | Value |
|---|---|
| **File** | `src/pages/Articles/ArticlePage.vue` |
| **Route** | `/article/:article_id` |
| **Purpose** | Individual article with thumbnail and download option |
| **Hero / Headline** | Dynamic article title from Strapi |
| **HubSpot Form** | None |
| **Strapi Data** | `getArticle(articleId)` → meta_tags, title, body, thumbnail, media_for_download |
| **Issues** | Hardcoded Strapi URL prefix |

---

### 7. Case Studies Page
| Field | Value |
|---|---|
| **File** | `src/pages/CaseStudies/CaseStudiesPage.vue` |
| **Route** | `/case-studies` |
| **Purpose** | Case studies listing / grid view |
| **Hero / Headline** | "Case Studies" |
| **HubSpot Form** | None |
| **Strapi Data** | `getCaseStudies()` → title, description, thumbnail |
| **Issues** | None significant |

---

### 8. Case Study Detail Page
| Field | Value |
|---|---|
| **File** | `src/pages/CaseStudies/CaseStudyPage.vue` |
| **Route** | `/case-studies/:caseStudyId` |
| **Purpose** | Individual case study details |
| **Hero / Headline** | Dynamic case study title from Strapi |
| **HubSpot Form** | None |
| **Strapi Data** | `getCaseStudy(caseStudyId)` → meta_tags, title, body, thumbnail |
| **Issues** | Hardcoded Strapi URL prefix |

---

### 9. Contact Page
| Field | Value |
|---|---|
| **File** | `src/pages/ContactPage.vue` |
| **Route** | `/contact` |
| **Purpose** | Contact form wrapper page |
| **Hero / Headline** | None (delegates to ContactForm component) |
| **HubSpot Form** | None — uses ContactForm component (see issues) |
| **Strapi Data** | None |
| **Issues** | **ContactForm.vue is non-functional** — empty action attribute, empty submit handler |

---

### 10. Cost Estimator Page
| Field | Value |
|---|---|
| **File** | `src/pages/CostEstimatorPage.vue` |
| **Route** | `/cost-saving-estimator` |
| **Purpose** | Business interruption cost savings calculator |
| **Hero / Headline** | "subscription cost savings estimator" / "Maximize your Savings with our Tailored Business Interruption Claim Prep Calculator" |
| **HubSpot Form ID** | `83efaaa1-4ea3-4a48-b759-c2f345c5a1e3` |
| **CTA** | Calculator submit |
| **Strapi Data** | None |
| **API Call** | `POST https://butfor.co/api/cost-estimator` |
| **Issues** | None significant |

---

### 11. HubSpot Generic Page
| Field | Value |
|---|---|
| **File** | `src/pages/HubspotPage.vue` |
| **Routes** | `/hubspot`, `/book_demo`, `/contact2` through `/contact6` |
| **Purpose** | Generic HubSpot form wrapper — 6 route variants |
| **Hero / Headline** | Props-based dynamic title |
| **HubSpot Form IDs** | Default: `8c611917-1ea7-4d3f-8d7e-8f50d5706ef2` / Book Demo: `862017ff-a811-4986-96c8-38133bb2a8a1` |
| **Strapi Data** | None |
| **Issues** | 6 contact form route variants (contact2–6) all resolve to same component — purpose unclear |

---

### 12. Integrations Page
| Field | Value |
|---|---|
| **File** | `src/pages/IntegrationsPage.vue` |
| **Route** | `/integrations` |
| **Purpose** | ERP / accounting software integrations showcase |
| **Hero / Headline** | "ButFor works where you do" / "Integrate with your existing tools..." |
| **HubSpot Form ID** | `d19ca6cc-dff1-4df2-b035-22fbbe6154e0` |
| **CTA** | "LET'S GO" |
| **Strapi Data** | None |
| **Issues** | None significant |

---

### 13. Careers Page
| Field | Value |
|---|---|
| **File** | `src/pages/JobsPage.vue` |
| **Route** | `/careers` |
| **Purpose** | Careers page with embedded Dover jobs board |
| **Hero / Headline** | "join our team" / "At ButFor, we're more than just a company..." |
| **HubSpot Form ID** | `83efaaa1-4ea3-4a48-b759-c2f345c5a1e3` |
| **CTA** | "LET'S GO" |
| **Strapi Data** | None |
| **External Embed** | `https://app.dover.com/jobs/butfor?embed=1` |
| **Issues** | None significant |

---

### 14. Policy Analyzer Page
| Field | Value |
|---|---|
| **File** | `src/pages/PolicyAnalyzerPage.vue` |
| **Route** | `/policy-analyzer` |
| **Purpose** | Insurance policy file upload analyzer |
| **Hero / Headline** | "Business interruption Policy Analysis" |
| **HubSpot Form ID** | `83efaaa1-4ea3-4a48-b759-c2f345c5a1e3` |
| **CTA** | File upload + submit |
| **Strapi Data** | None |
| **API Call** | `POST https://butfor.co/api/policy-analyzer` (file upload) |
| **Issues** | Inline base64-encoded SVG icons; heavy file |

---

### 15. Pricing Page
| Field | Value |
|---|---|
| **File** | `src/pages/PricingPage.vue` |
| **Route** | `/pricing` |
| **Purpose** | Subscription pricing tiers — Boutique, SMB, Mid-Market, Large, Enterprise |
| **Hero / Headline** | "Comprehensive Coverage, Clear Pricing: Protect Your Business with Confidence" |
| **HubSpot Form ID** | `83efaaa1-4ea3-4a48-b759-c2f345c5a1e3` |
| **CTA** | "Sign Up" buttons (broken) + HubSpot form |
| **Strapi Data** | None |
| **Issues** | **"Sign Up" buttons all link to `href="#"`** — broken |

---

### 16. Privacy Policy Page
| Field | Value |
|---|---|
| **File** | `src/pages/PrivacyPolicyPage.vue` |
| **Route** | `/privacy-policy` |
| **Purpose** | Legal privacy policy document |
| **Hero / Headline** | "Privacy Policy" |
| **Last Updated** | August 1, 2024 |
| **HubSpot Form** | None |
| **Strapi Data** | None |
| **Issues** | None |

---

### 17. Terms & Conditions Page
| Field | Value |
|---|---|
| **File** | `src/pages/TermsAndConditionsPage.vue` |
| **Route** | `/terms-and-conditions` |
| **Purpose** | Legal terms and conditions document |
| **Hero / Headline** | "Terms And Conditions" |
| **Last Updated** | August 1, 2024 |
| **HubSpot Form** | None |
| **Strapi Data** | None |
| **Issues** | None |

---

### 18. Thank You Page
| Field | Value |
|---|---|
| **File** | `src/pages/ThankyouPage.vue` |
| **Route** | `/thankyou` |
| **Purpose** | Post-form-submission confirmation |
| **Hero / Headline** | "Thank you!" / "The invite will be in your email. Chat soon." |
| **HubSpot Form** | None |
| **Strapi Data** | None |
| **Issues** | None |

---

### 19. Subscription Page
| Field | Value |
|---|---|
| **File** | `src/pages/SubscriptionPage.vue` |
| **Route** | `/subscription` |
| **Purpose** | Claim prep subscription service details |
| **Hero / Headline** | "claim preparation with a simple subscription" |
| **HubSpot Form ID** | `83efaaa1-4ea3-4a48-b759-c2f345c5a1e3` |
| **CTA** | "LET'S GO" |
| **Strapi Data** | None |
| **Issues** | None significant |

---

### 20. Sustainability Page
| Field | Value |
|---|---|
| **File** | `src/pages/SustainabilityPage.vue` |
| **Route** | `/sustainability` |
| **Purpose** | Climate change and business continuity editorial |
| **Hero / Headline** | "Climate Change and Disaster Recovery: A Complex Relationship" |
| **HubSpot Form ID** | `83efaaa1-4ea3-4a48-b759-c2f345c5a1e3` |
| **CTA** | "LET'S GO" |
| **Strapi Data** | None |
| **Issues** | Image paths use `/src/assets/images/` — may fail in production build |

---

### 21. Template Page *(Unused)*
| Field | Value |
|---|---|
| **File** | `src/pages/TemplatePage.vue` |
| **Route** | Not registered in router |
| **Purpose** | Appears to be a dev template — not live |
| **Hero / Headline** | "Get to know the ButFor platform" / "Preparing a business interruption claim has never been easier." |
| **HubSpot Form** | None |
| **Strapi Data** | None |
| **Issues** | Not in router; likely dead code |

---

### 22. Webinars Page
| Field | Value |
|---|---|
| **File** | `src/pages/WebinarsPage.vue` |
| **Route** | `/webinars` |
| **Purpose** | Upcoming webinars listing with carousel |
| **Hero / Headline** | "Events & Webinars" / "Join us as we host the industry's most prominent insurtech..." |
| **HubSpot Form ID** | `b20e853b-b330-4419-b345-060788b0c267` (webinar reminder) |
| **CTA** | Reminder registration |
| **Strapi Data** | `getWebinars()` → all webinars |
| **Issues** | None significant |

---

### 23. Webinar Detail Page
| Field | Value |
|---|---|
| **File** | `src/pages/WebinarInfoPage.vue` |
| **Route** | `/webinars/:webinar_id` |
| **Purpose** | Individual webinar registration and details |
| **Hero / Headline** | Dynamic webinar title from Strapi |
| **HubSpot Form ID** | Dynamic: `webinar.attributes.hubspot_form_id` / fallback: `83efaaa1-4ea3-4a48-b759-c2f345c5a1e3` |
| **CTA** | Registration form |
| **Strapi Data** | `getWebinar(webinar_id)` → title, body, start_time, timezone, thumbnail, hubspot_form_id, meta_tags |
| **Issues** | Hardcoded Strapi URL prefix |

---

### 24. Fireside Chats Page
| Field | Value |
|---|---|
| **File** | `src/pages/FireSideChats/FireSideChats.vue` |
| **Route** | `/fireside-chats` |
| **Purpose** | Industry fireside chats listing with carousel |
| **Hero / Headline** | "FireSide Chats" / "Join us as we host the industry's most prominent insurtech..." |
| **HubSpot Form ID** | `b20e853b-b330-4419-b345-060788b0c267` (reminder to register) |
| **CTA** | Reminder registration |
| **Strapi Data** | `getFireSideChats()` → all fireside chats |
| **Issues** | None significant |

---

### 25. Fireside Chat Detail Page
| Field | Value |
|---|---|
| **File** | `src/pages/FireSideChats/FireSideChat.vue` |
| **Route** | `/fireside-chat/:fireSideChat_id` |
| **Purpose** | Individual fireside chat registration and details |
| **Hero / Headline** | Dynamic fireside chat title from Strapi |
| **HubSpot Form ID** | Dynamic: `fireSideChat.attributes.hubspot_form_id` / fallback: `83efaaa1-4ea3-4a48-b759-c2f345c5a1e3` |
| **CTA** | Registration form |
| **Strapi Data** | `getFireSideChat(id)` → title, description, start_time, timezone, thumbnail, hubspot_form_id, meta_tags |
| **Issues** | Hardcoded Strapi URL prefix |

---

### 26. ButFor vs Consultants Page
| Field | Value |
|---|---|
| **File** | `src/pages/ButforVsConsultantsPage.vue` |
| **Route** | `/butfor-vs-consultants` |
| **Purpose** | Comparison table: ButFor vs traditional consultants |
| **Hero / Headline** | "Why butfor Beats Traditional Consulting" |
| **HubSpot Form ID** | `83efaaa1-4ea3-4a48-b759-c2f345c5a1e3` |
| **CTA** | "LET'S GO" |
| **Strapi Data** | None — hardcoded comparison data |
| **Issues** | None significant |

---

### 27. ButFor vs Excel Page
| Field | Value |
|---|---|
| **File** | `src/pages/ButforVsExcelPage.vue` |
| **Route** | `/butfor-vs-excel` |
| **Purpose** | Comparison table: ButFor vs Excel spreadsheets |
| **Hero / Headline** | "Why butfor Beats Traditional Consulting" *(same headline as vs-consultants — likely a copy-paste issue)* |
| **HubSpot Form ID** | `83efaaa1-4ea3-4a48-b759-c2f345c5a1e3` |
| **CTA** | "LET'S GO" |
| **Strapi Data** | None — hardcoded comparison data |
| **Issues** | Hero headline is identical to vs-consultants page (should say "vs Excel") |

---

### 28. ButFor vs Internal Page
| Field | Value |
|---|---|
| **File** | `src/pages/ButforVsInternal.vue` |
| **Route** | `/butfor-vs-internal` |
| **Purpose** | Comparison table: ButFor vs internal claim prep |
| **Hero / Headline** | "Why butfor Beats Traditional Consulting" *(same headline — likely copy-paste issue)* |
| **HubSpot Form ID** | `83efaaa1-4ea3-4a48-b759-c2f345c5a1e3` |
| **CTA** | "LET'S GO" |
| **Strapi Data** | None — hardcoded comparison data |
| **Issues** | Hero headline identical to vs-consultants page (should say "vs Internal") |

---

### 29. Landing Page (Dynamic)
| Field | Value |
|---|---|
| **File** | `src/pages/LandingPage/index.vue` |
| **Route** | `/landing-page/:landingPageId` |
| **Purpose** | Dynamic custom landing pages driven entirely by Strapi |
| **Hero / Headline** | Dynamic: `landing_page_data.attributes.title` and description |
| **HubSpot Form ID** | Dynamic: `landing_page_data.attributes.hubspot_form_id` |
| **CTA** | Dynamic per landing page |
| **Strapi Data** | `getLandingPage(landingPageId)` → title, description, feature_heading, feature_description, feature_img, background_image, hubspot_form_id |
| **Issues** | Hardcoded Strapi URL prefix; 404 fallback message present |

---

### 30. White Papers Page
| Field | Value |
|---|---|
| **File** | `src/pages/WhitePapers/WhitePapers.vue` |
| **Route** | `/white-papers` |
| **Purpose** | White papers listing / grid view |
| **Hero / Headline** | "White Papers" |
| **HubSpot Form** | None |
| **Strapi Data** | `getWhitePapers()` → all white papers |
| **Issues** | None significant |

---

### 31. White Paper Detail Page
| Field | Value |
|---|---|
| **File** | `src/pages/WhitePapers/WhitePaper.vue` |
| **Route** | `/white-papers/:whitePaperId` |
| **Purpose** | Individual white paper — registration gated |
| **Hero / Headline** | Dynamic white paper title from Strapi |
| **HubSpot Form ID** | Dynamic: `whitePaper.attributes.hubspot_form_id` / fallback: `83efaaa1-4ea3-4a48-b759-c2f345c5a1e3` |
| **CTA** | Registration / download form |
| **Strapi Data** | `getWhitePaper(whitePaperId)` → title, body, thumbnail, hubspot_form_id, meta_tags |
| **Issues** | None significant |

---

### 32. 404 Page
| Field | Value |
|---|---|
| **File** | `src/pages/404.vue` |
| **Route** | `/:pathMatch(.*)*` (catch-all) |
| **Purpose** | 404 not found |
| **Hero / Headline** | "That Didn't work.." / "'[path]' doesn't exist on this server" |
| **HubSpot Form** | None |
| **Strapi Data** | None |
| **Issues** | None |

---

## Components Audit

### HubspotForm.vue
| Field | Value |
|---|---|
| **File** | `src/components/HubspotForm.vue` |
| **Purpose** | HubSpot form embed — styled container with title |
| **Props** | `title` (default: "LET'S GO"), `formId` (required) |
| **Portal ID** | `39510047` |
| **Issues** | None |

---

### HubspotFormBare.vue
| Field | Value |
|---|---|
| **File** | `src/components/HubspotFormBare.vue` |
| **Purpose** | Minimal HubSpot form embed — no wrapper styling |
| **Props** | `formId` (default: `83efaaa1-4ea3-4a48-b759-c2f345c5a1e3`) |
| **Portal ID** | `39510047` |
| **Issues** | None |

---

### ContactForm.vue ⚠️
| Field | Value |
|---|---|
| **File** | `src/components/ContactForm.vue` |
| **Purpose** | Custom contact form — currently **non-functional** |
| **Issues** | Empty `action` attribute; empty submit handler; form does nothing on submit |

---

### GetStarted.vue ⚠️
| Field | Value |
|---|---|
| **File** | `src/components/GetStarted.vue` |
| **Purpose** | CTA section with demo / team buttons |
| **Issues** | Both buttons link to `href="#"` — **broken links** |

---

### HeroSection.vue
| Field | Value |
|---|---|
| **File** | `src/components/HeroSection.vue` |
| **Purpose** | Reusable hero — dynamic background image, HTML content, scroll-to-form |
| **Props** | `name`, `desc`, `bg`, `addTextShadow` |
| **Issues** | None |

---

### BenefitsSlider.vue ⚠️
| Field | Value |
|---|---|
| **File** | `src/components/BenifitsSlider.vue` |
| **Purpose** | **Empty file** — no template, no script |
| **Issues** | Completely empty; appears unused/abandoned |

---

### CompaniesSlider.vue ⚠️
| Field | Value |
|---|---|
| **File** | `src/components/CompaniesSlider.vue` |
| **Purpose** | Animated logo carousel — DXC, Symbility, Guidewire, Appian, Insurity |
| **Issues** | Component has `hidden` class applied — **not visible on any page** |

---

### FaqDisclosure.vue
| Field | Value |
|---|---|
| **File** | `src/components/FaqDisclosure.vue` |
| **Purpose** | FAQ accordion — 11 questions |
| **Issues** | All content hardcoded (not CMS-driven); one question has trailing `**` typo in text |

---

### NavBar.vue ⚠️
| Field | Value |
|---|---|
| **File** | `src/components/NavBar.vue` |
| **Purpose** | Main navigation with Solutions, Products, Resources dropdowns |
| **Issues** | "Live" banner hardcoded with stale event: **"CrowdStrike & Business Interruption Fireside - Dec 5th, 3pm EST"** — needs update or removal |

---

### Footer.vue
| Field | Value |
|---|---|
| **File** | `src/components/Footer.vue` |
| **Purpose** | Site footer — links, social, copyright |
| **Issues** | LinkedIn link appears twice in footer nav |

---

### SolutionsSlider.vue
| Field | Value |
|---|---|
| **File** | `src/components/SolutionsSlider.vue` |
| **Purpose** | Solutions carousel with "View All" toggle |
| **Issues** | `console.log(props.solutions)` left in production code |

---

### ArticleCard.vue
| Field | Value |
|---|---|
| **File** | `src/components/Articles/ArticleCard.vue` |
| **Purpose** | Article card for listing pages; loads thumbnail from Strapi |
| **Issues** | None |

---

### FireSideCard.vue
| Field | Value |
|---|---|
| **File** | `src/components/FireSideCard.vue` |
| **Purpose** | Fireside chat card for carousel; loads thumbnail from Strapi |
| **Issues** | None |

---

### WebinarCard.vue
| Field | Value |
|---|---|
| **File** | `src/components/WebinarCard.vue` |
| **Purpose** | Webinar card for carousel; loads thumbnail from Strapi |
| **Issues** | None |

---

### FeatureRow.vue / SolutionFeatures.vue
| Field | Value |
|---|---|
| **Files** | `src/components/FeatureRow.vue`, `src/components/SolutionFeatures.vue` |
| **Purpose** | Feature row with image + text, alternating layout |
| **Issues** | None |

---

### SolutionsCard.vue
| Field | Value |
|---|---|
| **File** | `src/components/SolutionsCard.vue` |
| **Purpose** | Solution card for sliders — name, desc, icon, route slug |
| **Issues** | None |

---

### Spinner.vue / arrow.vue / MobileNavPopover.vue
| Field | Value |
|---|---|
| **Purpose** | Utility components — loading spinner, SVG arrow icon, mobile nav |
| **Issues** | None |

---

## HubSpot Form ID Master List

| Form ID | Used On |
|---|---|
| `83efaaa1-4ea3-4a48-b759-c2f345c5a1e3` | Default / fallback — Product, Cost Estimator, Policy Analyzer, Pricing, Careers, Subscription, Sustainability, ButFor vs pages, Webinar/Fireside/WhitePaper fallback |
| `8c611917-1ea7-4d3f-8d7e-8f50d5706ef2` | HubspotPage default (`/hubspot`, `/contact2`–`/contact6`) |
| `862017ff-a811-4986-96c8-38133bb2a8a1` | Book Demo (`/book_demo`) |
| `b20e853b-b330-4419-b345-060788b0c267` | Webinar & Fireside Chat reminder registration |
| `d19ca6cc-dff1-4df2-b035-22fbbe6154e0` | Integrations page |
| *Dynamic from Strapi* | Claims 101, Webinar detail, Fireside Chat detail, White Paper detail, Landing Page |

---

## Strapi Content Types Used

| Content Type | Fetched By | Fields |
|---|---|---|
| `claims-101` | `getClaims101()` | title, description, lesson_content, start_time, timezone, thumbnail, hubspot_form_id |
| `articles` | `getArticles()` / `getArticle(id)` | meta_tags, title, body, thumbnail, media_for_download |
| `case-studies` | `getCaseStudies()` / `getCaseStudy(id)` | meta_tags, title, description, body, thumbnail |
| `webinars` | `getWebinars()` / `getWebinar(id)` | title, body, start_time, timezone, thumbnail, hubspot_form_id, meta_tags |
| `fireside-chats` | `getFireSideChats()` / `getFireSideChat(id)` | title, description, start_time, timezone, thumbnail, hubspot_form_id, meta_tags |
| `white-papers` | `getWhitePapers()` / `getWhitePaper(id)` | title, body, thumbnail, hubspot_form_id, meta_tags |
| `landing-pages` | `getLandingPage(id)` | title, description, feature_heading, feature_description, feature_img, background_image, hubspot_form_id |

**All Strapi image URLs are constructed with a hardcoded prefix:** `https://butfor.co/strapi/`

---

## Broken & Placeholder Content

| # | Severity | File | Issue |
|---|---|---|---|
| 1 | **High** | `src/components/ContactForm.vue` | Form is non-functional — empty action and empty submit handler |
| 2 | **High** | `src/pages/PricingPage.vue` | All "Sign Up" tier buttons link to `href="#"` |
| 3 | **High** | `src/components/GetStarted.vue` | CTA buttons link to `href="#"` |
| 4 | **High** | `src/components/NavBar.vue` | "Live" banner has stale hardcoded event: "CrowdStrike & Business Interruption Fireside - Dec 5th, 3pm EST" |
| 5 | **Medium** | `src/pages/ProductPage.vue` | 4× placeholder images (`usecase_placeholder.png`) in use cases section |
| 6 | **Medium** | `src/pages/ButforVsExcelPage.vue` | Hero headline reads "Why butfor Beats Traditional Consulting" (should reference Excel) |
| 7 | **Medium** | `src/pages/ButforVsInternal.vue` | Hero headline reads "Why butfor Beats Traditional Consulting" (should reference Internal) |
| 8 | **Medium** | `src/components/BenifitsSlider.vue` | Completely empty file — dead code |
| 9 | **Medium** | `src/components/CompaniesSlider.vue` | Hidden via CSS — partner logos never shown |
| 10 | **Low** | `src/components/SolutionsSlider.vue` | `console.log` left in production code |
| 11 | **Low** | `src/components/FaqDisclosure.vue` | Trailing `**` typo in one FAQ question |
| 12 | **Low** | `src/components/Footer.vue` | LinkedIn link duplicated in footer |
| 13 | **Low** | `src/pages/TemplatePage.vue` | Unused template page not in router — dead code |
| 14 | **Low** | `src/pages/HubspotPage.vue` | Routes `/contact2` through `/contact6` exist — purpose unclear |

---

## Production Concerns

| # | Issue |
|---|---|
| 1 | Strapi base URL (`https://butfor.co/strapi/`) is hardcoded throughout — should be an environment variable (`VITE_STRAPI_URL`) |
| 2 | `src/pages/SustainabilityPage.vue` uses `/src/assets/images/` paths — these will 404 in production builds |
| 3 | No environment variable abstraction for HubSpot Portal ID — hardcoded `39510047` in two component files |
| 4 | `console.log` in `SolutionsSlider.vue` will appear in browser console in production |
| 5 | Policy Analyzer page embeds large inline base64 SVGs — increases page weight |
| 6 | Multiple route variants for contact forms (`/contact2`–`/contact6`) with no clear differentiation or documentation |

---

---

# Strapi CMS Audit
**Project:** `/Users/admin/ButFor/www/butfor-website-CMS-v2`  
**Strapi Version:** 4.24.4  
**Database:** SQLite (`.tmp/data.db`) — not in git, no seed data  
**Server Port:** 3005  
**Public URL:** `https://butfor.co/strapi`  
**Draft & Publish:** Enabled on all content types  

---

## Content Types

### 1. Article (Collection)
**UID:** `api::article.article`  
**API Endpoint:** `GET /api/articles`, `GET /api/articles/:id`  
**Frontend:** `ArticlesPage.vue` (list), `ArticlePage.vue` (detail)

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | No | |
| `description` | string | No | |
| `thumbnail` | media | No | images, files, video, audio |
| `body` | text | No | |
| `media_for_download` | media | No | images, files, video, audio |
| `meta_tags` | component | No | `meta.meta-tags` (title, description) |

**Issues:** All fields optional — empty articles can be published with no validation

---

### 2. Case Study (Collection)
**UID:** `api::case-studie.case-studie`  
**API Endpoint:** `GET /api/case-studies`, `GET /api/case-studies/:id`  
**Frontend:** `CaseStudiesPage.vue` (list), `CaseStudyPage.vue` (detail)  
**Note:** Internal singular name is `case-studie` (typo — missing final "y")

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | No | |
| `description` | string | No | |
| `thumbnail` | media | No | images, files, video, audio |
| `body` | text | No | |
| `meta_tags` | component | No | `meta.meta-tags` |

**Issues:** Internal name typo (`case-studie`); all fields optional

---

### 3. Claims 101 (Single Type)
**UID:** `api::claims-101.claims-101`  
**API Endpoint:** `GET /api/claims-101`  
**Frontend:** `Claims101Page.vue`  
**Note:** Single type — only one instance exists in the CMS

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | No | |
| `description` | text | No | |
| `lesson_content` | text | No | |
| `hubspot_form_id` | string | No | Drives HubSpot form on frontend |
| `start_time` | datetime | **Yes** | No default — will throw if unpopulated |
| `thumbnail` | media | No | images, files, video, audio |
| `timezone` | enumeration | No | Only option: `"Central"` |

**Issues:**  
- `start_time` is required but has no default — if the single record has no value set, the page will error  
- `timezone` enum is locked to `"Central"` only — cannot represent other timezones

---

### 4. Fireside Chat (Collection)
**UID:** `api::fireside-chat.fireside-chat`  
**API Endpoint:** `GET /api/fireside-chats`, `GET /api/fireside-chats/:id`  
**Frontend:** `FireSideChats.vue` (list), `FireSideChat.vue` (detail)

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | No | |
| `description` | string | No | |
| `thumbnail` | media | No | images, files, video, audio |
| `body` | text | No | |
| `start_time` | datetime | No | |
| `hubspot_form_id` | string | No | Drives HubSpot form on frontend |
| `timezone` | enumeration | No | Only option: `"EST"` |
| `meta_tags` | component | No | `meta.meta-tags` |

**Issues:** `timezone` enum locked to `"EST"` only; frontend falls back to hardcoded form ID if `hubspot_form_id` is blank

---

### 5. Landing Page (Collection)
**UID:** `api::landing-page.landing-page`  
**API Endpoint:** `GET /api/landing-pages`, `GET /api/landing-pages/:id`  
**Frontend:** `LandingPage/index.vue` (accessed via `/landing-page/:landingPageId`)

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | No | |
| `description` | text | No | |
| `background_image` | media | No | images, files, video, audio |
| `feature_heading` | string | No | |
| `feature_description` | text | No | |
| `feature_img` | media | No | images, files, video, audio |
| `url` | string | No | Exists in schema — **not used by frontend** |
| `hubspot_form_id` | string | No | Drives HubSpot form on frontend |
| `meta_tags` | component | No | `meta.meta-tags` |

**Issues:** `url` field in schema is not consumed by the frontend (`LandingPage/index.vue`) — may be unused or orphaned

---

### 6. Webinar (Collection)
**UID:** `api::webinar.webinar`  
**API Endpoint:** `GET /api/webinars`, `GET /api/webinars/:id`  
**Frontend:** `WebinarsPage.vue` (list), `WebinarInfoPage.vue` (detail)

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | **Yes** | |
| `description` | text | **Yes** | |
| `thumbnail` | media | No | images, files, video, audio |
| `body` | text | **Yes** | |
| `start_time` | datetime | **Yes** | Default: `"2024-06-25T19:00:00.000Z"` *(stale)* |
| `hubspot_form_id` | string | No | Drives HubSpot form on frontend |
| `timezone` | enumeration | No | Only option: `"Central"` |
| `meta_tags` | component | No | `meta.meta-tags` |

**Issues:**  
- `start_time` default is hardcoded to **June 25, 2024** — any webinar created without setting this date will appear to be in the past  
- `timezone` enum locked to `"Central"` only — cannot represent EST, PST, etc.  
- Most validation-heavy content type (3 required fields) — inconsistent with others

---

### 7. White Paper (Collection)
**UID:** `api::white-paper.white-paper`  
**API Endpoint:** `GET /api/white-papers`, `GET /api/white-papers/:id`  
**Frontend:** `WhitePapers.vue` (list), `WhitePaper.vue` (detail)

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | No | |
| `description` | string | No | |
| `body` | string | No | *(typed as string, not text — shorter max length)* |
| `thumbnail` | media | No | images, files, video, audio |
| `hubspot_form_id` | string | No | Drives HubSpot form on frontend |
| `meta_tags` | component | No | `meta.meta-tags` |

**Issues:** `body` field is typed as `string` instead of `text` — will truncate long content; all fields optional

---

## Shared Components

### meta.meta-tags
**File:** `src/components/meta/meta-tags.json`  
**Used by:** article, case-study, fireside-chat, landing-page, webinar, white-paper (6 of 7 content types)

| Field | Type | Required |
|---|---|---|
| `title` | string | No |
| `description` | string | No |

**Note:** Claims 101 (single type) does not include `meta_tags` — the only content type without SEO fields

---

## CMS Configuration

| Setting | Value |
|---|---|
| **Database** | SQLite — `.tmp/data.db` (git-ignored, no seed data in repo) |
| **Port** | 3005 |
| **Public URL** | `https://butfor.co/strapi` |
| **Proxy** | Enabled |
| **Default API limit** | 25 items |
| **Max API limit** | 100 items |
| **Plugins** | None custom — `users-permissions`, `i18n`, `cloud` built-in |
| **Custom routes/controllers/services** | None — all default Strapi factories |
| **Lifecycle hooks** | Empty (`register()` and `bootstrap()` unused) |
| **Migrations** | Directory exists but empty |

---

## Frontend ↔ CMS Consumer Map

| Frontend Page | Route | CMS Content Type | CMS Endpoint |
|---|---|---|---|
| `Claims101Page.vue` | `/claims-101` | claims-101 *(single type)* | `GET /api/claims-101` |
| `ArticlesPage.vue` | `/articles` | article | `GET /api/articles` |
| `ArticlePage.vue` | `/article/:id` | article | `GET /api/articles/:id` |
| `CaseStudiesPage.vue` | `/case-studies` | case-study | `GET /api/case-studies` |
| `CaseStudyPage.vue` | `/case-studies/:id` | case-study | `GET /api/case-studies/:id` |
| `WebinarsPage.vue` | `/webinars` | webinar | `GET /api/webinars` |
| `WebinarInfoPage.vue` | `/webinars/:id` | webinar | `GET /api/webinars/:id` |
| `FireSideChats.vue` | `/fireside-chats` | fireside-chat | `GET /api/fireside-chats` |
| `FireSideChat.vue` | `/fireside-chat/:id` | fireside-chat | `GET /api/fireside-chats/:id` |
| `WhitePapers.vue` | `/white-papers` | white-paper | `GET /api/white-papers` |
| `WhitePaper.vue` | `/white-papers/:id` | white-paper | `GET /api/white-papers/:id` |
| `LandingPage/index.vue` | `/landing-page/:id` | landing-page | `GET /api/landing-pages/:id` |
| `solutions/index.vue` | `/solutions/:key` | **No CMS type** | Uses `useGeneralData()` store — hardcoded |

---

## CMS Issues & Observations

| # | Severity | Location | Issue |
|---|---|---|---|
| 1 | **High** | `webinar` schema | `start_time` default is `"2024-06-25T19:00:00.000Z"` — webinars created without a date will appear ~2 years in the past |
| 2 | **High** | `claims-101` schema | `start_time` is required with no default — if the single record is unpopulated the frontend will error |
| 3 | **Medium** | `case-studie` API folder | Internal name is `case-studie` (missing "y") — inconsistent with display name; could confuse future devs or break if Strapi is ever re-scaffolded |
| 4 | **Medium** | `white-paper` schema | `body` typed as `string` not `text` — may silently truncate long white paper content |
| 5 | **Medium** | `landing-page` schema | `url` field exists in schema but is not consumed by the frontend — orphaned field |
| 6 | **Medium** | `claims-101`, `fireside-chat`, `webinar` | `timezone` enums each have only one value (`"Central"` or `"EST"`) — cannot represent other timezones |
| 7 | **Medium** | All content types | No seed data in repo — the `.tmp/data.db` SQLite file is git-ignored, making it impossible to know what live content looks like from the repo alone |
| 8 | **Low** | `article`, `case-study`, `white-paper` | All fields are optional with no validation — empty/untitled records can be published |
| 9 | **Low** | `claims-101` | Only content type without `meta_tags` component — inconsistent with all other types |
| 10 | **Low** | All content types | No custom controllers, routes, or services — no rate limiting, auth gating, or custom query logic on any endpoint |
