import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non consentito" });
  }

  let body = "";

  await new Promise((resolve) => {
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", resolve);
  });

  const { nome, email, telefono, servizio, messaggio } = JSON.parse(body || "{}");

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
      from: `"Sito Web" <${process.env.MAIL_USER}>`,
      to: ["vpagano@libero.it", "giovannicostanzo@libero.it"],
      subject: `Nuova richiesta da ${nome || "Sito Web"}`,
      html: `
        <h2>Nuova richiesta dal sito</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        <p><strong>Servizio:</strong> ${servizio}</p>
        <p><strong>Messaggio:</strong><br>${messaggio}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Errore invio email:", err);
    return res.status(500).json({ error: "Errore invio email" });
  }
}

