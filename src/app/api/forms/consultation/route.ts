/**
 * API Route: Consultation Form Submission
 *
 * Handles submissions for the 15-Min Consultation booking form.
 */

import { NextRequest, NextResponse } from 'next/server';
import { validateConsultationForm, sanitizeFormData, type ConsultationFormData } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ConsultationFormData = await request.json();

    // Sanitize input
    const sanitizedData = sanitizeFormData(body);

    // Validate data
    const validation = validateConsultationForm(sanitizedData);

    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      );
    }

    // TODO: Send email notification
    // See assessment/route.ts for email service examples

    // Log submission (for development)
    console.log('Consultation form submission:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      company: sanitizedData.company,
      phone: sanitizedData.phone,
      preferredDate: sanitizedData.preferredDate,
      timestamp: new Date().toISOString(),
    });

    // TODO: Save to database (optional)

    // TODO: Add to calendar system (optional)
    // Example: Calendly API, Google Calendar API, etc.

    // TODO: Send confirmation email to user with booking link

    return NextResponse.json(
      {
        success: true,
        message: 'Consultation request received. We will contact you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Consultation form error:', error);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
