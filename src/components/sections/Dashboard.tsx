import { motion } from "framer-motion"
import { Users, MapPin, Headphones, MessageCircle, BarChart3 } from "lucide-react"
import { StatCard } from "@/components/shared/StatCard"
import { Badge } from "@/components/ui/badge"
import dashboard from "@/assets/images/dashboard2.webp"

const stats = [
  { icon: Users, label: "Usuários ativos", value: 5208, delta: 12.4, iconTone: "sunset" as const },
  { icon: MapPin, label: "Visitantes totais", value: 34944, delta: 8.1, iconTone: "sea" as const },
  { icon: Headphones, label: "Plays do guia", value: 17241, delta: 21.3, iconTone: "sand" as const },
  { icon: MessageCircle, label: "Perguntas feitas", value: 41328, delta: 3.2, iconTone: "ink" as const },
]

export function Dashboard() {
  return (
    <section id="dashboard" className="section bg-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="eyebrow mb-4 block flex items-center justify-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Para gestores e IGRs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-ink mb-4">
            Inteligência em tempo real
            <br />
            <span className="text-sunset-500">para a sua IGR</span>
          </h2>
          <p className="text-lg text-neutral-600">
            O painel do Explore é assinado pela IGR ou secretaria de turismo do município. Dados nascidos no campo — do app do turista para a tela do gestor, sem intermediários.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              delta={stat.delta}
              iconTone={stat.iconTone}
            />
          ))}
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Browser frame */}
          <div className="bg-neutral-800 rounded-t-[var(--radius-xl)] p-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-neutral-700 rounded-md px-4 py-1 text-xs text-neutral-400 font-mono">
                dashboard.explore.tec.br
              </div>
            </div>
            <Badge variant="solid" tone="sea" size="sm">
              Ao vivo
            </Badge>
          </div>

          {/* Screenshot */}
          <div className="rounded-b-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-xl)] border border-neutral-200 border-t-0">
            <img
              src={dashboard}
              alt="Dashboard do Explore - Estatísticas de visitantes"
              className="w-full h-auto"
            />
          </div>

          {/* Floating annotation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute -right-4 top-1/4 hidden lg:block"
          >
            <div className="bg-white rounded-[var(--radius-lg)] p-4 shadow-[var(--shadow-lg)] border border-neutral-200 max-w-[200px]">
              <div className="text-xs text-neutral-500 mb-1">Tendência</div>
              <div className="font-mono font-bold text-lg text-sea-500">+21.3%</div>
              <div className="text-sm text-neutral-600">mais plays do guia neste mês</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
