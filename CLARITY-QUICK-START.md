# Microsoft Clarity - Quick Start

## Current Status

Microsoft Clarity tracking script has been installed with a **PLACEHOLDER_CLARITY_ID**.

### What You Need to Do

**STEP 1: Create Clarity Project**
1. Go to https://clarity.microsoft.com/
2. Sign in with Microsoft account
3. Click "Add new project"
4. Enter website URL
5. Copy your Clarity Project ID (looks like: `abc123xyz`)

**STEP 2: Replace Placeholder**

Open this file:
```
/Users/claudiocronin/websites/sites/emanuele-buda-ai-compliance/src/app/layout.tsx
```

Find line 81 and replace:
```tsx
"PLACEHOLDER_CLARITY_ID"
```

With your actual ID:
```tsx
"abc123xyz"
```

**STEP 3: Deploy**

```bash
cd /Users/claudiocronin/websites/sites/emanuele-buda-ai-compliance
npm run build
# Deploy to production (e.g., vercel --prod)
```

**STEP 4: Verify**

- Visit your live site
- Open DevTools Console (F12)
- Type: `window.clarity`
- Should return a function

Data appears in Clarity dashboard within 10-15 minutes.

---

## Quick Links

- **Clarity Dashboard**: https://clarity.microsoft.com/
- **Documentation**: https://docs.microsoft.com/clarity
- **Full Deployment Guide**: See `CLARITY-DEPLOYMENT.md`

## Features You'll Get

- Session recordings (video replays)
- Heatmaps (click, scroll, engagement)
- Rage click detection
- Dead click detection
- JavaScript error monitoring
- Automatic UX insights

**100% FREE - Unlimited sessions**
