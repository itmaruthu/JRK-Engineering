# Deployment Guide

Complete guide for deploying your JRK Engineering website to various hosting platforms.

## Table of Contents

1. [Netlify (Recommended)](#netlify-recommended)
2. [Vercel](#vercel)
3. [GitHub Pages](#github-pages)
4. [Traditional Hosting (cPanel)](#traditional-hosting-cpanel)
5. [AWS S3 + CloudFront](#aws-s3--cloudfront)
6. [Firebase Hosting](#firebase-hosting)

---

## Netlify (Recommended)

Netlify is recommended for its simplicity, free tier, and automatic deployments.

### Method 1: Netlify CLI (Fastest)

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Follow prompts:**
   - Create & configure a new site? Yes
   - What's your build command? `npm run build`
   - Directory to deploy? `dist`

### Method 2: Netlify Dashboard (Easiest)

1. Push your code to GitHub
2. Go to [netlify.com](https://www.netlify.com/)
3. Click "Add new site" > "Import from Git"
4. Connect your GitHub repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Configure Custom Domain (Optional)

1. Go to Site settings > Domain management
2. Add custom domain
3. Follow DNS configuration instructions

---

## Vercel

Vercel offers excellent performance and automatic deployments.

### Method 1: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts and configure:**
   - Set up and deploy? Yes
   - Which scope? (Select your account)
   - Link to existing project? No
   - What's your project's name? jrk-engineering
   - In which directory is your code located? ./
   - Override settings? No

### Method 2: Vercel Dashboard

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite settings
5. Click "Deploy"

### Configure Environment Variables

1. Go to Project Settings > Environment Variables
2. Add any required variables
3. Redeploy

---

## GitHub Pages

Perfect for free hosting with GitHub integration.

### Setup

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/jrk-engineering",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/jrk-engineering/', // Your repo name
     build: {
       outDir: 'dist'
     }
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Folder: / (root)

---

## Traditional Hosting (cPanel)

For shared hosting with cPanel, FTP, or file manager access.

### Step 1: Build

```bash
npm run build
```

This creates a `dist` folder with all production files.

### Step 2: Upload Files

**Option A: File Manager**
1. Login to cPanel
2. Navigate to File Manager
3. Go to `public_html` (or your domain's folder)
4. Upload all files from the `dist` folder
5. Extract if needed

**Option B: FTP**
1. Use FileZilla or any FTP client
2. Connect to your server
3. Navigate to `public_html`
4. Upload all files from `dist` folder

### Step 3: Configure .htaccess

Create `.htaccess` file in the root directory:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Handle client-side routing
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
  
  # Security headers
  <IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
  </IfModule>
  
  # Compression
  <IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json
  </IfModule>
  
  # Caching
  <IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
  </IfModule>
</IfModule>
```

### Step 4: Test

Visit your domain and test all functionality.

---

## AWS S3 + CloudFront

For scalable, global deployment with CDN.

### Step 1: Create S3 Bucket

1. Go to AWS S3 Console
2. Create new bucket
3. Disable "Block all public access"
4. Enable static website hosting

### Step 2: Upload Files

```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
```

### Step 3: Configure Bucket Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

### Step 4: Create CloudFront Distribution

1. Go to CloudFront Console
2. Create distribution
3. Origin domain: Your S3 bucket
4. Enable compression
5. Configure custom domain (optional)

### Step 5: Configure Error Pages

Add custom error response:
- HTTP Error Code: 403
- Response Page Path: /index.html
- HTTP Response Code: 200

---

## Firebase Hosting

Fast and secure hosting by Google.

### Setup

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   
   Configure:
   - What do you want to use as your public directory? `dist`
   - Configure as single-page app? `Yes`
   - Set up automatic builds with GitHub? `Optional`

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### Update firebase.json

```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

---

## Post-Deployment Checklist

After deploying, verify:

- [ ] Website loads correctly
- [ ] All pages/sections accessible
- [ ] Navigation works smoothly
- [ ] Images load properly
- [ ] Contact form sends emails
- [ ] Social media links work
- [ ] Mobile responsiveness
- [ ] Page load speed (use [PageSpeed Insights](https://pagespeed.web.dev/))
- [ ] SSL/HTTPS enabled
- [ ] Custom domain configured (if applicable)
- [ ] Analytics set up (optional)

## Performance Optimization

### After Deployment

1. **Enable Compression**
   - Netlify/Vercel: Automatic
   - cPanel: Add to .htaccess (already included above)
   
2. **Configure CDN**
   - Use CloudFlare for additional caching
   - Enable auto-minification
   
3. **Image Optimization**
   - Compress images before uploading
   - Use WebP format when possible
   - Implement lazy loading (already included)

4. **Monitor Performance**
   - Set up Google Analytics
   - Use Google Search Console
   - Monitor with Lighthouse

## Troubleshooting

### 404 Errors on Refresh

**Solution:** Configure server to always serve index.html
- Netlify: Add `_redirects` file
- Vercel: Add `vercel.json`
- Others: Use .htaccess (provided above)

### Images Not Loading

- Check file paths are correct
- Verify images are in `public/images/` folder
- Check image file names (case-sensitive)
- Clear browser cache

### CSS/JS Not Loading

- Clear build cache: `rm -rf dist node_modules && npm install && npm run build`
- Check browser console for errors
- Verify base path in vite.config.js

### Email Not Working

- Verify EmailJS configuration
- Check environment variables
- Test locally first
- Review EmailJS dashboard

## Continuous Deployment

### Setup with GitHub

**Netlify:**
1. Connect GitHub repository
2. Enable automatic deployments
3. Every push to main branch auto-deploys

**Vercel:**
1. Import from GitHub
2. Automatic on every push
3. Preview deployments for PRs

## Custom Domain Setup

### DNS Configuration

Add these records to your DNS:

**For Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

**For Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## Need Help?

- Check hosting provider documentation
- Review error logs in hosting dashboard
- Test locally first: `npm run build && npm run preview`
- Contact hosting provider support

---

Your website is now deployed! 🎉
