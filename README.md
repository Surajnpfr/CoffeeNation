# Coffee Nation ☕

A modern e-commerce platform connecting coffee farmers directly with buyers. Built with Next.js, TypeScript, and MySQL.

## 📖 About

Coffee Nation is an online marketplace designed to bridge the gap between coffee farmers and buyers. Farmers can showcase their products, manage inventory, and reach customers directly, while buyers can browse, order, and track their coffee purchases.

## ✨ Key Features

- **👥 Multi-Role System** - Separate dashboards for Farmers, Buyers, and Admins
- **🛍️ Product Marketplace** - Farmers list coffee products with images and details
- **🛒 Order Management** - Buyers place orders and track their purchases
- **🔐 Secure Authentication** - Safe login and registration system
- **📱 Responsive Design** - Works seamlessly on desktop and mobile devices

## 🎯 User Roles

- **Farmer** - List products, manage inventory, view orders
- **Buyer** - Browse products, place orders, track purchases
- **Admin** - Manage users, products, and platform settings

## 🚀 Live Demo

[Deployed on Heroku](https://your-app-name.herokuapp.com) (Update with your actual URL)

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes, NextAuth
- **Database:** MySQL
- **Deployment:** Heroku

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm 9+
- MySQL database (or use Heroku's JawsDB MySQL addon)
- Heroku account (for deployment)

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Initialize database: `npm run db:init`
5. Run development server: `npm run dev`

### Deployment

Deploy to Heroku:
1. Create a Heroku app
2. Add JawsDB MySQL addon
3. Set environment variables
4. Push to Heroku: `git push heroku main`
5. Initialize database: `heroku run npm run db:init`

---

**Connecting coffee farmers with buyers, one cup at a time** ☕

