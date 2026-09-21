const fs = require('fs');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const rawResolved = JSON.parse(fs.readFileSync('scripts/resolved_missing.json', 'utf8'));

// Filter out removed items:
// 1qc6zyOP3C
const itemsToScrape = rawResolved.filter(item => {
  if (item.url.includes('1qc6zyOP3C')) return false;
  return true;
});

const progressFile = 'scripts/scraped_new_gifts.json';
let progress = {};
if (fs.existsSync(progressFile)) {
  try {
    progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));
  } catch(e) {}
}

async function run() {
  console.log(`Total items to scrape: ${itemsToScrape.length}`);
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  // Block useless analytics/ads to speed up loading
  await page.setRequestInterception(true);
  page.on('request', req => {
    const u = req.url();
    if (u.includes('google-analytics') || u.includes('facebook') || u.includes('doubleclick') || u.includes('appsflyer') || u.includes('tracking')) {
      req.abort();
    } else {
      req.continue();
    }
  });

  let successCount = 0;
  let skipCount = 0;

  for (let i = 0; i < itemsToScrape.length; i++) {
    const item = itemsToScrape[i];
    const key = item.url;

    if (progress[key] && progress[key].cover && progress[key].cover.includes('susercontent.com') && progress[key].title) {
      skipCount++;
      continue;
    }

    const productUrl = `https://shopee.com.br/product/${item.shopId}/${item.itemId}`;
    console.log(`[${i + 1}/${itemsToScrape.length}] Fetching ${item.catName} (${productUrl})...`);

    let itemSuccess = false;
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        await page.goto(productUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });
        await new Promise(r => setTimeout(r, 2500));

        const data = await page.evaluate(() => {
          let title = document.querySelector('h1')?.innerText || document.title || '';
          if (title.includes('| Shopee Brasil')) {
            title = title.replace('| Shopee Brasil', '').trim();
          }
          if (title.includes('- Shopee Brasil')) {
            title = title.replace('- Shopee Brasil', '').trim();
          }

          const imgs = Array.from(document.querySelectorAll('img'))
            .map(img => img.src)
            .filter(s => s && s.includes('susercontent.com') && !s.includes('avatar') && !s.includes('icon') && !s.includes('voucher') && !s.includes('badge'));

          let cover = imgs.find(s => s.includes('_cover') || s.includes('-820') || s.includes('-81z') || s.includes('-7r9')) || imgs[0] || '';
          if (cover.endsWith('_tn')) {
            cover = cover.replace('_tn', '');
          }

          return { title, cover, allImgs: imgs.slice(0, 5) };
        });

        if (data.cover && data.cover.includes('susercontent.com')) {
          progress[key] = {
            ...item,
            title: data.title || item.catName,
            cover: data.cover,
            allImgs: data.allImgs
          };
          fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2));
          console.log(`   -> OK: "${data.title.slice(0, 50)}..."`);
          console.log(`   -> Cover: ${data.cover}`);
          itemSuccess = true;
          successCount++;
          break;
        } else {
          console.log(`   -> Attempt ${attempt}: No cover found, waiting a bit...`);
          await new Promise(r => setTimeout(r, 2000));
        }
      } catch(err) {
        console.log(`   -> Attempt ${attempt} error: ${err.message}`);
        await new Promise(r => setTimeout(r, 1000));
      }
    }

    if (!itemSuccess) {
      console.log(`   -> FAILED to scrape cover for ${item.url}`);
    }

    // Small delay between requests to be polite and avoid rate limits
    await new Promise(r => setTimeout(r, 1000));
  }

  await browser.close();
  console.log(`\nDONE! Scraped: ${successCount}, Skipped: ${skipCount}, Total in registry: ${Object.keys(progress).length}`);
}

run().catch(err => {
  console.error('Fatal error:', err);
});
