/**
 * Database initialization script
 * Run this after setting up your MySQL database
 * 
 * Usage: node scripts/init-db.js
 * 
 * Make sure to set your database credentials in .env first
 */

const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

// Load dotenv only if available (for local development)
try {
  require('dotenv').config();
} catch (e) {
  // dotenv not available (production/Heroku) - env vars are already set
}

// Parse DATABASE_URL if provided (Heroku format)
function getDbConfig() {
  if (process.env.DATABASE_URL) {
    // Parse MySQL connection string: mysql://user:password@host:port/database
    const url = new URL(process.env.DATABASE_URL);
    return {
      host: url.hostname,
      user: url.username,
      password: url.password,
      database: url.pathname.slice(1), // Remove leading '/'
      port: parseInt(url.port || '3306'),
    };
  }

  return {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'coffee_nation',
    port: parseInt(process.env.DB_PORT || '3306'),
  };
}

async function initDatabase() {
  let connection;

  try {
    const dbConfig = getDbConfig();
    const dbName = dbConfig.database;

    // Connect to MySQL (without database first, or with database if DATABASE_URL is used)
    if (process.env.DATABASE_URL) {
      // If DATABASE_URL is set, connect directly to the database
      connection = await mysql.createConnection({
        host: dbConfig.host,
        user: dbConfig.user,
        password: dbConfig.password,
        database: dbName,
        port: dbConfig.port,
      });
    } else {
      // Otherwise, connect without database first, then create it
      connection = await mysql.createConnection({
        host: dbConfig.host,
        user: dbConfig.user,
        password: dbConfig.password,
        port: dbConfig.port,
      });

      // Create database if it doesn't exist
      await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
      console.log(`✓ Database '${dbName}' created or already exists`);

      // Use the database
      await connection.query(`USE \`${dbName}\``);
    }

    // Create database if it doesn't exist
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
    console.log(`✓ Database '${dbName}' created or already exists`);

    // Use the database
    await connection.query(`USE \`${dbName}\``);

    // Read and execute schema
    const schemaPath = path.join(__dirname, '../lib/db-schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');

    // Split by semicolons and execute each statement
    const statements = schema
      .split(';')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    for (const statement of statements) {
      try {
        await connection.query(statement);
      } catch (err) {
        // Ignore "table already exists" errors
        if (!err.message.includes('already exists')) {
          console.error('Error executing statement:', err.message);
        }
      }
    }

    console.log('✓ Database schema initialized successfully');
    console.log('\nNext steps:');
    console.log('1. Create an admin user through the registration page');
    console.log('2. Update the user role to "admin" in the database if needed');
    console.log('3. Start your Next.js app with: npm run dev');
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

initDatabase();

