# Regency Commercial Cleaning Landing Page

Professional landing page for Regency Commercial Cleaning services in Nanaimo, BC.

## Features

- Responsive design for desktop, tablet, and mobile
- Lead capture form with Vercel serverless backend
- Trust badges and testimonials
- Service showcase and comparison sections
- FAQ section
- SEO optimized

## Project Structure

```
├── index.html              # Main landing page
├── package.json           # Project metadata
├── vercel.json           # Vercel deployment config
├── api/
│   └── submit-lead.js    # Serverless function for form handling
├── images/               # Product images
│   ├── team-office-cleaning.webp
│   ├── team-floor-care.webp
│   └── team-reception-cleaning.webp
└── .gitignore
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/VarshneyTushar18/landing-pag.git
   cd landing-pag
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repo to Vercel
   - Vercel will automatically detect and deploy

3. **Configure Email Notifications (Optional)**
   - To enable email notifications for form submissions, add SendGrid integration
   - Set `SENDGRID_API_KEY` environment variable in Vercel dashboard

## Local Development

```bash
npm run dev
```

## Deployment

```bash
git push origin main
```

Vercel will automatically deploy on push to main branch.

## Form Submissions

Form submissions are currently logged to Vercel dashboard. To enable email notifications:

1. Set up SendGrid account
2. Add API key to Vercel environment variables
3. Uncomment the SendGrid code in `api/submit-lead.js`

## Support

For issues or questions, contact: info@regencycommercialcleaning.com
