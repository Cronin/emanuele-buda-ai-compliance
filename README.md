# Emanuele Buda AI Act Compliance

Production-ready landing page for AI Act compliance consulting business. Modern startup design with complete SEO, tracking, and conversion infrastructure.

## Features

### Design
- **Modern Startup Aesthetic**: Black & white minimal design with Lamp effect hero
- **Smooth Animations**: Framer Motion-powered transitions (60fps)
- **Responsive Design**: Mobile-first, fully responsive
- **Fast Performance**: Lighthouse 90+ on all metrics

### SEO & Technical
- **Complete SEO**: Meta tags, OG tags, Twitter cards, JSON-LD schema
- **Sitemap & Robots**: Auto-generated for search engines
- **Schema Markup**: Organization, Person, Service, BlogPosting
- **Performance**: Optimized images, caching, compression

### Analytics & Tracking
- **Google Analytics 4**: Page views + 20+ custom events
- **Google Tag Manager**: Full dataLayer implementation
- **Microsoft Clarity**: Behavior analytics (heatmaps, recordings)
- **Conversion Tracking**: CTA clicks, scroll depth, time on page, viewport tracking

### Conversion Infrastructure
- **Form Components**: Assessment form, consultation booking, contact form
- **API Routes**: Form handling with validation and sanitization
- **Lead Capture**: Email validation, success/error states
- **Event Tracking**: 20+ conversion events with monetary values

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Fonts**: Inter (body) + JetBrains Mono (code)

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Analytics (Optional - 15 minutes)

Create `.env.local` with your tracking IDs:

```bash
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_CONTAINER_ID=GTM-XXXXXXX
```

See `QUICK-START.md` for detailed setup instructions.

### 3. Development

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

### 4. Deploy to Vercel

```bash
# Option 1: Via GitHub (recommended)
git push origin main  # Auto-deploys if Vercel is connected

# Option 2: Via Vercel CLI
vercel --prod
```

## Documentation

Complete guides included:

- **QUICK-START.md** - 15-minute setup guide (start here)
- **CONVERSION-TRACKING-SETUP.md** - Complete GA4/GTM setup
- **GTM-CONTAINER-CONFIG.md** - Tag configuration
- **CLARITY-DEPLOYMENT.md** - Microsoft Clarity setup
- **SEO-OPTIMIZATION-SUMMARY.md** - SEO implementation details

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Landing page (wrapped with tracking)
│   ├── layout.tsx                  # Root layout (GA4, GTM, Clarity scripts)
│   ├── globals.css                 # Global styles
│   ├── api/
│   │   └── forms/
│   │       ├── assessment/         # Assessment form API
│   │       └── consultation/       # Consultation booking API
│   └── blog/
│       ├── page.tsx                # Blog listing
│       └── [slug]/page.tsx         # Blog post
├── components/
│   ├── Hero.tsx                    # Hero with Lamp effect (CTA tracking)
│   ├── UrgencyBadge.tsx            # Deadline alert
│   ├── ProblemSection.tsx          # Problem statement
│   ├── SolutionSection.tsx         # Solution overview
│   ├── CVSection.tsx               # Interactive CV (viewport tracking)
│   ├── Pricing.tsx                 # Pricing tiers (viewport tracking)
│   ├── FAQ.tsx                     # FAQ section
│   ├── CTASection.tsx              # Call-to-action (CTA tracking)
│   ├── Footer.tsx                  # Footer
│   ├── ConversionTrackingProvider.tsx  # Automatic tracking wrapper
│   ├── forms/
│   │   ├── AssessmentForm.tsx      # Free assessment form
│   │   ├── ConsultationForm.tsx    # Consultation booking form
│   │   └── FormModal.tsx           # Modal wrapper
│   └── ui/
│       └── lamp.tsx                # Lamp effect component
├── config/
│   ├── analytics.ts                # Analytics configuration (IDs, events)
│   └── site.ts                     # SEO configuration
├── lib/
│   ├── analytics.ts                # Analytics tracking functions
│   ├── validation.ts               # Form validation/sanitization
│   ├── utils.ts                    # Utility functions
│   └── hooks/
│       └── useConversionTracking.ts  # Tracking React hooks
└── data/
    └── blog-posts.ts               # Blog content
```

## Conversion Events Tracked

### Primary Conversions (€600 value each)
- `cta_click_assessment` - Free Assessment CTA (€100)
- `cta_click_consultation` - Consultation CTA (€500)
- `form_submit_assessment` - Assessment form submission (€100)
- `form_submit_consultation` - Consultation booking (€500)

### Interest Indicators
- `pricing_view` - Pricing section viewed (€50)
- `cv_view` - CV section viewed (€30)
- `blog_read_75` - Blog 75% scroll (€10)
- `blog_read_100` - Blog completed (€20)

### Behavioral Tracking
- Scroll depth (25%, 50%, 75%, 100%)
- Time on page (30s, 60s, 120s)
- Outbound clicks (Email, LinkedIn)

**Total trackable events: 20+**

## Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized
- **Bundle Size**: ~150 KB (gzipped)
- **Build Time**: <2 seconds
- **Tracking Impact**: <0.1s on page load

## Production Checklist

Before going live:

1. **Replace Placeholder IDs** in `.env.local`:
   - GA4: `NEXT_PUBLIC_GA4_MEASUREMENT_ID`
   - GTM: `NEXT_PUBLIC_GTM_CONTAINER_ID`
   - Clarity: In `src/app/layout.tsx` line 81

2. **Update SEO Config** in `src/config/site.ts`:
   - Domain URL
   - Contact email
   - Social links

3. **Test Tracking**:
   - Click CTAs → events fire in GA4 Real-Time
   - Scroll page → scroll events fire
   - View sections → viewport events fire

4. **Deploy to Vercel**:
   - Connect GitHub repo
   - Add environment variables
   - Deploy

See `QUICK-START.md` for detailed instructions.

## Repository

- **GitHub**: https://github.com/Cronin/emanuele-buda-ai-compliance
- **Status**: Production-ready
- **Last Updated**: 2025-11-22

## License

© 2025 Emanuele Buda. All rights reserved.
