const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = 'd:/monavi_web_ui_test/public/monavi';
const MAX_WIDTH = 1200;

async function run() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.webp')) {
      const filePath = path.join(dir, file);
      const buffer = fs.readFileSync(filePath);
      const metadata = await sharp(buffer).metadata();
      
      if (metadata.width > MAX_WIDTH) {
        await sharp(buffer)
          .resize(MAX_WIDTH, null, { withoutEnlargement: true })
          .webp({ quality: 65, effort: 6 })
          .toFile(filePath + '.temp');
          
        fs.unlinkSync(filePath);
        fs.renameSync(filePath + '.temp', filePath);
        
        const newStats = fs.statSync(filePath);
        console.log(`Downscaled ${file} to ${MAX_WIDTH}px width. New size: ${(newStats.size/1024).toFixed(2)} KB`);
      }
    }
  }
}

run();
