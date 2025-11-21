# Conversion Tracking Setup Guide

Complete guide for setting up Google Analytics 4, Google Tag Manager, and conversion tracking for the Emanuele Buda AI Compliance website.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Google Analytics 4 Setup](#google-analytics-4-setup)
3. [Google Tag Manager Setup](#google-tag-manager-setup)
4. [Environment Variables](#environment-variables)
5. [Testing Tracking](#testing-tracking)
6. [Conversion Events Reference](#conversion-events-reference)
7. [Form API Setup](#form-api-setup)
8. [Troubleshooting](#troubleshooting)

---

## Quick Start

### 1. Replace Placeholder IDs

Edit `/src/config/analytics.ts` and replace placeholder values:

```typescript
export const analyticsConfig = {
  ga4: {
    measurementId: 'G-XXXXXXXXXX', // ← Replace with your GA4 ID
  },
  gtm: {
    containerId: 'GTM-XXXXXXX', // ← Replace with your GTM ID
  },
  clarity: {
    projectId: 'your-clarity-id', // ← Already configured
  },
};
```

**OR** set environment variables (recommended):

```bash
# .env.local
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_CONTAINER_ID=GTM-XXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=your-clarity-id
```

### 2. Deploy

```bash
npm run build
npm run start

# Or deploy to Vercel
vercel --prod
```

### 3. Verify

- Open your site
- Open browser DevTools > Console
- Look for `[GA4 Event]`, `[GTM Event]` logs (in development mode)
- Check Google Analytics Real-Time view
- Check GTM Preview mode

---

## Google Analytics 4 Setup

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (bottom left)
3. Click **Create Property**
4. Enter:
   - **Property name**: `Emanuele Buda AI Compliance`
   - **Time zone**: Your timezone (e.g., `Europe/Rome`)
   - **Currency**: `EUR`
5. Click **Next**
6. Choose industry: `Professional Services` or `Technology`
7. Choose business size: Select appropriate
8. Click **Create**
9. Accept Terms of Service

### Step 2: Set Up Data Stream

1. Click **Data Streams**
2. Click **Add stream** > **Web**
3. Enter:
   - **Website URL**: `https://emanuelebuda.com` (or your domain)
   - **Stream name**: `Emanuele Buda Website`
4. Click **Create stream**
5. **Copy the Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Configure Events

GA4 automatically tracks:
- Page views
- Scroll depth
- Outbound clicks
- File downloads

Custom events are automatically sent via the tracking code in this project.

### Step 4: Add Measurement ID to Code

**Option A: Environment Variable (Recommended)**

```bash
# .env.local
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Option B: Direct in Code**

Edit `/src/config/analytics.ts`:

```typescript
ga4: {
  measurementId: 'G-XXXXXXXXXX', // Your actual ID
}
```

### Step 5: Verify Installation

1. Go to GA4 > **Reports** > **Realtime**
2. Open your website in another tab
3. You should see yourself in the real-time view within 30 seconds
4. Click around, scroll, interact with CTAs
5. Events should appear in real-time

---

## Google Tag Manager Setup

### Step 1: Create GTM Account & Container

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Click **Create Account**
3. Enter:
   - **Account Name**: `Emanuele Buda`
   - **Country**: Your country
   - **Container Name**: `emanuelebuda.com`
   - **Target Platform**: **Web**
4. Click **Create**
5. Accept Terms of Service
6. **Copy the Container ID** (format: `GTM-XXXXXXX`)

### Step 2: Add GTM ID to Code

**Option A: Environment Variable (Recommended)**

```bash
# .env.local
NEXT_PUBLIC_GTM_CONTAINER_ID=GTM-XXXXXXX
```

**Option B: Direct in Code**

Edit `/src/config/analytics.ts`:

```typescript
gtm: {
  containerId: 'GTM-XXXXXXX', // Your actual ID
}
```

### Step 3: Configure Tags in GTM

#### 3.1 Link GA4 to GTM (Optional but Recommended)

1. In GTM, click **Tags** > **New**
2. Name: `GA4 Configuration`
3. Tag Configuration:
   - Choose **Google Analytics: GA4 Configuration**
   - **Measurement ID**: Enter your `G-XXXXXXXXXX`
4. Triggering: **All Pages**
5. Click **Save**

#### 3.2 Create Conversion Event Tags

For each conversion event, create a tag:

**Example: Track Assessment CTA Click**

1. Click **Tags** > **New**
2. Name: `Event - CTA Click Assessment`
3. Tag Configuration:
   - Choose **Google Analytics: GA4 Event**
   - **Configuration Tag**: Select `GA4 Configuration` (from 3.1)
   - **Event Name**: `cta_click_assessment`
   - **Event Parameters**:
     - Add parameter: `event_category` = `CTA`
     - Add parameter: `event_label` = `Free AI Risk Assessment`
     - Add parameter: `value` = `100`
4. Triggering:
   - Click **Triggering**
   - Choose **Custom Event**
   - Event name: `cta_click_assessment`
5. Click **Save**

**Repeat for all conversion events** (see [Conversion Events Reference](#conversion-events-reference))

### Step 4: Publish Container

1. Click **Submit** (top right)
2. Add **Version Name**: `Initial Setup - Conversion Tracking`
3. Add **Version Description**: `GA4 + Conversion events`
4. Click **Publish**

### Step 5: Test with GTM Preview Mode

1. Click **Preview** (top right)
2. Enter your website URL
3. GTM opens your site in debug mode
4. Click CTAs, scroll, interact
5. Check **Tag Assistant** tab to see which tags fire
6. Verify all conversion events are tracked

---

## Environment Variables

Create `.env.local` in your project root:

```bash
# Analytics
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_CONTAINER_ID=GTM-XXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=your-clarity-id

# Optional: Disable tracking in development
NEXT_PUBLIC_GA4_ENABLED=true
NEXT_PUBLIC_GTM_ENABLED=true
NEXT_PUBLIC_CLARITY_ENABLED=true

# Form API (if using email service)
RESEND_API_KEY=re_xxxxxxxxxxxx
# OR
SENDGRID_API_KEY=SG.xxxxxxxxxxxx
```

**For Vercel Deployment:**

1. Go to Vercel Dashboard
2. Select your project
3. Go to **Settings** > **Environment Variables**
4. Add each variable:
   - Key: `NEXT_PUBLIC_GA4_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX`
   - Environment: **Production**, **Preview**, **Development**
5. Click **Save**
6. Redeploy your site

---

## Testing Tracking

### Method 1: Browser Console (Development Mode)

1. Run `npm run dev`
2. Open browser DevTools > Console
3. Navigate your site
4. Look for logs:
   ```
   [GA4 Event] cta_click_assessment { location: 'hero', ... }
   [GTM Event] cta_click_assessment { location: 'hero', ... }
   [Clarity Event] cta_click_assessment ...
   ```

### Method 2: Google Analytics Real-Time

1. Go to GA4 > **Reports** > **Realtime**
2. Open your site in incognito/private window
3. Interact with site (click CTAs, scroll, etc.)
4. Events appear in real-time within 30 seconds

### Method 3: Google Tag Manager Preview

1. GTM > **Preview**
2. Enter your site URL
3. Tag Assistant opens
4. Interact with site
5. See which tags fire in Tag Assistant

### Method 4: Browser Extensions

Install:
- **Google Tag Assistant** (Chrome)
- **GA Debug** (Chrome)
- **Tag Assistant Companion** (Chrome)

---

## Conversion Events Reference

All events are defined in `/src/config/analytics.ts`:

### Primary CTA Conversions

| Event Name | Trigger | Value | Description |
|------------|---------|-------|-------------|
| `cta_click_assessment` | User clicks "Get Free Assessment" | 100 | Primary conversion - Assessment request |
| `cta_click_consultation` | User clicks "Schedule Consultation" | 500 | Secondary conversion - Consultation request |

### Form Submissions

| Event Name | Trigger | Value | Description |
|------------|---------|-------|-------------|
| `form_submit_assessment` | Assessment form submitted | 100 | Completed assessment form |
| `form_submit_consultation` | Consultation form submitted | 500 | Completed consultation booking |
| `form_submit_contact` | Contact form submitted | 50 | General inquiry |
| `form_submit_newsletter` | Newsletter signup | 20 | Email capture |

### Section Views (Viewport Tracking)

| Event Name | Trigger | Value | Description |
|------------|---------|-------|-------------|
| `pricing_view` | Pricing section enters viewport | 50 | User interested in pricing |
| `cv_view` | CV section enters viewport | 30 | User checking credentials |
| `problem_view` | Problem section enters viewport | 0 | Engagement indicator |
| `solution_view` | Solution section enters viewport | 0 | Engagement indicator |

### Engagement Events

| Event Name | Trigger | Value | Description |
|------------|---------|-------|-------------|
| `blog_read` | Blog post 75% scrolled | 25 | Engaged reader |
| `blog_read_complete` | Blog post 100% scrolled | 50 | Completed read |
| `scroll_depth_25` | Page 25% scrolled | 0 | Scroll engagement |
| `scroll_depth_50` | Page 50% scrolled | 0 | Scroll engagement |
| `scroll_depth_75` | Page 75% scrolled | 0 | Scroll engagement |
| `scroll_depth_100` | Page 100% scrolled | 0 | Scroll engagement |
| `time_on_page_30s` | 30 seconds on page | 0 | Time engagement |
| `time_on_page_60s` | 60 seconds on page | 0 | Time engagement |
| `time_on_page_120s` | 120 seconds on page | 0 | Time engagement |

### Outbound Clicks

| Event Name | Trigger | Value | Description |
|------------|---------|-------|-------------|
| `linkedin_click` | LinkedIn profile clicked | 0 | Social engagement |
| `email_click` | Email link clicked | 0 | Contact intent |

---

## Form API Setup

Forms are configured to POST to API routes, but email sending is not implemented yet.

### Option 1: Resend (Recommended)

1. Sign up at [Resend](https://resend.com)
2. Get API key
3. Add to `.env.local`:
   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```
4. Edit `/src/app/api/forms/assessment/route.ts`:

```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

// In POST handler:
await resend.emails.send({
  from: 'AI Compliance <noreply@emanuelebuda.com>',
  to: 'hello@emanuelebuda.com',
  subject: 'New Assessment Request',
  html: `
    <h2>New AI Risk Assessment Request</h2>
    <p><strong>Name:</strong> ${sanitizedData.name}</p>
    <p><strong>Email:</strong> ${sanitizedData.email}</p>
    <p><strong>Company:</strong> ${sanitizedData.company}</p>
    <p><strong>AI Systems:</strong> ${sanitizedData.aiSystems || 'Not specified'}</p>
  `,
});
```

### Option 2: SendGrid

Similar setup, install `@sendgrid/mail` and configure.

### Option 3: Direct to Email (Cloudflare Email Routing)

Already configured via `mailto:` links in CTASection.tsx.

---

## Troubleshooting

### Events Not Appearing in GA4

**Check:**
1. Measurement ID is correct in `.env.local` or `analytics.ts`
2. Site is deployed and accessible
3. Ad blockers disabled
4. Browser console shows no errors
5. Check GA4 Real-Time within 30 seconds

**Solution:**
```bash
# Verify environment variable is loaded
console.log(process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID);

# Check browser console for tracking logs (dev mode)
# Should see: [GA4 Event] event_name { ... }
```

### GTM Tags Not Firing

**Check:**
1. Container ID is correct
2. Tags are published (not in draft)
3. Triggers are configured correctly
4. Event names match exactly (case-sensitive)

**Solution:**
- Use GTM Preview mode
- Check Tag Assistant for errors
- Verify custom events are being pushed to dataLayer

### Forms Not Submitting

**Check:**
1. API route exists: `/src/app/api/forms/assessment/route.ts`
2. No CORS errors in browser console
3. Form validation is passing

**Solution:**
```bash
# Test API route directly
curl -X POST http://localhost:3000/api/forms/assessment \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","company":"Test Co"}'
```

### Scroll Tracking Not Working

**Check:**
1. `ConversionTrackingProvider` is wrapping your app
2. No JavaScript errors in console

**Solution:**
- Check `/src/app/page.tsx` has `<ConversionTrackingProvider>` wrapper
- Verify hooks are enabled in provider props

---

## Next Steps

1. **Set up GA4 Goals**:
   - Go to GA4 > **Admin** > **Events**
   - Mark important events as conversions

2. **Create GA4 Audiences**:
   - High-intent visitors (viewed pricing + CV)
   - Engaged readers (blog_read_complete)
   - Cart abandoners (started form but didn't submit)

3. **Set up GTM Triggers for A/B Testing**:
   - Google Optimize
   - Split testing for CTA copy

4. **Connect to Google Ads**:
   - Import conversion events
   - Set up remarketing audiences

5. **Set up Enhanced Conversions** (GDPR-compliant):
   - Hash user emails before sending to GA4

---

## Support

For issues or questions:
- Email: hello@emanuelebuda.com
- GitHub Issues: [Create an issue](https://github.com/Cronin/emanuele-buda-ai-compliance/issues)

---

**Last Updated**: January 2025
**Version**: 1.0.0
