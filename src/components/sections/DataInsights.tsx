import { motion } from "framer-motion"
import { TrendingUp, Users, MapPinned, Brain, Target, Lightbulb } from "lucide-react"
import dashboardSole from "@/assets/images/image.webp"

const insights = [
  {
    icon: Users,
    title: "Perfil do visitante",
    description: "Entenda de onde vêm os turistas, quanto tempo ficam e o que mais procuram.",
  },
  {
    icon: MapPinned,
    title: "Atrações populares",
    description: "Veja quais pontos turísticos são mais visitados e em quais horários.",
  },
  {
    icon: Brain,
    title: "Perguntas frequentes",
    description: "Descubra o que os turistas mais querem saber sobre sua cidade.",
  },
  {
    icon: Target,
    title: "Decisões estratégicas",
    description: "Dados para direcionar investimentos em infraestrutura e marketing.",
  },
]

export function DataInsights() {
  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow flex items-center gap-2 mb-4">
              <Lightbulb className="w-4 h-4" />
              O ciclo de inteligência
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-ink mb-6">
              Cada visita vira dado.{" "}
              <span className="text-sea-500">Cada dado vira decisão.</span>
            </h2>

            <p className="text-lg text-neutral-600 leading-relaxed mb-12">
              Cada pergunta feita à Solê, cada rota criada, cada ponto visitado — tudo alimenta o painel do gestor em tempo real. É o primeiro dado que vem diretamente do turista, capturado no momento da visita, não em formulários pós-viagem que podem nem chegar.
            </p>

            {/* Insights grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {insights.map((insight, index) => (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-[var(--radius-sm)] bg-sea-100 flex items-center justify-center">
                    <insight.icon className="w-5 h-5 text-sea-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink text-sm mb-0.5">
                      {insight.title}
                    </h3>
                    <p className="text-neutral-500 text-sm">
                      {insight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dashboard screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-xl)] border border-neutral-200">
              <img
                src={dashboardSole}
                alt="Relatório da Solê - Palavras mais buscadas e perguntas frequentes"
                className="w-full h-auto"
              />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-[var(--radius-lg)] p-4 shadow-[var(--shadow-lg)] border border-neutral-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sunset-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-sunset-500" />
                </div>
                <div>
                  <div className="font-mono font-bold text-xl text-ink">74.2%</div>
                  <div className="text-sm text-neutral-500">Taxa de conclusão</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
