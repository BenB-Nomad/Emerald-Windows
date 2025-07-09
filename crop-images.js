const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Target dimensions for hero images (16:9 aspect ratio)
const TARGET_WIDTH = 1920;
const TARGET_HEIGHT = 1080;

// Images to crop
const images = [
  'tenweb_media_rpsjpec2h.webp',
  'pexels-curtis-adams-1694007-3773582.jpg',
  'pexels-heyho-8143711.jpg',
  'tenweb_media_sirpbq38j.webp'
];

async function cropImages() {
  const inputDir = path.join(__dirname, 'public', 'images');
  const outputDir = path.join(__dirname, 'public', 'images', 'hero-cropped');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log('Created output directory:', outputDir);
  } else {
    console.log('Output directory exists:', outputDir);
  }

  for (const imageName of images) {
    const inputPath = path.join(inputDir, imageName);
    const outputPath = path.join(outputDir, imageName);
    
    try {
      console.log(`Processing ${inputPath}...`);
      
      await sharp(inputPath)
        .resize(TARGET_WIDTH, TARGET_HEIGHT, {
          fit: 'cover',
          position: 'center'
        })
        .toFile(outputPath);
      
      console.log(`✓ Cropped ${imageName} to ${TARGET_WIDTH}x${TARGET_HEIGHT}`);
    } catch (error) {
      console.error(`✗ Error processing ${imageName}:`, error.message);
    }
  }
  
  console.log('\nAll images processed!');
  console.log('Cropped images saved to:', outputDir);
}

cropImages().catch(console.error); 