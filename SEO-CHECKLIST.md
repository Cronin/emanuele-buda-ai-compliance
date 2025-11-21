# SEO Post-Deployment Checklist

## Immediate Actions (Before Going Live)

### 1. Update Site Configuration
**File:** `src/config/site.ts`

- [ ] Replace `emanuelebuda.com` with actual domain
- [ ] Update email: `hello@emanuelebuda.com`
- [ ] Update phone: `+39 XXX XXX XXXX`
- [ ] Update LinkedIn URL: `https://linkedin.com/in/emanuelebuda`
- [ ] Verify Twitter handle: `@emanuelebuda`
- [ ] Update location details if needed

### 2. Create Required Images
**Directory:** `public/`

- [ ] Create `og-image.jpg` (1200x630px)
  - Professional design
  - Include branding
  - Text: "AI Act Compliance in 30 Days"

- [ ] Create `logo.png` (512x512px)
  - High-quality logo
  - Transparent background
  - For schema markup

- [ ] Create `emanuele-buda-photo.jpg` (800x800px)
  - Professional headshot
  - Good lighting
  - For Person schema

### 3. Google Search Console Setup
**URL:** https://search.google.com/search-console

- [ ] Add property: your-actual-domain.com
- [ ] Get verification code
- [ ] Update verification code in `src/app/layout.tsx` (line 55-57)
- [ ] Rebuild and deploy
- [ ] Complete verification
- [ ] Submit sitemap: https://your-domain.com/sitemap.xml

---

## Week 1 Actions

### 4. Verify Technical SEO
- [ ] Test schema validation: https://validator.schema.org
  - [ ] Homepage schema (Organization, Service, Person)
  - [ ] Blog post schema (BlogPosting, Breadcrumb)

- [ ] Verify sitemap: https://your-domain.com/sitemap.xml
- [ ] Verify robots.txt: https://your-domain.com/robots.txt

- [ ] Check canonical URLs:
  ```bash
  curl -s https://your-domain.com/ | grep canonical
  curl -s https://your-domain.com/blog | grep canonical
  ```

### 5. Performance Testing
- [ ] Run Lighthouse audit (target 90+ for all metrics)
- [ ] Test Core Web Vitals
- [ ] Check mobile responsiveness
- [ ] Verify page load speed (target: < 3 seconds)

### 6. Social Media Testing
- [ ] Test Facebook sharing: https://developers.facebook.com/tools/debug/
- [ ] Test Twitter Card: https://cards-dev.twitter.com/validator
- [ ] Test LinkedIn preview
- [ ] Verify OpenGraph image displays correctly

---

## Week 2-4 Actions

### 7. Content Optimization
- [ ] Write 4 more blog posts (target: 1 per week)
  - [ ] "5 Common AI Act Compliance Mistakes"
  - [ ] "High-Risk AI Systems: Complete Checklist"
  - [ ] "AI Act vs GDPR: Key Differences"
  - [ ] "Case Study: AI Act Compliance in 30 Days"

- [ ] Update sitemap.xml with new blog posts
- [ ] Request indexing via Search Console

### 8. Link Building
- [ ] Create LinkedIn company page
- [ ] Publish 2 LinkedIn articles linking to website
- [ ] Submit to relevant directories:
  - [ ] Clutch.co
  - [ ] GoodFirms
  - [ ] Compliance tool directories
- [ ] Reach out to AI/compliance blogs for guest posting

### 9. Monitoring Setup
- [ ] Set up Google Analytics 4
- [ ] Configure Microsoft Clarity
- [ ] Create weekly Search Console review routine
- [ ] Track keyword rankings (Ahrefs/SEMrush)

---

## Monthly Actions

### 10. Content Audit
- [ ] Review page performance in Analytics
- [ ] Update low-performing content
- [ ] Add internal links to new blog posts
- [ ] Update dates on evergreen content

### 11. Technical Maintenance
- [ ] Check for broken links
- [ ] Verify all images have alt text
- [ ] Review Core Web Vitals
- [ ] Update schema markup if business info changes

### 12. Competitive Analysis
- [ ] Research competitor keywords
- [ ] Analyze competitor backlinks
- [ ] Identify content gaps
- [ ] Update keyword strategy

---

## Quick Verification Commands

### Test Local Build
```bash
npm run build
npm run start
```

### Verify SEO Tags
```bash
# Homepage canonical
curl -s http://localhost:3000/ | grep canonical

# Meta tags
curl -s http://localhost:3000/ | grep "og:"
curl -s http://localhost:3000/ | grep "twitter:"

# Schema markup
curl -s http://localhost:3000/ | grep "schema.org"

# Sitemap
curl -s http://localhost:3000/sitemap.xml

# Robots
curl -s http://localhost:3000/robots.txt
```

---

## Common Issues & Fixes

### Issue: Schema validation errors
**Fix:** Check JSON-LD syntax in `src/app/page.tsx` and `src/components/BlogPostSchema.tsx`

### Issue: Canonical tags not showing
**Fix:** Verify `metadataBase` is set in root layout and page-specific canonicals are correct

### Issue: OG images not displaying
**Fix:** Ensure images are in `public/` directory and URLs are absolute (https://)

### Issue: Sitemap not accessible
**Fix:** Verify `public/sitemap.xml` exists and is valid XML

### Issue: Low Lighthouse score
**Fix:** Check next.config.js optimizations, compress images, enable caching

---

## Success Metrics Tracking

### Weekly
- [ ] Search Console impressions
- [ ] Search Console clicks
- [ ] Average position for target keywords
- [ ] Indexing status (new pages)

### Monthly
- [ ] Organic traffic growth
- [ ] Keyword ranking improvements
- [ ] Backlink growth
- [ ] Conversion rate from organic

### Quarterly
- [ ] Overall SEO performance vs competitors
- [ ] Content performance (top pages)
- [ ] Technical SEO health
- [ ] ROI from SEO efforts

---

## Priority Order

1. **Critical (Before Launch):**
   - Update site config (domain, email, phone)
   - Create OG image
   - Set up Google Search Console

2. **High Priority (Week 1):**
   - Verify technical SEO
   - Test social sharing
   - Run performance audit

3. **Medium Priority (Week 2-4):**
   - Create 4 blog posts
   - Build initial backlinks
   - Set up analytics

4. **Ongoing:**
   - Monthly content audits
   - Weekly monitoring
   - Continuous optimization

---

**Last Updated:** November 22, 2025
**Status:** Ready for deployment

---

For detailed information, see: [SEO-OPTIMIZATION-SUMMARY.md](./SEO-OPTIMIZATION-SUMMARY.md)
