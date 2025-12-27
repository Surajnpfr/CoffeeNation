# Heroku Environment Variables Template

## 🔧 Setting Environment Variables in Heroku

Use these commands to set your environment variables:

### Database Configuration

**If using JawsDB (Recommended):**
```bash
heroku config:set DATABASE_URL=$(heroku config:get JAWSDB_URL)
```

**If using external MySQL:**
```bash
heroku config:set DATABASE_URL="mysql://username:password@host:port/database"
```

**Or use individual variables:**
```bash
heroku config:set DB_HOST="srv1189.hstgr.io"
heroku config:set DB_USER="u753359717_coffee"
heroku config:set DB_PASSWORD="CoffeeNation11@"
heroku config:set DB_NAME="u753359717_Coffeenation"
heroku config:set DB_PORT="3306"
```

### NextAuth Configuration

```bash
heroku config:set NEXTAUTH_SECRET="HEJTrQge5w5cSzFEVtHyWsU5Y1KI+QlCGJrAbCZcBkE="
heroku config:set NEXTAUTH_URL="https://your-app-name.herokuapp.com"
```

### Other Variables

```bash
heroku config:set UPLOAD_DIR="./public/uploads"
heroku config:set NODE_ENV="production"
```

---

## 📋 Complete Setup (Copy & Paste)

Replace `your-app-name` with your actual Heroku app name:

```bash
# Database (choose one)
# Option 1: JawsDB
heroku addons:create jawsdb:kitefin
heroku config:set DATABASE_URL=$(heroku config:get JAWSDB_URL)

# Option 2: External MySQL
heroku config:set DATABASE_URL="mysql://u753359717_coffee:CoffeeNation11@srv1189.hstgr.io:3306/u753359717_Coffeenation"

# NextAuth
heroku config:set NEXTAUTH_SECRET="HEJTrQge5w5cSzFEVtHyWsU5Y1KI+QlCGJrAbCZcBkE="
heroku config:set NEXTAUTH_URL="https://your-app-name.herokuapp.com"

# Other
heroku config:set UPLOAD_DIR="./public/uploads"
heroku config:set NODE_ENV="production"
```

---

## ✅ Verify All Variables

```bash
heroku config
```

This shows all your environment variables.

---

## 🔄 Update a Variable

```bash
heroku config:set KEY="new-value"
```

---

## 🗑️ Remove a Variable

```bash
heroku config:unset KEY
```

---

## 📝 Notes

- Variables are case-sensitive
- Use quotes for values with spaces or special characters
- Changes take effect immediately (app may need restart)
- Never commit `.env` file to git (already in `.gitignore`)

