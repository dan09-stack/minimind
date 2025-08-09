# MiniMinds - AI Learning Content Generator

## Project Overview
MiniMinds is a Next.js web application that generates kid-friendly educational content using OpenAI's API. It creates mini-lessons, word puzzles, and coloring sheets for children ages 4-12.

## Development Commands

### Setup
```bash
npm install
npx prisma generate
npx prisma db push
cp .env.example .env
```

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Database
```bash
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema to database
npx prisma studio    # Open database GUI
```

## Code Style & Conventions

- Use TypeScript for type safety
- Follow Next.js 14 app directory structure
- Use Tailwind CSS for styling with kid-friendly design
- Component names use PascalCase
- File names use kebab-case for pages, PascalCase for components
- Use functional components with hooks
- Implement proper error handling and loading states

## Architecture

### Frontend
- Next.js 14 with TypeScript
- Tailwind CSS with custom kid-friendly theme
- NextAuth.js for authentication
- React components with proper state management

### Backend
- Next.js API routes
- Prisma ORM with PostgreSQL
- OpenAI integration for content generation
- Stripe for payment processing

### Key Components
- `ContentGenerator`: Main form for content creation
- `PDFGenerator`: Handles PDF creation and downloads
- `Navbar`: Navigation with authentication state
- `Hero`: Landing page hero section

### API Routes
- `/api/generate`: Creates educational content using OpenAI
- `/api/auth/*`: NextAuth.js authentication
- `/api/create-checkout-session`: Stripe payment processing
- `/api/user`: User profile management
- `/api/generations`: Content history

## Environment Variables

Required variables (see .env.example):
- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_URL`: Application URL
- `NEXTAUTH_SECRET`: Secret for NextAuth.js
- `OPENAI_API_KEY`: OpenAI API key
- `STRIPE_PUBLISHABLE_KEY`: Stripe public key
- `STRIPE_SECRET_KEY`: Stripe secret key

## Design System

### Colors
- Primary: Red gradient (for main actions)
- Secondary: Blue gradient (for secondary actions)
- Accent: Yellow gradient (for highlights)
- Success: Green gradient (for success states)

### Typography
- Headings: 'Fredoka One' (playful, kid-friendly)
- Body: 'Comic Neue' (readable, casual)

### Components
- Cards: Rounded corners, subtle shadows, colorful borders
- Buttons: Gradients, hover effects, emoji icons
- Forms: Large inputs, colorful focus states

## Database Schema

Key models:
- `User`: User accounts with generation limits
- `Subscription`: Stripe subscription management
- `Generation`: Stored content generations
- `Account`/`Session`: NextAuth.js tables

## Testing Strategy

- Type checking with TypeScript
- ESLint for code quality
- Manual testing for user flows
- Stripe test mode for payments

## Deployment

Recommended: Vercel
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically on push

## Common Issues

1. **OpenAI API Errors**: Check API key and credits
2. **Database Connection**: Verify DATABASE_URL format
3. **Stripe Webhooks**: Ensure webhook endpoints are configured
4. **PDF Generation**: Large images may cause memory issues

## Feature Roadmap

- [ ] Bulk content generation
- [ ] Custom themes and templates
- [ ] Multi-language support
- [ ] Parent/teacher collaboration features
- [ ] Analytics dashboard
- [ ] Mobile app
