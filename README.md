# 🧠 MiniMinds - Kid-Friendly Learning Content Generator

A cheerful, AI-powered web application that generates instant printable learning content for children ages 4-12. Parents and teachers can create mini-lessons, word puzzles, and coloring sheets tailored to any topic and age group.

## ✨ Features

### 🎯 Content Generation
- **Mini-Lessons**: Educational content with multiple-choice questions and answer keys
- **Word Search Puzzles**: Custom puzzles using lesson vocabulary 
- **Coloring Sheets**: AI-generated black-line art illustrations
- **Age-Appropriate**: Content automatically adjusts for ages 4-12

### 👤 User Management
- Email signup and login
- Password reset functionality
- User dashboard with content history
- Generation quota tracking

### 💳 Subscription Plans
- **Free Trial**: 5 generations to get started
- **Monthly Plan**: Unlimited generations for $9.99/month
- **Yearly Plan**: Unlimited generations for $99.99/year (save $20!)

### 📥 Download Options
- High-quality PDF generation
- Individual or combined downloads
- Print-optimized formatting

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS with kid-friendly themes
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **AI Integration**: OpenAI GPT-4 and DALL-E 3
- **Payment**: Stripe
- **PDF Generation**: jsPDF + html2canvas

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- OpenAI API key
- Stripe account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd miniminds
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your environment variables:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/miniminds"
   
   # NextAuth.js
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   
   # OpenAI
   OPENAI_API_KEY="your-openai-api-key"
   
   # Stripe
   STRIPE_PUBLISHABLE_KEY="pk_test_..."
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_WEBHOOK_SECRET="whsec_..."
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
miniminds/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── generator/         # Content generator
│   ├── pricing/           # Pricing page
│   └── results/           # Generated content results
├── components/            # React components
├── lib/                   # Utility libraries
│   ├── auth.ts           # NextAuth configuration
│   ├── openai.ts         # OpenAI integration
│   ├── prisma.ts         # Database client
│   └── stripe.ts         # Stripe integration
├── prisma/               # Database schema
└── public/               # Static assets
```

## 🎨 Design Philosophy

MiniMinds uses a cheerful, kid-friendly design with:
- Bright, engaging colors
- Fun emoji icons throughout
- Comic-style fonts (Comic Neue, Fredoka One)
- Rounded corners and soft shadows
- Interactive hover effects
- Responsive design for all devices

## 🔧 Configuration

### OpenAI Setup
1. Get an API key from [OpenAI](https://platform.openai.com)
2. Set `OPENAI_API_KEY` in your environment variables
3. Ensure you have credits for GPT-4 and DALL-E 3

### Stripe Setup
1. Create a [Stripe account](https://stripe.com)
2. Get your publishable and secret keys
3. Create subscription products and prices
4. Update price IDs in the pricing page
5. Set up webhooks for subscription events

### Database Setup
1. Create a PostgreSQL database
2. Update `DATABASE_URL` in your environment
3. Run `npx prisma db push` to create tables

## 📦 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Docker
```bash
# Build the image
docker build -t miniminds .

# Run the container
docker run -p 3000:3000 miniminds
```

## 🔐 Security Features

- Secure authentication with NextAuth.js
- Input validation with Zod
- SQL injection protection with Prisma
- Rate limiting on API routes
- HTTPS enforcement in production
- Secret redaction system

## 🧪 Testing

```bash
# Run type checking
npm run build

# Run linting
npm run lint
```

## 📊 Monitoring

The application includes:
- User generation quota tracking
- Subscription status monitoring
- Error logging
- Usage analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if needed
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@miniminds.app or visit our help center.

## 🙏 Acknowledgments

- OpenAI for powerful AI models
- Next.js team for the amazing framework
- Tailwind CSS for beautiful styling
- Stripe for seamless payments
- All the amazing open-source contributors

---

Made with 💖 for amazing kids and parents everywhere!
