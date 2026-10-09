import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const supportedExtensions: ReadonlySet<string> = new Set(['.png', '.jpg', '.jpeg']);
const imagesDirectory: string = path.resolve('src/assets/images');

async function findImages(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry): Promise<string[]> => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return findImages(entryPath);
      }

      return supportedExtensions.has(path.extname(entry.name).toLowerCase()) ? [entryPath] : [];
    }),
  );

  return files.flat();
}

async function convertImages(): Promise<void> {
  const imageFiles = await findImages(imagesDirectory);

  if (imageFiles.length === 0) {
    console.log('No PNG, JPG, or JPEG images found to convert.');
    return;
  }

  await Promise.all(
    imageFiles.map(async (inputPath: string): Promise<void> => {
      const outputPath: string = inputPath.replace(/\.(png|jpe?g)$/i, '.webp');

      await mkdir(path.dirname(outputPath), { recursive: true });
      await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);

      console.log(
        `Converted ${path.relative(process.cwd(), inputPath)} → ${path.relative(process.cwd(), outputPath)}`,
      );
    }),
  );
}

convertImages().catch((error: unknown): void => {
  console.error('Image conversion failed:', error);
  process.exitCode = 1;
});
