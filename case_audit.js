const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const componentsDir = path.join(process.cwd(), 'src/components');
const appDir = path.join(process.cwd(), 'src/app');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let assetRefs = [];
function extractRefs(filePath) {
  if (!filePath.match(/\.(js|jsx|css)$/)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = content.match(/(src|href)=["'](\/(assets|fonts|images|monavi|team)\/[^"']+)["']/g);
  if (matches) {
    matches.forEach(m => {
      const match = m.match(/(src|href)=["']([^"']+)["']/);
      if (match) assetRefs.push({ file: filePath, ref: match[2] });
    });
  }
}

walkDir(componentsDir, extractRefs);
walkDir(appDir, extractRefs);

const existingFiles = new Set();
walkDir(publicDir, filePath => {
  const relPath = filePath.replace(publicDir, '').replace(/\\/g, '/');
  existingFiles.add(relPath);
});

const missing = [];
assetRefs.forEach(r => {
  // Ignore external links just in case
  if (r.ref.startsWith('http')) return;
  
  if (!existingFiles.has(r.ref)) {
    // Check if it's a case issue
    let foundLowercase = false;
    for (let f of existingFiles) {
      if (f.toLowerCase() === r.ref.toLowerCase()) {
        missing.push({ ...r, caseIssue: true, correctPath: f });
        foundLowercase = true;
        break;
      }
    }
    if (!foundLowercase) missing.push({ ...r, caseIssue: false });
  }
});

if (missing.length > 0) {
  console.log('MISSING OR CASE MISMATCH:');
  missing.forEach(m => {
    if (m.caseIssue) {
      console.log(`[CASE MISMATCH] ${m.file}: requested ${m.ref}, actual is ${m.correctPath}`);
    } else {
      console.log(`[MISSING] ${m.file}: requested ${m.ref}`);
    }
  });
} else {
  console.log('All asset references match existing files exactly.');
}
