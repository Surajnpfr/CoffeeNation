# GitHub & Heroku Deployment Guide

## 🚀 Quick Setup

### Step 1: Initialize Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Coffee Nation e-commerce platform"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click **"New repository"** (or the **+** icon)
3. Fill in:
   - **Repository name**: `coffee-nation` (or your preferred name)
   - **Description**: "E-commerce platform for coffee farmers and buyers"
   - **Visibility**: Private (recommended) or Public
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

### Step 3: Connect to GitHub

```bash
# Add GitHub remote (replace with your username and repo name)
git remote add origin https://github.com/your-username/coffee-nation.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Heroku from GitHub

#### Option A: Deploy via Heroku CLI (Recommended)

```bash
# Login to Heroku
heroku login

# Create Heroku app
heroku create your-app-name

# Add database
heroku addons:create jawsdb:kitefin

# Set environment variables
heroku config:set DATABASE_URL=$(heroku config:get JAWSDB_URL)
heroku config:set NEXTAUTH_SECRET="HEJTrQge5w5cSzFEVtHyWsU5Y1KI+QlCGJrAbCZcBkE="
heroku config:set NEXTAUTH_URL="https://your-app-name.herokuapp.com"
heroku config:set UPLOAD_DIR="./public/uploads"
heroku config:set NODE_ENV="production"

# Deploy
git push heroku main

# Initialize database
heroku run npm run db:init
```

#### Option B: Deploy via GitHub Integration

1. **Connect GitHub to Heroku:**
   - Go to [Heroku Dashboard](https://dashboard.heroku.com)
   - Click your app (or create new)
   - Go to **"Deploy"** tab
   - Under **"Deployment method"**, click **"Connect to GitHub"**
   - Authorize Heroku to access GitHub
   - Search for your repository: `coffee-nation`
   - Click **"Connect"**

2. **Enable Automatic Deploys:**
   - In the **"Deploy"** tab, scroll to **"Automatic deploys"**
   - Select branch: `main`
   - Click **"Enable Automatic Deploys"**
   - (Optional) Enable "Wait for CI to pass"

3. **Manual Deploy:**
   - Scroll to **"Manual deploy"**
   - Select branch: `main`
   - Click **"Deploy Branch"**

4. **Set Environment Variables:**
   - Go to **"Settings"** tab
   - Click **"Reveal Config Vars"**
   - Add all environment variables (see HEROKU_ENV_TEMPLATE.md)

5. **Add Database:**
   - Go to **"Resources"** tab
   - Search for **"JawsDB"**
   - Click **"Add"** on `jawsdb:kitefin` (free tier)

6. **Initialize Database:**
   - Go to **"More"** → **"Run console"**
   - Run: `npm run db:init`

---

## 🔄 Updating Your App

### Via Git Push (Automatic Deploy)

```bash
# Make your changes
git add .
git commit -m "Your update message"
git push origin main
```

If you enabled automatic deploys, Heroku will automatically deploy when you push to `main`.

### Manual Deploy

```bash
# Push to GitHub
git push origin main

# Then deploy to Heroku
git push heroku main
```

---

## ✅ Deployment Checklist

- [ ] Git repository initialized
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Heroku app created
- [ ] Database addon added (JawsDB)
- [ ] Environment variables set in Heroku
- [ ] App deployed to Heroku
- [ ] Database initialized
- [ ] App accessible and working

---

## 🔍 Verify Deployment

1. **Check GitHub:**
   ```bash
   git remote -v
   ```
   Should show your GitHub repository.

2. **Check Heroku:**
   ```bash
   heroku apps
   heroku info
   ```

3. **View Logs:**
   ```bash
   heroku logs --tail
   ```

4. **Open App:**
   ```bash
   heroku open
   ```

---

## 🐛 Troubleshooting

### "Repository not found"
- Check repository name and username
- Verify you have access to the repository
- Make sure you're logged into GitHub

### "Deployment failed"
- Check Heroku logs: `heroku logs --tail`
- Verify all environment variables are set
- Check if database is initialized

### "Cannot connect to database"
- Verify `DATABASE_URL` is set correctly
- Check if JawsDB addon is provisioned
- Run `heroku config` to see all variables

---

## 📚 Additional Resources

- [Heroku Deployment Guide](./HEROKU_DEPLOYMENT_GUIDE.md)
- [Heroku Quick Start](./HEROKU_QUICK_START.md)
- [Environment Variables Template](./HEROKU_ENV_TEMPLATE.md)

---

**Your app is now on GitHub and ready for Heroku deployment!** 🚀

