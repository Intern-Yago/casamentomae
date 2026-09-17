const fs = require('fs');
const puppeteer = require('puppeteer');

const items = [
  // 1. Saca Rolha
  { id: 'saca-rolha-01', category: 'Utensílios de Cozinha', label: 'Saca Rolha', url: 'https://s.shopee.com.br/BTrZuqNUq', shopId: '394683381', itemId: '58257726306' },
  // 2. Pano de Prato
  { id: 'pano-prato-01', category: 'Panos de Prato', label: 'Pano de Prato 1', url: 'https://s.shopee.com.br/50Z7Lni8Ac', shopId: '374050287', itemId: '56008069170' },
  { id: 'pano-prato-02', category: 'Panos de Prato', label: 'Pano de Prato 2', url: 'https://s.shopee.com.br/1qc5a21dVc', shopId: '490694960', itemId: '23435655573' },
  { id: 'pano-prato-03', category: 'Panos de Prato', label: 'Pano de Prato 3', url: 'https://s.shopee.com.br/4VcqkxUg6r', shopId: '674680622', itemId: '22493055839' },
  { id: 'pano-prato-04', category: 'Panos de Prato', label: 'Pano de Prato 4', url: 'https://s.shopee.com.br/3g3jlWIEAW', shopId: '1571103305', itemId: '19898294653' },
  { id: 'pano-prato-05', category: 'Panos de Prato', label: 'Pano de Prato 5', url: 'https://s.shopee.com.br/6q0lXN5VDu', shopId: '1617589851', itemId: '58259292618' },
  { id: 'pano-prato-06', category: 'Panos de Prato', label: 'Pano de Prato 6', url: 'https://s.shopee.com.br/8AW97pzkPU', shopId: '483332947', itemId: '58208187809' },
  // 3. Descascador de legumes
  { id: 'descascador-01', category: 'Utensílios de Cozinha', label: 'Descascador de legumes', url: 'https://s.shopee.com.br/AUu3uXyEel', shopId: '629513653', itemId: '19848647590' },
  // 4. Espremedor de limão
  { id: 'espremedor-01', category: 'Utensílios de Cozinha', label: 'Espremedor de limão', url: 'https://s.shopee.com.br/7Kx28pPKQJ', shopId: '1827023755', itemId: '42534218603' },
  // 5. Tesoura de cozinha
  { id: 'tesoura-01', category: 'Utensílios de Cozinha', label: 'Tesoura de cozinha', url: 'https://s.shopee.com.br/4qFhAPHGuq', shopId: '1366015216', itemId: '22298086461' },
  // 6. Fouet
  { id: 'fouet-01', category: 'Utensílios de Cozinha', label: 'Fouet', url: 'https://s.shopee.com.br/1VzFCMS0j2', shopId: '1399847523', itemId: '58265546221' },
  // 7. Pegador de massa
  { id: 'pegador-massa-01', category: 'Utensílios de Cozinha', label: 'Pegador de massa', url: 'https://s.shopee.com.br/70KBkXeedj', shopId: '1552375256', itemId: '18698200093' },
  // 8. Escumadeira
  { id: 'escumadeira-01', category: 'Utensílios de Cozinha', label: 'Escumadeira', url: 'https://s.shopee.com.br/AKadj5haO0', shopId: '1231683513', itemId: '19499555033' },
  // 9. Espátula de silicone
  { id: 'espatula-01', category: 'Utensílios de Cozinha', label: 'Espátula de silicone', url: 'https://s.shopee.com.br/3LQtOBDz0z', shopId: '1476804944', itemId: '19998031355' },
  // 10. Colher de pau
  { id: 'colher-pau-01', category: 'Utensílios de Cozinha', label: 'Colher de pau', url: 'https://s.shopee.com.br/9AOgKfFZYD', shopId: '919559850', itemId: '22296100292' },
  // 11. Jogo de colheres medidoras
  { id: 'colheres-medidoras-01', category: 'Utensílios de Cozinha', label: 'Jogo de colheres medidoras', url: 'https://s.shopee.com.br/4qFhBFifDm', shopId: '794358083', itemId: '22698158954' },
  // 12. Peneiras
  { id: 'peneiras-01', category: 'Utensílios de Cozinha', label: 'Peneiras', url: 'https://s.shopee.com.br/AKadjXsTpw', shopId: '832040275', itemId: '23895748983' },
  // 13. Funil
  { id: 'funil-01', category: 'Utensílios de Cozinha', label: 'Funil', url: 'https://s.shopee.com.br/70KBlUPLXf', shopId: '1854820604', itemId: '50015259003' },
  // 14. Luvas térmicas
  { id: 'luvas-termicas-01', category: 'Utensílios de Cozinha', label: 'Luvas térmicas', url: 'https://s.shopee.com.br/5fooBJEtQf', shopId: '444300037', itemId: '22994146157' },
  // 15. Descanso de panela
  { id: 'descanso-panela-01', category: 'Descanso de Panela', label: 'Descanso de panela 1', url: 'https://s.shopee.com.br/1Lfp1PYF6V', shopId: '1759844116', itemId: '58215486998' },
  { id: 'descanso-panela-02', category: 'Descanso de Panela', label: 'Descanso de panela 2', url: 'https://s.shopee.com.br/2BEw0xLw2o', shopId: '831623600', itemId: '22894839516' },
  { id: 'descanso-panela-03', category: 'Descanso de Panela', label: 'Descanso de panela 3', url: 'https://s.shopee.com.br/7AdbyBsc94', shopId: '402101130', itemId: '58254005450' },
  // 16. Potes de vidro
  { id: 'potes-vidro-01', category: 'Potes & Mantimentos', label: 'Potes de vidro 1', url: 'https://s.shopee.com.br/8AW9ADfhKt', shopId: '1155565917', itemId: '20798292480' },
  { id: 'potes-vidro-02', category: 'Potes & Mantimentos', label: 'Potes de vidro 2', url: 'https://s.shopee.com.br/5q8ENzrQwg', shopId: '1779513374', itemId: '58257720953' },
  { id: 'potes-vidro-03', category: 'Potes & Mantimentos', label: 'Potes de vidro 3', url: 'https://s.shopee.com.br/7Kx2Am2iAw', shopId: '407244902', itemId: '11194925432' },
  { id: 'potes-vidro-04', category: 'Potes & Mantimentos', label: 'Potes de vidro 4', url: 'https://s.shopee.com.br/9peN9OnzFr', shopId: '436723291', itemId: '29226207290' },
  { id: 'potes-vidro-05', category: 'Potes & Mantimentos', label: 'Potes de vidro 5', url: 'https://s.shopee.com.br/9peN9SZJGC', shopId: '938369272', itemId: '58205951261' },
  { id: 'potes-vidro-06', category: 'Potes & Mantimentos', label: 'Potes de vidro 6', url: 'https://s.shopee.com.br/112ydG1rp5', shopId: '1189786504', itemId: '23994934408' },
  { id: 'potes-vidro-07', category: 'Potes & Mantimentos', label: 'Potes de vidro 7', url: 'https://s.shopee.com.br/9fKwxRSflE', shopId: '1373441778', itemId: '56954991171' },
  // 17. Forma de gelo
  { id: 'forma-gelo-01', category: 'Formas de Gelo', label: 'Forma de gelo 1', url: 'https://s.shopee.com.br/9V1WlDR9Oo', shopId: '1859084311', itemId: '44031862071' },
  { id: 'forma-gelo-02', category: 'Formas de Gelo', label: 'Forma de gelo 2', url: 'https://s.shopee.com.br/6q0laNIMWs', shopId: '306509229', itemId: '23094048510' },
  // 18. Organizador de talheres
  { id: 'organizador-01', category: 'Organizadores', label: 'Organizador de talheres 1', url: 'https://s.shopee.com.br/5AsXbMsIES', shopId: '852584669', itemId: '21699264560' },
  { id: 'organizador-02', category: 'Organizadores', label: 'Organizador de talheres 2', url: 'https://s.shopee.com.br/4B00PYHcyH', shopId: '869809385', itemId: '17394143807' },
  { id: 'organizador-03', category: 'Organizadores', label: 'Organizador de talheres 3', url: 'https://s.shopee.com.br/9peN9yzyq2', shopId: '1808216658', itemId: '51311097283' },
  { id: 'organizador-04', category: 'Organizadores', label: 'Organizador de talheres 4', url: 'https://s.shopee.com.br/6L4UzZhhNC', shopId: '1858356759', itemId: '49112985031' },
  { id: 'organizador-05', category: 'Organizadores', label: 'Organizador de talheres 5', url: 'https://s.shopee.com.br/7fZsa4OLj1', shopId: '368482733', itemId: '22793062129' },
  { id: 'organizador-06', category: 'Organizadores', label: 'Organizador de talheres 6', url: 'https://s.shopee.com.br/AUu3xJ3t2t', shopId: '351887767', itemId: '21397690166' },
  // 19. Porta-papel-toalha
  { id: 'porta-papel-01', category: 'Mesa & Servir', label: 'Porta-papel-toalha', url: 'https://s.shopee.com.br/3qNA14t3RB', shopId: '378097993', itemId: '58212277192' },
  // 20. Porta guardanapo
  { id: 'porta-guardanapo-01', category: 'Mesa & Servir', label: 'Porta guardanapo 1', url: 'https://s.shopee.com.br/qjYRgWeUL', shopId: '1519534116', itemId: '50011960098' },
  { id: 'porta-guardanapo-02', category: 'Mesa & Servir', label: 'Porta guardanapo 2', url: 'https://s.shopee.com.br/80CiyuqYPF', shopId: '1780143042', itemId: '58209285001' },
  { id: 'porta-guardanapo-03', category: 'Mesa & Servir', label: 'Porta guardanapo Aurora', url: 'https://shopee.com.br/Porta-Guardanapo-Aurora-Suporte-Guardanapos-Bambu-Metal-Dourado-Preto-Mesa-Posta-Cozinha-Bancada-Organizador-i.430136280.58216443765?extraParams=%7B%22display_model_id%22%3A238812088386%2C%22model_selection_logic%22%3A3%7D', shopId: '430136280', itemId: '58216443765' },

  // 31. Jogo de copos
  { id: 'copos-01', category: 'Copos, Taças & Xícaras', label: 'Jogo de copos 1', url: 'https://s.shopee.com.br/4LJQcd6OxO', shopId: '298408189', itemId: '58250047272' },
  { id: 'copos-02', category: 'Copos, Taças & Xícaras', label: 'Jogo de copos 2', url: 'https://s.shopee.com.br/1ARSgQtTK', shopId: '1386797050', itemId: '22594347240' },
  { id: 'copos-03', category: 'Copos, Taças & Xícaras', label: 'Jogo de copos 3', url: 'https://s.shopee.com.br/8plpyvbGNG', shopId: '501260305', itemId: '58255572910' },
  { id: 'copos-04', category: 'Copos, Taças & Xícaras', label: 'Jogo de copos 4', url: 'https://s.shopee.com.br/3VkJdCtTk8', shopId: '1912045157', itemId: '58217936130' },
  { id: 'copos-05', category: 'Copos, Taças & Xícaras', label: 'Jogo de copos 5', url: 'https://s.shopee.com.br/8V8zaSUUtF', shopId: '767880234', itemId: '18797586243' },
  { id: 'copos-06', category: 'Copos, Taças & Xícaras', label: 'Jogo de copos 6', url: 'https://s.shopee.com.br/1gIfRwFhYZ', shopId: '946114804', itemId: '58262419172' },
  { id: 'copos-07', category: 'Copos, Taças & Xícaras', label: 'Jogo de copos 7', url: 'https://s.shopee.com.br/2BEw2sQarK', shopId: '936289488', itemId: '46565849703' },
  { id: 'copos-08', category: 'Copos, Taças & Xícaras', label: 'Jogo de copos 8', url: 'https://s.shopee.com.br/4fwH1Y1vW1', shopId: '534500405', itemId: '58260194657' },
  { id: 'copos-09', category: 'Copos, Taças & Xícaras', label: 'Jogo de copos 9', url: 'https://s.shopee.com.br/60Rec19VX1', shopId: '368923553', itemId: '22394406466' },

  // 32. Jogo de taças
  { id: 'tacas-01', category: 'Copos, Taças & Xícaras', label: 'Jogo de taças 1', url: 'https://s.shopee.com.br/4LJQd445WR', shopId: '1684707378', itemId: '22599477788' },
  { id: 'tacas-02', category: 'Copos, Taças & Xícaras', label: 'Jogo de taças 2', url: 'https://s.shopee.com.br/1BMOrFu11p', shopId: '1684707378', itemId: '58211167250' },
  { id: 'tacas-03', category: 'Copos, Taças & Xícaras', label: 'Jogo de taças 3', url: 'https://s.shopee.com.br/AUu3yYCArS', shopId: '1764770861', itemId: '45866938710' },
  { id: 'tacas-04', category: 'Copos, Taças & Xícaras', label: 'Jogo de taças 4', url: 'https://s.shopee.com.br/8V8zat6BYZ', shopId: '399646047', itemId: '12158305153' },

  // 33. Jogo de xícaras
  { id: 'xicaras-01', category: 'Copos, Taças & Xícaras', label: 'Jogo de xícaras 1', url: 'https://s.shopee.com.br/20vVr69QhO', shopId: '722021572', itemId: '18297826798' },
  { id: 'xicaras-02', category: 'Copos, Taças & Xícaras', label: 'Jogo de xícaras 2', url: 'https://s.shopee.com.br/7Adc0cBUZI', shopId: '505682429', itemId: '18399554578' },
  { id: 'xicaras-03', category: 'Copos, Taças & Xícaras', label: 'Jogo de xícaras 3', url: 'https://s.shopee.com.br/6Al4onS5uo', shopId: '1491872457', itemId: '21498308986' },
  { id: 'xicaras-04', category: 'Copos, Taças & Xícaras', label: 'Jogo de xícaras 4', url: 'https://s.shopee.com.br/7ptIntTk1t', shopId: '329256756', itemId: '20296942322' },
  { id: 'xicaras-05', category: 'Copos, Taças & Xícaras', label: 'Jogo de xícaras 5', url: 'https://s.shopee.com.br/5AsXd0HLxB', shopId: '561341313', itemId: '58258992121' },
  { id: 'xicaras-06', category: 'Copos, Taças & Xícaras', label: 'Jogo de xícaras 6', url: 'https://s.shopee.com.br/8fSPnShMLC', shopId: '906329922', itemId: '22298478581' },
  { id: 'xicaras-07', category: 'Copos, Taças & Xícaras', label: 'Jogo de xícaras 7', url: 'https://s.shopee.com.br/1ARTZ4kH7', shopId: '1397076460', itemId: '58264859825' },
];

async function scrapeAll() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const results = [];
  const outputPath = 'scripts/shopee_scraped.json';

  // Load existing if available
  let existing = {};
  if (fs.existsSync(outputPath)) {
    try {
      const arr = JSON.parse(fs.readFileSync(outputPath, 'utf-8'));
      arr.forEach(i => { if (i.realImage) existing[i.id] = i; });
    } catch(e) {}
  }

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36');
  
  await page.setRequestInterception(true);
  page.on('request', req => {
    const url = req.url();
    if (url.includes('google') || url.includes('facebook') || url.includes('appsflyer') || url.includes('tracking') || url.includes('analytics') || url.includes('doubleclick')) {
      req.abort();
    } else {
      req.continue();
    }
  });

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (existing[item.id] && existing[item.id].realImage) {
      console.log(`[${i+1}/${items.length}] Skipping already scraped: ${item.label}`);
      results.push(existing[item.id]);
      continue;
    }

    const productUrl = `https://shopee.com.br/product/${item.shopId}/${item.itemId}`;
    console.log(`[${i+1}/${items.length}] Scraping ${item.label} (${productUrl})...`);

    try {
      await page.goto(productUrl, { waitUntil: 'domcontentloaded', timeout: 12000 });
      await new Promise(r => setTimeout(r, 2000));

      const data = await page.evaluate(() => {
        let title = document.title || '';
        if (title.includes('| Shopee Brasil')) {
          title = title.replace('| Shopee Brasil', '').trim();
        }

        // Look for main product images
        const imgs = Array.from(document.querySelectorAll('img'))
          .map(i => i.src)
          .filter(src => src && src.includes('susercontent.com') && !src.includes('svg') && !src.includes('avatar') && !src.includes('icon'));

        // Prefer larger images or cover images
        let cover = imgs.find(s => s.includes('_cover') || s.includes('-820') || s.includes('-81z') || s.includes('-7r9')) || imgs[0] || '';
        if (cover.endsWith('_tn')) {
          cover = cover.replace('_tn', '');
        }

        return { title, cover, allImgs: imgs.slice(0, 5) };
      });

      const cleanTitle = data.title || item.label;
      const cleanImage = data.cover || '';

      console.log(`  -> Title: ${cleanTitle.slice(0, 60)}...`);
      console.log(`  -> Cover Image: ${cleanImage}`);

      results.push({
        ...item,
        realTitle: cleanTitle,
        realImage: cleanImage
      });

      // Save progress incrementally
      fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
    } catch(err) {
      console.error(`  -> Error scraping ${item.label}:`, err.message);
      results.push({
        ...item,
        realTitle: item.label,
        realImage: ''
      });
      fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
    }
  }

  await browser.close();
  console.log('Finished scraping all items! Saved to scripts/shopee_scraped.json');
}

scrapeAll();
