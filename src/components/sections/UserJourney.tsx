import { motion } from "framer-motion"
import { Plane, Smartphone, Compass, Heart } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface JourneyStep {
  icon: LucideIcon
  step: string
  title: string
  description: string
}

const steps: JourneyStep[] = [
  {
    icon: Plane,
    step: "01",
    title: "Chegada",
    description: "Você chega ao RN e encontra QR Codes do Explore no aeroporto, rodoviária ou hotel.",
  },
  {
    icon: Smartphone,
    step: "02",
    title: "Download",
    description: "Um scan rápido e o app está no seu celular. A Solê te dá as boas-vindas.",
  },
  {
    icon: Compass,
    step: "03",
    title: "Exploração",
    description: "Pergunte o que quiser, monte roteiros, descubra lugares escondidos e histórias únicas.",
  },
  {
    icon: Heart,
    step: "04",
    title: "Encantamento",
    description: "Viva experiências autênticas e leve memórias inesquecíveis do Rio Grande do Norte.",
  },
]

export function UserJourney() {
  return (
    <section className="section bg-neutral-50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="eyebrow mb-4 block">Jornada do turista</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-ink mb-4">
            Da chegada à
            <br />
            <span className="text-sea-500">descoberta</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Uma experiência fluida do primeiro ao último momento da sua viagem.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line - desktop */}
          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-0.5 bg-neutral-200" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative text-center"
              >
                {/* Icon circle */}
                <div className="relative z-10 mx-auto w-[120px] h-[120px] rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center mb-6 shadow-[var(--shadow-sm)]">
                  <div className="w-16 h-16 rounded-full bg-sunset-100 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-sunset-500" />
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-sea-500 text-white text-xs font-mono font-bold flex items-center justify-center shadow-[var(--shadow-sm)]">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-[130px] w-0.5 h-8 bg-neutral-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
