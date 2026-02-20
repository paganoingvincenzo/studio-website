import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non consentito" });
  }

  const { nome, email, telefono, servizio, messaggio } = req.body;

  if (!nome || !email || !messaggio) {
    return res.status(400).json({
      error: "I campi nome, email e messaggio sono obbligatori.",
    });
  }

  // Log per verificare le variabili ambiente
  console.log(
    "Sto per inviare email con:",
    process.env.RESEND_API_KEY,
    process.env.MAIL_TO_1,
    process.env.MAIL_TO_2
  );

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [process.env.MAIL_TO_1, process.env.MAIL_TO_2],
      replyTo: email,
      subject: `Nuova richiesta da ${nome}`,
      html: `
        <h2>Nuova richiesta dal sito</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono || "N/A"}</p>
        <p><strong>Servizio:</strong> ${servizio || "N/A"}</p>
        <p><strong>Messaggio:</strong> ${messaggio}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Errore durante l'invio del messaggio:", error);
    return res.status(500).json({ error: "Errore durante l'invio del messaggio." });
  }
}
