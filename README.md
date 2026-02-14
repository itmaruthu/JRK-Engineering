# JRK Engineering Website

A modern, high-performance React website for JRK Engineering built with Vite. Features smooth navigation, dynamic image gallery, email integration, and responsive design.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and Vite for optimal performance
- **Smooth Navigation**: Scroll-to-section functionality with active state indicators
- **Dynamic Image Gallery**: Automatically loads and displays images sorted by date (latest first)
- **Email Integration**: Contact form with EmailJS integration for sending emails
- **Social Media Integration**: LinkedIn, Facebook, Twitter, Instagram, and YouTube links
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Lazy loading images, code splitting, and optimized bundles
- **Easy Maintenance**: Centralized configuration file for simple updates
- **Portfolio Ready**: Professional design suitable for portfolios

## 📁 Project Structure

```
jrk-engineering/
├── public/                 # Static assets
│   └── images/            # Project images folder (add your images here)
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Intro.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx    # Dynamic image loading
│   │   ├── WhyChooseUs.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx    # EmailJS integration
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── config.js          # ⭐ Main configuration file
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Configure EmailJS

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Phone number
   - `{{service}}` - Selected service
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email address

4. Get your credentials:
   - Service ID
   - Template ID
   - Public Key

5. Update `src/config.js`:

```javascript
email: {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
  recipientEmail: "your-email@example.com"
}
```

### Step 3: Add Your Content

Edit `src/config.js` to customize:
- Company information
- Services
- Testimonials
- About section
- Social media links
- Colors and styling

### Step 4: Add Project Images

1. Place your project images in `public/images/` folder
2. Name them with dates for sorting: `project-2024-02-14-1.jpg`
3. Update `src/components/Gallery.jsx` to load from your images folder:

```javascript
const loadImages = () => {
  // Load your actual images
  const projectImages = [
    {
      id: 1,
      src: '/images/project-2024-02-14-1.jpg',
      title: 'Your Project Title',
      date: '2024-02-14'
    },
    // Add more images...
  ];
  
  const sortedImages = projectImages.sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );
  setImages(sortedImages);
};
```

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

### Deploy to Netlify

1. Build your project:
   ```bash
   npm run build
   ```

2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

4. Follow the prompts and select `dist` as your publish directory

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/jrk-engineering",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Deploy to Traditional Hosting (cPanel, etc.)

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of the `dist/` folder to your server's `public_html` or `www` directory

3. Configure `.htaccess` for single-page app routing:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## 🎨 Customization Guide

### Changing Colors

Edit `src/config.js`:

```javascript
colors: {
  primary: "#00d9a3",      // Main accent color
  secondary: "#1a1a2e",    // Dark color
  accent: "#ff6b35"        // Optional accent
}
```

### Adding/Removing Sections

1. Edit `src/App.jsx` to add/remove components
2. Update navigation links in `src/components/Navbar.jsx`
3. Update the config if needed

### Modifying Services

Edit the `services` array in `src/config.js`:

```javascript
services: [
  {
    id: 1,
    title: "Your Service",
    description: "Service description",
    icon: "🏢"  // Use emoji or replace with icon component
  }
]
```

### Social Media Links

Update `src/config.js`:

```javascript
social: {
  linkedin: "your-linkedin-url",
  facebook: "your-facebook-url",
  twitter: "your-twitter-url",
  instagram: "your-instagram-url",
  youtube: "your-youtube-url"
}
```

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## ⚡ Performance Optimizations

- Image lazy loading
- Code splitting
- Minified production builds
- Optimized bundle sizes
- CSS-in-JS with minimal runtime
- Smooth scroll behavior
- Efficient re-renders with React hooks

## 🔧 Troubleshooting

### Images Not Loading

1. Check that images are in `public/images/` folder
2. Verify image paths in Gallery component
3. Check browser console for errors

### Contact Form Not Sending

1. Verify EmailJS credentials in config.js
2. Check EmailJS dashboard for API status
3. Check browser console for errors
4. Ensure template variables match

### Build Errors

1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Clear cache: `npm cache clean --force`

## 📄 License

This project is available for use in your portfolio and commercial projects.

## 🤝 Support

For issues or questions:
1. Check the documentation
2. Review common issues in Troubleshooting section
3. Contact the developer

## 🎯 Next Steps

After setup:
1. ✅ Configure EmailJS
2. ✅ Update config.js with your information
3. ✅ Add your project images
4. ✅ Test the contact form
5. ✅ Test on mobile devices
6. ✅ Deploy to production
7. ✅ Add to your portfolio

---

Built with ❤️ using React + Vite
