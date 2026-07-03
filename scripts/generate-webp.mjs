import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const MAX_WIDTH = 800;

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('.')) continue;
      await processDirectory(fullPath);
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      await processImage(fullPath);
    }
  }
}

async function processImage(filePath) {
  const ext = path.extname(filePath);
  const webpPath = filePath.replace(new RegExp(`\\${ext}$`), '__w800.webp');

  if (fs.existsSync(webpPath)) {
    const srcStat = fs.statSync(filePath);
    const webpStat = fs.statSync(webpPath);
    if (webpStat.mtimeMs >= srcStat.mtimeMs) {
      return;
    }
  }

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    const width = Math.min(MAX_WIDTH, metadata.width);

    await image
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(webpPath);

    console.log(`Generated: ${path.relative(PUBLIC_DIR, webpPath)}`);
  } catch (err) {
    console.error(`Failed: ${filePath} — ${err.message}`);
  }
}

await processDirectory(PUBLIC_DIR);
console.log('WebP generation complete.');
