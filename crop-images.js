import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the target aspect ratio (16:9 for hero images)
const targetWidth = 1920;
const targetHeight = 1080;

// Hero images to crop
const heroImages = [
  'tenweb_media_rpsjpec2h.webp',
  'pexels-curtis-adams-1694007-3773582.jpg',
  'pexels-heyho-8143711.jpg',
  'tenweb_media_sirpbq38j.webp'
];

async function cropImages() {
  const imagesDir = path.join(__dirname, 'public', 'images');
  
  // Create cropped directory if it doesn't exist
  const croppedDir = path.join(imagesDir, 'cropped');
  if (!fs.existsSync(croppedDir)) {
    fs.mkdirSync(croppedDir, { recursive: true });
  }

  for (const imageName of heroImages) {
    const inputPath = path.join(imagesDir, imageName);
    const outputPath = path.join(croppedDir, imageName);
    
    if (fs.existsSync(inputPath)) {
      try {
        console.log(`Cropping ${imageName}...`);
        
        await sharp(inputPath)
          .resize(targetWidth, targetHeight, {
            fit: 'cover',
            position: 'center'
          })
          .toFile(outputPath);
        
        console.log(`✓ Cropped ${imageName}`);
      } catch (error) {
        console.error(`✗ Error cropping ${imageName}:`, error.message);
      }
    } else {
      console.warn(`⚠ Image not found: ${imageName}`);
    }
  }
  
  console.log('\nCropping complete!');
  console.log('Cropped images saved to: public/images/cropped/');
  console.log('\nTo use the cropped images, update the Hero component with:');
  console.log('const heroImages = [');
  console.log('  "/images/cropped/tenweb_media_rpsjpec2h.webp",');
  console.log('  "/images/cropped/pexels-curtis-adams-1694007-3773582.jpg",');
  console.log('  "/images/cropped/pexels-heyho-8143711.jpg",');
  console.log('  "/images/cropped/tenweb_media_sirpbq38j.webp"');
  console.log('];');
}

cropImages().catch(console.error); 