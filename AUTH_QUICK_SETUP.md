# Authentication Quick Setup - Heroku

## 🚀 Quick Steps to Enable Authentication

### 1. Set Environment Variables in Heroku

**Go to Heroku Dashboard → Your App → Settings → Config Vars**

Add these (replace `your-app-name` with your actual Heroku app name):

```
NEXTAUTH_SECRET = HEJTrQge5w5cSzFEVtHyWsU5Y1KI+QlCGJrAbCZcBkE=
NEXTAUTH_URL = https://your-app-name.herokuapp.com
DATABASE_URL = (your database connection)
UPLOAD_DIR = ./public/uploads
NODE_ENV = production
```

**⚠️ CRITICAL:** `NEXTAUTH_URL` must exactly match your Heroku app URL!

### 2. Initialize Database

```bash
heroku run npm run db:init
```

This creates all tables needed for authentication.

### 3. Create Your First User

**Option A: Register via Website**
1. Visit: `https://your-app-name.herokuapp.com/auth/register`
2. Create an account
3. Then make yourself admin (see below)

**Option B: Direct SQL** (if you have database access)
```sql
-- First, hash your password (run this in Node.js):
-- node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('your-password', 10));"

-- Then insert user:
INSERT INTO users (email, name, password, role, created_at) 
VALUES (
  'admin@example.com',
  'Admin User',
  '$2a$10$YourHashedPasswordHere',
  'admin',
  NOW()
);
```

### 4. Make Yourself Admin (After Registration)

If you registered via website, update your role:

```sql
UPDATE users SET role = 'admin' WHERE email = 'your-email@example.com';
```

### 5. Restart App

```bash
heroku restart
```

### 6. Test Authentication

1. Visit: `https://your-app-name.herokuapp.com/auth/login`
2. Login with your credentials
3. You should be redirected to your dashboard

---

## ✅ Verification Checklist

- [ ] `NEXTAUTH_SECRET` is set
- [ ] `NEXTAUTH_URL` matches your Heroku URL exactly
- [ ] `DATABASE_URL` is set and working
- [ ] Database initialized (`npm run db:init` completed)
- [ ] At least one user exists in database
- [ ] Can access `/auth/login` page
- [ ] Can login successfully
- [ ] Session persists after login

---

## 🔧 Common Issues

**"Invalid credentials"**
→ Check database connection and user exists

**"NEXTAUTH_URL mismatch"**
→ Verify URL matches exactly (https://, no trailing slash)

**"Session not working"**
→ Check `NEXTAUTH_SECRET` is set, restart app

---

**See `HEROKU_AUTH_SETUP.md` for detailed instructions.**

