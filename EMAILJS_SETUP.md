# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form functionality.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. For Gmail:
   - Click on Gmail
   - Click "Connect Account"
   - Sign in with your Gmail account
   - Allow EmailJS to access your account
5. Note your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Set up your template:

### Template Content:

**Subject Line:**
```
New Contact Form Submission from {{from_name}}
```

**Body:**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #00d9a3;">New Contact Form Submission</h2>
  
  <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>From:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Phone:</strong> {{phone}}</p>
    <p><strong>Service:</strong> {{service}}</p>
  </div>
  
  <div style="margin: 20px 0;">
    <strong>Message:</strong>
    <p style="line-height: 1.6;">{{message}}</p>
  </div>
  
  <hr style="border: 1px solid #ddd; margin: 20px 0;">
  
  <p style="color: #666; font-size: 12px;">
    This email was sent from your website contact form.
  </p>
</div>
```

### Template Variables:
Ensure these variables are used in your template:
- `{{from_name}}`
- `{{from_email}}`
- `{{phone}}`
- `{{service}}`
- `{{message}}`
- `{{to_email}}`

4. Set the "To Email" field to your email address or use `{{to_email}}` variable
5. Save the template
6. Note your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" > "General" in the dashboard
2. Find your **Public Key** (also called API Key)
3. Copy this key

## Step 5: Update Your Configuration

Open `src/config.js` and update the email section:

```javascript
email: {
  serviceId: "service_xxxxxxx",      // Your Service ID from Step 2
  templateId: "template_xxxxxxx",    // Your Template ID from Step 3
  publicKey: "xxxxxxxxxxxxxx",       // Your Public Key from Step 4
  recipientEmail: "your-email@example.com"  // Where you want to receive emails
}
```

## Step 6: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email inbox for the test message
5. Check the browser console for any errors

## Troubleshooting

### Error: "Service ID not found"
- Double-check your Service ID in EmailJS dashboard
- Make sure you copied it correctly to config.js

### Error: "Template ID not found"
- Verify your Template ID in EmailJS dashboard
- Ensure the template is saved and published

### Error: "Invalid Public Key"
- Check your Public Key in Account settings
- Make sure there are no extra spaces when copying

### Emails not arriving
- Check your spam folder
- Verify the recipient email in config.js
- Test the template in EmailJS dashboard
- Check EmailJS usage limits (free tier: 200 emails/month)

### Rate Limiting
- Free tier: 200 emails per month
- Consider upgrading if you need more
- Test emails count toward your limit

## Email Template Customization

You can customize the email template in EmailJS dashboard:

### Add Your Logo
```html
<img src="YOUR_LOGO_URL" alt="Company Logo" style="width: 150px; margin-bottom: 20px;">
```

### Change Colors
Replace `#00d9a3` with your brand color

### Add More Fields
1. Add the field to the contact form in `src/components/Contact.jsx`
2. Add the variable to EmailJS template using `{{variable_name}}`
3. Update the `templateParams` in Contact.jsx to include the new field

## Security Best Practices

1. **Never expose your Private Key** - only use the Public Key in frontend code
2. **Enable reCAPTCHA** in EmailJS settings to prevent spam
3. **Set up domain whitelist** in EmailJS to only allow requests from your domain
4. **Monitor usage** regularly in EmailJS dashboard

## Production Checklist

- [ ] Service connected and working
- [ ] Template created with all variables
- [ ] Public Key added to config.js
- [ ] Test email received successfully
- [ ] Spam folder checked
- [ ] reCAPTCHA enabled (recommended)
- [ ] Domain whitelist configured
- [ ] Usage limits understood

## Advanced Features

### Auto-Reply Email
Create a second template to send confirmation emails to users:

1. Create another template in EmailJS
2. Modify Contact.jsx to send two emails:
   - One to you (existing)
   - One to the user (new auto-reply)

### Custom Success/Error Messages
Edit `src/components/Contact.jsx` to customize messages:

```javascript
setStatus({
  submitting: false,
  message: 'Your custom success message here',
  type: 'success'
});
```

## Support Resources

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
- Community Forum: https://www.emailjs.com/docs/community/

---

Need help? Check the troubleshooting section or contact EmailJS support.
