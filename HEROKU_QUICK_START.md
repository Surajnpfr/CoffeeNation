# Heroku Quick Start Guide

## 🚀 Deploy in 5 Minutes

### Prerequisites
- Heroku account (sign up at https://signup.heroku.com)
- Heroku CLI installed
- Git installed

---

## Step 1: Install & Login (2 minutes)

```bash
# Install Heroku CLI (if not installed)
# Windows: Download from https://devcenter.heroku.com/articles/heroku-cli
# Mac: brew install heroku
# Linux: curl https://cli-assets.heroku.com/install.sh | sh

# Login
heroku login
```

---

## Step 2: Setup Database (1 minute)

**Option A: JawsDB (Easiest)**
```bash
heroku addons:create jawsdb:kitefin
heroku config:set DATABASE_URL=$(heroku config:get JAWSDB_URL)
```

**Option B: Use Your MySQL**
```bash
heroku config:set DATABASE_URL="mysql://user:pass@host:port/db"
```

---

## Step 3: Create App & Set Config (1 minute)

```bash
# Create app
heroku create your-app-name

# Set environment variables
heroku config:set \
  NEXTAUTH_SECRET="HEJTrQge5w5cSzFEVtHyWsU5Y1KI+QlCGJrAbCZcBkE=" \
  NEXTAUTH_URL="https://your-app-name.herokuapp.com" \
  UPLOAD_DIR="./public/uploads" \
  NODE_ENV="production"
```

---

## Step 4: Deploy (1 minute)

```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Initial commit"

# Deploy
git push heroku main
```

---

## Step 5: Initialize Database

```bash
heroku run npm run db:init
```

---

## ✅ Done!

```bash
heroku open
```

Your app is live! 🎉

---

## 🔄 Update App Later

```bash
git add .
git commit -m "Update message"
git push heroku main
```

---

## 📝 Notes

- **Procfile** is already created ✅
- **server.js** is Heroku-compatible ✅
- **package.json** has correct engines ✅

---

**Total Time: ~5 minutes** ⏱️

