import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import pool from './db';

// Clean NEXTAUTH_URL at module load time (before NextAuth reads it)
if (process.env.NEXTAUTH_URL) {
  const original = process.env.NEXTAUTH_URL;
  // Remove any spaces and trim
  const cleaned = original.trim().replace(/\s+/g, '');
  
  // Validate and set cleaned URL
  try {
    new URL(cleaned);
    process.env.NEXTAUTH_URL = cleaned;
  } catch (error) {
    // If invalid, remove it so NextAuth can determine it automatically
    console.warn(`Invalid NEXTAUTH_URL: "${original}". Removing it. NextAuth will determine URL automatically.`);
    delete process.env.NEXTAUTH_URL;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const [users]: any = await pool.execute(
            'SELECT * FROM users WHERE email = ?',
            [credentials.email]
          );

          if (users.length === 0) {
            return null;
          }

          const user = users[0];
          const isValidPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isValidPassword) {
            return null;
          }

          return {
            id: user.id.toString(),
            email: user.email,
            name: user.name,
            role: user.role,
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role as 'admin' | 'farmer' | 'buyer';
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as 'admin' | 'farmer' | 'buyer';
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

