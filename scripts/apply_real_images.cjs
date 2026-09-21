const fs = require('fs');

// Read source files
const giftsPath = 'src/constants/gifts.ts';
const content = fs.readFileSync(giftsPath, 'utf8');

// Parse current GIFTS_DATA
const dataMarker = 'export const GIFTS_DATA: GiftItem[] =';
const dataIdx = content.indexOf(dataMarker);
const start = content.indexOf('[', content.indexOf('=', dataIdx));
const end = content.lastIndexOf(']');
const gifts = JSON.parse(content.substring(start, end + 1));

// Load scraped databases
const scrapedNew = JSON.parse(fs.readFileSync('scripts/scraped_new_gifts.json', 'utf8'));
let scrapedOld = [];
if (fs.existsSync('scripts/shopee_scraped.json')) {
  scrapedOld = JSON.parse(fs.readFileSync('scripts/shopee_scraped.json', 'utf8'));
}

// 5 URLs requested to be removed
const urlsToRemove = new Set([
  'https://s.shopee.com.br/8V8zaSUUtF',
  'https://s.shopee.com.br/1ARSgQtTK',
  'https://s.shopee.com.br/3g3jlWIEAW',
  'https://s.shopee.com.br/4VcqkxUg6r',
  'https://s.shopee.com.br/1qc6zyOP3C'
]);

// 1 URL requested to be corrected
const urlToFix = 'https://s.shopee.com.br/9AOhjHIb67';

console.log(`Starting with ${gifts.length} items in gifts.ts`);

// 1. Filter out removed items
let updatedGifts = gifts.filter(g => {
  if (urlsToRemove.has(g.url)) {
    console.log(`Removed: ${g.id} (${g.url})`);
    return false;
  }
  return true;
});

// Map old scraped by url
const oldMap = new Map();
scrapedOld.forEach(item => {
  if (item.url && item.realImage) {
    oldMap.set(item.url, item);
  }
});

let updatedCount = 0;
let unsplashRemaining = 0;

updatedGifts = updatedGifts.map(g => {
  // Check if it's the item to fix:
  if (g.url === urlToFix) {
    console.log(`Fixed 9AOhjHIb67 (${g.id})`);
    const scraped = scrapedNew[urlToFix];
    return {
      ...g,
      title: 'Organizador de Lavanderia Dispensers Porta Sabão e Amaciante',
      category: 'Lavanderia & Limpeza',
      description: 'Dispensers práticos e herméticos para organizar sabão em pó, sabão líquido e amaciante na lavanderia.',
      image: (scraped && scraped.cover) || 'https://down-br.img.susercontent.com/file/br-11134207-820l5-mou9avc7u6md23',
      highlight: false
    };
  }

  // Check in scrapedNew
  if (scrapedNew[g.url] && scrapedNew[g.url].cover) {
    const s = scrapedNew[g.url];
    updatedCount++;
    let cleanTitle = s.title || g.title;
    // Keep titles clean and reasonable length
    cleanTitle = cleanTitle.replace(/\s+/g, ' ').trim();
    return {
      ...g,
      title: cleanTitle,
      image: s.cover
    };
  }

  // Check in oldMap
  if (oldMap.has(g.url)) {
    const s = oldMap.get(g.url);
    if (g.image !== s.realImage) {
      updatedCount++;
    }
    return {
      ...g,
      title: s.realTitle || g.title,
      image: s.realImage
    };
  }

  if (g.image.includes('unsplash')) {
    unsplashRemaining++;
    console.warn(`WARNING: Item still has unsplash image: ${g.id} (${g.url})`);
  }

  return g;
});

console.log(`Total items remaining: ${updatedGifts.length}`);
console.log(`Total items updated: ${updatedCount}`);
console.log(`Remaining unsplash: ${unsplashRemaining}`);

// Reconstruct file
const categoriesPart = content.substring(0, start);
const newContent = `${categoriesPart}${JSON.stringify(updatedGifts, null, 2)};\n`;

fs.writeFileSync(giftsPath, newContent, 'utf8');
console.log(`Successfully updated ${giftsPath}!`);
