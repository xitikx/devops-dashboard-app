const fs = require('fs');
const path = require('path');

const env = process.argv[2] || 'dev';
const src = path.join(__dirname, '../public/config', `env.${env}.js`);
const dest = path.join(__dirname, '../public', 'env.js');

if (!fs.existsSync(src)) {
  console.error(`Environment file ${src} not found`);
  process.exit(1);
}

fs.copyFileSync(src, dest);
console.log(`Copied ${src} to ${dest}`);