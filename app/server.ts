import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nome, email e messaggio sono obbligatori' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Email non valida' });
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

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: "Errore nell'invio del messaggio" });
  }
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
