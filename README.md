# AgD2 Advisors Website

A production-ready static website for AgD2 Advisors, built with Astro and Tailwind CSS.

## 🚀 Overview

AgD2 Advisors helps AgTech and AgBio startups become investor-ready through expert advisory services. This single-page site showcases their services, team, and contact information.

## 🛠️ Tech Stack

- **Astro v4** - Static site generator
- **Tailwind CSS v3** - Utility-first CSS framework
- **TypeScript** - Type safety
- **GitHub Pages** - Deployment platform

## 📦 Installation

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 🏗️ Project Structure

```
/
├── public/
│   ├── agd2-logo.svg      # Company logo
│   ├── bridge.png         # Hero visual
│   └── hero-bg.png        # Background pattern
├── src/
│   ├── components/
│   │   ├── Contact.astro  # Contact form
│   │   ├── Fees.astro     # Pricing models
│   │   ├── Footer.astro   # Footer with links
│   │   ├── Header.astro   # Navigation header
│   │   ├── Hero.astro     # Hero section
│   │   ├── Offerings.astro # Services grid
│   │   ├── Panel.astro    # Founder panel video
│   │   ├── Seo.astro      # SEO metadata
│   │   └── Team.astro     # Team bios
│   ├── layouts/
│   │   └── Base.astro     # Base HTML layout
│   ├── pages/
│   │   ├── index.astro    # Home page
│   │   └── privacy.astro  # Privacy policy
│   └── styles/
│       └── tailwind.css   # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Pages deploy
├── astro.config.mjs       # Astro config
├── tailwind.config.js     # Tailwind config
└── package.json           # Dependencies
```

## 🎨 Design System

### Colors

- **Primary Green**: `#1c7c3c` - Main brand color
- **Primary 600**: `#2e8b57` - Hover states
- **Accent**: `#9acb61` - Highlights
- **Ink**: `#0f172a` - Text color
- **Muted**: `#667085` - Secondary text
- **Cream**: `#f6f7f2` - Background variation

### Typography

- **Headings**: DM Sans (700)
- **Body**: Inter (400/500/600)

## 📄 Pages & Sections

### Home Page (`/`)

1. **Header** - Fixed navigation with smooth scroll
2. **Hero** - Main value proposition with bridge visual
3. **Offerings** - 6 key service deliverables
4. **Panel** - Founder interview video with transcript
5. **Fees** - 3 pricing models (Project/Hourly/Retainer)
6. **Team** - 4 founding partners with expandable CVs
7. **Contact** - Form + location info
8. **Footer** - Links and copyright

### Privacy Policy (`/privacy`)

Standard privacy policy page.

## 🚀 Deployment

### GitHub Pages (Automatic)

The site automatically deploys to GitHub Pages on every push to `main`:

1. Push to `main` branch
2. GitHub Actions builds the site
3. Deploys to `https://[username].github.io/AgD2`

### Manual Deployment

```bash
# Build the site
pnpm run build

# The dist/ folder contains the static files
# Upload to any static host (Netlify, Vercel, etc.)
```

## 🔧 Configuration

### Update Site URL

Edit `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://yourdomain.com',
  base: '/', // or '/subpath' for subdirectories
  // ...
});
```

### Environment Variables

No environment variables required for basic deployment.

## ✅ Quality Checklist

- ✅ Semantic HTML5
- ✅ Accessible (WCAG AA)
- ✅ SEO optimized with JSON-LD
- ✅ Mobile responsive
- ✅ Performance optimized
- ✅ Valid HTML/CSS
- ✅ Smooth scroll navigation

## 📊 Lighthouse Targets

- **Performance**: ≥ 95
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 95
- **SEO**: ≥ 95

## 📝 Content Updates

### Update Team Member

Edit `src/components/Team.astro`:

```js
const team = [
  {
    name: 'Name',
    title: 'Title',
    specialty: 'Specialty',
    image: '🧑',
    bio: 'Bio text...',
    education: [...],
    experience: [...]
  }
];
```

### Update Services

Edit `src/components/Offerings.astro`:

```js
const offerings = [
  {
    title: 'SERVICE NAME',
    description: 'Description...',
    icon: 'icon-name'
  }
];
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `pnpm run build` to test
5. Submit a pull request

## 📧 Contact

For questions or support:

- **Email**: hugh@agd2.com
- **Website**: [agd2.com](https://agd2.com)

## 📜 License

Copyright © 2025 AgD2 Advisors. All rights reserved.

---

Built with ❤️ using Astro and Tailwind CSS
