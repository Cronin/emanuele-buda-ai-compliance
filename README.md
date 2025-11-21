# Emanuele Buda AI Act Compliance

Ultra-minimal black & white landing page for AI Act compliance consulting business.

## Features

- **Ultra-Minimal Design**: Pure black & white aesthetic, Apple-level minimalism
- **Animated Neural Network**: Dynamic background visualization with moving nodes and connections
- **Cryptographic Effects**: Matrix-style binary rain effects
- **Interactive CV Section**: Scroll-triggered animations including:
  - Cybertruck animation for Tesla section
  - Code wave effects for Sonar section
  - Grid matrix for Deloitte section
  - Rocket launch for Vikings Inc section
- **Smooth Animations**: Framer Motion-powered transitions
- **Blog Section**: Complete blog with AI Act Compliance guide
- **Responsive Design**: Mobile-first, fully responsive
- **Fast Performance**: Optimized for speed and efficiency

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Fonts**: Inter (body) + JetBrains Mono (code)

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   └── blog/
│       ├── page.tsx                # Blog listing
│       └── [slug]/page.tsx         # Blog post
├── components/
│   ├── Hero.tsx                    # Hero section with neural network
│   ├── NeuralNetwork.tsx           # Animated neural network background
│   ├── CryptographicRain.tsx       # Matrix-style binary rain
│   ├── UrgencyBadge.tsx            # Deadline alert section
│   ├── ProblemSection.tsx          # Problem statement
│   ├── SolutionSection.tsx         # Solution overview
│   ├── CVSection.tsx               # Interactive CV with animations
│   ├── Pricing.tsx                 # Pricing tiers
│   ├── FAQ.tsx                     # FAQ section
│   ├── CTASection.tsx              # Call-to-action
│   └── Footer.tsx                  # Footer
└── data/
    └── blog-posts.ts               # Blog content
```

## Design Principles

- **Pure Black & White**: No colors, only #000000 and #FFFFFF
- **Heavy Negative Space**: Breathable, minimal layouts
- **Crisp Typography**: Inter for body, JetBrains Mono for code
- **Smooth Animations**: 60fps animations, no jank
- **Performance First**: Optimized for fast loading

## Interactive Effects

1. **Neural Network Background**: Animated nodes and connections in hero section
2. **Cryptographic Rain**: Matrix-style binary falling in urgency badge
3. **CV Scroll Animations**:
   - Tesla → Cybertruck drives across screen
   - Sonar → Code quality wave animation
   - Deloitte → Consulting grid matrix
   - Vikings Inc → Rocket launch effect
4. **Smooth Scroll**: Between sections
5. **Hover Effects**: Subtle on CTAs

## Content

- **Landing Page**: Complete AI Act compliance pitch
- **Blog**: AI Act Compliance complete guide (15 min read)
- **Pricing**: 3 tiers with ROI calculator
- **FAQ**: 6 common questions
- **CV Section**: Full professional background

## Contact

**Emanuele Buda**
- Email: emanuele@aiactcompliance.eu
- LinkedIn: [emanuelebuda](https://linkedin.com/in/emanuelebuda)

## License

© 2025 Emanuele Buda. All rights reserved.
