const fs = require('fs');
const path = require('path');
const xmlPath = path.join(__dirname, '..', 'guide_tmp', 'word', 'document.xml');
if (!fs.existsSync(xmlPath)) { console.error('document.xml not found at', xmlPath); process.exit(2); }
const xml = fs.readFileSync(xmlPath, 'utf8');
const re = /<w:t[^>]*>([\s\S]*?)<\/w:t>/g;
let m; const texts = [];
while ((m = re.exec(xml)) !== null) {
  const t = m[1].replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\s+/g,' ').trim();
  texts.push(t);
}
const idx = texts.findIndex(s => s.includes('10.1 Resume Integration'));
if (idx === -1) { console.log('Section 10.1 not found'); process.exit(0); }
const out = texts.slice(idx, idx + 60).join('\n');
console.log(out);
