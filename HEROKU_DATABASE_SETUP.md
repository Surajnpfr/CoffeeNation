# Heroku Database Setup - No External Database Needed

## 🗄️ Setting Up Database on Heroku

Since you don't have an external database, we'll use **JawsDB MySQL** - a free MySQL database addon for Heroku.

---

## 🚀 Quick Setup (2 Steps)

### Step 1: Add JawsDB MySQL Addon

**Via Heroku Dashboard (Easiest):**

1. Go to [Heroku Dashboard](https://dashboard.heroku.com)
2. Click on your app
3. Go to **"Resources"** tab
4. In the **"Add-ons"** section, search for: `JawsDB MySQL`
5. Select **"JawsDB Kitefin"** (Free tier)
6. Click **"Submit Order Form"** (it's free!)

**Via Heroku CLI:**

```bash
heroku addons:create jawsdb:kitefin
```

This creates a free MySQL database for you!

---

### Step 2: Configure Database URL

**Via Heroku Dashboard:**

1. Go to **"Settings"** → **"Reveal Config Vars"**
2. You'll see `JAWSDB_URL` automatically added (something like: `mysql://user:pass@host:port/database`)
3. Add a new config var:
   - **Key:** `DATABASE_URL`
   - **Value:** Copy the value from `JAWSDB_URL` (or use the command below)

**Via Heroku CLI:**

```bash
# This automatically copies JAWSDB_URL to DATABASE_URL
heroku config:set DATABASE_URL=$(heroku config:get JAWSDB_URL)
```

---

## ✅ Verify Database Setup

```bash
# Check your config vars
heroku config

# You should see:
# DATABASE_URL = mysql://...
# JAWSDB_URL = mysql://...
```

---

## 🗃️ Initialize Database Tables

Now initialize your database with the required tables:

```bash
heroku run npm run db:init
```

This will:
- Create all necessary tables (users, products, orders, etc.)
- Set up the database schema
- Prepare your database for use

---

## 📋 Complete Setup Checklist

- [ ] JawsDB MySQL addon added to Heroku app
- [ ] `DATABASE_URL` config var set (copied from `JAWSDB_URL`)
- [ ] Database initialized (`heroku run npm run db:init`)
- [ ] Can see tables created in database

---

## 🔍 Accessing Your Database

### Option 1: Via JawsDB Dashboard

1. Go to Heroku Dashboard → Your App → Resources
2. Click on **"JawsDB MySQL"** addon
3. Click **"Open JawsDB"** or **"Manage"**
4. You'll see database credentials and can access phpMyAdmin

### Option 2: Via Heroku CLI

```bash
# Get database URL
heroku config:get DATABASE_URL

# Connect via MySQL client (if installed)
mysql -h [host] -u [user] -p [database]
```

### Option 3: Via Database Tool

Use any MySQL client (MySQL Workbench, DBeaver, etc.) with the connection string from `DATABASE_URL`.

---

## 🎯 Next Steps After Database Setup

1. **Set other environment variables:**
   ```
   NEXTAUTH_SECRET = HEJTrQge5w5cSzFEVtHyWsU5Y1KI+QlCGJrAbCZcBkE=
   NEXTAUTH_URL = https://your-app-name.herokuapp.com
   UPLOAD_DIR = ./public/uploads
   NODE_ENV = production
   ```

2. **Create your first user:**
   - Visit: `https://your-app-name.herokuapp.com/auth/register`
   - Register an account
   - Make yourself admin (see below)

3. **Make yourself admin:**
   - Access your database (via JawsDB dashboard or CLI)
   - Run: `UPDATE users SET role = 'admin' WHERE email = 'your-email@example.com';`

---

## 💰 JawsDB Free Tier Limits

- **Storage:** 5 MB (enough for testing/small apps)
- **Connections:** 10 concurrent connections
- **Perfect for:** Development and small production apps

**If you need more:**
- Upgrade to paid JawsDB plan
- Or use external MySQL (like Hostinger)

---

## 🔄 Updating Database Connection

If you ever need to change database:

1. **Remove old addon:**
   ```bash
   heroku addons:destroy jawsdb
   ```

2. **Add new database:**
   ```bash
   heroku addons:create jawsdb:kitefin
   heroku config:set DATABASE_URL=$(heroku config:get JAWSDB_URL)
   ```

3. **Reinitialize:**
   ```bash
   heroku run npm run db:init
   ```

---

## 🐛 Troubleshooting

### "Database connection failed"
- Verify `DATABASE_URL` is set: `heroku config:get DATABASE_URL`
- Check JawsDB addon is active in Resources tab
- Restart app: `heroku restart`

### "Addon not found"
- Make sure you're on a paid Heroku plan (Eco $5/month or Basic $7/month)
- Free tier was discontinued, but JawsDB free tier still works on paid plans

### "Cannot connect to database"
- Check database credentials in JawsDB dashboard
- Verify `DATABASE_URL` format is correct
- Test connection via MySQL client

---

## 📝 Quick Command Reference

```bash
# Add database
heroku addons:create jawsdb:kitefin

# Set DATABASE_URL
heroku config:set DATABASE_URL=$(heroku config:get JAWSDB_URL)

# Initialize database
heroku run npm run db:init

# View database URL
heroku config:get DATABASE_URL

# View all config vars
heroku config

# Restart app
heroku restart
```

---

**That's it! You now have a database on Heroku without needing your own MySQL server!** 🎉

