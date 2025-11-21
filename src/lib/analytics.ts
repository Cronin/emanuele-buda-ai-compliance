/**
 * Analytics Tracking Utilities
 *
 * This module provides helper functions for tracking conversion events
 * across GA4, GTM, and other analytics platforms.
 */

import { analyticsConfig, conversionEvents, type EventParams } from '@/config/analytics';

// Extend Window interface for analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    clarity: (...args: any[]) => void;
  }
}

/**
 * Initialize dataLayer if it doesn't exist
 */
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

/**
 * Track an event to GA4 via gtag
 */
export const trackGA4Event = (eventName: string, params?: EventParams): void => {
  if (typeof window === 'undefined') return;

  if (analyticsConfig.ga4.enabled && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);

    if (analyticsConfig.debug) {
      console.log('[GA4 Event]', eventName, params);
    }
  }
};

/**
 * Track an event to GTM via dataLayer
 */
export const trackGTMEvent = (eventName: string, params?: EventParams): void => {
  if (typeof window === 'undefined') return;

  if (analyticsConfig.gtm.enabled && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });

    if (analyticsConfig.debug) {
      console.log('[GTM Event]', eventName, params);
    }
  }
};

/**
 * Track a Clarity custom event
 */
export const trackClarityEvent = (eventName: string, params?: EventParams): void => {
  if (typeof window === 'undefined') return;

  if (analyticsConfig.clarity.enabled && typeof window.clarity === 'function') {
    window.clarity('set', eventName, JSON.stringify(params));

    if (analyticsConfig.debug) {
      console.log('[Clarity Event]', eventName, params);
    }
  }
};

/**
 * Universal event tracker - sends to all enabled platforms
 */
export const trackEvent = (eventName: string, params?: EventParams): void => {
  trackGA4Event(eventName, params);
  trackGTMEvent(eventName, params);
  trackClarityEvent(eventName, params);
};

/**
 * Track CTA click - Assessment
 */
export const trackCTAClickAssessment = (params?: EventParams): void => {
  trackEvent(conversionEvents.ctaClickAssessment, {
    event_category: 'CTA',
    event_label: 'Free AI Risk Assessment',
    value: 100,
    ...params,
  });
};

/**
 * Track CTA click - Consultation
 */
export const trackCTAClickConsultation = (params?: EventParams): void => {
  trackEvent(conversionEvents.ctaClickConsultation, {
    event_category: 'CTA',
    event_label: 'Schedule 15-Min Consultation',
    value: 500,
    ...params,
  });
};

/**
 * Track form submission - Assessment
 */
export const trackFormSubmitAssessment = (params?: EventParams): void => {
  trackEvent(conversionEvents.formSubmitAssessment, {
    event_category: 'Form',
    event_label: 'Assessment Form',
    value: 100,
    ...params,
  });
};

/**
 * Track form submission - Consultation
 */
export const trackFormSubmitConsultation = (params?: EventParams): void => {
  trackEvent(conversionEvents.formSubmitConsultation, {
    event_category: 'Form',
    event_label: 'Consultation Form',
    value: 500,
    ...params,
  });
};

/**
 * Track form submission - Contact
 */
export const trackFormSubmitContact = (params?: EventParams): void => {
  trackEvent(conversionEvents.formSubmitContact, {
    event_category: 'Form',
    event_label: 'Contact Form',
    value: 50,
    ...params,
  });
};

/**
 * Track form submission - Newsletter
 */
export const trackFormSubmitNewsletter = (params?: EventParams): void => {
  trackEvent(conversionEvents.formSubmitNewsletter, {
    event_category: 'Form',
    event_label: 'Newsletter Signup',
    value: 20,
    ...params,
  });
};

/**
 * Track section view - Pricing
 */
export const trackPricingView = (): void => {
  trackEvent(conversionEvents.pricingView, {
    event_category: 'Section View',
    event_label: 'Pricing Section',
    value: 50,
  });
};

/**
 * Track section view - CV
 */
export const trackCVView = (): void => {
  trackEvent(conversionEvents.cvView, {
    event_category: 'Section View',
    event_label: 'CV Section',
    value: 30,
  });
};

/**
 * Track section view - Problem
 */
export const trackProblemView = (): void => {
  trackEvent(conversionEvents.problemView, {
    event_category: 'Section View',
    event_label: 'Problem Section',
  });
};

/**
 * Track section view - Solution
 */
export const trackSolutionView = (): void => {
  trackEvent(conversionEvents.solutionView, {
    event_category: 'Section View',
    event_label: 'Solution Section',
  });
};

/**
 * Track blog post read (75% scroll)
 */
export const trackBlogRead = (postTitle?: string): void => {
  trackEvent(conversionEvents.blogRead, {
    event_category: 'Blog',
    event_label: postTitle || 'Blog Post',
    value: 25,
  });
};

/**
 * Track blog post complete (100% scroll)
 */
export const trackBlogReadComplete = (postTitle?: string): void => {
  trackEvent(conversionEvents.blogReadComplete, {
    event_category: 'Blog',
    event_label: postTitle || 'Blog Post',
    value: 50,
  });
};

/**
 * Track outbound link click - LinkedIn
 */
export const trackLinkedInClick = (): void => {
  trackEvent(conversionEvents.linkedinClick, {
    event_category: 'Outbound Link',
    event_label: 'LinkedIn Profile',
  });
};

/**
 * Track outbound link click - Email
 */
export const trackEmailClick = (): void => {
  trackEvent(conversionEvents.emailClick, {
    event_category: 'Outbound Link',
    event_label: 'Email Contact',
  });
};

/**
 * Track time on page milestones
 */
export const trackTimeOnPage = (seconds: 30 | 60 | 120): void => {
  const eventMap = {
    30: conversionEvents.timeOnPage30s,
    60: conversionEvents.timeOnPage60s,
    120: conversionEvents.timeOnPage120s,
  };

  trackEvent(eventMap[seconds], {
    event_category: 'Engagement',
    event_label: `Time on Page: ${seconds}s`,
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (percentage: 25 | 50 | 75 | 100): void => {
  const eventMap = {
    25: conversionEvents.scrollDepth25,
    50: conversionEvents.scrollDepth50,
    75: conversionEvents.scrollDepth75,
    100: conversionEvents.scrollDepth100,
  };

  trackEvent(eventMap[percentage], {
    event_category: 'Engagement',
    event_label: `Scroll Depth: ${percentage}%`,
  });
};

/**
 * Track page view (for SPAs)
 */
export const trackPageView = (url?: string): void => {
  if (typeof window === 'undefined') return;

  const page_path = url || window.location.pathname;

  if (analyticsConfig.ga4.enabled && typeof window.gtag === 'function') {
    window.gtag('config', analyticsConfig.ga4.measurementId, {
      page_path,
    });
  }

  if (analyticsConfig.gtm.enabled && window.dataLayer) {
    window.dataLayer.push({
      event: 'pageview',
      page_path,
    });
  }

  if (analyticsConfig.debug) {
    console.log('[Page View]', page_path);
  }
};

/**
 * Track custom conversion with custom parameters
 */
export const trackCustomConversion = (
  conversionName: string,
  params?: EventParams
): void => {
  trackEvent(conversionName, {
    event_category: 'Custom Conversion',
    ...params,
  });
};
