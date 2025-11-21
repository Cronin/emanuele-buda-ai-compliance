# Google Tag Manager Container Configuration

Quick reference guide for setting up your GTM container with all necessary tags, triggers, and variables.

---

## Variables to Create

Go to **Variables** > **User-Defined Variables** > **New**

### 1. GA4 Measurement ID

- **Variable Type**: Constant
- **Name**: `GA4 Measurement ID`
- **Value**: `G-XXXXXXXXXX` (your GA4 ID)

---

## Tags to Create

### Base Configuration Tag

**Tag #1: GA4 Configuration**
- **Tag Type**: Google Analytics: GA4 Configuration
- **Measurement ID**: `{{GA4 Measurement ID}}`
- **Trigger**: All Pages

---

### Conversion Event Tags

Create one tag for each event below:

#### CTA Conversions

**Tag #2: Event - CTA Click Assessment**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `cta_click_assessment`
- **Event Parameters**:
  - `event_category`: `CTA`
  - `event_label`: `Free AI Risk Assessment`
  - `value`: `100`
- **Trigger**: Custom Event > `cta_click_assessment`

**Tag #3: Event - CTA Click Consultation**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `cta_click_consultation`
- **Event Parameters**:
  - `event_category`: `CTA`
  - `event_label`: `Schedule 15-Min Consultation`
  - `value`: `500`
- **Trigger**: Custom Event > `cta_click_consultation`

#### Form Submission Conversions

**Tag #4: Event - Form Submit Assessment**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `form_submit_assessment`
- **Event Parameters**:
  - `event_category`: `Form`
  - `event_label`: `Assessment Form`
  - `value`: `100`
- **Trigger**: Custom Event > `form_submit_assessment`

**Tag #5: Event - Form Submit Consultation**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `form_submit_consultation`
- **Event Parameters**:
  - `event_category`: `Form`
  - `event_label`: `Consultation Form`
  - `value`: `500`
- **Trigger**: Custom Event > `form_submit_consultation`

**Tag #6: Event - Form Submit Contact**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `form_submit_contact`
- **Event Parameters**:
  - `event_category`: `Form`
  - `event_label`: `Contact Form`
  - `value`: `50`
- **Trigger**: Custom Event > `form_submit_contact`

**Tag #7: Event - Form Submit Newsletter**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `form_submit_newsletter`
- **Event Parameters**:
  - `event_category`: `Form`
  - `event_label`: `Newsletter Signup`
  - `value`: `20`
- **Trigger**: Custom Event > `form_submit_newsletter`

#### Section View Events

**Tag #8: Event - Pricing View**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `pricing_view`
- **Event Parameters**:
  - `event_category`: `Section View`
  - `event_label`: `Pricing Section`
  - `value`: `50`
- **Trigger**: Custom Event > `pricing_view`

**Tag #9: Event - CV View**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `cv_view`
- **Event Parameters**:
  - `event_category`: `Section View`
  - `event_label`: `CV Section`
  - `value`: `30`
- **Trigger**: Custom Event > `cv_view`

#### Engagement Events

**Tag #10: Event - Blog Read (75%)**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `blog_read`
- **Event Parameters**:
  - `event_category`: `Blog`
  - `event_label`: `Blog Post`
  - `value`: `25`
- **Trigger**: Custom Event > `blog_read`

**Tag #11: Event - Blog Read Complete (100%)**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `blog_read_complete`
- **Event Parameters**:
  - `event_category`: `Blog`
  - `event_label`: `Blog Post`
  - `value`: `50`
- **Trigger**: Custom Event > `blog_read_complete`

#### Scroll Depth Events

**Tag #12-15: Scroll Depth (25%, 50%, 75%, 100%)**
- Create 4 separate tags, one for each scroll depth
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Names**: `scroll_depth_25`, `scroll_depth_50`, `scroll_depth_75`, `scroll_depth_100`
- **Event Parameters**:
  - `event_category`: `Engagement`
  - `event_label`: `Scroll Depth: XX%`
- **Triggers**: Custom Event > `scroll_depth_XX`

#### Time on Page Events

**Tag #16-18: Time on Page (30s, 60s, 120s)**
- Create 3 separate tags, one for each time milestone
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Names**: `time_on_page_30s`, `time_on_page_60s`, `time_on_page_120s`
- **Event Parameters**:
  - `event_category`: `Engagement`
  - `event_label`: `Time on Page: XXs`
- **Triggers**: Custom Event > `time_on_page_XXs`

#### Outbound Click Events

**Tag #19: Event - LinkedIn Click**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `linkedin_click`
- **Event Parameters**:
  - `event_category`: `Outbound Link`
  - `event_label`: `LinkedIn Profile`
- **Trigger**: Custom Event > `linkedin_click`

**Tag #20: Event - Email Click**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `email_click`
- **Event Parameters**:
  - `event_category`: `Outbound Link`
  - `event_label`: `Email Contact`
- **Trigger**: Custom Event > `email_click`

---

## Triggers to Create

Go to **Triggers** > **New**

All triggers are **Custom Event** type. Create one for each event name:

1. `cta_click_assessment`
2. `cta_click_consultation`
3. `form_submit_assessment`
4. `form_submit_consultation`
5. `form_submit_contact`
6. `form_submit_newsletter`
7. `pricing_view`
8. `cv_view`
9. `blog_read`
10. `blog_read_complete`
11. `scroll_depth_25`
12. `scroll_depth_50`
13. `scroll_depth_75`
14. `scroll_depth_100`
15. `time_on_page_30s`
16. `time_on_page_60s`
17. `time_on_page_120s`
18. `linkedin_click`
19. `email_click`

**Configuration for each:**
- **Trigger Type**: Custom Event
- **Event name**: (exact match from list above)
- **This trigger fires on**: All Custom Events

---

## Publish Workflow

1. **Submit** (top right corner)
2. **Version Name**: `Initial Setup - Conversion Tracking`
3. **Version Description**: `
   - GA4 configuration tag
   - 20 conversion event tags
   - 19 custom event triggers
   - Tracking: CTAs, forms, section views, engagement, outbound links
`
4. Click **Publish**

---

## Testing Checklist

After publishing, test each event:

- [ ] Open site with GTM Preview mode
- [ ] Click "Get Free Assessment" → `cta_click_assessment` fires
- [ ] Click "Schedule Consultation" → `cta_click_consultation` fires
- [ ] Scroll to pricing section → `pricing_view` fires
- [ ] Scroll to CV section → `cv_view` fires
- [ ] Scroll to 25%, 50%, 75%, 100% → scroll_depth_XX fires
- [ ] Wait 30s → `time_on_page_30s` fires
- [ ] Wait 60s → `time_on_page_60s` fires
- [ ] Wait 120s → `time_on_page_120s` fires
- [ ] Click email link → `email_click` fires
- [ ] Click LinkedIn link → `linkedin_click` fires
- [ ] Submit assessment form → `form_submit_assessment` fires
- [ ] Submit consultation form → `form_submit_consultation` fires

---

## Import/Export Container

### Export Current Configuration

1. Go to **Admin** > **Export Container**
2. Choose **Latest Version**
3. Download JSON file
4. Save as backup

### Import Configuration

1. Go to **Admin** > **Import Container**
2. Choose JSON file
3. Select workspace
4. Choose import option:
   - **Overwrite** (if starting fresh)
   - **Merge** (if adding to existing)
5. Click **Confirm**

---

## Advanced: Enhanced Ecommerce (Optional)

If you want to track "product" views (treating service tiers as products):

### Add Enhanced Ecommerce Tag

**Tag: Enhanced Ecommerce - View Item**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: GA4 Configuration
- **Event Name**: `view_item`
- **Event Parameters**:
  - `items`: (array of items)
    - `item_id`: `ai-act-assessment`
    - `item_name`: `AI Act Assessment + Automation`
    - `price`: `50000`
    - `currency`: `EUR`
    - `item_category`: `Compliance Service`
- **Trigger**: Custom Event > `pricing_view`

This allows you to track which pricing tiers users view as "products" in GA4's ecommerce reports.

---

## Conversion Value Summary

Use these values for ROI tracking:

| Conversion | Value (EUR) | Notes |
|------------|-------------|-------|
| Assessment CTA Click | 100 | Lead generation |
| Consultation CTA Click | 500 | Higher intent lead |
| Assessment Form Submit | 100 | Qualified lead |
| Consultation Form Submit | 500 | High-value lead |
| Contact Form Submit | 50 | General inquiry |
| Newsletter Signup | 20 | Email capture |
| Pricing View | 50 | Interest indicator |
| CV View | 30 | Trust building |
| Blog Read (75%) | 25 | Engaged reader |
| Blog Read Complete | 50 | Content value |

**Total potential conversion value per visitor**: Up to 1,445 EUR (if all events fire)

---

## Support

Need help with GTM setup?
- Email: hello@emanuelebuda.com
- GTM Documentation: https://support.google.com/tagmanager

---

**Last Updated**: January 2025
