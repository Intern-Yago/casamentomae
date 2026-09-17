const puppeteer = require('puppeteer');
const fs = require('fs');

const targets = [
  { id: 'organizador-03', url: 'https://s.shopee.com.br/9peN9yzyq2' },
  { id: 'pegador-massa-01', url: 'https://s.shopee.com.br/70KBkXeedj' },
  { id: 'porta-papel-01', url: 'https://s.shopee.com.br/3qNA14t3RB' },
  { id: 'forma-gelo-01', url: 'https://s.shopee.com.br/9V1WlDR9Oo' },
  { id: 'descascador-01', url: 'https://s.shopee.com.br/AUu3uXyEel' },
  { id: 'espremedor-01', url: 'https://s.shopee.com.br/7Kx28pPKQJ' },
  { id: 'funil-01', url: 'https://s.shopee.com.br/70KBlUPLXf' },
  { id: 'organizador-05', url: 'https://s.shopee.com.br/7fZsa4OLj1' },
  { id: 'organizador-04', url: 'https://s.shopee.com.br/6L4UzZhhNC' }
];

async function run() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const results = {};

  for (const t of targets) {
    console.log(`\nFetching ${t.id}: ${t.url}...`);
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const u = req.url();
      if (u.includes('google-analytics') || u.includes('facebook') || u.includes('doubleclick') || u.includes('appsflyer')) {
        req.abort();
      } else {
        req.continue();
      }
    });

    try {
      await page.goto(t.url, { waitUntil: 'domcontentloaded', timeout: 25000 });
      await new Promise(r => setTimeout(r, 4000));

      const data = await page.evaluate(() => {
        const title = document.querySelector('h1')?.innerText || document.title;
        // Collect all image sources on the page that come from shopee cdn
        const imgElements = Array.from(document.querySelectorAll('img'));
        const images = [];
        imgElements.forEach(img => {
          const s = img.src;
          if (s && (s.includes('susercontent.com') || s.includes('shopeesz.com'))) {
            // strip query params or resize params to get full res if possible
            images.push(s);
          }
        });
        // Also check background images or pictures
        const bgElements = Array.from(document.querySelectorAll('*'));
        bgElements.forEach(el => {
          const bg = window.getComputedStyle(el).backgroundImage;
          if (bg && bg.includes('susercontent.com')) {
            const match = bg.match(/url\(["']?(.*?)["']?\)/);
            if (match && match[1]) images.push(match[1]);
          }
        });

        return {
          title,
          images: Array.from(new Set(images))
        };
      });

      console.log(`Found ${data.images.length} images for ${t.id}`);
      results[t.id] = {
        id: t.id,
        url: t.url,
        title: data.title,
        images: data.images
      };
    } catch (err) {
      console.error(`Error fetching ${t.id}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  fs.writeFileSync('scripts/fixed_images_raw.json', JSON.stringify(results, null, 2));
  console.log('\nSaved raw image lists to scripts/fixed_images_raw.json');
}

run();
