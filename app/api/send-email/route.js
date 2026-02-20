import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { nome, email, telefono, servizio, messaggio } = body;

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

    return Response.json({ success: true });
  } catch (err) {
    console.error("Errore invio email:", err);
    return Response.json({ error: "Errore invio email" }, { status: 500 });
  }
}

