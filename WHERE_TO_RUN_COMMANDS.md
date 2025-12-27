# Where to Run Commands on Heroku

## 🎯 Quick Answer

You have **3 options** to run commands on Heroku:

1. **Heroku Dashboard** (Easiest - No installation needed)
2. **Heroku CLI** (If you install Heroku CLI on your computer)
3. **Heroku Terminal** (Web-based terminal in dashboard)

---

## 📊 Option 1: Heroku Dashboard (RECOMMENDED - Easiest)

### For Setting Environment Variables:

1. **Go to:** https://dashboard.heroku.com
2. **Click on your app**
3. **Go to "Settings" tab**
4. **Click "Reveal Config Vars"**
5. **Click "Edit"** or **"Add"** to add variables
6. **Type Key and Value**
7. **Click "Save"**

✅ **No commands needed - just click and type!**

### For Running Commands (like `npm run db:init`):

1. **Go to:** https://dashboard.heroku.com
2. **Click on your app**
3. **Click "More"** (top right corner)
4. **Click "Run console"**
5. **Type your command:** `npm run db:init`
6. **Click "Run"**
7. **See the output** in the console

✅ **This is where you run `npm run db:init`!**

---

## 💻 Option 2: Heroku CLI (If Installed)

### Install Heroku CLI First:

**Windows:**
- Download: https://devcenter.heroku.com/articles/heroku-cli
- Run the installer
- Restart your terminal

**Mac:**
```bash
brew install heroku
```

**Linux:**
```bash
curl https://cli-assets.heroku.com/install.sh | sh
```

### Then Run Commands:

Open **PowerShell** or **Command Prompt** on your computer and run:

```bash
# Login first
heroku login

# Set environment variables
heroku config:set DATABASE_URL=$(heroku config:get JAWSDB_URL)
heroku config:set NEXTAUTH_SECRET="HEJTrQge5w5cSzFEVtHyWsU5Y1KI+QlCGJrAbCZcBkE="
heroku config:set NEXTAUTH_URL="https://your-app-name.herokuapp.com"

# Run database initialization
heroku run npm run db:init

# Restart app
heroku restart
```

---

## 🌐 Option 3: Heroku Terminal (Web Terminal)

1. **Go to:** https://dashboard.heroku.com
2. **Click on your app**
3. **Go to "More"** → **"Terminal"** (if available)
4. **Type commands** directly in the web terminal

---

## 📋 Step-by-Step: Where to Do Each Task

### ✅ Task 1: Add Database (JawsDB)
**Where:** Heroku Dashboard → Resources tab
**Action:** Click "Add-ons" → Search "JawsDB" → Add

### ✅ Task 2: Set Environment Variables
**Where:** Heroku Dashboard → Settings → Config Vars
**Action:** Click "Reveal Config Vars" → Add each variable

### ✅ Task 3: Initialize Database
**Where:** Heroku Dashboard → More → Run console
**Action:** Type `npm run db:init` → Click "Run"

### ✅ Task 4: Restart App
**Where:** Heroku Dashboard → More → Restart all dynos
**Action:** Click "Restart all dynos"

### ✅ Task 5: View Logs
**Where:** Heroku Dashboard → More → View logs
**Action:** See real-time logs

---

## 🎯 Recommended Approach

**For beginners:** Use **Heroku Dashboard** (Option 1)
- ✅ No installation needed
- ✅ Visual interface
- ✅ Easy to understand
- ✅ All features available

**For advanced users:** Use **Heroku CLI** (Option 2)
- ✅ Faster for multiple commands
- ✅ Can automate tasks
- ✅ Better for scripting

---

## 🔍 Finding Your App Dashboard

1. **Go to:** https://dashboard.heroku.com
2. **Login** with your Heroku account
3. **You'll see your apps** listed
4. **Click on your app name** (e.g., `coffee-nation-app`)

---

## 📸 Visual Guide Locations

### To Add Database:
```
Dashboard → Your App → Resources Tab → Add-ons Section
```

### To Set Environment Variables:
```
Dashboard → Your App → Settings Tab → Config Vars Section
```

### To Run Commands:
```
Dashboard → Your App → More (top right) → Run console
```

### To Restart App:
```
Dashboard → Your App → More (top right) → Restart all dynos
```

---

## ❓ Common Questions

**Q: Do I need to install anything?**
A: No! You can do everything via Heroku Dashboard (web interface).

**Q: Where do I type `npm run db:init`?**
A: Heroku Dashboard → Your App → More → Run console

**Q: Can I use my computer's terminal?**
A: Only if you install Heroku CLI. Otherwise, use the Dashboard.

**Q: Where is the "Run console" button?**
A: Top right corner → "More" dropdown → "Run console"

---

## 🚀 Quick Start (Using Dashboard)

1. **Open:** https://dashboard.heroku.com
2. **Click your app**
3. **Resources tab** → Add JawsDB
4. **Settings tab** → Add config vars
5. **More** → Run console → Type `npm run db:init`
6. **More** → Restart all dynos

**That's it! No command line needed!** 🎉

---

**Use Heroku Dashboard - it's the easiest way!** ✅

