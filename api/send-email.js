const nodemailer = require('nodemailer');

/**
 * API route handler to send contact form submissions via email.
 *
 * This function expects a POST request with JSON payload containing
 * the following fields:
 * - nome: string (required)
 * - email: string (required)
 * - telefono: string (optional)
 * - servizio: string (optional)
 * - messaggio: string (required)
 *
 * Usa Nodemailer per connettersi al server SMTP di Libero. Secondo le
 * impostazioni ufficiali di Libero, il server in uscita (SMTP) è
 * `smtp.libero.it` e richiede SSL/TLS sulla porta 465 con autenticazione
 * tramite l’indirizzo e la password della casella Libero:contentReference[oaicite:0]{index=0}.  
 * La documentazione di Nodemailer specifica che il flag `secure` deve essere
 * impostato a `true` quando ci si connette sulla porta 465:contentReference[oaicite:1]{index=1}.
 */
module.exports = async (req, res) => {
  // Consente solo richieste POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  // Estrae i campi dal corpo della richiesta
  const { nome, email, telefono, servizio, messaggio } = req.body;

  // Valida i campi obbligatori
  if (!nome || !email || !messaggio) {
    return res.status(400).json({
      error: 'I campi nome, email e messaggio sono obbligatori.',
    });
  }

  // Configura il trasportatore di Nodemailer usando le impostazioni SMTP di Libero
  const transporter = nodemailer.createTransport({
    host: 'smtp.libero.it',
    port: 465,
    secure: true, // deve essere true per la porta 465:contentReference[oaicite:2]{index=2}
    auth: {
      user: process.env.MAIL_USER, // indirizzo email Libero
      pass: process.env.MAIL_PASS, // password della casella Libero
    },
  });

  try {
    // Invia la mail agli indirizzi di studio con reply-to impostato al mittente
    await transporter.sendMail({
      from: `"Studio Costanzo-Pagano" <${process.env.MAIL_USER}>`,
      to: ['vpagano@libero.it', 'giovannicostanzo@libero.it'],
      replyTo: email, // consente di rispondere direttamente al mittente
      subject: `Nuova richiesta da ${nome || 'Sito web'}`,
      html: `
        <h2>Nuova richiesta dal sito</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono || 'N/A'}</p>
        <p><strong>Servizio:</strong> ${servizio || 'N/A'}</p>
        <p><strong>Messaggio:</strong> ${messaggio}</p>
      `,
    });

    // Risponde con successo
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Errore durante l'invio del messaggio:", error);
    return res.status(500).json({ error: "Errore durante l'invio del messaggio." });
  }
};
