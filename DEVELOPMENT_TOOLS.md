#  Development Tools Documentation

## Overview
This document provides a comprehensive guide to all development tools required for the MiniMinds AI Learning Content Generator project, including setup, configuration, and usage instructions.

## Core Development Stack

### 1. Node.js & Package Management
- **Node.js**: v18+ required
- **npm**: Package manager (included with Node.js)
- **Installation**: Download from [nodejs.org](https://nodejs.org/)

```bash
# Check versions
node --version
npm --version

# Install dependencies
npm install
```

### 2. Next.js Framework
- **Version**: 14.0.4
- **Purpose**: React-based web framework for frontend and API routes
- **Key Features**: App Router, Server Components, TypeScript support

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

### 3. TypeScript
- **Version**: ^5
- **Purpose**: Type safety and enhanced development experience
- **Configuration**: `tsconfig.json`

```bash
# Type checking (automatic with Next.js)
npx tsc --noEmit
```

### 4. Tailwind CSS
- **Version**: ^3.3.0
- **Purpose**: Utility-first CSS framework
- **Configuration**: `tailwind.config.js`

```bash
# Build CSS (automatic with Next.js)
npx tailwindcss build
```

## Database & ORM

### 5. Prisma ORM
- **Version**: ^5.8.1
- **Purpose**: Database ORM and schema management
- **Database**: PostgreSQL

```bash
# Generate Prisma client
npm run db:generate
# or
npx prisma generate

# Push schema to database
npm run db:push
# or
npx prisma db push

# Open database GUI
npm run db:studio
# or
npx prisma studio

# Reset database (if needed)
npx prisma db reset
```

### 6. PostgreSQL Database
- **Purpose**: Primary database for user data, subscriptions, and content generations
- **Setup Options**:
  - Local installation
  - Cloud services (Neon, Supabase, Railway)
  - Docker container

```bash
# Docker setup (optional)
docker run --name miniminds-postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
```

## Authentication & Payments

### 7. NextAuth.js
- **Version**: ^4.24.5
- **Purpose**: Authentication system
- **Adapters**: Prisma adapter for database sessions

```bash
# Environment variables required:
# NEXTAUTH_URL=http://localhost:3000
# NEXTAUTH_SECRET=your-secret-key
```

### 8. Stripe Integration
- **Version**: ^14.13.0 (server), ^2.4.0 (client)
- **Purpose**: Payment processing and subscription management
- **Dashboard**: [dashboard.stripe.com](https://dashboard.stripe.com)

#### Stripe Setup:
1. Create Stripe account
2. Get API keys from dashboard
3. Set up webhooks for subscription events
4. Configure payment methods

```bash
# Required environment variables:
# STRIPE_PUBLISHABLE_KEY=pk_test_...
# STRIPE_SECRET_KEY=sk_test_...
# STRIPE_WEBHOOK_SECRET=whsec_...

# Stripe CLI (for local webhook testing)
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

### 9. OpenAI API
- **Version**: ^4.24.7
- **Purpose**: AI content generation
- **Setup**: Get API key from [platform.openai.com](https://platform.openai.com)

```bash
# Required environment variable:
# OPENAI_API_KEY=sk-...
```

## Development Tools
`
### 10. ESLint
- **Version**: ^8
- **Purpose**: Code linting and quality assurance
- **Configuration**: `.eslintrc.json`

```bash
# Run linting
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

### 11. Git Version Control
- **Purpose**: Source code management
- **Platform**: GitHub recommended

```bash
# Initialize repository
git init
git add .
git commit -m "Initial commit"

# Connect to remote repository
git remote add origin https://github.com/username/miniminds.git
git push -u origin main
```

## Hosting & Deployment

### 12. SiteGround Hosting
- **Purpose**: Web hosting platform
- **Features**: cPanel, SSL certificates, staging environments
- **Setup Process**:

#### SiteGround Configuration:
1. **Domain Setup**: Point domain to SiteGround hosting
2. **SSL Certificate**: Enable Let's Encrypt SSL
3. **Node.js App**: Create Node.js application in cPanel
4. **File Upload**: Use File Manager or FTP to upload build files
5. **Environment Variables**: Set in Node.js app configuration

```bash
# Build for production
npm run build

# Create production package
npm run start
```

#### SiteGround Deployment Steps:
1. Access cPanel
2. Navigate to "Node.js App"
3. Create new application
4. Upload project files to app directory
5. Install dependencies: `npm install`
6. Set startup file: `server.js` or custom
7. Configure environment variables
8. Start application

### 13. Alternative Hosting: Netlify (Current)
- **Version**: Netlify CLI with Next.js plugin
- **Purpose**: JAMstack deployment platform
- **Configuration**: `netlify.toml`

```bash
# Netlify development
npm run netlify:dev

# Deploy to Netlify
netlify deploy --prod
```

## PDF Generation & Utilities

### 14. jsPDF
- **Version**: ^2.5.1
- **Purpose**: Client-side PDF generation

### 15. html2canvas
- **Version**: ^1.4.1
- **Purpose**: Convert HTML elements to canvas for PDF export

### 16. bcryptjs
- **Version**: ^2.4.3
- **Purpose**: Password hashing for security

### 17. Zod
- **Version**: ^3.22.4
- **Purpose**: Schema validation and type safety

## Development Workflow

### Initial Setup
```bash
# 1. Clone repository
git clone <repository-url>
cd miniminds

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# 4. Set up database
npm run db:push

# 5. Start development server
npm run dev
```

### Daily Development
```bash
# Start development server
npm run dev

# Run in parallel terminals:
# Terminal 1: Development server
npm run dev

# Terminal 2: Database GUI (optional)
npm run db:studio

# Terminal 3: Stripe webhook listener (if testing payments)
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

### Before Deployment
```bash
# 1. Run linting
npm run lint

# 2. Build production version
npm run build

# 3. Test production build locally
npm run start

# 4. Push database changes
npm run db:push

# 5. Deploy to hosting platform
```

## Environment Variables

### Required Environment Variables
```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/miniminds"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# OpenAI
OPENAI_API_KEY="sk-your-openai-api-key"

# Stripe
STRIPE_PUBLISHABLE_KEY="pk_test_your-stripe-publishable-key"
STRIPE_SECRET_KEY="sk_test_your-stripe-secret-key"
STRIPE_WEBHOOK_SECRET="whsec_your-webhook-secret"

# Optional: Google OAuth (if using)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## Monitoring & Analytics Tools

### 18. Vercel Analytics (Optional)
- **Purpose**: Web analytics and performance monitoring
- **Setup**: Add `@vercel/analytics` package

### 19. Sentry (Recommended)
- **Purpose**: Error tracking and performance monitoring
- **Setup**: Create Sentry account and add SDK

```bash
npm install @sentry/nextjs
```

## Testing Tools (Recommended)

### 20. Jest & React Testing Library
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

### 21. Cypress (E2E Testing)
```bash
npm install --save-dev cypress
```

## Code Quality Tools

### 22. Prettier (Recommended)
```bash
npm install --save-dev prettier
```

### 23. Husky (Git Hooks)
```bash
npm install --save-dev husky
```

## Development Best Practices

1. **Environment Management**: Use `.env.local` for local development
2. **Database Migrations**: Always backup before schema changes
3. **API Rate Limits**: Monitor OpenAI and Stripe usage
4. **Security**: Never commit API keys to version control
5. **Performance**: Optimize images and implement caching
6. **Error Handling**: Implement proper error boundaries
7. **Testing**: Write tests for critical user flows
8. **Documentation**: Keep README and docs updated

## Troubleshooting Common Issues

### Database Connection Issues
```bash
# Check connection string format
# Ensure database server is running
# Verify credentials and permissions
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Stripe Webhook Issues
```bash
# Test webhook endpoint
stripe events resend evt_...

# Check webhook secret configuration
# Verify endpoint URL is accessible
```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [SiteGround Documentation](https://www.siteground.com/kb/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
