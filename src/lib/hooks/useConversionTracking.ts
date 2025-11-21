/**
 * useConversionTracking Hook
 *
 * React hook for tracking conversion events, scroll depth, time on page,
 * and section visibility.
 */

import { useEffect, useRef, useCallback } from 'react';
import {
  trackScrollDepth,
  trackTimeOnPage,
  trackEvent,
} from '@/lib/analytics';

interface UseScrollTrackingOptions {
  enabled?: boolean;
  thresholds?: number[]; // e.g., [25, 50, 75, 100]
}

interface UseTimeTrackingOptions {
  enabled?: boolean;
  milestones?: number[]; // e.g., [30, 60, 120] in seconds
}

interface UseViewportTrackingOptions {
  enabled?: boolean;
  threshold?: number; // 0-1, e.g., 0.5 = 50% visible
  trackOnce?: boolean; // Only track first time element enters viewport
}

/**
 * Hook for tracking scroll depth
 */
export const useScrollTracking = (options: UseScrollTrackingOptions = {}) => {
  const { enabled = true, thresholds = [25, 50, 75, 100] } = options;
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      thresholds.forEach((threshold) => {
        if (
          scrollPercent >= threshold &&
          !trackedDepths.current.has(threshold)
        ) {
          trackedDepths.current.add(threshold);
          trackScrollDepth(threshold as 25 | 50 | 75 | 100);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enabled, thresholds]);
};

/**
 * Hook for tracking time on page
 */
export const useTimeTracking = (options: UseTimeTrackingOptions = {}) => {
  const { enabled = true, milestones = [30, 60, 120] } = options;
  const startTime = useRef<number>(Date.now());
  const trackedMilestones = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!enabled) return;

    const checkMilestones = () => {
      const elapsedSeconds = Math.floor((Date.now() - startTime.current) / 1000);

      milestones.forEach((milestone) => {
        if (
          elapsedSeconds >= milestone &&
          !trackedMilestones.current.has(milestone)
        ) {
          trackedMilestones.current.add(milestone);
          trackTimeOnPage(milestone as 30 | 60 | 120);
        }
      });
    };

    const interval = setInterval(checkMilestones, 5000); // Check every 5 seconds
    return () => clearInterval(interval);
  }, [enabled, milestones]);
};

/**
 * Hook for tracking element visibility in viewport
 */
export const useViewportTracking = (
  eventName: string,
  options: UseViewportTrackingOptions = {}
) => {
  const {
    enabled = true,
    threshold = 0.5,
    trackOnce = true,
  } = options;

  const elementRef = useRef<HTMLElement | null>(null);
  const hasTracked = useRef(false);

  const trackVisibility = useCallback(() => {
    if (!enabled || (trackOnce && hasTracked.current)) return;

    trackEvent(eventName, {
      event_category: 'Section View',
      event_label: eventName,
    });
    hasTracked.current = true;
  }, [eventName, enabled, trackOnce]);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined' || !elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackVisibility();
          }
        });
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [enabled, threshold, trackVisibility]);

  return elementRef;
};

/**
 * Combined hook for all conversion tracking
 */
export const useConversionTracking = (options: {
  scrollTracking?: UseScrollTrackingOptions;
  timeTracking?: UseTimeTrackingOptions;
} = {}) => {
  useScrollTracking(options.scrollTracking);
  useTimeTracking(options.timeTracking);
};

/**
 * Hook for tracking blog post reading progress
 */
export const useBlogReadTracking = (postTitle: string) => {
  const has75Tracked = useRef(false);
  const has100Tracked = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track 75% scroll (engaged reader)
      if (scrollPercent >= 75 && !has75Tracked.current) {
        has75Tracked.current = true;
        trackEvent('blog_read', {
          event_category: 'Blog',
          event_label: postTitle,
          value: 25,
        });
      }

      // Track 100% scroll (completed read)
      if (scrollPercent >= 100 && !has100Tracked.current) {
        has100Tracked.current = true;
        trackEvent('blog_read_complete', {
          event_category: 'Blog',
          event_label: postTitle,
          value: 50,
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [postTitle]);
};

/**
 * Hook for tracking outbound link clicks
 */
export const useOutboundLinkTracking = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href) {
        const url = new URL(link.href, window.location.href);

        // Check if it's an outbound link
        if (url.hostname !== window.location.hostname) {
          trackEvent('outbound_click', {
            event_category: 'Outbound Link',
            event_label: url.hostname,
            outbound_url: url.href,
          });
        }

        // Check if it's a mailto link
        if (link.href.startsWith('mailto:')) {
          trackEvent('email_click', {
            event_category: 'Contact',
            event_label: 'Email Click',
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};
