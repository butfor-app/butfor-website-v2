import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const STRAPI_API = 'https://butfor.co/strapi/api';
const STRAPI_TOKEN = process.env.VITE_STRAPI_TOKEN;
const BASE_URL = 'https://butfor.co';
const TODAY = new Date().toISOString().split('T')[0];

const STATIC_PAGES = [
  { path: '/',                      priority: '1.0', changefreq: 'weekly' },
  { path: '/product',               priority: '0.9', changefreq: 'monthly' },
  { path: '/pricing',               priority: '0.9', changefreq: 'monthly' },
  { path: '/integrations',          priority: '0.8', changefreq: 'monthly' },
  { path: '/claims-101',            priority: '0.8', changefreq: 'monthly' },
  { path: '/articles',              priority: '0.8', changefreq: 'weekly'  },
  { path: '/case-studies',          priority: '0.8', changefreq: 'weekly'  },
  { path: '/webinars',              priority: '0.8', changefreq: 'weekly'  },
  { path: '/fireside-chats',        priority: '0.8', changefreq: 'weekly'  },
  { path: '/white-papers',          priority: '0.8', changefreq: 'weekly'  },
  { path: '/butfor-vs-consultants', priority: '0.7', changefreq: 'monthly' },
  { path: '/butfor-vs-excel',       priority: '0.7', changefreq: 'monthly' },
  { path: '/butfor-vs-internal',    priority: '0.7', changefreq: 'monthly' },
  { path: '/policy-analyzer',       priority: '0.7', changefreq: 'monthly' },
  { path: '/cost-saving-estimator', priority: '0.7', changefreq: 'monthly' },
  { path: '/sustainability',        priority: '0.6', changefreq: 'monthly' },
  { path: '/careers',               priority: '0.6', changefreq: 'weekly'  },
  { path: '/contact',               priority: '0.6', changefreq: 'monthly' },
  { path: '/book_demo',             priority: '0.6', changefreq: 'monthly' },
  { path: '/privacy-policy',        priority: '0.4', changefreq: 'yearly'  },
  { path: '/terms-and-conditions',  priority: '0.4', changefreq: 'yearly'  },
];

async function fetchIds(endpoint) {
  try {
    const res = await fetch(`${STRAPI_API}/${endpoint}?fields=id,updatedAt`, {
      headers: { Authorization: `Bearer ${STRAPI_TOKEN}` },
    });
    const json = await res.json();
    return (json.data || []).map(item => ({
      id: item.id,
      updatedAt: (item.attributes?.updatedAt || TODAY).split('T')[0],
    }));
  } catch {
    return [];
  }
}

async function generate() {
  const [articles, caseStudies, webinars, firesideChats, whitePapers] = await Promise.all([
    fetchIds('articles'),
    fetchIds('case-studies'),
    fetchIds('webinars'),
    fetchIds('fireside-chats'),
    fetchIds('white-papers'),
  ]);

  const dynamicPages = [
    ...articles.map(({ id, updatedAt }) => ({ path: `/article/${id}`, lastmod: updatedAt, priority: '0.7', changefreq: 'monthly' })),
    ...caseStudies.map(({ id, updatedAt }) => ({ path: `/case-studies/${id}`, lastmod: updatedAt, priority: '0.7', changefreq: 'monthly' })),
    ...webinars.map(({ id, updatedAt }) => ({ path: `/webinars/${id}`, lastmod: updatedAt, priority: '0.7', changefreq: 'monthly' })),
    ...firesideChats.map(({ id, updatedAt }) => ({ path: `/fireside-chat/${id}`, lastmod: updatedAt, priority: '0.7', changefreq: 'monthly' })),
    ...whitePapers.map(({ id, updatedAt }) => ({ path: `/white-papers/${id}`, lastmod: updatedAt, priority: '0.7', changefreq: 'monthly' })),
  ];

  const allPages = [
    ...STATIC_PAGES.map(p => ({ ...p, lastmod: TODAY })),
    ...dynamicPages,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${BASE_URL}${p.path}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const outPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outPath, xml);
  console.log(`✓ Sitemap generated with ${allPages.length} URLs`);
}

generate();
