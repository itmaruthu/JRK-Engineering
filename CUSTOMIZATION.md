# Customization Guide

Complete guide to customizing your JRK Engineering website.

## Table of Contents

1. [Quick Start Customization](#quick-start-customization)
2. [Company Information](#company-information)
3. [Colors & Branding](#colors--branding)
4. [Content Sections](#content-sections)
5. [Navigation](#navigation)
6. [Hero Section](#hero-section)
7. [Services](#services)
8. [Gallery/Projects](#galleryprojects)
9. [Testimonials](#testimonials)
10. [Contact Form](#contact-form)
11. [Social Media](#social-media)
12. [Footer](#footer)
13. [Advanced Customization](#advanced-customization)

---

## Quick Start Customization

The fastest way to customize your website is through the `src/config.js` file. This single file controls most of the website's content.

### 5-Minute Customization

1. Open `src/config.js`
2. Update company name, contact info, and email
3. Update social media links
4. Save and refresh

---

## Company Information

Edit `src/config.js`:

```javascript
company: {
  name: "Your Company Name",           // Appears in navbar, footer
  tagline: "Your Company Tagline",     // Hero section
  logo: "YCN",                         // 3-letter abbreviation or path to logo
  description: "Company description",   // Footer, meta tags
  email: "info@yourcompany.com",
  phone: "+1 (555) 123-4567",
  address: "123 Your Street, City, State 12345",
  businessHours: "Mon - Fri: 8:00 AM - 6:00 PM"
}
```

### Custom Logo

Replace text logo with image:

**Option 1: Simple replacement in Navbar.jsx:**
```javascript
<img 
  src="/logo.png" 
  alt={config.company.name} 
  className="logo-image"
/>
```

**Option 2: Update config.js:**
```javascript
logo: "/logo.png"  // Path to logo in public folder
```

Then update Navbar.jsx to check if it's an image:
```javascript
{config.company.logo.startsWith('/') ? (
  <img src={config.company.logo} alt={config.company.name} />
) : (
  <div className="logo-icon">{config.company.logo}</div>
)}
```

---

## Colors & Branding

### Method 1: Update CSS Variables (Fastest)

Edit `src/index.css`:

```css
:root {
  --primary-color: #00d9a3;      /* Your brand color */
  --secondary-color: #1a1a2e;    /* Dark/accent color */
  --accent-orange: #ff6b35;      /* Optional accent */
  /* ... other colors ... */
}
```

### Method 2: Update Config

Edit `src/config.js`:

```javascript
colors: {
  primary: "#00d9a3",
  secondary: "#1a1a2e",
  accent: "#ff6b35",
  white: "#ffffff",
  lightGray: "#f5f5f5",
  mediumGray: "#6c757d",
  darkGray: "#2c3e50",
  text: "#1a1a1a"
}
```

### Brand Color Examples

**Tech/Modern:**
```css
--primary-color: #007BFF;
--secondary-color: #212529;
```

**Construction/Industrial:**
```css
--primary-color: #FF9800;
--secondary-color: #263238;
```

**Eco/Green:**
```css
--primary-color: #4CAF50;
--secondary-color: #1B5E20;
```

**Professional/Corporate:**
```css
--primary-color: #2196F3;
--secondary-color: #0D47A1;
```

---

## Content Sections

### Adding a New Section

1. **Create component:**
```javascript
// src/components/NewSection.jsx
import './NewSection.css';

const NewSection = () => {
  return (
    <section id="new-section" className="new-section section">
      <div className="container">
        <h2 className="section-title">Section Title</h2>
        {/* Your content */}
      </div>
    </section>
  );
};

export default NewSection;
```

2. **Add to App.jsx:**
```javascript
import NewSection from './components/NewSection';

// In the return statement:
<NewSection />
```

3. **Update navigation:**
```javascript
// In Navbar.jsx
const navLinks = [
  // ... existing links
  { id: 'new-section', label: 'New Section' }
];
```

### Removing a Section

1. Remove component import from App.jsx
2. Remove from render
3. Remove from navigation

---

## Navigation

Edit `src/components/Navbar.jsx`:

```javascript
const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },    // Change label
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Portfolio' }, // New label
  // Add or remove links
];
```

### Sticky Navigation

Already implemented! To modify:

```css
/* In Navbar.css */
.navbar {
  position: fixed;  /* Change to 'relative' for non-sticky */
  top: 0;
  /* ... */
}
```

---

## Hero Section

Edit `src/config.js`:

```javascript
hero: {
  title: "Your Main",              // First line
  subtitle: "Headline Here",       // Second line
  tagline: "Your tagline",         // Colored text
  description: "Your description paragraph",
  backgroundImage: "your-image-url-or-path"
}
```

### Custom Hero Background

**Option 1: Use your own image:**
```javascript
backgroundImage: "/images/hero-bg.jpg"
```

**Option 2: Update Hero.css directly:**
```css
.hero {
  background: linear-gradient(rgba(26, 26, 46, 0.7), rgba(26, 26, 46, 0.7)),
              url('/images/your-bg.jpg');
}
```

### Hero Button Actions

Edit `src/components/Hero.jsx`:

```javascript
// Change button text
<button className="btn btn-primary">
  Contact Us  {/* Change text */}
</button>

// Change button action
const handlePrimaryButton = () => {
  // Navigate to different section
  document.getElementById('your-section').scrollIntoView();
  // Or open external link
  // window.open('https://yourlink.com', '_blank');
};
```

---

## Services

### Add/Edit Services

Edit `src/config.js`:

```javascript
services: [
  {
    id: 1,
    title: "Service Name",
    description: "Service description goes here",
    icon: "🏢"  // Emoji or replace with icon component
  },
  // Add more services
]
```

### Using Custom Icons

Instead of emojis, use React Icons:

1. **Already installed:** react-icons package

2. **Update Services.jsx:**
```javascript
import { FaBuilding, FaIndustry, FaTools } from 'react-icons/fa';

const iconMap = {
  building: <FaBuilding />,
  industry: <FaIndustry />,
  tools: <FaTools />
};

// In the component:
<div className="service-icon">
  {iconMap[service.iconType]}
</div>
```

3. **Update config.js:**
```javascript
{
  id: 1,
  title: "Service Name",
  iconType: "building"  // Reference to icon
}
```

---

## Gallery/Projects

See [IMAGE_LOADING_GUIDE.md](./IMAGE_LOADING_GUIDE.md) for detailed instructions.

### Quick Setup

1. Add images to `public/images/`
2. Update `src/components/Gallery.jsx`:

```javascript
const projectImages = [
  {
    id: 1,
    src: '/images/project1.jpg',
    title: 'Project Name',
    date: '2024-02-14'
  },
  // Add more...
];
```

### Add Project Categories

```javascript
// Add filter buttons
const [activeFilter, setActiveFilter] = useState('all');

const categories = ['all', 'commercial', 'industrial', 'residential'];

const filteredImages = activeFilter === 'all' 
  ? images 
  : images.filter(img => img.category === activeFilter);
```

---

## Testimonials

Edit `src/config.js`:

```javascript
testimonials: [
  {
    id: 1,
    name: "Client Name",
    position: "Job Title, Company",
    content: "Your testimonial text here...",
    rating: 5  // Out of 5
  },
  // Add more testimonials
]
```

### Add Client Photos

Update Testimonials.jsx:

```javascript
// In config.js, add:
image: "/images/clients/client1.jpg"

// In Testimonials.jsx:
<img 
  src={config.testimonials[activeIndex].image} 
  alt={config.testimonials[activeIndex].name}
  className="testimonial-image"
/>
```

```css
/* In Testimonials.css */
.testimonial-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
}
```

---

## Contact Form

### Update Form Fields

Edit `src/components/Contact.jsx`:

```javascript
// Add new field to state:
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  company: '',  // New field
  service: '',
  message: ''
});

// Add to JSX:
<div className="form-group">
  <label htmlFor="company">Company Name</label>
  <input
    type="text"
    id="company"
    name="company"
    value={formData.company}
    onChange={handleChange}
  />
</div>
```

### Update EmailJS Template

Add `{{company}}` variable to your EmailJS template.

### Custom Validation

```javascript
const validateForm = () => {
  if (!formData.email.includes('@')) {
    alert('Please enter a valid email');
    return false;
  }
  return true;
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (!validateForm()) return;
  // ... send email
};
```

---

## Social Media

Edit `src/config.js`:

```javascript
social: {
  linkedin: "https://linkedin.com/company/your-company",
  facebook: "https://facebook.com/yourcompany",
  twitter: "https://twitter.com/yourcompany",
  instagram: "https://instagram.com/yourcompany",
  youtube: "https://youtube.com/@yourcompany"
}
```

### Add More Social Networks

1. **Update config.js:**
```javascript
social: {
  // ... existing
  tiktok: "https://tiktok.com/@yourcompany",
  github: "https://github.com/yourcompany"
}
```

2. **Update Footer.jsx:**
```javascript
import { FaTiktok, FaGithub } from 'react-icons/fa';

// In JSX:
<a href={config.social.tiktok} target="_blank" rel="noopener noreferrer">
  <FaTiktok />
</a>
```

---

## Footer

### Update Footer Content

Edit `src/components/Footer.jsx`:

```javascript
// Customize sections
<div className="footer-section">
  <h4>Your Section Title</h4>
  <ul className="footer-links">
    <li><button onClick={() => scrollToSection('section1')}>
      Link 1
    </button></li>
    {/* Add more links */}
  </ul>
</div>
```

### Footer Layout

Change column layout in Footer.css:

```css
.footer-content {
  grid-template-columns: 2fr 1fr 1fr 1fr; /* Adjust ratios */
  /* For 3 columns: */
  /* grid-template-columns: repeat(3, 1fr); */
}
```

---

## Advanced Customization

### Custom Fonts

1. **Add to index.html:**
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;600&display=swap" rel="stylesheet">
```

2. **Update index.css:**
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### Animations

#### Add entrance animations:

```css
/* In index.css */
.fade-in-left {
  animation: fadeInLeft 0.8s ease;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

#### Use in components:

```javascript
<div className="fade-in-left">Your content</div>
```

### Custom Scrollbar

```css
/* In index.css */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}
```

### Dark Mode

1. **Add toggle button:**
```javascript
// In Navbar.jsx
const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
  document.body.classList.toggle('dark-mode');
};

<button onClick={toggleDarkMode}>
  {darkMode ? '☀️' : '🌙'}
</button>
```

2. **Add dark mode styles:**
```css
/* In index.css */
body.dark-mode {
  --primary-color: #00ffc8;
  --secondary-color: #0a0a0a;
  --white: #1a1a1a;
  --text-color: #ffffff;
  --light-gray: #2a2a2a;
  background: #0a0a0a;
  color: #ffffff;
}
```

### Loading States

Already implemented in Contact form. To add elsewhere:

```javascript
const [loading, setLoading] = useState(true);

useEffect(() => {
  // Simulate loading
  setTimeout(() => setLoading(false), 1000);
}, []);

if (loading) {
  return <div className="loading"><div className="spinner"></div></div>;
}
```

### SEO Meta Tags

Update `index.html`:

```html
<head>
  <meta name="description" content="Your company description">
  <meta name="keywords" content="engineering, construction, your, keywords">
  <meta property="og:title" content="Your Company Name">
  <meta property="og:description" content="Your description">
  <meta property="og:image" content="https://yoursite.com/og-image.jpg">
  <meta property="og:url" content="https://yoursite.com">
  <meta name="twitter:card" content="summary_large_image">
</head>
```

---

## Testing Your Changes

After making changes:

1. **Test locally:**
   ```bash
   npm run dev
   ```

2. **Check all sections** work properly

3. **Test mobile responsiveness:**
   - Open DevTools (F12)
   - Click device toggle
   - Test on different sizes

4. **Test contact form** with EmailJS

5. **Build for production:**
   ```bash
   npm run build
   npm run preview
   ```

6. **Deploy** (see DEPLOYMENT.md)

---

## Common Customization Checklist

Before going live:

- [ ] Company information updated
- [ ] Logo added/customized
- [ ] Colors match brand
- [ ] All services listed
- [ ] Project images added
- [ ] Testimonials updated
- [ ] Contact form tested
- [ ] EmailJS configured
- [ ] Social media links updated
- [ ] Footer customized
- [ ] Mobile responsive
- [ ] All links working
- [ ] Performance tested
- [ ] SEO meta tags updated

---

Need more help? Check:
- [README.md](./README.md) - Main documentation
- [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) - Email configuration
- [IMAGE_LOADING_GUIDE.md](./IMAGE_LOADING_GUIDE.md) - Gallery setup
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
