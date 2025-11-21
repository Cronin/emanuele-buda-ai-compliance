/**
 * API Route: Assessment Form Submission
 *
 * Handles submissions for the Free AI Risk Assessment form.
 *
 * TODO: Replace email sending logic with your preferred service:
 * - Resend (https://resend.com)
 * - SendGrid (https://sendgrid.com)
 * - Mailgun (https://www.mailgun.com)
 * - AWS SES (https://aws.amazon.com/ses/)
 */

import { NextRequest, NextResponse } from 'next/server';
import { validateAssessmentForm, sanitizeFormData, type AssessmentFormData } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: AssessmentFormData = await request.json();

    // Sanitize input
    const sanitizedData = sanitizeFormData(body);

    // Validate data
    const validation = validateAssessmentForm(sanitizedData);

    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      );
    }

    // TODO: Send email notification
    // Example with Resend:
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);

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
    */

    // Log submission (for development)
    console.log('Assessment form submission:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      company: sanitizedData.company,
      timestamp: new Date().toISOString(),
    });

    // TODO: Save to database (optional)
    // Example with Prisma/Supabase/etc.

    // TODO: Add to CRM (optional)
    // Example: HubSpot, Salesforce, etc.

    // TODO: Send confirmation email to user (optional)

    return NextResponse.json(
      {
        success: true,
        message: 'Assessment request received. We will contact you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Assessment form error:', error);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS (if needed)
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
