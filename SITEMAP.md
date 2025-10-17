# AgD2 Advisors - Site Map

```
┌─────────────────────────────────────────────────────────────┐
│                      AgD2 Advisors                          │
│              https://agd2advisors.com                       │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┴─────────────┐
                │                           │
        ┌───────▼────────┐         ┌───────▼────────┐
        │  Home (/)      │         │ Privacy Policy │
        │  index.astro   │         │ /privacy       │
        └───────┬────────┘         └────────────────┘
                │
    ┌───────────┴───────────┐
    │   Single Page Sections │
    └───────────┬───────────┘
                │
    ┌───────────┼───────────────────────────┐
    │           │                           │
┌───▼───┐  ┌───▼───┐  ┌──────────┐  ┌─────▼─────┐
│ Header│  │ Hero  │  │Offerings │  │   Panel   │
│#header│  │#home  │  │#offerings│  │  #panel   │
└───────┘  └───────┘  └──────────┘  └───────────┘
                                            │
    ┌───────────────────────────────────────┼───────────────┐
    │                                       │               │
┌───▼───┐  ┌──────────┐  ┌──────────┐  ┌──▼────┐  ┌───────▼──────┐
│ Fees  │  │   Team   │  │ Contact  │  │Footer │  │Video Transcript│
│#fees  │  │  #team   │  │ #contact │  │       │  │  (collapsed)   │
└───────┘  └──────────┘  └──────────┘  └───────┘  └────────────────┘
```

## Page Structure

### Home Page (/)

```
┌─────────────────────────────────────────────────┐
│ 🔝 Fixed Header                                 │
│    Logo | Home | Offerings | Fees | Team | CTA │
├─────────────────────────────────────────────────┤
│ 🎯 Hero Section (#home)                         │
│    • H1: AgD2: Here to Bridge Your Innovation  │
│    • Tagline: The Team That Will Get You...    │
│    • Bridge SVG Illustration                    │
│    • CTA Buttons                                │
├─────────────────────────────────────────────────┤
│ 📦 Offerings Section (#offerings)               │
│    • 6 Service Cards in Grid                    │
│      - Pitch Deck                               │
│      - Commercial Strategy                      │
│      - Regulatory Strategy                      │
│      - IP Evaluation                            │
│      - Cost of Goods                            │
│      - Experienced Team                         │
├─────────────────────────────────────────────────┤
│ 🎥 Panel Section (#panel)                       │
│    • Intro Text (2 columns)                     │
│    • Embedded Video Player                      │
│    • Collapsible Transcript                     │
├─────────────────────────────────────────────────┤
│ 💰 Fees Section (#fees)                         │
│    • 3 Pricing Cards                            │
│      - Defined Project / One-time fee           │
│      - As Needed / Hourly fee                   │
│      - Ongoing Support / Monthly retainer ⭐    │
├─────────────────────────────────────────────────┤
│ 👥 Team Section (#team)                         │
│    • 4 Team Member Cards                        │
│      - Nick Macris (Founding Partner)           │
│      - Dr. Kelly Smith (Founding Partner)       │
│      - John Salmeron (Founding Partner)         │
│      - Hugh Young (Biz Dev Lead)                │
│    • Expandable CV Details                      │
├─────────────────────────────────────────────────┤
│ ✉️ Contact Section (#contact)                   │
│    • Contact Form (name, email, company, etc.)  │
│    • Contact Information                        │
│    • Locations (Durham NC, Tampa FL)            │
├─────────────────────────────────────────────────┤
│ 🔗 Footer                                        │
│    • Logo                                       │
│    • Quick Links                                │
│    • Contact Info                               │
│    • Copyright © 2025 AgD2 Advisors             │
└─────────────────────────────────────────────────┘
```

## Navigation Flow

```
User Journey:
┌──────┐   Click Nav    ┌──────────┐   Scroll Down   ┌──────────┐
│ Land │─────────────→  │ Read Hero│─────────────→   │ Explore  │
│ Page │   (Hero)       │ Message  │   (Offerings)   │ Services │
└──────┘                └──────────┘                  └──────────┘
                                                           │
                                                           ▼
                        ┌──────────┐   Watch Video   ┌──────────┐
                        │ Review   │←─────────────   │ See Team │
                        │ Pricing  │                  │ Expertise│
                        └──────────┘                  └──────────┘
                             │
                             ▼
                        ┌──────────┐   Submit Form   ┌──────────┐
                        │ Contact  │─────────────→   │ Success  │
                        │ AgD2     │                  │ (Email)  │
                        └──────────┘                  └──────────┘
```

## Anchor Links

All navigation uses smooth scroll to these anchors:

- `#home` → Hero section
- `#offerings` → Services grid
- `#panel` → Founder panel video
- `#fees` → Pricing models
- `#team` → Team bios
- `#contact` → Contact form

## Interactive Elements

```
┌──────────────────────────────────────────────────┐
│ Interactive Components                           │
├──────────────────────────────────────────────────┤
│ ☰ Mobile Menu Toggle (hamburger)                │
│ 🔽 Team CV Expanders (<details>)                │
│ 🔽 Video Transcript (<details>)                 │
│ 📝 Contact Form (mailto: submission)            │
│ 🎬 HTML5 Video Player (with controls)           │
│ 🔗 Smooth Scroll Links (all nav)                │
└──────────────────────────────────────────────────┘
```

## External Links

- Video Source: `https://video.wixstatic.com/video/.../file.mp4`
- Email: `mailto:hugh@agd2.com`
- Privacy Policy: `/privacy`

## Mobile Navigation

```
Desktop (>768px):        Mobile (<768px):
┌──────────────────┐    ┌──────────────────┐
│ Logo | Nav Links │    │ Logo         ☰   │
└──────────────────┘    └──────────────────┘
                        Click ☰ →
                        ┌──────────────────┐
                        │ Home             │
                        │ Offerings        │
                        │ Fees             │
                        │ Team             │
                        │ [Talk to Us CTA] │
                        └──────────────────┘
```

## SEO & Metadata

```
Each Page Has:
├── Title Tag (unique)
├── Meta Description
├── Canonical URL
├── Open Graph Tags
│   ├── og:type
│   ├── og:url
│   ├── og:title
│   ├── og:description
│   └── og:image
├── Twitter Card Tags
└── JSON-LD Structured Data
    ├── Organization
    ├── Founders (Person)
    ├── Contact Info
    └── Locations
```

## File-to-Section Mapping

| File | Section | Anchor |
|------|---------|--------|
| `Header.astro` | Navigation | #header |
| `Hero.astro` | Hero | #home |
| `Offerings.astro` | Services | #offerings |
| `Panel.astro` | Video | #panel |
| `Fees.astro` | Pricing | #fees |
| `Team.astro` | Team Bios | #team |
| `Contact.astro` | Contact Form | #contact |
| `Footer.astro` | Footer | N/A |

---

**Total Pages**: 2 (Home + Privacy)
**Total Sections**: 7 main sections
**Total Components**: 9 Astro components
