/**
 * Vercel Serverless Function: Handle lead form submissions
 * To add email notifications, configure SendGrid or similar email service
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fname, phone, email, facility, notes } = req.body;

  // Validate required fields
  if (!fname || !phone || !email || !facility) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // TODO: Add your email service integration here
    // Example: SendGrid, Mailgun, AWS SES, or webhook to your CRM
    
    // Log the lead (visible in Vercel logs)
    console.log('New Lead Received:', {
      name: fname,
      phone,
      email,
      facility,
      notes,
      timestamp: new Date().toISOString()
    });

    // In production, send email or webhook here
    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'info@regencycommercialcleaning.com',
    //   from: 'noreply@regencycommercialcleaning.com',
    //   subject: `New Lead: ${fname} - ${facility}`,
    //   html: `<p>New cleaning quote request from ${fname}</p>...`
    // });

    return res.status(200).json({ 
      success: true, 
      message: 'Lead received. We will contact you within 24 hours.' 
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ error: 'Error processing form' });
  }
}
