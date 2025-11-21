'use client';

import { useEffect } from 'react';
import { useConversionTracking, useOutboundLinkTracking } from '@/lib/hooks/useConversionTracking';

/**
 * Conversion Tracking Provider
 *
 * This component wraps the app and enables automatic tracking of:
 * - Scroll depth (25%, 50%, 75%, 100%)
 * - Time on page (30s, 60s, 120s)
 * - Outbound link clicks
 */
export default function ConversionTrackingProvider({ children }: { children: React.ReactNode }) {
  // Enable scroll and time tracking
  useConversionTracking({
    scrollTracking: {
      enabled: true,
      thresholds: [25, 50, 75, 100],
    },
    timeTracking: {
      enabled: true,
      milestones: [30, 60, 120],
    },
  });

  // Enable outbound link tracking
  useOutboundLinkTracking();

  return <>{children}</>;
}
