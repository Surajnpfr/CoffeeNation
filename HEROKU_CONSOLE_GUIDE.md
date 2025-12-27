# Heroku Console - What to Type

## 🖥️ If You See "heroku run" Prompt

When you open **"Run console"** in Heroku Dashboard, you might see:

```
heroku run
```

or

```
$ heroku run
```

---

## ✅ What to Type

### For Database Initialization:

**Just type this (without "heroku run"):**
```
npm run db:init
```

**Then press Enter**

---

## 📝 Common Commands You'll Need

### Initialize Database:
```
npm run db:init
```

### Check Node Version:
```
node --version
```

### Check if files exist:
```
ls -la
```

### View package.json:
```
cat package.json
```

---

## 🎯 Step-by-Step in Console

1. **Open Run Console:**
   - Dashboard → Your App → More → Run console

2. **You'll see a prompt** (might say `heroku run` or `$`)

3. **Type your command:**
   ```
   npm run db:init
   ```

4. **Press Enter**

5. **Wait for output** - You should see:
   ```
   ✓ Database 'your-db-name' created or already exists
   ✓ Database schema initialized successfully
   ```

6. **Done!** Close the console

---

## ⚠️ Important Notes

- **Don't type "heroku run"** - Just type the command itself
- **The console already knows** you're running on Heroku
- **Type only:** `npm run db:init`
- **Press Enter** to execute

---

## 🔍 If It Doesn't Work

### Try These Variations:

**Option 1:**
```
npm run db:init
```

**Option 2:**
```
node scripts/init-db.js
```

**Option 3:** If you see a different prompt, try:
```
heroku run npm run db:init
```

---

## 📸 What You Should See

**Before typing:**
```
$ heroku run
> 
```

**After typing `npm run db:init` and pressing Enter:**
```
$ npm run db:init
> coffee-nation@1.0.0 db:init
> node scripts/init-db.js

✓ Database 'your-db-name' created or already exists
✓ Database schema initialized successfully

Next steps:
1. Create an admin user through the registration page
2. Update the user role to "admin" in the database if needed
3. Start your Next.js app with: npm run dev
```

---

## ✅ Success Indicators

You'll know it worked when you see:
- ✓ Database created or already exists
- ✓ Database schema initialized successfully
- No error messages

---

## 🐛 If You See Errors

**"Command not found"**
→ Make sure you typed: `npm run db:init` (not `heroku run npm run db:init`)

**"Database connection failed"**
→ Check `DATABASE_URL` is set in Config Vars

**"Cannot find module"**
→ The app might need to be rebuilt - try restarting first

---

**Just type: `npm run db:init` and press Enter!** ✅

