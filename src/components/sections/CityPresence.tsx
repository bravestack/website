import { motion } from "framer-motion"
import { QrCode, Building2, Plane, Hotel, UtensilsCrossed, Signpost } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const touchpoints = [
  {
    icon: Plane,
    title: "Aeroporto",
    description: "Logo na chegada, encontre totens com QR Code para baixar o app.",
  },
  {
    icon: Building2,
    title: "Rodoviária",
    description: "Placas informativas com acesso direto à Solê em cada terminal.",
  },
  {
    icon: Hotel,
    title: "Hotéis e pousadas",
    description: "Material nos quartos e recepção para você começar a explorar.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurantes",
    description: "QR Codes nas mesas para descobrir a história da gastronomia local.",
  },
  {
    icon: Signpost,
    title: "Pontos turísticos",
    description: "Placas inteligentes com áudio-guia instantâneo via Solê.",
  },
  {
    icon: QrCode,
    title: "Por toda parte",
    description: "Onde você for, o Explore está lá para te ajudar a descobrir mais.",
  },
]

export function CityPresence() {
  return (
    <section id="cidade" className="section bg-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="eyebrow mb-4 block">Presença física</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-ink mb-4">
            O Explore faz parte
            <br />
            <span className="text-sunset-500">da cidade</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Ao chegar no Rio Grande do Norte, você encontra o Explore em todos os lugares. É só apontar o celular e começar a descobrir.
          </p>
        </motion.div>

        {/* Touchpoints grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {touchpoints.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-neutral-50 rounded-[var(--radius-lg)] p-6 border border-neutral-200 hover:border-sea-500/30 transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-[var(--radius-md)] bg-sea-100 mb-4 transition-colors group-hover:bg-sea-200">
                <item.icon className="w-6 h-6 text-sea-500" />
              </div>
              <h3 className="font-display font-bold text-lg text-ink mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-600 text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* QR Code visual */}
        <motion.div
          id="qrcode"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-gradient-to-br from-sea-500 to-sea-700 rounded-[var(--radius-2xl)] p-8 md:p-12 text-white overflow-hidden scroll-mt-24"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="soft" tone="sea" className="mb-4 bg-white/20 text-white border-white/20">
                Escaneie e explore
              </Badge>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl mb-4">
                Um QR Code é tudo que você precisa
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Em cada ponto de contato, um simples scan conecta você com a Solê. Sem downloads complicados, sem cadastros longos. É chegar e usar.
              </p>
            </div>

            {/* QR Code mockup */}
            <div className="flex justify-center">
              <div className="bg-white rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-xl)]">
                <div className="w-40 h-40 bg-ink rounded-[var(--radius-md)] grid grid-cols-5 gap-1 p-3">
                  {[...Array(25)].map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-sm ${
                        [0, 1, 2, 4, 5, 6, 10, 14, 18, 19, 20, 22, 23, 24].includes(i)
                          ? "bg-white"
                          : "bg-transparent"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-center text-sm text-neutral-500 mt-3 font-medium">
                  explore.tec.br
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
