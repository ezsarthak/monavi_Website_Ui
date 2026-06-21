const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDirs = [
  path.join('d:\\monavi_web_ui_test', 'public', 'monavi'),
  path.join('d:\\monavi_web_ui_test', 'public', 'images', 'monavi')
];
const componentsDir = path.join('d:\\monavi_web_ui_test', 'src', 'components');

async function processImages() {
  let totalSavings = 0;

  for (const dir of imgDirs) {
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
        const inputPath = path.join(dir, file);
        const parsed = path.parse(inputPath);
        const outputPath = path.join(dir, parsed.name + '.webp');
        
        try {
          const inStats = fs.statSync(inputPath);
          const inSize = inStats.size;

          // Convert to webp
          await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
          
          const outStats = fs.statSync(outputPath);
          const outSize = outStats.size;
          
          totalSavings += (inSize - outSize);
          console.log(`Converted: ${file} (Saved ${(inSize - outSize) / 1024 / 1024 | 0} MB)`);

          // Delete original to save production space
          fs.unlinkSync(inputPath);
        } catch (e) {
          console.error(`Failed to convert ${file}`, e);
        }
      }
    }
  }

  console.log(`Total savings: ${totalSavings / 1024 / 1024 | 0} MB`);
}

function updateComponents() {
  const files = fs.readdirSync(componentsDir);
  for (const file of files) {
    if (!file.endsWith('.jsx')) continue;
    
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    let changed = false;
    
    // Simple regex to find src="..." paths ending in png/jpg/jpeg
    content = content.replace(/(src="[^"]+)\.(png|jpg|jpeg)(")/gi, (match, p1, p2, p3) => {
      changed = true;
      return p1 + '.webp' + p3;
    });

    if (changed) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated paths in ${file}`);
    }
  }
}

async function run() {
  console.log('Starting image compression...');
  await processImages();
  console.log('Updating component paths...');
  updateComponents();
  console.log('Done!');
}

run();
