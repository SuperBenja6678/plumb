// EmailJS Configuration
// Replace these values with your actual EmailJS credentials from https://www.emailjs.com/

export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
}

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - Customer's name
//    - {{from_phone}} - Customer's phone
//    - {{from_email}} - Customer's email
//    - {{service}} - Service requested
//    - {{message}} - Customer's message
// 4. Get your Service ID, Template ID, and Public Key
// 5. Create a .env.local file in your project root and add:
//    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
//    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
//    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key 