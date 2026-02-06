import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const languages = ['en', 'fr', 'de', 'es', 'it'];
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/certification/procedure', changefreq: 'weekly', priority: 0.9 },
  { url: '/certification/termination', changefreq: 'monthly', priority: 0.7 },
  { url: '/fee-policy', changefreq: 'monthly', priority: 0.7 },
  { url: '/complaints-committee', changefreq: 'monthly', priority: 0.6 },
  { url: '/provisions-for-the-use-of-hfa-logo', changefreq: 'monthly', priority: 0.6 },
  { url: '/hfa-impartiality-policy', changefreq: 'monthly', priority: 0.6 },
  { url: '/hfa-quality-policy', changefreq: 'monthly', priority: 0.6 },
  { url: '/hfa-corporate-and-financial-governance', changefreq: 'monthly', priority: 0.6 },
  { url: '/hfa-complaints-appeals-procedure', changefreq: 'monthly', priority: 0.6 },
  { url: '/halal-food-sampling-analysis-policy', changefreq: 'monthly', priority: 0.6 },
  { url: '/faqs', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/events/hfa-planning-2025', changefreq: 'weekly', priority: 0.7 },
  { url: '/events/hfa-webinar-2020', changefreq: 'yearly', priority: 0.5 },
  { url: '/events/ulemah-meeting-jan-2019/', changefreq: 'yearly', priority: 0.5 },
  { url: '/events/hhic2019/', changefreq: 'yearly', priority: 0.5 },
  { url: '/events/hhic2018/', changefreq: 'yearly', priority: 0.5 },
  { url: '/events/hhic2017/', changefreq: 'yearly', priority: 0.5 },
  { url: '/events/hhic2016/', changefreq: 'yearly', priority: 0.5 },
  { url: '/events/hhic2015/', changefreq: 'yearly', priority: 0.5 },
  { url: '/events/muslimlife2016/', changefreq: 'yearly', priority: 0.5 },
  { url: '/find-more-halal-food-authourity/', changefreq: 'monthly', priority: 0.6 },
  { url: '/food-and-beverages/', changefreq: 'weekly', priority: 0.8 },
  { url: '/cosmetics/', changefreq: 'weekly', priority: 0.8 },
  { url: '/pharmaceuticals/', changefreq: 'weekly', priority: 0.8 },
  { url: '/ingredients/', changefreq: 'weekly', priority: 0.8 },
  { url: '/additives-aromas/', changefreq: 'weekly', priority: 0.7 },
  { url: '/packaging-materials/', changefreq: 'weekly', priority: 0.7 },
  { url: '/uk-parliament-debate-on-banning-non-stun-slaughter-on-9th-may-hfa-perspective/', changefreq: 'yearly', priority: 0.5 },
  { url: '/our-clients/', changefreq: 'weekly', priority: 0.8 },
  { url: '/exporting-your-products-to-indonesia/', changefreq: 'monthly', priority: 0.6 },
  { url: '/our-events/', changefreq: 'weekly', priority: 0.7 },
];

async function generateSitemap() {
  console.log('🚀 Generating multilingual sitemap...');
  
  // Create public directory if it doesn't exist
  const publicDir = join(__dirname, '../public');
  if (!existsSync(publicDir)) {
    console.log(`📁 Creating public directory: ${publicDir}`);
    mkdirSync(publicDir, { recursive: true });
  }
  
  const sitemap = new SitemapStream({ 
    hostname: 'https://halalfoodauthority.com',
    xmlns: {
      xhtml: true,
    }
  });

  let totalUrls = 0;

  // Add homepage for each language
  languages.forEach(language => {
    // Homepage
    const homeUrl = language === 'en' ? '/' : `/${language}`;
    const homeLinks = languages.map(lang => ({
      lang: lang,
      url: lang === 'en' ? '/' : `/${lang}`
    }));

    sitemap.write({
      url: homeUrl,
      changefreq: 'daily',
      priority: 1.0,
      lastmod: new Date().toISOString(),
      links: homeLinks
    });
    totalUrls++;

    // Other pages
    pages.forEach(page => {
      if (page.url === '/') return; // Skip homepage as we already added it
      
      const pageUrl = language === 'en' ? page.url : `/${language}${page.url}`;
      const pageLinks = languages.map(lang => ({
        lang: lang,
        url: lang === 'en' ? page.url : `/${lang}${page.url}`
      }));

      sitemap.write({
        url: pageUrl,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: new Date().toISOString(),
        links: pageLinks
      });
      totalUrls++;
    });
  });

  sitemap.end();

  try {
    const data = await streamToPromise(sitemap);
    
    // Write sitemap to public directory
    const outputPath = join(publicDir, 'sitemap.xml');
    const writeStream = createWriteStream(outputPath);
    
    writeStream.on('error', (error) => {
      console.error('❌ Error writing sitemap file:', error);
      process.exit(1);
    });
    
    writeStream.on('finish', () => {
      console.log(`✅ Sitemap generated successfully!`);
      console.log(`📍 Location: ${outputPath}`);
      console.log(`📊 Total URLs: ${totalUrls}`);
      console.log(`🌐 Languages: ${languages.join(', ')}`);
      console.log(`📄 Pages per language: ${pages.length}`);
    });
    
    writeStream.write(data.toString());
    writeStream.end();
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();