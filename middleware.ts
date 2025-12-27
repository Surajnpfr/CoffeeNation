import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // Admin routes
    if (path.startsWith('/admin') && token?.role !== 'admin') {
      return NextResponse.redirect(new URL('/', req.url));
    }

    // Farmer routes
    if (path.startsWith('/farmer') && token?.role !== 'farmer') {
      return NextResponse.redirect(new URL('/', req.url));
    }

    // Buyer routes
    if (path.startsWith('/buyer') && token?.role !== 'buyer') {
      return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const path = req.nextUrl.pathname;

        // Public routes that don't require auth
        if (
          path === '/' ||
          path.startsWith('/auth') ||
          path.startsWith('/products') ||
          path.startsWith('/api/auth')
        ) {
          return true;
        }

        // Protected routes require auth
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    '/admin/:path*',
    '/farmer/:path*',
    '/buyer/:path*',
    '/api/products/:path*',
    '/api/orders/:path*',
    '/api/notices/:path*',
    '/api/upload/:path*',
  ],
};

