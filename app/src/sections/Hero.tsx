import { ArrowDown, Sun, Zap, Shield, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/scrollTo';

const features = [
  { icon: Sun, text: 'Impianti Fotovoltaici' },
  { icon: Zap, text: 'Efficienza Energetica' },
  { icon: Shield, text: 'Sicurezza sul Lavoro' },
  { icon: FileCheck, text: 'Pratiche GSE & Enel' },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Presentazione Studio Costanzo-Pagano"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" aria-hidden="true" />
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a5f' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-100/30 to-transparent rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-sm font-medium text-[#1e3a5f]">
                Studio di Ingegneria Professionale
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Soluzioni di{' '}
              <span className="text-gradient">Ingegneria</span> per il Tuo
              Futuro Energetico
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Progettazione impianti fotovoltaici, consulenza energetica,
              sicurezza sul lavoro e gestione pratiche GSE. Esperienza e
              professionalità al servizio della transizione energetica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection('#contatti')}
                className="bg-[#1e3a5f] hover:bg-[#152d4a] text-white px-8 py-6 text-base font-semibold shadow-lg shadow-blue-900/20"
              >
                Richiedi Consulenza
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#servizi')}
                className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-8 py-6 text-base font-semibold transition-all"
              >
                Scopri i Servizi
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8a] rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block" aria-hidden="true">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/10 p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <Sun className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Energia Solare
                    </h3>
                    <p className="text-gray-500">
                      Soluzioni fotovoltaiche su misura
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Risparmio Energetico
                        </p>
                        <p className="text-sm text-gray-500">
                          Fino al 70% in bolletta
                        </p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-green-600">
                      -70%
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <FileCheck className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Pratiche Complete
                        </p>
                        <p className="text-sm text-gray-500">
                          GSE, Enel, Autorizzazioni
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-blue-600">
                      100%
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-amber-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Sicurezza Garantita
                        </p>
                        <p className="text-sm text-gray-500">
                          Normative vigenti
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-amber-600">
                      OK
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-16 -left-6 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8a] text-white p-4 rounded-xl shadow-xl">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm text-blue-100">Anni di Esperienza</p>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white" />
                    <div className="w-8 h-8 bg-amber-500 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      500+ Progetti
                    </p>
                    <p className="text-xs text-gray-500">Completati</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Scopri di più</span>
          <button
            onClick={() => scrollToSection('#chi-siamo')}
            aria-label="Scorri alla sezione Chi Siamo"
            className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow animate-bounce"
          >
            <ArrowDown className="w-5 h-5 text-[#1e3a5f]" />
          </button>
        </div>
      </div>
    </section>
  );
}
