const fs = require('fs');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const requestedUrls = [
  'https://s.shopee.com.br/4qFhBFifDm',
  'https://s.shopee.com.br/5LBz8kv5LN',
  'https://s.shopee.com.br/70KD7pb4JP',
  'https://s.shopee.com.br/3B7UYoSmpQ',
  'https://s.shopee.com.br/4qFiWUMBox',
  'https://s.shopee.com.br/9peN9yzyq2',
  'https://s.shopee.com.br/50Z8m9POIU',
  'https://s.shopee.com.br/5AsYyRY65j',
  'https://s.shopee.com.br/9V1WlDR9Oo',
  'https://s.shopee.com.br/1LfqMade3U',
  'https://s.shopee.com.br/AUu3uXyEel',
  'https://s.shopee.com.br/7VGTkBPXmz',
  'https://s.shopee.com.br/4B01k7pVcV',
  'https://s.shopee.com.br/7Kx28pPKQJ',
  'https://s.shopee.com.br/1gIglMCPHm',
  'https://s.shopee.com.br/70KBlUPLXf',
  'https://s.shopee.com.br/8V90vIe3Fk',
  'https://s.shopee.com.br/4LJRxZiOnI',
  'https://s.shopee.com.br/70KD8V6pox',
  'https://s.shopee.com.br/4fwIMCXn15',
  'https://s.shopee.com.br/1gIgmsDxr4',
  'https://s.shopee.com.br/6fhMiLpQ6F',
  'https://s.shopee.com.br/W6jNjYihn',
  'https://s.shopee.com.br/2qUeATnaRq',
  'https://s.shopee.com.br/6L4WMKMmc0',
  'https://s.shopee.com.br/112zyTFGHr',
  'https://s.shopee.com.br/70KBkXeedj',
  'https://s.shopee.com.br/8plrL2sVGL',
  'https://s.shopee.com.br/1qc706uIkW',
  'https://s.shopee.com.br/8AWAVr93Yc',
  'https://s.shopee.com.br/gQ9aFFUt2',
  'https://s.shopee.com.br/3qNA14t3RB',
  'https://s.shopee.com.br/5LBz97czkD',
  'https://s.shopee.com.br/2gBDwk6duS',
  'https://s.shopee.com.br/5fopZuin1C',
  'https://s.shopee.com.br/6L4UzZhhNC',
  'https://s.shopee.com.br/9V1Y5DDv1z',
  'https://s.shopee.com.br/112zyPU0X1',
  'https://s.shopee.com.br/20vX9B4bNV',
  'https://s.shopee.com.br/6fhMlNaw9H',
  'https://s.shopee.com.br/1ASmsdL40',
  'https://s.shopee.com.br/AUu5HAc0va',
  'https://s.shopee.com.br/6L4WJWeGz6',
  'https://s.shopee.com.br/4fwIKd2iKQ',
  'https://s.shopee.com.br/4LJRzKHpWS',
  'https://s.shopee.com.br/AUu3yYCArS',
  'https://s.shopee.com.br/50Z8mbw98B',
  'https://s.shopee.com.br/8plrLdqkyL',
  'https://s.shopee.com.br/LnJAosxzT',
  'https://s.shopee.com.br/8AWAUdzgcL'
];

const uniqueUrls = [...new Set(requestedUrls)];

// Resolve mapping for all URLs
const sNew = JSON.parse(fs.readFileSync('scripts/resolved_missing.json', 'utf8'));
const cjsContent = fs.readFileSync('scripts/scrape_shopee.cjs', 'utf8');
const itemsMatch = cjsContent.match(/const items = (\[[\s\S]*?\]);/);
const sOld = eval(itemsMatch[1]);

const targets = uniqueUrls.map(url => {
  const fNew = sNew.find(x => x.url === url);
  const fOld = sOld.find(x => x.url === url);
  const shopId = fNew?.shopId || fOld?.shopId;
  const itemId = fNew?.itemId || fOld?.itemId;
  return { url, shopId, itemId };
});

const cacheFile = 'scripts/second_images_cache.json';
let cache = {};
if (fs.existsSync(cacheFile)) {
  try {
    cache = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
  } catch(e) {}
}

async function run() {
  console.log(`Processing ${targets.length} items that must use the 2nd image...`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  await page.setRequestInterception(true);
  page.on('request', req => {
    const u = req.url();
    if (u.includes('google-analytics') || u.includes('facebook') || u.includes('doubleclick') || u.includes('appsflyer') || u.includes('tracking')) {
      req.abort();
    } else {
      req.continue();
    }
  });

  for (let i = 0; i < targets.length; i++) {
    const item = targets[i];
    if (cache[item.url] && cache[item.url].secondImage) {
      console.log(`[${i+1}/${targets.length}] Cached: ${item.url} -> ${cache[item.url].secondImage}`);
      continue;
    }

    const productUrl = `https://shopee.com.br/product/${item.shopId}/${item.itemId}`;
    console.log(`[${i+1}/${targets.length}] Fetching ${productUrl}...`);

    try {
      await page.goto(productUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await new Promise(r => setTimeout(r, 2500));

      const gallery = await page.evaluate(() => {
        // Collect all susercontent images
        const imgs = Array.from(document.querySelectorAll('img'))
          .map(img => img.src)
          .filter(s => s && s.includes('susercontent.com') && !s.includes('avatar') && !s.includes('icon') && !s.includes('badge') && !s.includes('voucher'));

        // Normalize URLs (remove _tn)
        const cleanImgs = imgs.map(s => s.replace('_tn', ''));
        const unique = Array.from(new Set(cleanImgs));

        // Filter out known promotional banner overlays
        const productImgs = unique.filter(s => !s.includes('lxsovyseln7jc5') && !s.includes('ml8a34rlu7t287'));

        return {
          all: unique,
          productImgs
        };
      });

      // The 2nd image:
      // If productImgs has at least 2 images, take the 2nd one.
      // If productImgs only has 1, take the 2nd from gallery.all.
      let secondImage = '';
      if (gallery.productImgs.length >= 2) {
        // If the first is a cover, second is gallery.productImgs[1]
        secondImage = gallery.productImgs[1];
      } else if (gallery.all.length >= 2) {
        secondImage = gallery.all[1];
      } else if (gallery.productImgs.length === 1) {
        secondImage = gallery.productImgs[0];
      }

      console.log(`   -> 1st image: ${gallery.all[0]}`);
      console.log(`   -> 2nd image (selected): ${secondImage}`);

      cache[item.url] = {
        url: item.url,
        shopId: item.shopId,
        itemId: item.itemId,
        firstImage: gallery.all[0],
        secondImage: secondImage,
        all: gallery.all.slice(0, 6)
      };

      fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2));
    } catch(err) {
      console.log(`   -> Error: ${err.message}`);
    }

    await new Promise(r => setTimeout(r, 800));
  }

  await browser.close();
  console.log(`\nFinished fetching 2nd images for all ${Object.keys(cache).length} items!`);
}

run();
