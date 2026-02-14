# Dynamic Image Loading Guide

## How to Add Images to Your Gallery

### Step 1: Prepare Your Images

1. **Organize your images** in the `public/images/` folder
2. **Name them with dates** for automatic sorting (latest first)
   - Format: `project-YYYY-MM-DD-number.jpg`
   - Example: `project-2024-02-14-1.jpg`

3. **Optimize images** before adding:
   - Recommended size: 1920x1080 or 1600x1200
   - Format: JPG (for photos) or PNG (for graphics)
   - Compress using tools like TinyPNG or ImageOptim

### Step 2: Update Gallery Component

There are two methods to load images:

#### Method 1: Automatic Loading (Recommended)

If you want to automatically load all images from a folder:

```javascript
// In src/components/Gallery.jsx

const loadImages = async () => {
  try {
    // This loads all images from public/images/
    // Note: This requires a build-time plugin or manual listing
    
    const images = [
      // List all your images here
      '/images/project-2024-02-14-1.jpg',
      '/images/project-2024-02-13-1.jpg',
      '/images/project-2024-02-12-1.jpg',
      // Add more...
    ];

    const projectImages = images.map((src, index) => {
      // Extract date from filename
      const dateMatch = src.match(/(\d{4}-\d{2}-\d{2})/);
      const date = dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0];
      
      return {
        id: index + 1,
        src: src,
        title: `Project ${index + 1}`,
        date: date
      };
    });

    // Sort by date (latest first)
    const sortedImages = projectImages.sort((a, b) => 
      new Date(b.date) - new Date(a.date)
    );

    setImages(sortedImages);
  } catch (error) {
    console.error('Error loading images:', error);
  }
};
```

#### Method 2: Manual Configuration (More Control)

For better control over titles and descriptions:

```javascript
const loadImages = () => {
  const projectImages = [
    {
      id: 1,
      src: '/images/commercial-building-1.jpg',
      title: 'Downtown Commercial Complex',
      description: 'Modern 12-story office building',
      date: '2024-02-14'
    },
    {
      id: 2,
      src: '/images/industrial-warehouse-1.jpg',
      title: 'Industrial Warehouse Facility',
      description: '50,000 sq ft distribution center',
      date: '2024-02-10'
    },
    // Add more projects...
  ];

  const sortedImages = projectImages.sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  setImages(sortedImages);
};
```

### Step 3: Image Folder Structure

Recommended folder structure:

```
public/
├── images/
│   ├── projects/
│   │   ├── commercial/
│   │   │   ├── project-2024-02-14-1.jpg
│   │   │   └── project-2024-02-13-1.jpg
│   │   ├── industrial/
│   │   │   └── project-2024-02-12-1.jpg
│   │   └── residential/
│   │       └── project-2024-02-11-1.jpg
│   ├── hero-bg.jpg
│   └── logo.png
└── favicon.svg
```

### Step 4: Advanced - Import from JSON

For easier management, create a JSON file:

**public/images/projects.json:**
```json
[
  {
    "id": 1,
    "src": "/images/projects/commercial/project-2024-02-14-1.jpg",
    "title": "Downtown Commercial Complex",
    "description": "Modern 12-story office building",
    "date": "2024-02-14",
    "category": "commercial"
  },
  {
    "id": 2,
    "src": "/images/projects/industrial/warehouse-2024-02-10.jpg",
    "title": "Industrial Warehouse",
    "description": "50,000 sq ft distribution center",
    "date": "2024-02-10",
    "category": "industrial"
  }
]
```

**Update Gallery.jsx:**
```javascript
const loadImages = async () => {
  try {
    const response = await fetch('/images/projects.json');
    const data = await response.json();
    
    const sortedImages = data.sort((a, b) => 
      new Date(b.date) - new Date(a.date)
    );
    
    setImages(sortedImages);
  } catch (error) {
    console.error('Error loading images:', error);
  }
};
```

## Image Optimization Tips

### 1. Compress Images
- Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Target size: 200-500KB per image
- Maintain quality at 80-85%

### 2. Use WebP Format
Convert JPG/PNG to WebP for better compression:
```bash
# Install cwebp
brew install webp  # Mac
apt-get install webp  # Linux

# Convert
cwebp input.jpg -q 80 -o output.webp
```

### 3. Responsive Images
Update Gallery component for responsive images:
```javascript
<img 
  src={image.src} 
  alt={image.title}
  loading="lazy"
  srcSet={`${image.src} 1x, ${image.src.replace('.jpg', '@2x.jpg')} 2x`}
/>
```

### 4. Lazy Loading
Already implemented in the Gallery component:
```javascript
<img src={image.src} alt={image.title} loading="lazy" />
```

## Troubleshooting

### Images Not Showing

1. **Check file paths:**
   - Public folder: `/images/project.jpg` ✅
   - Src folder: `../assets/project.jpg` ✅
   - Without leading slash: `images/project.jpg` ❌

2. **Verify file names:**
   - Case-sensitive: `Project.jpg` ≠ `project.jpg`
   - No spaces: Use `project-name.jpg` not `project name.jpg`

3. **Check browser console:**
   - Look for 404 errors
   - Verify correct paths

4. **Clear cache:**
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

### Images Load Slowly

1. **Compress images** (see tips above)
2. **Use CDN** for production
3. **Enable caching** in deployment
4. **Implement progressive loading**

### Images Different Sizes

Add CSS to Gallery.css:
```css
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures consistent sizing */
}
```

## Best Practices

1. **Naming Convention:** Use consistent, descriptive names
2. **Date Format:** YYYY-MM-DD for easy sorting
3. **Backup:** Keep originals in separate folder
4. **Documentation:** Keep list of projects with details
5. **Version Control:** Don't commit large images to Git
6. **CDN:** Use image CDN for production (Cloudinary, Imgix)

## Example Project Structure

```
jrk-engineering/
├── public/
│   └── images/
│       ├── projects.json (metadata)
│       ├── hero-bg.jpg
│       └── projects/
│           ├── commercial-building-2024-02-14.jpg
│           ├── industrial-warehouse-2024-02-13.jpg
│           ├── office-renovation-2024-02-12.jpg
│           ├── mep-installation-2024-02-11.jpg
│           └── structural-project-2024-02-10.jpg
└── src/
    └── components/
        └── Gallery.jsx
```

## Quick Start Checklist

- [ ] Create `public/images/` folder
- [ ] Add project images with date-based names
- [ ] Optimize images (compress, resize)
- [ ] Update Gallery.jsx with image list
- [ ] Test locally: `npm run dev`
- [ ] Verify sorting (latest first)
- [ ] Check mobile responsiveness
- [ ] Test lightbox functionality
- [ ] Deploy and verify production

---

Need help? Check the main README.md or component documentation.
