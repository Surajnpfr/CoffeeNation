# Gmail SMTP Setup Guide

## 📧 What is SMTP?

**SMTP** (Simple Mail Transfer Protocol) is the standard protocol for sending emails. Gmail provides SMTP servers that you can use to send emails from your application.

---

## 🔍 How Gmail SMTP Works

### The Process:

1. **Your App** → Connects to Gmail's SMTP server
2. **Gmail SMTP Server** → Authenticates using your Gmail credentials
3. **Gmail Server** → Sends the email on your behalf
4. **Recipient** → Receives the email (appears to come from your Gmail address)

### Gmail SMTP Settings:

```
Host: smtp.gmail.com
Port: 587 (TLS) or 465 (SSL)
Security: TLS/SSL encryption
Authentication: Required (your Gmail email + App Password)
```

---

## ⚠️ Important: You Need an App Password

**Regular Gmail password won't work!** Google requires **App Passwords** for third-party applications.

### Why App Passwords?
- More secure than your main password
- Can be revoked individually
- Works with 2FA enabled accounts

---

## 🚀 Step-by-Step Setup

### Step 1: Enable 2-Factor Authentication (Required)

1. **Go to:** https://myaccount.google.com/security
2. **Click "2-Step Verification"**
3. **Follow the setup process** (use phone, authenticator app, etc.)
4. **Complete the setup**

**Note:** App Passwords only work if 2FA is enabled!

---

### Step 2: Generate App Password

1. **Go to:** https://myaccount.google.com/apppasswords
   - Or: Google Account → Security → 2-Step Verification → App Passwords

2. **Select App:**
   - Choose "Mail" (or "Other" and type "Coffee Nation")

3. **Select Device:**
   - Choose "Other" and type "Coffee Nation App"

4. **Click "Generate"**

5. **Copy the 16-character password:**
   - It looks like: `abcd efgh ijkl mnop`
   - **Remove spaces** when using: `abcdefghijklmnop`
   - **Save it immediately** - you can't see it again!

---

### Step 3: Set Environment Variables in Heroku

**Via Heroku Dashboard:**

1. **Go to:** Heroku Dashboard → Your App → Settings
2. **Click "Reveal Config Vars"**
3. **Add these variables:**

```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = your-email@gmail.com
SMTP_PASSWORD = abcdefghijklmnop (your app password, no spaces)
SMTP_FROM = your-email@gmail.com
```

**Via Heroku CLI:**

```bash
heroku config:set SMTP_HOST="smtp.gmail.com"
heroku config:set SMTP_PORT="587"
heroku config:set SMTP_SECURE="false"
heroku config:set SMTP_USER="your-email@gmail.com"
heroku config:set SMTP_PASSWORD="abcdefghijklmnop"
heroku config:set SMTP_FROM="your-email@gmail.com"
```

**Important:**
- Replace `your-email@gmail.com` with your actual Gmail address
- Replace `abcdefghijklmnop` with your 16-character App Password (no spaces)
- `SMTP_FROM` should be the same as `SMTP_USER`

---

### Step 4: Test It

1. **Request password reset** on your app
2. **Check your email** (and spam folder)
3. **You should receive the reset email!** ✅

---

## 🔧 Configuration Details

### SMTP Settings Explained:

| Setting | Value | Explanation |
|---------|-------|-------------|
| `SMTP_HOST` | `smtp.gmail.com` | Gmail's SMTP server address |
| `SMTP_PORT` | `587` | Port for TLS encryption (recommended) |
| `SMTP_SECURE` | `false` | Use TLS (not SSL) |
| `SMTP_USER` | Your Gmail | Your Gmail email address |
| `SMTP_PASSWORD` | App Password | 16-character app password (no spaces) |
| `SMTP_FROM` | Your Gmail | Email address shown as sender |

### Alternative Port (SSL):

If port 587 doesn't work, try:
```
SMTP_PORT = 465
SMTP_SECURE = true
```

---

## 📊 How It Works in Your App

### Flow Diagram:

```
User clicks "Forgot Password"
    ↓
App generates reset token
    ↓
App calls sendEmail() function
    ↓
Nodemailer connects to smtp.gmail.com:587
    ↓
Gmail authenticates with your credentials
    ↓
Gmail sends email to user
    ↓
User receives email with reset link
```

### Code Flow:

1. **User requests password reset** → `/api/auth/forgot-password`
2. **API generates token** → Stores in database
3. **API calls `sendPasswordResetEmail()`** → From `lib/email.ts`
4. **Email utility checks for SMTP vars** → Finds `SMTP_HOST`, `SMTP_USER`, etc.
5. **Nodemailer creates connection** → Connects to Gmail SMTP
6. **Gmail authenticates** → Using your App Password
7. **Email sent** → User receives reset link

---

## ⚙️ Technical Details

### Authentication Method:

Gmail uses **OAuth2** or **App Passwords** for authentication:
- **App Passwords** (what we're using) - Simpler, works for SMTP
- **OAuth2** - More complex, better for production apps

### Encryption:

- **Port 587:** Uses **TLS** (Transport Layer Security)
- **Port 465:** Uses **SSL** (Secure Sockets Layer)
- Both encrypt the connection between your app and Gmail

### Rate Limits:

Gmail has limits:
- **Free Gmail:** 500 emails/day
- **Google Workspace:** 2,000 emails/day

---

## 🛡️ Security Best Practices

### ✅ Do:
- Use App Passwords (not your main password)
- Keep App Password secret
- Use environment variables (never hardcode)
- Enable 2FA on your Gmail account
- Revoke App Password if compromised

### ❌ Don't:
- Use your regular Gmail password
- Commit App Password to Git
- Share App Password publicly
- Use the same App Password for multiple apps

---

## 🐛 Troubleshooting

### "Invalid login credentials"
- **Check App Password:** Make sure it's correct (16 characters, no spaces)
- **Verify 2FA:** Make sure 2-Step Verification is enabled
- **Check email:** Make sure `SMTP_USER` is your full Gmail address

### "Connection timeout"
- **Check port:** Try 587 first, then 465
- **Check firewall:** Make sure Heroku can connect to Gmail
- **Try different port:** Switch between 587 and 465

### "Authentication failed"
- **Regenerate App Password:** Create a new one
- **Check 2FA:** Make sure it's enabled
- **Verify credentials:** Double-check all SMTP variables

### "Email not received"
- **Check spam folder:** Gmail might mark it as spam
- **Check sender:** Emails come from your Gmail address
- **Verify rate limit:** Make sure you haven't exceeded daily limit

---

## 📝 Quick Checklist

- [ ] 2-Step Verification enabled on Gmail
- [ ] App Password generated (16 characters)
- [ ] All SMTP variables set in Heroku:
  - [ ] `SMTP_HOST = smtp.gmail.com`
  - [ ] `SMTP_PORT = 587`
  - [ ] `SMTP_SECURE = false`
  - [ ] `SMTP_USER = your-email@gmail.com`
  - [ ] `SMTP_PASSWORD = your-app-password`
  - [ ] `SMTP_FROM = your-email@gmail.com`
- [ ] Tested password reset
- [ ] Email received successfully

---

## 🔄 Alternative: Use Resend Instead

**Gmail SMTP is good for:**
- ✅ Testing/development
- ✅ Low volume (under 500 emails/day)
- ✅ Personal projects

**Resend is better for:**
- ✅ Production apps
- ✅ Higher volume
- ✅ Better deliverability
- ✅ Professional setup

**See `EMAIL_SETUP_GUIDE.md` for Resend setup!**

---

## 💡 Pro Tips

1. **Use a dedicated Gmail account** for your app (not personal)
2. **Monitor your Gmail account** for any security alerts
3. **Set up email forwarding** if you want emails to go to another address
4. **Consider upgrading** to Google Workspace for higher limits
5. **Use Resend for production** - it's more reliable and professional

---

## 🎯 Summary

**Gmail SMTP works by:**
1. Your app connects to Gmail's SMTP server
2. Authenticates using your Gmail email + App Password
3. Gmail sends the email on your behalf
4. Recipient receives email from your Gmail address

**To set it up:**
1. Enable 2FA on Gmail
2. Generate App Password
3. Set SMTP variables in Heroku
4. Done! ✅

**The code is already implemented - just add your credentials!**

