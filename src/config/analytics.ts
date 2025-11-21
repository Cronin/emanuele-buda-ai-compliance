/**
 * Analytics Configuration
 *
 * This file contains all analytics and tracking configuration.
 * Replace placeholder IDs with your actual IDs before deployment.
 *
 * Setup Instructions:
 * 1. GA4: Replace PLACEHOLDER_GA4_MEASUREMENT_ID with your GA4 measurement ID (G-XXXXXXXXXX)
 * 2. GTM: Replace PLACEHOLDER_GTM_CONTAINER_ID with your GTM container ID (GTM-XXXXXXX)
 * 3. Search Console: Add your Google Search Console verification code in layout.tsx metadata
 */

export const analyticsConfig = {
  // Google Analytics 4
  ga4: {
    measurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || 'PLACEHOLDER_GA4_MEASUREMENT_ID',
    enabled: process.env.NEXT_PUBLIC_GA4_ENABLED !== 'false', // Enable by default
  },

  // Google Tag Manager
  gtm: {
    containerId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID || 'PLACEHOLDER_GTM_CONTAINER_ID',
    enabled: process.env.NEXT_PUBLIC_GTM_ENABLED !== 'false', // Enable by default
  },

  // Microsoft Clarity (already configured)
  clarity: {
    projectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'PLACEHOLDER_CLARITY_ID',
    enabled: process.env.NEXT_PUBLIC_CLARITY_ENABLED !== 'false',
  },

  // Debug mode (enables console logging of events)
  debug: process.env.NODE_ENV === 'development',
};

/**
 * Conversion Event Names
 * These events should be configured in GTM as triggers
 */
export const conversionEvents = {
  // Primary CTA conversions
  ctaClickAssessment: 'cta_click_assessment',
  ctaClickConsultation: 'cta_click_consultation',

  // Form submissions
  formSubmitAssessment: 'form_submit_assessment',
  formSubmitConsultation: 'form_submit_consultation',
  formSubmitContact: 'form_submit_contact',
  formSubmitNewsletter: 'form_submit_newsletter',

  // Section views (viewport triggers)
  pricingView: 'pricing_view',
  cvView: 'cv_view',
  problemView: 'problem_view',
  solutionView: 'solution_view',

  // Engagement events
  blogRead: 'blog_read', // Triggered at 75% scroll
  blogReadComplete: 'blog_read_complete', // Triggered at 100% scroll

  // Outbound links
  linkedinClick: 'linkedin_click',
  emailClick: 'email_click',

  // Time on page milestones
  timeOnPage30s: 'time_on_page_30s',
  timeOnPage60s: 'time_on_page_60s',
  timeOnPage120s: 'time_on_page_120s',

  // Scroll depth
  scrollDepth25: 'scroll_depth_25',
  scrollDepth50: 'scroll_depth_50',
  scrollDepth75: 'scroll_depth_75',
  scrollDepth100: 'scroll_depth_100',
} as const;

/**
 * Event parameters interface
 */
export interface EventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Conversion goals and their values (for reporting)
 */
export const conversionGoals = {
  assessment: {
    name: 'Free AI Risk Assessment',
    value: 100, // Lead value in euros
    category: 'Lead Generation',
  },
  consultation: {
    name: 'Schedule 15-Min Consultation',
    value: 500, // Lead value in euros
    category: 'Lead Generation',
  },
  newsletter: {
    name: 'Newsletter Signup',
    value: 20, // Lead value in euros
    category: 'Engagement',
  },
  pricingView: {
    name: 'Pricing View',
    value: 50, // Interest indicator value
    category: 'Interest',
  },
} as const;
