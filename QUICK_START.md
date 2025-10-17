# AgD2 Advisors - Quick Reference

## 🚀 Common Commands

```bash
# Development
npm install          # First time setup
npm run dev          # Start dev server (http://localhost:4321/AgD2)
npm run build        # Production build
npm run preview      # Preview production build

# Code Quality
npm run format       # Format with Prettier
npm run lint         # Lint with ESLint
```

## 📝 Quick Edits

### Update Team Member
**File**: `src/components/Team.astro`
**Line**: 5-80
```js
const team = [
  { name, title, specialty, image, bio, education, experience }
];
```

### Update Services
**File**: `src/components/Offerings.astro`
**Line**: 2-30
```js
const offerings = [
  { title, description, icon }
];
```

### Update Contact Email
- `src/components/Contact.astro` - line 16
- `src/components/Footer.astro` - line 33

### Update Pricing
**File**: `src/components/Fees.astro`
**Line**: 2-35

## 🎨 Theme Colors

```css
Primary Green:    #1c7c3c
Dark Green:       #2e8b57
Light Green:      #9acb61
Dark Text:        #0f172a
Gray Text:        #667085
Light Background: #f6f7f2
```

## 📁 Key Files

```
src/pages/index.astro          → Main page
src/components/Hero.astro      → Hero section
src/components/Team.astro      → Team bios
src/components/Contact.astro   → Contact form
astro.config.mjs              → Site config
tailwind.config.js            → Theme colors
```

## 🌐 Deploy to GitHub Pages

```bash
# 1. Initialize git
git init
git add .
git commit -m "Initial commit"

# 2. Create repo on GitHub, then:
git remote add origin https://github.com/USERNAME/AgD2.git
git push -u origin main

# 3. Enable GitHub Pages
# Settings → Pages → Source: GitHub Actions

# 4. Visit: https://USERNAME.github.io/AgD2
```

## 🔧 Configuration

### Change Site URL
**File**: `astro.config.mjs`
```js
export default defineConfig({
  site: 'https://yourdomain.com',
  base: '/',  // or '/AgD2' for subdirectory
});
```

### Add Custom Domain
1. Add `CNAME` file in `public/`:
```
yourdomain.com
```
2. Update DNS with GitHub IPs
3. Enable HTTPS in GitHub Pages settings

## 🐛 Troubleshooting

**Images not loading?**
→ Check base path in `astro.config.mjs`

**Build fails?**
→ Run `npm run build` and check errors

**Styles not applying?**
→ Check `tailwind.config.js` content paths

## 📊 Performance Check

```bash
# Install Lighthouse
npm install -g lighthouse

# Build and preview
npm run build
npm run preview

# Run audit
lighthouse http://localhost:4321/AgD2 --view
```

Target: All scores ≥ 95

## 🔍 SEO Check

**JSON-LD Validation**:
https://search.google.com/test/rich-results

**Meta Tags**:
View source → Check `<head>` section

## 📱 Mobile Testing

```bash
# Start with network access
npm run dev -- --host

# Get local IP
ip addr show | grep inet

# Visit from phone: http://YOUR_IP:4321/AgD2
```

## ⚡ Quick Fixes

**Clear build cache**:
```bash
rm -rf .astro dist node_modules/.vite
npm run build
```

**Reinstall dependencies**:
```bash
rm -rf node_modules package-lock.json
npm install
```

**Type checking**:
```bash
npx astro check
```

## 📞 Contact

**Email**: hugh@agd2.com
**Docs**: See README.md, DEPLOYMENT.md, PROJECT_SUMMARY.md
