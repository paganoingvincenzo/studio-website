import nodemailer from 'nodemailer';

export default async function handler(req, res) {
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
        secure: true,
        auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
        },
  });

  try {
        // Invia la mail agli indirizzi di studio con reply-to impostato al mittente
      await transporter.sendMail({
              from: `"Studio Costanzo-Pagano" <${process.env.MAIL_USER}>`,
              to: ['vpagano@libero.it', 'giovannicostanzo@libero.it'],
              replyTo: email,
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
}
