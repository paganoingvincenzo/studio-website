import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Usa POST" });
  }

  try {
    let data = req.body;

    // Fallback se body non è parsato
    if (!data || typeof data === "string") {
      let raw = "";
      for await (const chunk of req) {
        raw += chunk;
      }
      data = JSON.parse(raw || "{}");
    }

    const { nome, email, telefono, servizio, messaggio } = data;

    if (!nome || !email || !messaggio) {
      return res.status(400).json({ error: "Campi obbligatori mancanti" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Contatto <info@tuodominio.it>",
      to: [process.env.MAIL_TO_1, process.env.MAIL_TO_2].filter(Boolean),
      replyTo: email,
      subject: `Nuova richiesta da ${nome}`,
      html: `
        <h2>Nuova richiesta dal sito</h2>
        <p><b>Nome:</b> ${nome}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefono:</b> ${telefono || "N/A"}</p>
        <p><b>Servizio:</b> ${servizio || "N/A"}</p>
        <p><b>Messaggio:</b><br>${String(messaggio).replace(/\n/g, "<br>")}</p>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error("API ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
}
