# AgD2 Advisors - Deployment Guide

## ✅ Project Status

**Build Status**: ✅ Clean (0 errors, 0 warnings, 0 hints)
**Development Server**: ✅ Running at http://localhost:4321/AgD2
**Production Build**: ✅ Ready in `dist/` folder

---

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (with hot reload)
npm run dev
# Visit: http://localhost:4321/AgD2

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📦 GitHub Pages Deployment

### Prerequisites

1. GitHub repository created
2. Code pushed to `main` branch
3. GitHub Actions enabled

### Setup Steps

#### 1. Initialize Git Repository

```bash
cd /home/esola-thomas/AgD2
git init
git add .
git commit -m "Initial commit: AgD2 Advisors website"
```

#### 2. Create GitHub Repository

```bash
# Replace <username> with your GitHub username
git remote add origin https://github.com/<username>/AgD2.git
git branch -M main
git push -u origin main
```

#### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: GitHub Actions
4. The workflow will automatically deploy on push to `main`

#### 4. Verify Deployment

- After ~2-3 minutes, visit: `https://<username>.github.io/AgD2`
- Check the **Actions** tab to monitor deployment progress

### Update Site Configuration

If deploying to a custom domain or different base path, edit `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://yourdomain.com', // Your production URL
  base: '/',                      // Use '/' for root, '/AgD2' for subdirectory
  // ...
});
```

---

## 🔧 Alternative Deployment Options

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist

# Auto-deploy on git push
```

#### netlify.toml

Create a `netlify.toml` file:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Cloudflare Pages

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

---

## 🧪 Testing Checklist

Before deploying to production:

- [ ] `npm run build` completes without errors
- [ ] All images load correctly
- [ ] Navigation links work (smooth scroll)
- [ ] Contact form submits properly
- [ ] Video plays in Panel section
- [ ] Mobile responsive design works
- [ ] All team member details expand/collapse
- [ ] Footer links work
- [ ] Privacy page accessible

### Manual Testing

```bash
# Build and preview
npm run build
npm run preview
# Visit http://localhost:4321/AgD2

# Test on mobile
npm run dev -- --host
# Visit from your phone using local IP
```

---

## 📊 Performance Optimization

### Lighthouse Audit

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Build site
npm run build

# Serve locally
npm run preview

# Run audit
lighthouse http://localhost:4321/AgD2 --view
```

**Target Scores**:
- Performance: ≥ 95
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

### Optimization Tips

1. **Images**: All SVGs are optimized
2. **CSS**: Tailwind purges unused styles automatically
3. **JS**: Minimal JavaScript (only for mobile menu)
4. **Fonts**: Google Fonts with `display=swap`
5. **Build**: Astro automatically optimizes output

---

## 🔍 SEO Verification

### Google Rich Results Test

1. Visit: https://search.google.com/test/rich-results
2. Enter your deployed URL
3. Verify JSON-LD structured data validates

### Sitemap (Optional)

Add to `astro.config.mjs`:

```js
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yourdomain.com',
  integrations: [tailwind(), sitemap()],
});
```

Then install:
```bash
npm install @astrojs/sitemap
```

---

## 🐛 Troubleshooting

### Issue: Assets not loading

**Problem**: Images show 404 errors
**Solution**: Ensure `base` in `astro.config.mjs` matches deployment path

### Issue: Build fails

**Problem**: TypeScript or Astro errors
**Solution**: 
```bash
# Check for errors
npm run build

# Fix TypeScript issues
npx astro check
```

### Issue: CSS not applying

**Problem**: Tailwind classes not working
**Solution**: Verify `tailwind.config.js` content paths are correct

### Issue: Video not playing

**Problem**: Video URL broken
**Solution**: Ensure video URL is accessible and CORS-enabled

---

## 📝 Content Updates

### Update Team Member

Edit `src/components/Team.astro` - line 5:

```js
const team = [
  {
    name: 'New Member',
    title: 'Position',
    // ... rest of fields
  }
];
```

### Update Contact Email

Update in multiple places:
1. `src/components/Contact.astro` - form action
2. `src/components/Footer.astro` - email link
3. `README.md` - contact section

### Update Services/Offerings

Edit `src/components/Offerings.astro` - line 2

### Update Pricing

Edit `src/components/Fees.astro` - line 2

---

## 🔐 Environment Variables

Currently no environment variables required.

For future email integration, create `.env`:

```env
PUBLIC_CONTACT_EMAIL=hugh@agd2.com
# Add other variables as needed
```

Access in Astro:
```js
const email = import.meta.env.PUBLIC_CONTACT_EMAIL;
```

---

## 📱 Browser Support

- Chrome/Edge: Last 2 versions ✅
- Firefox: Last 2 versions ✅
- Safari: Last 2 versions ✅
- iOS Safari: Last 2 versions ✅
- Android Chrome: Last 2 versions ✅

---

## 🆘 Support & Resources

- **Astro Docs**: https://docs.astro.build
- **Tailwind Docs**: https://tailwindcss.com/docs
- **GitHub Actions**: https://docs.github.com/actions
- **Lighthouse**: https://developer.chrome.com/docs/lighthouse

---

## 📄 License

Copyright © 2025 AgD2 Advisors. All rights reserved.

---

**Last Updated**: October 16, 2025
