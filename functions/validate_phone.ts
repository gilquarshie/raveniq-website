interface validation_response{
    success: boolean;
    message: string;
}

export default function validatePhone(country: string, phone: string): validation_response {
  if (!phone || phone.trim() === '') {
    return { success: false, message: 'Phone number is required' };
  }

  // Normalize input (remove spaces, dashes, parentheses)
  const normalized = phone.replace(/[\s\-()]/g, '');

  let phoneRegex: RegExp;

  switch (country.toLowerCase()) {
    case 'usa':
    case 'us':
    case 'united states':
      // USA: +1 followed by 10 digits OR just 10 digits
      phoneRegex = /^(?:\+1)?[2-9][0-9]{2}[2-9][0-9]{6}$/;
      break;

    case 'uk':
    case 'gb':
    case 'britain':
    case 'united kingdom':
      // UK: +44 followed by 10 digits OR starting with 0 and 10–11 digits
      phoneRegex = /^(?:\+44\d{10}|0\d{10,11})$/;
      break;

    case 'ghana':
    case 'gh':
      // Ghana: +233 or 0 followed by 9 digits
      // Next two digits must be one of [20, 24, 25, 27, 50, 54, 55, 57, 59]
      phoneRegex = /^(?:\+233|0)(20|24|25|27|50|54|55|57|59)\d{7}$/;
      break;

    default:
      // Fallback: generic international format (10–15 digits, optional +)
      phoneRegex = /^[+]?[0-9]{10,15}$/;
      break;
  }


  if (phoneRegex.test(normalized)) {
    return { success: true, message: 'Phone number is valid' };
  } else {
    return { success: false, message: 'Phone number is invalid for the specified country' };
  }
}