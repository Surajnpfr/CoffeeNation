# Troubleshooting: Failed to Create User

## 🔍 Common Issues and Solutions

### Issue 1: Database Not Initialized

**Error:** "Database tables not initialized" or "Table 'users' doesn't exist"

**Solution:**
1. **Go to Heroku Dashboard** → Your App → **"More"** → **"Run console"**
2. **Type:** `npm run db:init`
3. **Press Enter**
4. **Wait for:** `✓ Database schema initialized successfully`
5. **Try registering again**

---

### Issue 2: Database Connection Failed

**Error:** "Database connection failed" or "ECONNREFUSED"

**Solution:**
1. **Check DATABASE_URL is set:**
   - Heroku Dashboard → Settings → Config Vars
   - Look for `DATABASE_URL`
   - Should look like: `mysql://user:password@host:port/database`

2. **If using JawsDB:**
   - Go to Resources tab
   - Make sure JawsDB addon is active
   - Copy `JAWSDB_URL` value
   - Set it as `DATABASE_URL`:
     ```
     DATABASE_URL = (copy value from JAWSDB_URL)
     ```

3. **Restart app:**
   - More → Restart all dynos

---

### Issue 3: User Already Exists

**Error:** "User with this email already exists"

**Solution:**
- Use a different email address
- Or login with existing account

---

### Issue 4: Missing Required Fields

**Error:** "Email, password, and name are required"

**Solution:**
- Make sure you fill in:
  - ✅ Name
  - ✅ Email
  - ✅ Password (at least 6 characters)
  - ✅ Confirm Password (must match)

---

### Issue 5: Password Too Short

**Error:** "Password must be at least 6 characters"

**Solution:**
- Use a password with at least 6 characters

---

## 🔧 Step-by-Step Fix

### Step 1: Check Database is Initialized

**Via Heroku Dashboard:**
1. Go to **"More"** → **"Run console"**
2. Type: `npm run db:init`
3. Press Enter
4. Should see: `✓ Database schema initialized successfully`

**If you see errors:**
- Check `DATABASE_URL` is set correctly
- Verify JawsDB addon is active

---

### Step 2: Verify Environment Variables

**Go to:** Heroku Dashboard → Settings → Config Vars

**Required variables:**
- ✅ `DATABASE_URL` (should be set automatically if using JawsDB)
- ✅ `NEXTAUTH_SECRET`
- ✅ `NEXTAUTH_URL`
- ✅ `NODE_ENV` = `production`

---

### Step 3: Check Heroku Logs

**Via Dashboard:**
1. Go to **"More"** → **"View logs"**
2. Look for errors related to:
   - Database connection
   - Registration API
   - Table creation

**Common log errors:**
- `ER_NO_SUCH_TABLE` → Database not initialized
- `ECONNREFUSED` → Database connection failed
- `ER_DUP_ENTRY` → User already exists

---

### Step 4: Test Registration Again

1. **Visit:** `https://your-app-name.herokuapp.com/auth/register`
2. **Fill in the form:**
   - Name: Your name
   - Email: Your email (must be unique)
   - Password: At least 6 characters
   - Confirm Password: Same as password
   - Role: Buyer or Farmer
3. **Click "Create Account"**
4. **Should redirect to login page**

---

## 🐛 Debug Mode

If you want to see detailed error messages:

1. **Check browser console:**
   - Press F12
   - Go to "Console" tab
   - Look for error messages

2. **Check network tab:**
   - Press F12
   - Go to "Network" tab
   - Try registering
   - Click on `/api/register` request
   - Check "Response" tab for error details

---

## ✅ Quick Checklist

Before registering, make sure:

- [ ] Database is initialized (`npm run db:init` completed)
- [ ] `DATABASE_URL` is set in Config Vars
- [ ] JawsDB addon is active (if using JawsDB)
- [ ] App is restarted after setting environment variables
- [ ] All required fields are filled in
- [ ] Password is at least 6 characters
- [ ] Email is unique (not already registered)

---

## 🆘 Still Not Working?

### Check Database Tables Exist

**Via Heroku Console:**
1. Go to **"More"** → **"Run console"**
2. Type: `node -e "const pool = require('./lib/db').default; pool.execute('SHOW TABLES').then(([rows]) => console.log(rows)).catch(err => console.error(err));"`
3. Should see tables: `users`, `products`, `orders`, etc.

### Test Database Connection

**Via Heroku Console:**
1. Type: `node -e "const pool = require('./lib/db').default; pool.execute('SELECT 1').then(() => console.log('Connected!')).catch(err => console.error('Error:', err.message));"`
2. Should see: `Connected!`

---

## 📞 Need More Help?

1. **Check Heroku logs** for specific error messages
2. **Verify database is accessible** via JawsDB dashboard
3. **Make sure all environment variables are set correctly**

**Most common fix:** Run `npm run db:init` in Heroku console! 🎯

