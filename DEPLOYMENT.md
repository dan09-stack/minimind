# 🚀 MiniMinds Deployment Guide

This guide covers deploying MiniMinds to production using Vercel and setting up all required services.

## Prerequisites

Before deployment, ensure you have:
- [Vercel account](https://vercel.com)
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
   - Endpoint URL: `https://your-domain.vercel.app/api/webhooks/stripe`
   - Events to send:
     - `checkout.session.completed`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
   - Get the webhook secret (`whsec_...`)

## 4. Vercel Deployment

1. **Connect GitHub** to Vercel
2. **Import your repository**
3. **Configure build settings:**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: (leave empty)

4. **Set environment variables** in Vercel dashboard:

   ```env
   # Database
   DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require
   
   # NextAuth.js
   NEXTAUTH_URL=https://your-domain.vercel.app
   NEXTAUTH_SECRET=your-generated-secret-key-here
   
   # OpenAI
   OPENAI_API_KEY=sk-...
   
   # Stripe
   STRIPE_PUBLISHABLE_KEY=pk_live_...
   STRIPE_SECRET_KEY=sk_live_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

5. **Deploy the application**

## 5. Database Migration

After deployment, run the database migration:

1. **Clone your repository locally**
2. **Install dependencies:** `npm install`
3. **Set the DATABASE_URL** in your local `.env`
4. **Generate Prisma client:** `npx prisma generate`
5. **Push the schema:** `npx prisma db push`

## 6. Domain Setup (Optional)

1. **Add custom domain** in Vercel dashboard
2. **Update NEXTAUTH_URL** environment variable
3. **Update Stripe webhook endpoint** URL

## 7. Testing the Deployment

1. **Visit your deployed application**
2. **Test user registration** and login
3. **Test content generation** (ensure OpenAI credits are available)
4. **Test subscription flow** with Stripe test cards:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`

## 8. Monitoring & Maintenance

### Vercel Analytics
- Enable Vercel Analytics for performance monitoring
- Monitor function execution times and errors

### Database Monitoring
- Monitor database connections and query performance
- Set up alerts for high usage

### OpenAI Usage
- Monitor API usage and costs
- Set usage limits if needed

### Stripe Monitoring
- Monitor subscription metrics
- Set up email notifications for failed payments

## 9. Security Checklist

- ✅ Environment variables are secure
- ✅ NEXTAUTH_SECRET is strong and unique
- ✅ Database connections use SSL
- ✅ Stripe webhooks are verified
- ✅ API routes have proper authentication
- ✅ Input validation is in place

## 10. Backup Strategy

### Database Backups
1. **Set up automated backups** in Neon
2. **Test restore procedures** regularly

### Code Backups
1. **Use GitHub** for version control
2. **Tag releases** for easy rollbacks

## 11. Performance Optimization

### Vercel Edge Functions
- Consider using Edge Runtime for API routes
- Optimize image delivery with Vercel Image Optimization

### Database Optimization
- Add indexes for frequently queried fields
- Monitor query performance

### Caching
- Implement appropriate caching strategies
- Use Vercel's built-in caching

## 12. Troubleshooting

### Common Issues

**Database Connection Errors:**
- Check DATABASE_URL format
- Ensure SSL mode is enabled
- Verify database is accessible

**OpenAI API Errors:**
- Check API key validity
- Ensure sufficient credits
- Monitor rate limits

**Stripe Webhook Errors:**
- Verify webhook endpoint URL
- Check webhook secret
- Ensure proper HTTPS

**NextAuth Errors:**
- Verify NEXTAUTH_URL matches deployment URL
- Check NEXTAUTH_SECRET is set
- Ensure database schema is correct

### Logs and Debugging
- Use Vercel Function Logs for debugging
- Check browser console for client-side errors
- Monitor Stripe webhook logs

## 13. Scaling Considerations

### Database Scaling
- Monitor connection pool usage
- Consider read replicas for heavy read workloads

### API Rate Limiting
- Implement rate limiting for OpenAI API calls
- Consider queuing for bulk operations

### Cost Management
- Monitor OpenAI usage costs
- Set up billing alerts
- Optimize API usage patterns

## 14. Support and Documentation

### User Support
- Set up email support channel
- Create FAQ documentation
- Consider live chat integration

### Admin Panel
- Consider building admin tools for user management
- Monitor system health and usage

---

🎉 **Congratulations!** Your MiniMinds application should now be live and ready to help families create amazing learning content!

For additional support or questions, please refer to the main README.md or create an issue in the repository.
