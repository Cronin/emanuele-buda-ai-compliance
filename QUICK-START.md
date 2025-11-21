# Conversion Tracking - Quick Start

Get your conversion tracking up and running in 15 minutes.

---

## Step 1: Get Your IDs (5 minutes)

### Google Analytics 4

1. Go to https://analytics.google.com
2. Click **Create Property**
3. Name: `Emanuele Buda AI Compliance`
4. Create **Web Data Stream**
5. **Copy Measurement ID**: `G-XXXXXXXXXX`

### Google Tag Manager

1. Go to https://tagmanager.google.com
2. Click **Create Account**
3. Container: `emanuelebuda.com`
4. Platform: **Web**
5. **Copy Container ID**: `GTM-XXXXXXX`

---

## Step 2: Add IDs to Your Site (2 minutes)

Create `.env.local` file:

```bash
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_CONTAINER_ID=GTM-XXXXXXX
```

**OR** edit `/src/config/analytics.ts`:

```typescript
ga4: { measurementId: 'G-XXXXXXXXXX' },
gtm: { containerId: 'GTM-XXXXXXX' },
```

---

## Step 3: Deploy (3 minutes)

```bash
npm run build
vercel --prod
```

---

## Step 4: Configure GTM (5 minutes)

### Quick Setup (Minimal)

In GTM, create these 3 tags:

**Tag 1: GA4 Configuration**
- Type: GA4 Configuration
- Measurement ID: `G-XXXXXXXXXX`
- Trigger: All Pages

**Tag 2: Assessment CTA**
- Type: GA4 Event
- Event: `cta_click_assessment`
- Trigger: Custom Event > `cta_click_assessment`

**Tag 3: Consultation CTA**
- Type: GA4 Event
- Event: `cta_click_consultation`
- Trigger: Custom Event > `cta_click_consultation`

Click **Publish**.

### Full Setup (Recommended)

See `GTM-CONTAINER-CONFIG.md` for all 20 events.

---

## Step 5: Test (2 minutes)

1. Open site in private/incognito window
2. Click "Get Free Assessment"
3. Go to GA4 > **Realtime**
4. You should see your event within 30 seconds

---

## What's Tracked Automatically

Once deployed, these events track automatically:

- CTA clicks (Assessment, Consultation)
- Scroll depth (25%, 50%, 75%, 100%)
- Time on page (30s, 60s, 120s)
- Section views (Pricing, CV)
- Outbound clicks (Email, LinkedIn)

---

## Need More Details?

- **Full Setup Guide**: `CONVERSION-TRACKING-SETUP.md`
- **GTM Configuration**: `GTM-CONTAINER-CONFIG.md`
- **Summary**: `CONVERSION-TRACKING-SUMMARY.md`

---

## Troubleshooting

**Events not showing in GA4?**
- Check Measurement ID is correct
- Wait 30 seconds (not instant)
- Disable ad blockers
- Check browser console for errors

**GTM tags not firing?**
- Check Container ID is correct
- Ensure tags are published (not draft)
- Use GTM Preview mode to debug

**Build errors?**
- Run `npm install`
- Check all imports are correct
- Verify TypeScript has no errors

---

## Support

Email: hello@emanuelebuda.com

---

**That's it! You're now tracking conversions.**
