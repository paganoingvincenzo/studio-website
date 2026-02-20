import { Resend } from "resend";

export const config = {
  runtime: "nodejs18.x",
};

export default async function (req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Metodo non consentito" });
    return;
  }

  let body = "";

  req.on("data", chunk => {
    body += chunk.toString();
  });

  req.on("end", async () => {
    const { nome, email, telefono, servizio, messaggio } = JSON.parse(body);

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

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Errore durante l'invio del messaggio:", error);
      res.status(500).json({ error: "Errore durante l'invio del messaggio." });
    }
  });
}
