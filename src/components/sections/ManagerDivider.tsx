import { motion } from "framer-motion"
import { BarChart3, ArrowRight } from "lucide-react"

export function ManagerDivider() {
  return (
    <section
      id="gestores"
      className="relative overflow-hidden scroll-mt-[72px]"
      style={{ background: "linear-gradient(150deg, #1C9485 0%, #0E3D38 100%)" }}
    >
      {/* Decorative glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 65%)",
          transform: "translate(30%, -50%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[340px] h-[340px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(236,94,55,0.18) 0%, rgba(236,94,55,0) 65%)",
          transform: "translate(-30%, 50%)",
        }}
      />

      <div className="container relative z-10 py-20 md:py-28">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Para gestores e IGRs
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display font-extrabold text-white leading-[1.04] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", letterSpacing: "-0.025em" }}
          >
            Turismo é um setor com deficiência de dados sobre{" "}
            <span style={{ color: "#F3C350" }}>quem mais importa: o turista.</span>
          </motion.h2>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.82)", maxWidth: "56ch" }}
          >
            Nenhum sistema captura o comportamento do turista em tempo real. Gestores dependem de pesquisas
            anuais e relatórios agregados — dados lentos que geram políticas lentas e oportunidades perdidas.
            O Explore fecha esse gap com dado nascido no campo.
          </motion.p>

          {/* Three contrast cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="grid sm:grid-cols-3 gap-4"
          >
            {/* Hoje */}
            <div
              className="rounded-[18px] p-6"
              style={{
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(4px)",
              }}
            >
              <div
                className="text-xs font-bold tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-mono, monospace)", color: "#F3C350" }}
              >
                Hoje
              </div>
              <p className="font-display font-extrabold text-white text-lg leading-snug mb-2">
                Nenhuma coleta em tempo real.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                A lacuna existe em todo o Brasil — em todas as IGRs.
              </p>
            </div>

            {/* O gap */}
            <div
              className="rounded-[18px] p-6"
              style={{
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(4px)",
              }}
            >
              <div
                className="text-xs font-bold tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-mono, monospace)", color: "#F3C350" }}
              >
                O gap
              </div>
              <p className="font-display font-extrabold text-white text-lg leading-snug mb-2">
                Decisões baseadas em achismo.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                Sem saber o que o turista pergunta, visita e sente, é impossível gerir bem.
              </p>
            </div>

            {/* Explore */}
            <div
              className="rounded-[18px] p-6"
              style={{
                border: "1px solid rgba(236,94,55,0.4)",
                background: "rgba(236,94,55,0.18)",
              }}
            >
              <div
                className="text-xs font-bold tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-mono, monospace)", color: "#F3C350" }}
              >
                Explore
              </div>
              <p className="font-display font-extrabold text-white text-lg leading-snug mb-2">
                O primeiro dado que vem do próprio turista.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                Do ponto turístico para o painel do gestor, em tempo real.
              </p>
            </div>
          </motion.div>

          {/* Arrow hint to scroll on */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 mt-10"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <ArrowRight className="w-4 h-4" />
            <span className="text-sm">Veja o painel de gestão abaixo</span>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
