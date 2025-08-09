# 🚀 MiniMinds Netlify Deployment Guide

This guide covers deploying MiniMinds to Netlify with full Next.js support including API routes and serverless functions.

## Prerequisites

Before deployment, ensure you have:
- [Netlify account](https://netlify.com)
- [OpenAI API key](https://platform.openai.com)
- [Stripe account](https://stripe.com)
- [PostgreSQL database](https://neon.tech) (Neon recommended for free tier)
- GitHub repository with your code

## 1. Database Setup (Neon)

1. **Create a Neon account** at [neon.tech](https://neon.tech)
2. **Create a new project** and database
3. **Get your connection string** from the dashboard
4. **Save the DATABASE_URL** for later use

## 2. OpenAI Setup

1. **Get an API key** from [OpenAI Platform](https://platform.openai.com)
2. **Add credits** to your account for GPT-4 and DALL-E 3 usage
3. **Save the OPENAI_API_KEY** for later use

## 3. Stripe Setup

1. **Create a Stripe account** at [stripe.com](https://stripe.com)
2. **Go to the Dashboard** and note your keys:
   - Publishable key (`pk_live_...` or `pk_test_...`)
   - Secret key (`sk_live_...` or `sk_test_...`)

3. **Create subscription products:**
   ```
   Monthly Plan: $9.99/month
   Yearly Plan: $99.99/year
   ```

4. **Get price IDs** from each product and update `app/pricing/page.tsx`

5. **Set up webhooks:**
   - Endpoint URL: `https://your-site-name.netlify.app/api/webhooks/stripe`
   - Events to send:
     - `checkout.session.completed`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
   - Get the webhook secret (`whsec_...`)

## 4. Prepare Your Repository

1. **Ensure all files are committed** to your GitHub repository
2. **Make sure netlify.toml is in the root** directory
3. **Verify package.json** includes the Netlify Next.js plugin

## 5. Netlify Deployment

### Option 1: Deploy via Netlify Dashboard

1. **Log in to Netlify** at [netlify.com](https://netlify.com)
2. **Click "New site from Git"**
3. **Connect your GitHub account** and select your repository
4. **Configure build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Functions directory:** (leave empty, handled by plugin)

5. **Set environment variables** in Netlify dashboard:
   - Go to Site settings → Environment variables
   - Add the following variables:

   ```env
   # Database
   DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require
   
   # NextAuth.js
   NEXTAUTH_URL=https://your-site-name.netlify.app
   NEXTAUTH_SECRET=your-generated-secret-key-here
   
   # OpenAI
   OPENAI_API_KEY=sk-...
   
   # Stripe
   STRIPE_PUBLISHABLE_KEY=pk_live_...
   STRIPE_SECRET_KEY=sk_live_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

6. **Deploy the site** by clicking "Deploy site"

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Initialize and deploy:**
   ```bash
   netlify init
   netlify deploy --prod
   ```

## 6. Database Migration

After deployment, run the database migration:

1. **Clone your repository locally** (if not already done)
2. **Install dependencies:** `npm install`
3. **Set the DATABASE_URL** in your local `.env`
4. **Generate Prisma client:** `npx prisma generate`
5. **Push the schema:** `npx prisma db push`

## 7. Configure Custom Domain (Optional)

1. **Go to Site settings** → Domain management
2. **Add custom domain** if you have one
3. **Update NEXTAUTH_URL** environment variable to use your custom domain
4. **Update Stripe webhook endpoint** URL

## 8. Testing Your Deployment

1. **Visit your deployed application**
2. **Test user registration** and login
3. **Test content generation** (ensure OpenAI credits are available)
4. **Test subscription flow** with Stripe test cards:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`
5. **Check all API routes** are working
6. **Verify PDF downloads** work correctly

## 9. Netlify-Specific Features

### Analytics
- Enable Netlify Analytics in your site dashboard
- Monitor site performance and usage

### Forms (if needed later)
- Netlify provides built-in form handling
- Add `netlify` attribute to any HTML forms

### Edge Functions
- Your Next.js API routes automatically become Netlify Functions
- Monitor function logs in the Netlify dashboard

## 10. Performance Optimization

### Build Optimization
- Netlify automatically optimizes your builds
- Enable build caching for faster deployments

### Image Optimization
- Netlify supports Next.js Image Optimization
- Images are automatically optimized and served via CDN

### Caching
- Configure caching headers in `netlify.toml`
- Static assets are automatically cached

## 11. Monitoring & Troubleshooting

### Function Logs
1. **Go to your site dashboard**
2. **Click on "Functions"** tab
3. **View logs** for each serverless function
4. **Monitor errors** and performance

### Common Issues & Solutions

**Build Failures:**
```bash
# Check build logs in Netlify dashboard
# Common fixes:
- Ensure all dependencies are in package.json
- Check for TypeScript errors
- Verify environment variables are set
```

**Database Connection Errors:**
```bash
# Verify DATABASE_URL format
# Ensure SSL mode is enabled for Neon
# Check firewall settings
```

**API Route Issues:**
```bash
# Check function logs in Netlify dashboard
# Verify environment variables are accessible
# Test locally with netlify dev
```

**OpenAI API Errors:**
```bash
# Verify API key is correct
# Check OpenAI account credits
# Monitor rate limits
```

### Local Development with Netlify

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Run local development with Netlify functions
netlify dev

# This will start your app at localhost:8888
# API routes will work exactly like in production
```

## 12. Updating Your Deployment

### Automatic Deployments
- **Push to main branch** triggers automatic deployment
- **Preview deployments** for pull requests
- **Deploy previews** for testing changes

### Manual Deployments
```bash
# Deploy specific branch
netlify deploy --prod --dir=.next

# Deploy with build
netlify deploy --prod --build
```

## 13. Scaling Considerations

### Function Limits
- Netlify functions have execution time limits
- Monitor your OpenAI API calls for timeout issues
- Consider implementing request queuing for large operations

### Database Connections
- Monitor connection pool usage with Neon
- Consider connection pooling for high traffic

### Cost Management
- Monitor Netlify function usage
- Set up billing alerts
- Optimize cold starts by keeping functions warm

## 14. Security Best Practices

### Environment Variables
- Never commit secrets to your repository
- Use Netlify's environment variable management
- Rotate API keys regularly

### Headers
- Security headers are configured in `netlify.toml`
- Monitor for security vulnerabilities
- Keep dependencies updated

## 15. Backup & Recovery

### Site Backups
- Netlify automatically keeps deployment history
- Easy rollback to previous deployments
- Download site files if needed

### Database Backups
- Configure automated backups in Neon
- Test restore procedures regularly

---

## 🎉 Deployment Checklist

- [ ] Repository pushed to GitHub
- [ ] Environment variables configured in Netlify
- [ ] Database schema deployed
- [ ] Stripe webhooks configured
- [ ] OpenAI credits available
- [ ] Site tested end-to-end
- [ ] Custom domain configured (if applicable)
- [ ] Analytics enabled
- [ ] Monitoring set up

## 🆘 Support

If you encounter issues:
1. Check Netlify function logs
2. Verify environment variables
3. Test locally with `netlify dev`
4. Check database connectivity
5. Monitor API service status (OpenAI, Stripe)

**Your MiniMinds application should now be live on Netlify!** 🚀

The serverless architecture will automatically scale with your usage, and you'll benefit from Netlify's global CDN for fast content delivery worldwide.
