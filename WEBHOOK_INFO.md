# Contact Form - Make.com Webhook Integration

## Overview
The contact form on the John Doe Plumbing website sends form submissions directly to a Make.com webhook for processing.

## Webhook URL
```
https://hook.eu2.make.com/r4q7bkwfcpb5zxpql3n3pjt699gqptkw
```

## Data Structure
The form sends the following JSON data to the webhook:

```json
{
  "name": "Customer Name",
  "phone": "Customer Phone Number",
  "email": "customer@example.com",
  "service": "Selected Service Type",
  "message": "Customer's message",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "source": "John Doe Plumbing Website"
}
```

## Form Fields
- **name** (required) - Customer's full name
- **phone** (required) - Customer's phone number
- **email** (optional) - Customer's email address
- **service** (optional) - Selected service from dropdown
- **message** (required) - Customer's message/description

## Technical Details
- Method: POST
- Content-Type: application/json
- The form includes client-side validation
- Success/error states are shown to the user
- Form is reset after successful submission

## Make.com Integration
The webhook can be used in Make.com scenarios to:
- Send email notifications
- Add leads to CRM systems
- Send SMS notifications
- Log data to spreadsheets or databases
- Trigger automated follow-up workflows

## Error Handling
If the webhook fails to receive the data, the user will see an error message prompting them to try again or call directly. 