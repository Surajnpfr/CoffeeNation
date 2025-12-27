# Heroku Deployment Guide - Coffee Nation

Complete step-by-step guide to deploy your Next.js application on Heroku.

## 📋 Prerequisites

- Heroku account (free tier available)
- Heroku CLI installed on your computer
- Git installed
- Node.js 18+ installed locally
- External MySQL database (Heroku doesn't provide MySQL by default)

---

## 🚀 Quick Start (5 Steps)

1. **Install Heroku CLI** → [Download here](https://devcenter.heroku.com/articles/heroku-cli)
2. **Login to Heroku** → `heroku login`
3. **Create Heroku app** → `heroku create your-app-name`
4. **Set environment variables** → `heroku config:set KEY=value`
5. **Deploy** → `git push heroku main`

---

## 📦 Step 1: Install Heroku CLI

### Windows:
1. Download from: https://devcenter.heroku.com/articles/heroku-cli
2. Run the installer
3. Restart your terminal

### Mac:
```bash
brew tap heroku/brew && brew install heroku
```

### Linux:
```bash
curl https://cli-assets.heroku.com/install.sh | sh
```

### Verify Installation:
```bash
heroku --version
```

---

## 🔐 Step 2: Login to Heroku

1. **Create Heroku account** (if you don't have one):
   - Go to: https://signup.heroku.com
   - Sign up for free

2. **Login via CLI:**
   ```bash
   heroku login
   ```
   - This will open your browser
   - Click "Log in" in the browser
   - Return to terminal

---

## 🗄️ Step 3: Set Up Database

Heroku doesn't provide MySQL by default. You have two options:

### Option A: External MySQL Database (Recommended - No Code Changes)

**Recommended Services:**
- **JawsDB MySQL** (Free tier available) - Best for Heroku
- **ClearDB** (Free tier available)
- **PlanetScale** (Free tier available)
- **Your existing MySQL** (Hostinger, etc.)

#### Using JawsDB MySQL (Easiest):

1. **Add JawsDB addon:**
   ```bash
   heroku addons:create jawsdb:kitefin
   ```
   (Replace `your-app-name` with your actual app name)

2. **Get database URL:**
   ```bash
   heroku config:get JAWSDB_URL
   ```
   This will give you a connection string like:
   ```
   mysql://username:password@host:port/database
   ```

3. **Use DATABASE_URL:**
   - JawsDB automatically sets `JAWSDB_URL`
   - Your app can use this as `DATABASE_URL`

### Option B: Use Your Existing MySQL Database

If you already have MySQL (like from Hostinger), you can use it:

1. **Create DATABASE_URL:**
   ```
   mysql://username:password@host:port/database
   ```
   
   Example:
   ```
   mysql://u753359717_coffee:CoffeeNation11@srv1189.hstgr.io:3306/u753359717_Coffeenation
   ```

2. **Set it in Heroku:**
   ```bash
   heroku config:set DATABASE_URL="mysql://username:password@host:port/database"
   ```

---

## 📁 Step 4: Prepare Your Project

### 4.1: Create Procfile

Create a file named `Procfile` (no extension) in your project root:

```
web: node server.js
```

This tells Heroku how to start your app.

### 4.2: Update server.js for Heroku

Your `server.js` is already compatible! It uses `process.env.PORT` which Heroku provides automatically.

### 4.3: Ensure package.json has engines

Your `package.json` already has:
```json
"engines": {
  "node": ">=18.0.0",
  "npm": ">=9.0.0"
}
```
✅ This is correct!

### 4.4: Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
```

---

## ⚙️ Step 5: Create Heroku App

1. **Create the app:**
   ```bash
   heroku create your-app-name
   ```
   Replace `your-app-name` with your desired name (must be unique).
   
   Example:
   ```bash
   heroku create coffee-nation-app
   ```

2. **Verify app created:**
   ```bash
   heroku apps
   ```

---

## 🔧 Step 6: Configure Environment Variables

Set all your environment variables in Heroku:

```bash
# Database (if using external MySQL)
heroku config:set DATABASE_URL="mysql://username:password@host:port/database"

# Or if using JawsDB, it's automatically set as JAWSDB_URL
# You can use it as DATABASE_URL:
heroku config:set DATABASE_URL=$(heroku config:get JAWSDB_URL)

# NextAuth
heroku config:set NEXTAUTH_SECRET="HEJTrQge5w5cSzFEVtHyWsU5Y1KI+QlCGJrAbCZcBkE="
heroku config:set NEXTAUTH_URL="https://your-app-name.herokuapp.com"

# File Uploads
heroku config:set UPLOAD_DIR="./public/uploads"

# Node Environment
heroku config:set NODE_ENV="production"
```

### Or Set All at Once:

Create a file `heroku-env.txt` with your values, then:

```bash
# For external MySQL
heroku config:set \
  DATABASE_URL="mysql://u753359717_coffee:CoffeeNation11@srv1189.hstgr.io:3306/u753359717_Coffeenation" \
  NEXTAUTH_SECRET="HEJTrQge5w5cSzFEVtHyWsU5Y1KI+QlCGJrAbCZcBkE=" \
  NEXTAUTH_URL="https://your-app-name.herokuapp.com" \
  UPLOAD_DIR="./public/uploads" \
  NODE_ENV="production"
```

### Verify Environment Variables:

```bash
heroku config
```

---

## 🚀 Step 7: Deploy to Heroku

### 7.1: Add Heroku Remote

```bash
heroku git:remote -a your-app-name
```

### 7.2: Deploy

```bash
git push heroku main
```

Or if your default branch is `master`:
```bash
git push heroku master
```

### 7.3: Watch the Build

You'll see Heroku:
1. Detecting Node.js
2. Installing dependencies (`npm install`)
3. Building your app (`npm run build`)
4. Starting the app

---

## 🗃️ Step 8: Initialize Database

After deployment, initialize your database:

```bash
heroku run npm run db:init
```

Or run it manually via Heroku console:
```bash
heroku run bash
npm run db:init
exit
```

---

## ✅ Step 9: Open Your App

```bash
heroku open
```

Or visit: `https://your-app-name.herokuapp.com`

---

## 🔍 Step 10: View Logs

```bash
heroku logs --tail
```

This shows real-time logs from your app.

---

## 📝 Complete Deployment Checklist

- [ ] Heroku CLI installed
- [ ] Logged in to Heroku (`heroku login`)
- [ ] Database set up (JawsDB or external MySQL)
- [ ] `Procfile` created
- [ ] Git initialized
- [ ] Heroku app created (`heroku create`)
- [ ] Environment variables set (`heroku config:set`)
- [ ] App deployed (`git push heroku main`)
- [ ] Database initialized (`heroku run npm run db:init`)
- [ ] App accessible (`heroku open`)

---

## 🎯 Using Custom Domain (Optional)

1. **Add domain in Heroku:**
   ```bash
   heroku domains:add coffee.hamroniti.com
   ```

2. **Update DNS:**
   - Get Heroku DNS target: `heroku domains`
   - Add CNAME record in your domain provider:
     - Name: `coffee` (or `@` for root domain)
     - Value: `your-app-name.herokuapp.com`

3. **Update NEXTAUTH_URL:**
   ```bash
   heroku config:set NEXTAUTH_URL="https://coffee.hamroniti.com"
   ```

4. **Restart app:**
   ```bash
   heroku restart
   ```

---

## 🔄 Updating Your App

After making changes:

```bash
git add .
git commit -m "Your update message"
git push heroku main
```

Heroku will automatically rebuild and redeploy.

---

## 🐛 Troubleshooting

### "Build failed"
- Check Node.js version: `heroku config:get NODE_ENV`
- Check build logs: `heroku logs --tail`
- Verify `package.json` has correct `engines`

### "Cannot connect to database"
- Check `DATABASE_URL`: `heroku config:get DATABASE_URL`
- Verify database is accessible from Heroku
- Some MySQL hosts block external connections - use JawsDB instead

### "Application error"
- Check logs: `heroku logs --tail`
- Verify all environment variables are set: `heroku config`
- Check if database is initialized: `heroku run npm run db:init`

### "Port already in use"
- Heroku manages ports automatically
- Make sure `server.js` uses `process.env.PORT`

### "Module not found"
- Check if all dependencies are in `package.json`
- Rebuild: `heroku rebuild`

---

## 💰 Heroku Pricing

### Free Tier (Hobby - Discontinued):
- ⚠️ Heroku removed free tier in November 2022
- Need paid plan: **Eco** ($5/month) or **Basic** ($7/month)

### Eco Plan ($5/month):
- ✅ 1000 dyno hours/month
- ✅ Sleeps after 30 min inactivity
- ✅ Perfect for small projects

### Basic Plan ($7/month):
- ✅ Always-on dyno
- ✅ No sleep
- ✅ Better for production

---

## 📊 Database Options Comparison

| Service | Free Tier | MySQL | Heroku Integration |
|---------|-----------|-------|-------------------|
| **JawsDB** | ✅ Yes | ✅ Yes | ✅ Native addon |
| **ClearDB** | ✅ Yes | ✅ Yes | ✅ Native addon |
| **PlanetScale** | ✅ Yes | ✅ Yes | ⚠️ External |
| **Hostinger MySQL** | ✅ Yes | ✅ Yes | ⚠️ External |

**Recommendation:** Use **JawsDB** for easiest setup.

---

## 🔒 Security Best Practices

1. **Never commit `.env` file**
   - Already in `.gitignore` ✅

2. **Use strong NEXTAUTH_SECRET**
   - Generate new: `openssl rand -base64 32`

3. **Keep DATABASE_URL secure**
   - Only set via `heroku config:set`
   - Never log it

4. **Enable SSL**
   - Heroku provides SSL automatically ✅

---

## 📚 Useful Heroku Commands

```bash
# View app info
heroku info

# View config vars
heroku config

# Set config var
heroku config:set KEY=value

# Get config var
heroku config:get KEY

# View logs
heroku logs --tail

# Run command
heroku run command

# Restart app
heroku restart

# Scale dynos
heroku ps:scale web=1

# Open app
heroku open

# View addons
heroku addons

# Remove addon
heroku addons:destroy addon-name
```

---

## 🎉 Success!

Your app should now be live at: `https://your-app-name.herokuapp.com`

---

## 📞 Need Help?

- **Heroku Docs:** https://devcenter.heroku.com
- **Heroku Support:** https://help.heroku.com
- **JawsDB Docs:** https://devcenter.heroku.com/articles/jawsdb

---

**Happy Deploying! 🚀**

