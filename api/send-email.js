import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Usa POST" });
  }

  try {
    const { nome, email, telefono, servizio, messaggio } = req.body || {};

    if (!nome || !email || !messaggio) {
      return res.status(400).json({ error: "Campi obbligatori mancanti" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Contatto <info@tuodominio.it>", // meglio di onboarding@
      to: [process.env.MAIL_TO_1, process.env.MAIL_TO_2].filter(Boolean),
      replyTo: email,
      subject: `Nuova richiesta da ${nome}`,
      html: `
        <h2>Nuova richiesta dal sito</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono || "N/A"}</p>
        <p><strong>Servizio:</strong> ${servizio || "N/A"}</p>
        <p><strong>Messaggio:</strong><br>${String(messaggio).replace(/\n/g, "<br>")}</p>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error("Errore API:", err);
    return res.status(500).json({ error: "Errore server" });
  }
}
