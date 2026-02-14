# 🚀 Quick Start Guide

Get your website running in 5 minutes!

## Step 1: Install Dependencies (2 minutes)

```bash
cd jrk-engineering
npm install
```

## Step 2: Basic Configuration (2 minutes)

Open `src/config.js` and update:

```javascript
company: {
  name: "Your Company Name",
  email: "your-email@example.com",
  phone: "your-phone-number",
  address: "your-address"
}

social: {
  linkedin: "your-linkedin-url",
  facebook: "your-facebook-url",
  // ... other social links
}
```

## Step 3: Run Development Server (1 minute)

```bash
npm run dev
```

Visit `http://localhost:3000` - Your website is now running! 🎉

---

## Next Steps

### To Configure Email (10 minutes)
1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Follow [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)
3. Update email config in `src/config.js`

### To Add Your Images (5 minutes)
1. Add images to `public/images/` folder
2. Follow [IMAGE_LOADING_GUIDE.md](./IMAGE_LOADING_GUIDE.md)
3. Update `src/components/Gallery.jsx`

### To Deploy (15 minutes)
1. Build: `npm run build`
2. Choose hosting: Netlify (recommended) or Vercel
3. Follow [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## Full Documentation

- **[README.md](./README.md)** - Complete project documentation
- **[CUSTOMIZATION.md](./CUSTOMIZATION.md)** - Detailed customization guide
- **[EMAILJS_SETUP.md](./EMAILJS_SETUP.md)** - Email setup instructions
- **[IMAGE_LOADING_GUIDE.md](./IMAGE_LOADING_GUIDE.md)** - Gallery configuration
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deployment options

---

## Troubleshooting

**Can't install dependencies?**
- Make sure Node.js v16+ is installed
- Run `npm cache clean --force`
- Delete `node_modules` and try again

**Website won't start?**
- Check if port 3000 is already in use
- Try: `npm run dev -- --port 3001`

**Need help?**
- Check the documentation files above
- Review error messages in the terminal
- Check browser console (F12) for errors

---

## Project Structure

```
jrk-engineering/
├── src/
│   ├── components/     # All React components
│   ├── config.js       # ⭐ Main configuration
│   ├── App.jsx         # Main app component
│   └── index.css       # Global styles
├── public/
│   └── images/         # Add your images here
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

---

**That's it! You're ready to build!** 🛠️

For detailed customization, refer to the documentation files.
