// Validation functions (empty as per your original code)
  export const validateEmail = (email) => {
    // Add validation logic here
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
  };
