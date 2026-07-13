import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const THUMBNAIL_WIDTH = 800;
const MAX_WIDTH = 2000;

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
  const resizedPath = filePath.replace(new RegExp(`\\${ext}$`), '__w800.webp');
  const losslessPath = filePath.replace(new RegExp(`\\${ext}$`), '.webp');

  const srcStat = fs.statSync(filePath);

  const needsRegenerate = (outPath) => !fs.existsSync(outPath) || fs.statSync(outPath).mtimeMs < srcStat.mtimeMs;

  try {
    const metadata = await sharp(filePath).metadata();
    const thumbnailWidth = Math.min(THUMBNAIL_WIDTH, metadata.width);
    const maxWidth = Math.min(MAX_WIDTH, metadata.width);

    if (needsRegenerate(resizedPath)) {
      await sharp(filePath)
        .resize({ width: thumbnailWidth, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(resizedPath);
      console.log(`Generated: ${path.relative(PUBLIC_DIR, resizedPath)}`);
    }

    if (needsRegenerate(losslessPath)) {
      await sharp(filePath)
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(losslessPath);
      console.log(`Generated: ${path.relative(PUBLIC_DIR, losslessPath)}`);
    }
  } catch (err) {
    console.error(`Failed: ${filePath} — ${err.message}`);
  }
}

await processDirectory(PUBLIC_DIR);
console.log('WebP generation complete.');
