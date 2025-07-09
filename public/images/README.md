# Media Directory

This directory contains all images and media files for the Emerald Windows website.

## Directory Structure

```
public/images/
├── hero/
│   └── hero-bg.jpg              # Main hero background image
├── services/
│   ├── windows.jpg              # Windows service overview
│   ├── doors.jpg                # Doors service overview
│   ├── sunrooms.jpg             # Sunrooms service overview
│   ├── conservatories.jpg       # Conservatories service overview
│   ├── casement-windows.jpg     # Casement windows detail
│   ├── sash-windows.jpg         # Sash windows detail
│   ├── tilt-turn-windows.jpg    # Tilt & turn windows detail
│   └── bay-bow-windows.jpg      # Bay & bow windows detail
├── projects/
│   ├── victorian-conservatory.jpg
│   ├── modern-sunroom.jpg
│   ├── window-replacement.jpg
│   ├── composite-door.jpg
│   ├── edwardian-conservatory.jpg
│   └── guardian-sunroom.jpg
├── testimonials/
│   ├── sarah.jpg                # Sarah O'Connor testimonial
│   ├── michael.jpg              # Michael Walsh testimonial
│   └── emma.jpg                 # Emma Byrne testimonial
└── about/
    └── company-story.jpg        # Company story image
```

## Image Requirements

### Recommended Specifications:
- **Hero Images**: 1920x1080px minimum, high quality
- **Service Images**: 800x600px minimum
- **Project Images**: 800x600px minimum
- **Testimonial Images**: 150x150px (square)
- **About Images**: 800x600px minimum

### File Formats:
- Use `.jpg` for photographs
- Use `.png` for graphics with transparency
- Optimize all images for web (compress appropriately)

### Content Guidelines:
- Use high-quality, professional images
- Ensure images represent Irish homes and architecture
- Include a mix of traditional and modern styles
- Show before/after transformations where possible
- Ensure all images are properly licensed for commercial use

## Placeholder Images

Currently, placeholder files are created for all required images. Replace these with actual high-quality images before deployment.

## Image Optimization

Consider using Next.js Image component for automatic optimization:
```jsx
import Image from 'next/image'

<Image
  src="/images/services/windows.jpg"
  alt="Windows service"
  width={800}
  height={600}
  priority
/>
``` 