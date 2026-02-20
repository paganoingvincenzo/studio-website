const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
    if (req.method !== "POST") {
          return res.status(405).json({ error: "Metodo non consentito" });
    }

    const { nome, email, telefono, servizio, messaggio } = req.body;

    if (!nome || !email || !messaggio) {
          return res.status(400).json({ error: "Campi obbligatori mancanti" });
    }

    const transporter = nodemailer.createTransport({
          host: "smtp.libero.it",
          port: 465,
          secure: true,
          auth: {
                  user: process.env.MAIL_USER,
                  pass: process.env.MAIL_PASS,
          },
    });

    try {
          await transporter.sendMail({
                  from: `"Studio Costanzo-Pagano" <${process.env.MAIL_USER}>`,
                  to: ["vpagano@libero.it", "giovannicostanzo@libero.it"],
                  subject: `Nuova richiesta da ${nome || "Sito Web"}`,
                  html: `
                          <h2>Nuova richiesta dal sito</h2>
                                  <p><strong>Nome:</strong> ${nome}</p>
                                          <p><strong>Email:</strong> ${email}</p>
                                                  <p><strong>Telefono:</strong> ${telefono || "N/A"}</p>
                                                          <p><strong>Servizio:</strong> ${servizio || "N/A"}</p>
                                                                  <p><strong>Messaggio:</strong><br>${messaggio}</p>
                                                                        `,
          });
          return res.status(200).json({ success: true });
    } catch (error) {
          console.error("Errore invio email:", error);
          return res.status(500).json({ error: "Errore invio email" });
    }
};
