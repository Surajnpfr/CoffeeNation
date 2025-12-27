# Heroku Authentication Setup Guide

## 🔐 Setting Up Authentication on Heroku

After your app is deployed, you need to configure authentication. Here's how:

---

## ⚙️ Step 1: Set Up Database (If Not Done)

**If you don't have a database yet, set up JawsDB MySQL (free):**

1. Go to Heroku Dashboard → Your App → **"Resources"** tab
2. Search for **"JawsDB MySQL"**
3. Add **"JawsDB Kitefin"** (free tier)
4. This automatically creates `JAWSDB_URL` config var
5. Set `DATABASE_URL`:
   ```bash
   heroku config:set DATABASE_URL=$(heroku config:get JAWSDB_URL)
   ```

**See `HEROKU_DATABASE_SETUP.md` for detailed database setup instructions.**

---

## ⚙️ Step 2: Set Environment Variables

Authentication requires these environment variables in Heroku:

### Via Heroku Dashboard (Easiest):

1. Go to [Heroku Dashboard](https://dashboard.heroku.com)
2. Click on your app
3. Go to **"Settings"** tab
4. Click **"Reveal Config Vars"**
5. Add these variables:

```
NEXTAUTH_SECRET = HEJTrQge5w5cSzFEVtHyWsU5Y1KI+QlCGJrAbCZcBkE=
NEXTAUTH_URL = https://your-app-name.herokuapp.com
DATABASE_URL = (automatically set if using JawsDB, or your connection string)
UPLOAD_DIR = ./public/uploads
NODE_ENV = production
```

**Important:** Replace `your-app-name` with your actual Heroku app name!

### Via Heroku CLI:

```bash
# Set NextAuth secret (for session encryption)
heroku config:set NEXTAUTH_SECRET="HEJTrQge5w5cSzFEVtHyWsU5Y1KI+QlCGJrAbCZcBkE="

# Set your app URL (CRITICAL - must match your Heroku URL)
heroku config:set NEXTAUTH_URL="https://your-app-name.herokuapp.com"

# Set database (if using JawsDB)
heroku config:set DATABASE_URL=$(heroku config:get JAWSDB_URL)

# Or if using external MySQL
heroku config:set DATABASE_URL="mysql://u753359717_coffee:CoffeeNation11@srv1189.hstgr.io:3306/u753359717_Coffeenation"

# Other required vars
heroku config:set UPLOAD_DIR="./public/uploads"
heroku config:set NODE_ENV="production"
```

---

## 🗄️ Step 3: Initialize Database

Your database needs to be set up with the required tables:

```bash
heroku run npm run db:init
```

Or via Heroku Dashboard:
1. Go to **"More"** → **"Run console"**
2. Run: `npm run db:init`

This creates all the necessary tables (users, products, orders, etc.)

---

## 👤 Step 4: Create Your First User

### Option A: Register via Website (Recommended)

1. **Visit your app:** `https://your-app-name.herokuapp.com`
2. **Click "Sign Up"** or go to `/auth/register`
3. **Register a new account:**
   - Fill in your details
   - Choose role: **Buyer** or **Farmer**
   - Complete registration

4. **Make yourself Admin** (via database):
   ```bash
   heroku run bash
   # Then run this SQL (replace email with yours):
   mysql -h [host] -u [user] -p [database]
   UPDATE users SET role = 'admin' WHERE email = 'your-email@example.com';
   exit
   ```

### Option B: Create Admin via Database Console

If you have database access:

1. **Connect to your database** (JawsDB or external MySQL)
2. **Run this SQL:**
   ```sql
   INSERT INTO users (email, name, password, role, created_at) 
   VALUES (
     'admin@example.com',
     'Admin User',
     '$2a$10$YourHashedPasswordHere',
     'admin',
     NOW()
   );
   ```

   **Note:** You need to hash the password first. Use this:
   ```bash
   node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('your-password', 10));"
   ```

---

## ✅ Step 5: Verify Authentication Works

1. **Visit your app:** `https://your-app-name.herokuapp.com`
2. **Test registration:**
   - Go to `/auth/register`
   - Create a test account
   - Should redirect to login

3. **Test login:**
   - Go to `/auth/login`
   - Login with your credentials
   - Should redirect to dashboard based on role

4. **Test protected routes:**
   - Try accessing `/admin` (should require admin role)
   - Try accessing `/farmer` (should require farmer role)
   - Try accessing `/buyer` (should require buyer role)

---

## 🔍 Troubleshooting Authentication

### "Invalid credentials" error
- **Check database connection:** Verify `DATABASE_URL` is correct
- **Check user exists:** Run `heroku run bash` then check database
- **Check password:** Make sure password is hashed correctly

### "NEXTAUTH_URL mismatch" error
- **Verify NEXTAUTH_URL:** Must exactly match your Heroku app URL
- **Check for trailing slash:** Should be `https://app.herokuapp.com` (no trailing `/`)
- **Restart app:** `heroku restart`

### "Session not working"
- **Check NEXTAUTH_SECRET:** Must be set and not empty
- **Verify cookies:** Check browser console for cookie errors
- **Check HTTPS:** Heroku provides HTTPS automatically

### "Database connection failed"
- **Verify DATABASE_URL:** Check it's set correctly
- **Test connection:** `heroku run bash` then try connecting
- **Check database exists:** Make sure database is created

---

## 📋 Quick Checklist

- [ ] `NEXTAUTH_SECRET` is set in Heroku config vars
- [ ] `NEXTAUTH_URL` is set to your Heroku app URL (https://...)
- [ ] `DATABASE_URL` is set and working
- [ ] Database is initialized (`npm run db:init`)
- [ ] At least one user account exists
- [ ] Can access `/auth/login` page
- [ ] Can register new users
- [ ] Can login with credentials
- [ ] Sessions persist after login

---

## 🎯 Creating Admin User (Quick Method)

**After registering your first account:**

1. **Get your Heroku database connection:**
   ```bash
   heroku config:get DATABASE_URL
   ```

2. **Connect to database** (use phpMyAdmin, MySQL Workbench, or CLI)

3. **Update your user to admin:**
   ```sql
   UPDATE users SET role = 'admin' WHERE email = 'your-email@example.com';
   ```

4. **Restart Heroku app:**
   ```bash
   heroku restart
   ```

5. **Login again** - You should now have admin access!

---

## 🔐 Security Notes

1. **NEXTAUTH_SECRET:**
   - Keep it secret and secure
   - Don't share it publicly
   - Generate a new one if compromised: `openssl rand -base64 32`

2. **NEXTAUTH_URL:**
   - Must match your actual domain
   - Include `https://` (not `http://`)
   - No trailing slash

3. **Database:**
   - Use strong passwords
   - Keep `DATABASE_URL` secure
   - Never commit credentials to git

---

## 🚀 After Setup

Once authentication is working:

1. ✅ Users can register
2. ✅ Users can login
3. ✅ Sessions work correctly
4. ✅ Role-based access works
5. ✅ Protected routes are secured

**Your authentication is now fully configured!** 🎉

---

## 📞 Need Help?

- Check Heroku logs: `heroku logs --tail`
- Verify config vars: `heroku config`
- Test database: `heroku run npm run db:init`
- Restart app: `heroku restart`

