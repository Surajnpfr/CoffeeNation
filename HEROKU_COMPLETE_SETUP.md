# Complete Heroku Setup Guide - Step by Step

## 🎯 Overview

This guide will help you set up your Coffee Nation app on Heroku from scratch, including database setup.

---

## 📋 Prerequisites

- ✅ Heroku account (sign up at https://signup.heroku.com)
- ✅ App already deployed to Heroku (build successful)
- ✅ No external database needed - we'll use Heroku's free database!

---

## 🗄️ Step 1: Add Database (JawsDB MySQL - FREE)

### Via Heroku Dashboard:

1. **Go to Heroku Dashboard:** https://dashboard.heroku.com
2. **Click on your app** (the one you just deployed)
3. **Go to "Resources" tab**
4. **In "Add-ons" section**, type: `JawsDB MySQL`
5. **Select "JawsDB Kitefin"** (Free tier - $0/month)
6. **Click "Submit Order Form"**

✅ This creates a free MySQL database for you!

### Verify Database Added:

- Go to **"Settings"** → **"Reveal Config Vars"**
- You should see `JAWSDB_URL` automatically added
- It looks like: `mysql://username:password@host:port/database`

---

## ⚙️ Step 2: Set Environment Variables

Go to **"Settings"** → **"Reveal Config Vars"** and add these:

### Required Variables:

1. **DATABASE_URL**
   - **Value:** Copy the value from `JAWSDB_URL` (or use command below)
   - **Or via CLI:** `heroku config:set DATABASE_URL=$(heroku config:get JAWSDB_URL)`

2. **NEXTAUTH_SECRET**
   - **Value:** `HEJTrQge5w5cSzFEVtHyWsU5Y1KI+QlCGJrAbCZcBkE=`
   - This encrypts user sessions

3. **NEXTAUTH_URL**
   - **Value:** `https://your-app-name.herokuapp.com`
   - ⚠️ **CRITICAL:** Replace `your-app-name` with your actual Heroku app name!
   - Must include `https://`
   - No trailing slash

4. **UPLOAD_DIR**
   - **Value:** `./public/uploads`

5. **NODE_ENV**
   - **Value:** `production`

### Quick Copy-Paste (Via Heroku Dashboard):

```
DATABASE_URL = (copy from JAWSDB_URL)
NEXTAUTH_SECRET = HEJTrQge5w5cSzFEVtHyWsU5Y1KI+QlCGJrAbCZcBkE=
NEXTAUTH_URL = https://your-app-name.herokuapp.com
UPLOAD_DIR = ./public/uploads
NODE_ENV = production
```

---

## 🗃️ Step 3: Initialize Database

After setting environment variables, create the database tables:

### Via Heroku Dashboard:

1. Go to **"More"** (top right) → **"Run console"**
2. You'll see a prompt (might say `heroku run` or `$`)
3. **Type only:** `npm run db:init` (don't type "heroku run" - just the command)
4. Press **Enter**
5. Wait for it to complete
6. You should see: `✓ Database schema initialized successfully`

### Via Heroku CLI (if you have it):

```bash
heroku run npm run db:init
```

**This will:**
- Create all necessary tables (users, products, orders, notices, etc.)
- Set up the database schema
- Prepare your database for authentication

---

## 👤 Step 4: Create Your First User

### Register via Website:

1. **Visit your app:** `https://your-app-name.herokuapp.com`
2. **Click "Sign Up"** or go to `/auth/register`
3. **Fill in the form:**
   - Name
   - Email
   - Password (at least 6 characters)
   - Choose role: **Buyer** or **Farmer**
4. **Click "Create Account"**
5. You'll be redirected to login page

---

## 🔑 Step 5: Make Yourself Admin

After registering, you need to update your role to `admin` in the database:

### Option A: Via JawsDB Dashboard (Easiest)

1. **Go to Heroku Dashboard** → Your App → **"Resources"** tab
2. **Click on "JawsDB MySQL"** addon
3. **Click "Open JawsDB"** or **"Manage"**
4. **Login to JawsDB dashboard**
5. **Click "phpMyAdmin"** or **"Database"**
6. **Select your database**
7. **Click on "users" table**
8. **Find your user** (by email)
9. **Click "Edit"**
10. **Change "role" field** from `buyer` or `farmer` to `admin`
11. **Click "Go"** to save

### Option B: Via SQL Query

In JawsDB dashboard or phpMyAdmin, run:

```sql
UPDATE users SET role = 'admin' WHERE email = 'your-email@example.com';
```

Replace `your-email@example.com` with the email you used to register.

---

## 🔄 Step 6: Restart Your App

After making changes, restart your app:

### Via Heroku Dashboard:

1. Go to **"More"** → **"Restart all dynos"**

### Via CLI:

```bash
heroku restart
```

---

## ✅ Step 7: Test Authentication

1. **Visit your app:** `https://your-app-name.herokuapp.com`
2. **Go to login:** `/auth/login`
3. **Login with your credentials**
4. **You should be redirected** to your dashboard:
   - If admin → `/admin`
   - If farmer → `/farmer`
   - If buyer → `/buyer`

---

## 📋 Complete Checklist

- [ ] JawsDB MySQL addon added (Resources tab)
- [ ] `DATABASE_URL` config var set (copied from `JAWSDB_URL`)
- [ ] `NEXTAUTH_SECRET` config var set
- [ ] `NEXTAUTH_URL` config var set (matches your Heroku URL exactly)
- [ ] `UPLOAD_DIR` config var set
- [ ] `NODE_ENV` config var set to `production`
- [ ] Database initialized (`npm run db:init` completed successfully)
- [ ] First user registered via website
- [ ] User role updated to `admin` in database
- [ ] App restarted
- [ ] Can login successfully
- [ ] Can access admin dashboard

---

## 🎯 Quick Reference Commands

If you have Heroku CLI installed:

```bash
# Add database
heroku addons:create jawsdb:kitefin

# Set DATABASE_URL
heroku config:set DATABASE_URL=$(heroku config:get JAWSDB_URL)

# Set other variables
heroku config:set NEXTAUTH_SECRET="HEJTrQge5w5cSzFEVtHyWsU5Y1KI+QlCGJrAbCZcBkE="
heroku config:set NEXTAUTH_URL="https://your-app-name.herokuapp.com"
heroku config:set UPLOAD_DIR="./public/uploads"
heroku config:set NODE_ENV="production"

# Initialize database
heroku run npm run db:init

# Restart app
heroku restart

# View all config vars
heroku config

# View logs
heroku logs --tail
```

---

## 🐛 Troubleshooting

### "Cannot connect to database"
- ✅ Check `DATABASE_URL` is set: Go to Settings → Config Vars
- ✅ Verify JawsDB addon is active: Check Resources tab
- ✅ Restart app: More → Restart all dynos

### "NEXTAUTH_URL mismatch"
- ✅ Verify `NEXTAUTH_URL` exactly matches your Heroku app URL
- ✅ Must include `https://` (not `http://`)
- ✅ No trailing slash at the end
- ✅ Restart app after changing

### "Invalid credentials" when logging in
- ✅ Check database is initialized: Run `npm run db:init` again
- ✅ Verify user exists in database
- ✅ Check password is correct

### "Database initialization failed"
- ✅ Check `DATABASE_URL` is correct
- ✅ Verify JawsDB addon is provisioned
- ✅ Check Heroku logs: `heroku logs --tail`

---

## 📚 Additional Resources

- **Database Setup:** See `HEROKU_DATABASE_SETUP.md`
- **Authentication Setup:** See `HEROKU_AUTH_SETUP.md`
- **Quick Reference:** See `AUTH_QUICK_SETUP.md`

---

## 🎉 Success!

Once all steps are complete:
- ✅ Database is set up and initialized
- ✅ Authentication is working
- ✅ You can register and login users
- ✅ Admin access is configured
- ✅ Your app is fully functional!

**Your Coffee Nation platform is now live and ready to use!** ☕🚀

