// api/contact.js
export default async function handler(request, response) {
  // Handle CORS preflight options request
  if (request.method === 'OPTIONS') {
    response.setHeader('Access-Control-Allow-Credentials', 'true');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    response.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { email, pipelines } = request.body || {};

  if (!email) {
    return response.status(400).json({ error: 'Secure communication email is required.' });
  }

  const webhookUrl = process.env.WEBHOOK_URL;
  const resendApiKey = process.env.RESEND_API_KEY;
  const receiveEmail = process.env.RECEIVER_EMAIL || email;

  let webhookStatus = 'Not configured';
  let emailStatus = 'Not configured';

  // 1. Trigger external webhook (e.g. n8n or Make)
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          pipelines,
          timestamp: new Date().toISOString(),
          source: 'Manitejs Portfolio Configurator'
        })
      });
      webhookStatus = res.ok ? 'Success' : `Failed (${res.status})`;
    } catch (err) {
      webhookStatus = `Error: ${err.message}`;
    }
  }

  // 2. Dispatch email notification via Resend API
  if (resendApiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          from: 'Manitejs Portfolio <onboarding@resend.dev>',
          to: receiveEmail,
          subject: 'System Initialization Request',
          html: `
            <div style="font-family: monospace; background-color: #faf8f5; color: #111314; padding: 24px; border: 1px solid #d0382b; max-width: 600px;">
              <h2 style="color: #d0382b; border-bottom: 2px solid #111314; padding-bottom: 8px;">[ SYSTEM INITIALIZATION REQUEST ]</h2>
              <p>A new client has requested custom pipeline deployments via the portfolio configurator form.</p>
              <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; width: 150px;">Secure Email:</td>
                  <td style="padding: 6px 0;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold;">Pipelines:</td>
                  <td style="padding: 6px 0;">${(pipelines || []).join(', ')}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold;">Timestamp:</td>
                  <td style="padding: 6px 0;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
              <div style="margin-top: 24px; border-top: 1px solid rgba(17,19,20,0.1); padding-top: 16px; font-size: 11px; opacity: 0.6;">
                Auto-dispatched via Vercel Serverless Gateway.
              </div>
            </div>
          `
        })
      });
      emailStatus = res.ok ? 'Success' : `Failed (${res.status})`;
    } catch (err) {
      emailStatus = `Error: ${err.message}`;
    }
  }

  return response.status(200).json({
    message: 'Pipeline executed successfully',
    webhookStatus,
    emailStatus
  });
}
