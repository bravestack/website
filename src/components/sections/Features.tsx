import { motion } from "framer-motion"
import { MessageCircleQuestion, BookOpen, MapPin, Route } from "lucide-react"
import { FeatureCard } from "@/components/shared/FeatureCard"

const features = [
  {
    icon: MessageCircleQuestion,
    title: "Responde suas dúvidas",
    description:
      "Pergunte sobre horários, preços, como chegar, o que vestir. A Solê tem todas as respostas na ponta da língua.",
  },
  {
    icon: BookOpen,
    title: "Conta histórias",
    description:
      "Descubra as lendas, curiosidades e a história por trás de cada lugar. Turismo cultural de verdade.",
  },
  {
    icon: MapPin,
    title: "Recomenda atrações",
    description:
      "Baseado no seu perfil e preferências, a Solê sugere os melhores pontos turísticos, restaurantes e experiências.",
  },
  {
    icon: Route,
    title: "Cria roteiros personalizados",
    description:
      "Diga quantos dias você tem e o que gosta. A Solê monta um roteiro completo, otimizado e sob medida.",
  },
]

export function Features() {
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
          <span className="eyebrow mb-4 block">Como a Solê ajuda você</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-ink mb-4">
            Tudo que você precisa,
            <br />
            <span className="text-sea-500">em um só lugar</span>
          </h2>
          <p className="text-lg text-neutral-600">
            A Solê é mais do que um guia. É sua companheira de viagem inteligente.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
