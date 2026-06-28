import { motion } from "framer-motion"
import { Smartphone, Building, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SoleAvatar } from "@/components/shared/SoleAvatar"

export function CTA() {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* Main CTA - For tourists */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-ink rounded-[var(--radius-2xl)] p-8 md:p-12 lg:p-16 text-white text-center overflow-hidden mb-8"
        >
          {/* Background effects - inverted positions */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-sunset-700/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="relative z-10">
            {/* Sole avatar */}
            <div className="flex justify-center mb-8">
              <SoleAvatar size="lg" />
            </div>

            <h2
              className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-16"
              style={{ color: '#EC5E37' }}
            >
              A Solê está esperando você
            </h2>

            <div className="flex justify-center mt-10">
              <a href="#qrcode">
                <Button
                  variant="primary"
                  size="lg"
                  iconLeft={<Smartphone className="w-5 h-5" />}
                >
                  Baixe o app
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Secondary CTA - For partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-sea-50 rounded-[var(--radius-xl)] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-[var(--radius-lg)] bg-sea-100 flex items-center justify-center flex-shrink-0">
              <Building className="w-7 h-7 text-sea-600" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-ink mb-1">
                É gestor público ou parceiro?
              </h3>
              <p className="text-neutral-600">
                Leve o Explore para o seu município e transforme o turismo local.
              </p>
            </div>
          </div>
          <Button
            variant="secondary"
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            Fale conosco
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
