const fs = require('fs');
const path = require('path');
const localesDir = path.join(__dirname, '../src/locales');
const langs = ['en', 'fr', 'de', 'es', 'it'];

const data = {};
for (const lang of langs) {
  data[lang] = JSON.parse(fs.readFileSync(path.join(localesDir, lang + '.json'), 'utf8'));
}

function getInterpolations(str) {
  const matches = str.match(/\{\{[^}]+\}\}/g) || [];
  return matches.map(m => m.replace(/[\s{}]+/g, ''));
}

function checkMismatch(objEn, objOther, pathStr = '', lang = '') {
  for (const [k, v] of Object.entries(objEn)) {
    const currentPath = pathStr ? pathStr + '.' + k : k;
    if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
      if (objOther[k] && typeof objOther[k] === 'object') {
        checkMismatch(v, objOther[k], currentPath, lang);
      }
    } else if (typeof v === 'string') {
      const otherVal = objOther[k];
      if (typeof otherVal === 'string') {
        const enInts = getInterpolations(v).sort();
        const otherInts = getInterpolations(otherVal).sort();
        if (JSON.stringify(enInts) !== JSON.stringify(otherInts)) {
          console.log(`[${lang.toUpperCase()}] Interpolation mismatch at ${currentPath}:`);
          console.log(`  EN: "${v}" -> ${JSON.stringify(enInts)}`);
          console.log(`  ${lang.toUpperCase()}: "${otherVal}" -> ${JSON.stringify(otherInts)}`);
        }
      }
    }
  }
}

for (const lang of langs.filter(l => l !== 'en')) {
  checkMismatch(data['en'], data[lang], '', lang);
}
console.log('Finished checking interpolations.');
