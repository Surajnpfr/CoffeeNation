# Email Setup Guide for Password Reset

## 📧 Email Service Options

Supabase is **not** typically used for email sending. Here are better alternatives:

---

## ✅ Option 1: Resend (Recommended - Easiest)

**Why Resend?**
- ✅ Modern API, easy to use
- ✅ Free tier: 3,000 emails/month
- ✅ Great deliverability
- ✅ Simple setup

### Setup Steps:

1. **Sign up for Resend:**
   - Go to: https://resend.com
   - Create a free account
   - Verify your email

2. **Get API Key:**
   - Go to: https://resend.com/api-keys
   - Click "Create API Key"
   - Copy the API key

3. **Add Domain (Optional but Recommended):**
   - Go to: https://resend.com/domains
   - Add your domain (e.g., `coffeenation.com`)
   - Verify DNS records
   - Or use `onboarding@resend.dev` for testing

4. **Set Environment Variables in Heroku:**
   ```
   RESEND_API_KEY = re_xxxxxxxxxxxxx
   RESEND_FROM_EMAIL = noreply@yourdomain.com (or onboarding@resend.dev for testing)
   ```

5. **Install Resend Package:**
   ```bash
   npm install resend
   ```

---

## ✅ Option 2: Nodemailer with SMTP (Gmail, SendGrid, etc.)

**Why Nodemailer?**
- ✅ Works with any SMTP server
- ✅ Free with Gmail (limited)
- ✅ Works with SendGrid, Mailgun, etc.

### Setup with Gmail:

1. **Enable App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Generate an app password
   - Copy the password

2. **Set Environment Variables in Heroku:**
   ```
   SMTP_HOST = smtp.gmail.com
   SMTP_PORT = 587
   SMTP_SECURE = false
   SMTP_USER = your-email@gmail.com
   SMTP_PASSWORD = your-app-password
   SMTP_FROM = your-email@gmail.com
   ```

3. **Install Nodemailer:**
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

### Setup with SendGrid:

1. **Sign up:** https://sendgrid.com
2. **Get API Key** from SendGrid dashboard
3. **Set Environment Variables:**
   ```
   SMTP_HOST = smtp.sendgrid.net
   SMTP_PORT = 587
   SMTP_SECURE = false
   SMTP_USER = apikey
   SMTP_PASSWORD = your-sendgrid-api-key
   SMTP_FROM = noreply@yourdomain.com
   ```

---

## ✅ Option 3: Other Services

- **Mailgun:** https://www.mailgun.com (10,000 emails/month free)
- **Postmark:** https://postmarkapp.com (100 emails/month free)
- **AWS SES:** https://aws.amazon.com/ses/ (very cheap, requires AWS account)

---

## 🚀 Quick Setup (Resend - Recommended)

### Step 1: Install Package

```bash
npm install resend
```

### Step 2: Get API Key

1. Sign up: https://resend.com
2. Get API key from dashboard
3. Copy it

### Step 3: Set in Heroku

**Via Dashboard:**
1. Go to: Heroku Dashboard → Your App → Settings
2. Click "Reveal Config Vars"
3. Add:
   - Key: `RESEND_API_KEY`
   - Value: `re_xxxxxxxxxxxxx` (your API key)

**Via CLI:**
```bash
heroku config:set RESEND_API_KEY="re_xxxxxxxxxxxxx"
heroku config:set RESEND_FROM_EMAIL="noreply@yourdomain.com"
```

### Step 4: Test

1. Request password reset
2. Check email inbox
3. Click reset link
4. Set new password

---

## 🔧 Environment Variables Summary

### For Resend:
```
RESEND_API_KEY = re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL = noreply@yourdomain.com
```

### For Nodemailer/SMTP:
```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = your-email@gmail.com
SMTP_PASSWORD = your-password
SMTP_FROM = your-email@gmail.com
```

---

## 📝 Code Already Implemented

The email sending code is already in:
- `lib/email.ts` - Email utility functions
- `app/api/auth/forgot-password/route.ts` - Uses email utility

**You just need to:**
1. Install the package (Resend or Nodemailer)
2. Set environment variables
3. Done! ✅

---

## 🧪 Testing

### Development Mode:
- Emails are logged to console
- Reset URL is shown on the page

### Production Mode:
- Emails are sent via configured service
- Reset URL is only in email

---

## ❓ Troubleshooting

### "No email service configured"
- Make sure you set `RESEND_API_KEY` or SMTP variables
- Check environment variables in Heroku

### "Email not received"
- Check spam folder
- Verify API key is correct
- Check Resend/SMTP dashboard for errors
- Verify `RESEND_FROM_EMAIL` or `SMTP_FROM` is set

### "Resend API error"
- Verify API key is correct
- Check Resend dashboard for account status
- Make sure domain is verified (if using custom domain)

---

## 🎯 Recommended: Use Resend

**Easiest setup:**
1. Sign up: https://resend.com
2. Get API key
3. Set `RESEND_API_KEY` in Heroku
4. Done!

**Free tier:** 3,000 emails/month (plenty for most apps)

---

**The code is ready - just add your email service credentials!** 📧

