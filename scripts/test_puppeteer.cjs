const puppeteer = require('puppeteer');

async function test() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const urls = [
    'https://s.shopee.com.br/5VVPJKy4l9',
    'https://s.shopee.com.br/1gIgkUYDi7'
  ];

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36');
  
  await page.setRequestInterception(true);
  page.on('request', req => {
    const u = req.url();
    if (u.includes('google-analytics') || u.includes('facebook') || u.includes('doubleclick') || u.includes('appsflyer')) {
      req.abort();
    } else {
      req.continue();
    }
  });

  for (const url of urls) {
    console.log('\n--- Testing:', url);
    try {
      const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      console.log('Final URL:', page.url());
      await new Promise(r => setTimeout(r, 4000));

      const data = await page.evaluate(() => {
        let title = document.querySelector('h1')?.innerText || document.title || '';
        title = title.replace('| Shopee Brasil', '').replace('- Shopee Brasil', '').trim();

        const imgElements = Array.from(document.querySelectorAll('img'));
        const images = [];
        imgElements.forEach(img => {
          const s = img.src;
          if (s && (s.includes('susercontent.com') || s.includes('shopeesz.com'))) {
            images.push(s);
          }
        });

        // Background images
        const allEl = Array.from(document.querySelectorAll('*'));
        allEl.forEach(el => {
          const bg = window.getComputedStyle(el).backgroundImage;
          if (bg && bg.includes('susercontent.com')) {
            const m = bg.match(/url\(["']?(.*?)["']?\)/);
            if (m && m[1]) images.push(m[1]);
          }
        });

        return {
          title,
          images: Array.from(new Set(images))
        };
      });

      console.log('Title:', data.title);
      console.log('Found images count:', data.images.length);
      console.log('Sample images:', data.images.slice(0, 5));
    } catch (e) {
      console.error('Error:', e.message);
    }
  }

  await browser.close();
}

test();
