# Coffee Nation - E-commerce Platform

A modern Next.js e-commerce platform for coffee farmers and buyers, built with TypeScript, Next.js 14, and MySQL.

## 🚀 Features

- **User Authentication** - Secure login/registration with NextAuth
- **Role-Based Access** - Admin, Farmer, and Buyer roles
- **Product Management** - Farmers can list and manage coffee products
- **Order System** - Buyers can place and track orders
- **File Uploads** - Image uploads for products
- **Responsive Design** - Modern UI with Tailwind CSS

## 📋 Prerequisites

- Node.js 18+ and npm 9+
- MySQL database
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/coffee-nation.git
   cd coffee-nation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and fill in your database credentials and other variables.

4. **Initialize database**
   ```bash
   npm run db:init
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Heroku

See [HEROKU_DEPLOYMENT_GUIDE.md](./HEROKU_DEPLOYMENT_GUIDE.md) for complete instructions.

**Quick Start:**
```bash
heroku create your-app-name
heroku addons:create jawsdb:kitefin
heroku config:set DATABASE_URL=$(heroku config:get JAWSDB_URL)
heroku config:set NEXTAUTH_SECRET="your-secret"
heroku config:set NEXTAUTH_URL="https://your-app-name.herokuapp.com"
git push heroku main
heroku run npm run db:init
```

## 📁 Project Structure

```
├── app/              # Next.js app directory (pages & API routes)
├── components/       # React components
├── lib/             # Utilities (database, auth)
├── public/          # Static files
├── scripts/         # Database initialization scripts
├── types/           # TypeScript type definitions
├── server.js        # Production server
└── Procfile        # Heroku process file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run db:init` - Initialize database schema

## 🗄️ Database

The application uses MySQL. The schema is defined in `lib/db-schema.sql` and can be initialized using:

```bash
npm run db:init
```

## 🔐 Environment Variables

Required environment variables (see `.env.example`):

- `DATABASE_URL` or `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_PORT`
- `NEXTAUTH_SECRET` - Secret key for NextAuth
- `NEXTAUTH_URL` - Your application URL
- `UPLOAD_DIR` - Directory for file uploads
- `NODE_ENV` - Set to `production` for production

## 📚 Documentation

- [Heroku Deployment Guide](./HEROKU_DEPLOYMENT_GUIDE.md) - Complete Heroku deployment instructions
- [Heroku Quick Start](./HEROKU_QUICK_START.md) - Quick deployment guide
- [Heroku Environment Variables](./HEROKU_ENV_TEMPLATE.md) - Environment variables reference

## 🛡️ Security

- Environment variables are never committed to git
- Passwords are hashed using bcrypt
- NextAuth handles secure session management
- File uploads are validated

## 📝 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. For issues or questions, please contact the repository owner.

---

**Built with ❤️ using Next.js, TypeScript, and MySQL**

