# EmailJS Setup Instructions for John Doe Plumbing

## Overview
The contact form on the website uses EmailJS to send emails directly from the frontend. Follow these steps to configure it properly.

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Submission - John Doe Plumbing

Hello,

You have received a new contact form submission:

Name: {{from_name}}
Phone: {{from_phone}}
Email: {{from_email}}
Service Requested: {{service}}

Message:
{{message}}

---
Sent from John Doe Plumbing website contact form
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (e.g., `user_def456`)

## Step 5: Configure Environment Variables
Create a `.env.local` file in your project root with these values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## Step 6: Test the Form
1. Run your development server: `npm run dev`
2. Navigate to your website
3. Fill out the contact form
4. Check your email to confirm it's working

## Template Variables Used
The contact form sends these variables to your email template:
- `{{from_name}}` - Customer's name
- `{{from_phone}}` - Customer's phone number
- `{{from_email}}` - Customer's email address
- `{{service}}` - Selected service type
- `{{message}}` - Customer's message

## Troubleshooting
- **Form not sending**: Check browser console for errors
- **Not receiving emails**: Verify your email service is properly connected
- **Template errors**: Make sure all variable names match exactly
- **Rate limiting**: EmailJS free tier has sending limits

## Free Tier Limits
- 200 emails per month
- 50 emails per day
- Upgrade to paid plan for higher limits

For more details, visit the [EmailJS documentation](https://www.emailjs.com/docs/). 