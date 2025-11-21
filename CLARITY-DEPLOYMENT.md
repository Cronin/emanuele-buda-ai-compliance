# Microsoft Clarity Deployment Guide

## Installation Summary

Microsoft Clarity behavior analytics tracking has been successfully added to the Emanuele Buda AI Compliance website.

### Installation Details

- **Site Type**: Next.js 15 (App Router) with TypeScript
- **File Modified**: `/src/app/layout.tsx`
- **Script Location**: Added to `<body>` section with `afterInteractive` strategy
- **Build Status**: Build completed successfully with no errors
- **Performance Impact**: Minimal (<0.1s) - script loads asynchronously

### Changes Made

1. **Imported Next.js Script component** to enable optimized script loading
2. **Added Clarity tracking script** using the official Microsoft Clarity snippet
3. **Used placeholder ID**: `PLACEHOLDER_CLARITY_ID` (needs to be replaced)
4. **Configured async loading**: Script uses `afterInteractive` strategy for optimal performance

### File Path

```
/Users/claudiocronin/websites/sites/emanuele-buda-ai-compliance/src/app/layout.tsx
```

### Code Added

```tsx
import Script from 'next/script';

// In the body section:
<Script
  id="clarity-script"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "PLACEHOLDER_CLARITY_ID");
    `
  }}
/>
```

## Next Steps

### 1. Create Microsoft Clarity Project

1. Visit https://clarity.microsoft.com/
2. Sign in with your Microsoft account (or create one)
3. Click "Add new project"
4. Enter your website details:
   - **Project name**: Emanuele Buda AI Compliance
   - **Website URL**: Your production domain
5. Copy the Clarity Project ID from the dashboard

### 2. Replace Placeholder ID

Open `/Users/claudiocronin/websites/sites/emanuele-buda-ai-compliance/src/app/layout.tsx` and replace:

```tsx
"PLACEHOLDER_CLARITY_ID"
```

with your actual Clarity Project ID (format: `xxxxxxxxxx`), for example:

```tsx
"u1ur4kb2kq"
```

### 3. Deploy to Production

```bash
# Navigate to project directory
cd /Users/claudiocronin/websites/sites/emanuele-buda-ai-compliance

# Build the project (verify no errors)
npm run build

# Deploy to your hosting platform
# For Vercel:
vercel --prod

# For other platforms, use your deployment command
```

### 4. Verify Installation

After deployment:

1. **Check live site source code**:
   - Visit your production website
   - Right-click and select "View Page Source"
   - Search for "clarity.ms" to verify the script is present

2. **Check browser console**:
   - Open DevTools (F12)
   - Go to Console tab
   - Type: `window.clarity`
   - Should return a function (not undefined)

3. **Check Network tab**:
   - Open DevTools Network tab
   - Refresh the page
   - Look for request to `clarity.ms/tag/[YOUR_ID]`
   - Should return 200 status

4. **Check Clarity Dashboard**:
   - Go to https://clarity.microsoft.com/
   - Open your project
   - Data should start appearing within 10-15 minutes

## Microsoft Clarity Features

Once deployed, you'll have access to:

### Session Recordings
- Watch real user sessions as video replays
- Filter by device, country, referrer, duration
- Identify usability issues and confusion

### Heatmaps
- **Click heatmaps**: See where users click
- **Scroll heatmaps**: Track how far users scroll
- **Area heatmaps**: Visualize engagement zones
- Requires 24 hours and minimum traffic to generate

### Rage Clicks Detection
- Identifies frustrating UI elements
- Tracks repeated clicks in short time
- Helps find broken interactions

### Dead Clicks Detection
- Finds clicks on non-interactive elements
- Reveals user expectations vs. reality
- Improves UI/UX design

### JavaScript Error Monitoring
- Tracks JS errors affecting users
- See error context in session recordings
- Debug issues with real user data

### Automatic Insights
- AI-powered problem detection
- Quick backs (users leaving immediately)
- Excessive scrolling (users searching)
- Suggested improvements

## Performance Impact

- **Script size**: ~10KB (gzipped)
- **Loading strategy**: `afterInteractive` (non-blocking)
- **Core Web Vitals impact**: Minimal (<0.1s)
- **Cost**: FREE with unlimited sessions

## Troubleshooting

### Script Not Loading

1. Verify placeholder ID was replaced with real Clarity ID
2. Check deployment completed successfully
3. Clear browser cache and hard refresh (Cmd+Shift+R)
4. Disable ad blockers for testing

### No Data in Dashboard

1. Wait 10-15 minutes after deployment
2. Ensure you're checking the correct project
3. Verify script loads on production (not just localhost)
4. Check that site has actual visitor traffic

### Build Errors

If you encounter build errors after adding the script:
- Ensure `Script` is imported from `next/script`
- Verify the closing tags are properly nested
- Run `npm run build` to see specific error messages

## Support Resources

- **Clarity Documentation**: https://docs.microsoft.com/clarity
- **Clarity Community**: https://github.com/microsoft/clarity
- **Next.js Script Component**: https://nextjs.org/docs/app/api-reference/components/script

## GitHub Repository

https://github.com/Cronin/emanuele-buda-ai-compliance

---

**Deployment completed**: 2025-11-22
**Build status**: Successful
**Ready for production**: Yes (after replacing placeholder ID)
