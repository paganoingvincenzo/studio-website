import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export default async function handler(req: Request) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { name, email, phone, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Nome, email e messaggio sono obbligatori' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Email non valida' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await resend.emails.send({
      from: 'Studio Costanzo-Pagano <onboarding@resend.dev>',
      to: ['vpagano@libero.it', 'giovannicostanzo@libero.it'],
      subject: `Nuovo messaggio da ${name}${subject ? ` - ${subject}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f;">Nuovo messaggio dal sito Studio Costanzo-Pagano</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Telefono:</strong> ${phone}</p>` : ''}
            ${subject ? `<p style="margin: 10px 0;"><strong>Oggetto:</strong> ${subject}</p>` : ''}
          </div>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #1e3a5f;">Messaggio:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">Questo messaggio è stato inviato tramite il form di contatto del sito Studio Costanzo-Pagano.</p>
        </div>
      `,
      text: `
Nuovo messaggio dal sito Studio Costanzo-Pagano

Nome: ${name}
Email: ${email}
${phone ? `Telefono: ${phone}` : ''}
${subject ? `Oggetto: ${subject}` : ''}

Messaggio:
${message}

---
Questo messaggio è stato inviato tramite il form di contatto del sito Studio Costanzo-Pagano.
      `
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ error: 'Errore nell\'invio del messaggio' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
