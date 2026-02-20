import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Indirizzo',
    content: 'Via IV Novembre 137',
    subContent: '81038 Trentola-Ducenta (CE)',
  },
  {
    icon: Phone,
    title: 'Telefono',
    content: '331 928 4991 (Ing. Costanzo) · 338 892 0421 (Ing. Pagano)',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'giovannicostanzo@libero.it',
    subContent: 'vpagano@libero.it',
    href: 'mailto:giovannicostanzo@libero.it',
  },
  {
    icon: Clock,
    title: 'Orari',
    content: 'Lun – Ven: 9:00 – 18:00',
    subContent: 'Sabato su appuntamento',
  },
];

const serviceOptions = [
  'Impianti Fotovoltaici',
  'Efficienza Energetica',
  'Detrazioni Fiscali / Conto Termico',
  'Sicurezza sul Lavoro',
  'Pratiche Tecniche',
  'Consulenza Tecnica Legale',
  'Bando Agrisolare',
  'Impianti Termici / HVAC',
  'Altro',
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!privacyAccepted) {
      alert("Devi accettare l'informativa sulla privacy per inviare il messaggio.");
      return;
    }

    const data = {
      nome: formData.name,
      email: formData.email,
      telefono: formData.phone,
      servizio: formData.service,
      messaggio: formData.message,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Richiesta inviata con successo!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        setPrivacyAccepted(false);
        setIsSubmitted(true);

        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        alert("Errore durante l'invio della richiesta.");
      }
    } catch (error) {
      console.error(error);
      alert("Errore di connessione al server.");
    }
  };

  return (
    <section id="contatti" aria-label="Contatti" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-[#1e3a5f] rounded-full text-sm font-semibold mb-4">
            Contattaci
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Richiedi una Consulenza Gratuita
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Siamo a tua disposizione per qualsiasi informazione. Compila il
            modulo o contattaci direttamente per un preventivo personalizzato.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8a] rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-[#1e3a5f] transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.content}</p>
                  )}
                  {item.subContent && (
                    <p className="text-sm text-gray-500">{item.subContent}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://chat.whatsapp.com/BSFyvZPGS3I4ox0RXNmWK9?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
            >
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-0.5">WhatsApp</h4>
                <p className="text-sm text-gray-500">Scrivici su WhatsApp per una risposta rapida</p>
              </div>
            </a>

            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                title="Posizione Studio Costanzo-Pagano su Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.978564632836!2d14.175514676550796!3d40.93809697136052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b083c7069733d%3A0x1d0b006c642289c0!2sVia%20IV%20Novembre%2C%20137%2C%2081038%20Trentola-Ducenta%20CE!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-6 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8a] rounded-2xl text-white">
              <h4 className="font-semibold mb-2">Zona di Operatività</h4>
              <p className="text-sm text-blue-100 mb-4">
                Operiamo principalmente nelle province di Caserta e Napoli e
                in tutta la Campania, con disponibilità a spostamenti su
                tutto il territorio nazionale per progetti di rilevanza.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Campania, Lazio e tutta Italia</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-gray-50 p-8 rounded-2xl">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center" role="alert">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Messaggio Inviato!
                  </h3>
                  <p className="text-gray-600">
                    Ti risponderemo al più presto. Grazie per averci contattato.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome e Cognome *</Label>
                      <Input
                        id="name"
                        name="nome"
                        placeholder="Mario Rossi"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        autoComplete="name"
                        className="bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="mario@esempio.it"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        autoComplete="email"
                        className="bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefono</Label>
                      <Input
                        id="phone"
                        name="telefono"
                        type="tel"
                        placeholder="+39 123 456 7890"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        autoComplete="tel"
                        className="bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Servizio di Interesse</Label>
                      <Select
                        name="servizio"
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                      >
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Seleziona un servizio" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Messaggio *</Label>
                    <Textarea
                      id="message"
                      name="messaggio"
                      placeholder="Descrivi la tua richiesta..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="bg-white resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#1e3a5f] focus:ring-[#1e3a5f]"
                      required
                    />
                    <label htmlFor="privacy" className="text-xs text-gray-500">
                      Ho letto e accetto l'informativa sulla privacy ai sensi del
                      Regolamento UE 2016/679 (GDPR) e del D.Lgs. 196/2003 e s.m.i.
                      I dati saranno trattati esclusivamente per rispondere alla richiesta. *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#1e3a5f] hover:bg-[#152d4a] text-white py-6 text-base font-semibold disabled:opacity-50"
                    disabled={!privacyAccepted}
                  >
                    <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                    Invia Richiesta
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
