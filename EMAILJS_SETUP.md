# EmailJS Setup Guide for Dance Queen Q

## Step 1: Get Your EmailJS Credentials

### 1.1 Get Your Public Key
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click on **"Account"** in the left sidebar
3. Copy your **"Public Key"** (starts with letters/numbers)

### 1.2 Get Your Service ID
1. In EmailJS Dashboard, go to **"Email Services"**
2. Find your Gmail service (the one you connected)
3. Copy the **"Service ID"** (usually something like `service_xxxxxxx`)

### 1.3 Create an Email Template
1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template content:

**Template Name:** `dance_queen_contact`

**Subject:** `New Contact Form Submission from {{from_name}}`

**Content:**
```
Hello Dance Queen Q Team,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your Dance Queen Q website contact form.
```

4. Save the template and copy the **"Template ID"** (usually `template_xxxxxxx`)

## Step 2: Update Your Website

### 2.1 Update script.js
Replace these placeholders in `script.js`:

1. **Line 148:** Replace `'YOUR_PUBLIC_KEY'` with your actual public key
2. **Line 171:** Replace `'YOUR_SERVICE_ID'` with your service ID  
3. **Line 171:** Replace `'YOUR_TEMPLATE_ID'` with your template ID

### 2.2 Example of what it should look like:
```javascript
// Initialize EmailJS
(function() {
    emailjs.init('your_actual_public_key_here');
})();

// In the submitForm function:
emailjs.send('service_abc123', 'template_xyz789', formData)
```

## Step 3: Test Your Setup

1. **Start your local server:**
   ```bash
   python3 -m http.server 8000
   ```

2. **Open your website:** `http://localhost:8000/contact.html`

3. **Fill out the contact form** and submit

4. **Check your email** - you should receive the message!

## Step 4: Deploy to GitHub Pages

Once testing works locally:
1. Commit your changes
2. Push to GitHub
3. Your live website will now have working contact forms!

## Troubleshooting

### If emails don't arrive:
- Check your Gmail spam folder
- Verify all IDs are correct in script.js
- Check browser console for error messages
- Make sure your Gmail service is active in EmailJS

### If you get "Service not found" error:
- Double-check your Service ID
- Make sure the service is connected and active

### If you get "Template not found" error:
- Double-check your Template ID
- Make sure the template is published (not draft)

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
