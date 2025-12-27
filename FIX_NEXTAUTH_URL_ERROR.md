# Fix "Invalid URL" Build Error on Heroku

## 🐛 The Problem

You're seeing this error during build:
```
TypeError: Invalid URL
input: 'https:// https://coffee-nation-b53160b4d4f9.herokuapp.com/'
```

**The issue:** Your `NEXTAUTH_URL` environment variable has a **space** in it!

---

## ✅ The Solution

### Step 1: Fix NEXTAUTH_URL in Heroku

1. **Go to Heroku Dashboard:** https://dashboard.heroku.com
2. **Click on your app**
3. **Go to "Settings" tab**
4. **Click "Reveal Config Vars"**
5. **Find `NEXTAUTH_URL`**
6. **Click "Edit"** (or delete and recreate it)

### Step 2: Set the Correct Value

**The value should be:**
```
https://coffee-nation-b53160b4d4f9.herokuapp.com
```

**Important:**
- ✅ Start with `https://` (no space after)
- ✅ No spaces anywhere
- ✅ No trailing slash `/` at the end
- ✅ Replace `coffee-nation-b53160b4d4f9` with your actual app name

**Example (correct):**
```
https://your-app-name.herokuapp.com
```

**Example (wrong - has space):**
```
https:// https://your-app-name.herokuapp.com
```

### Step 3: Save and Redeploy

1. **Click "Save"** or **"Add"**
2. **Go to "More"** → **"Restart all dynos"**
3. **Go to "Deploy" tab** → **"Manual deploy"** → **"Deploy Branch"**

---

## 🔍 How to Check Your Current Value

### Via Heroku Dashboard:
1. Settings → Reveal Config Vars
2. Look at `NEXTAUTH_URL` value
3. Make sure there are **no spaces**

### Via Heroku CLI:
```bash
heroku config:get NEXTAUTH_URL
```

---

## 📝 Quick Fix Commands

If you have Heroku CLI installed:

```bash
# Remove the old one (if it has spaces)
heroku config:unset NEXTAUTH_URL

# Set it correctly (replace with your app name)
heroku config:set NEXTAUTH_URL="https://coffee-nation-b53160b4d4f9.herokuapp.com"

# Verify it's correct
heroku config:get NEXTAUTH_URL
```

---

## ✅ Verification

After fixing, your `NEXTAUTH_URL` should look like:
```
https://coffee-nation-b53160b4d4f9.herokuapp.com
```

**NOT like:**
```
https:// https://coffee-nation-b53160b4d4f9.herokuapp.com
```

---

## 🚀 After Fixing

1. **Redeploy your app:**
   - Dashboard → Deploy → Manual deploy → Deploy Branch
   
2. **Wait for build to complete**

3. **Check build logs** - should see:
   ```
   ✓ Compiled successfully
   ✓ Generating static pages
   ```

4. **No more "Invalid URL" errors!**

---

## 🛡️ Prevention

**Always set NEXTAUTH_URL like this:**
- Copy your Heroku app URL exactly
- Make sure it starts with `https://`
- No spaces before, after, or in the middle
- No trailing slash

**Example:**
```
✅ CORRECT: https://my-app.herokuapp.com
❌ WRONG:   https:// https://my-app.herokuapp.com
❌ WRONG:   https://my-app.herokuapp.com/
❌ WRONG:   https:// my-app.herokuapp.com
```

---

**Fix the NEXTAUTH_URL and redeploy!** 🎉

