/**
 * Form Validation Utilities
 */

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface AssessmentFormData {
  name: string;
  email: string;
  company: string;
  aiSystems?: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  preferredDate?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
}

/**
 * Email validation regex
 */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Phone validation regex (international format)
 */
const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  return emailRegex.test(email.trim());
};

/**
 * Validate phone format
 */
export const validatePhone = (phone: string): boolean => {
  return phoneRegex.test(phone.trim());
};

/**
 * Validate required field
 */
export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

/**
 * Validate minimum length
 */
export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength;
};

/**
 * Validate assessment form
 */
export const validateAssessmentForm = (
  data: AssessmentFormData
): ValidationResult => {
  const errors: Record<string, string> = {};

  if (!validateRequired(data.name)) {
    errors.name = 'Name is required';
  } else if (!validateMinLength(data.name, 2)) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!validateRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (!validateRequired(data.company)) {
    errors.company = 'Company name is required';
  } else if (!validateMinLength(data.company, 2)) {
    errors.company = 'Company name must be at least 2 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Validate consultation form
 */
export const validateConsultationForm = (
  data: ConsultationFormData
): ValidationResult => {
  const errors: Record<string, string> = {};

  if (!validateRequired(data.name)) {
    errors.name = 'Name is required';
  } else if (!validateMinLength(data.name, 2)) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!validateRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (!validateRequired(data.company)) {
    errors.company = 'Company name is required';
  } else if (!validateMinLength(data.company, 2)) {
    errors.company = 'Company name must be at least 2 characters';
  }

  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = 'Invalid phone number format';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Validate contact form
 */
export const validateContactForm = (
  data: ContactFormData
): ValidationResult => {
  const errors: Record<string, string> = {};

  if (!validateRequired(data.name)) {
    errors.name = 'Name is required';
  } else if (!validateMinLength(data.name, 2)) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!validateRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (!validateRequired(data.message)) {
    errors.message = 'Message is required';
  } else if (!validateMinLength(data.message, 10)) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Validate newsletter form
 */
export const validateNewsletterForm = (
  data: NewsletterFormData
): ValidationResult => {
  const errors: Record<string, string> = {};

  if (!validateRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Invalid email format';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Sanitize form input (basic XSS prevention)
 */
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and >
    .slice(0, 1000); // Limit length
};

/**
 * Sanitize form data
 */
export const sanitizeFormData = <T extends Record<string, any>>(data: T): T => {
  const sanitized = {} as T;

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitized[key as keyof T] = sanitizeInput(value) as any;
    } else {
      sanitized[key as keyof T] = value;
    }
  }

  return sanitized;
};
