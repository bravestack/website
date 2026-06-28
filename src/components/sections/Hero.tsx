import { motion } from "framer-motion"
import { Smartphone, Play, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhoneMockup } from "@/components/shared/PhoneMockup"
import telaInicial from "@/assets/images/tela-inicial.webp"

export function Hero() {
  return (
    <section id="conheca" className="relative min-h-screen bg-hero-gradient pt-[72px] overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-16 lg:py-24">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="eyebrow flex items-center gap-2">
                <Sun className="w-4 h-4 text-sea-500" />
                Rio Grande do Norte
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-display font-extrabold leading-[1.02] tracking-tight text-ink mb-6">
              Descubra o RN{" "}
              <br className="hidden sm:block" />
              com a{" "}
              <span className="text-sunset-500">Solê</span>
            </h1>

            {/* Lead */}
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-12">
              Sua assistente virtual de turismo. Conheça a cultura, história e os melhores lugares do Rio Grande do Norte de um jeito único e personalizado.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="#qrcode">
                <Button
                  variant="primary"
                  size="lg"
                  iconLeft={<Smartphone className="w-5 h-5" />}
                >
                  Baixe o app
                </Button>
              </a>
              <a href="#cidade">
                <Button
                  variant="outline"
                  size="lg"
                  iconLeft={<Play className="w-[18px] h-[18px]" />}
                >
                  Veja como funciona
                </Button>
              </a>
            </div>


          </motion.div>

          {/* Phone mockup */}
          <div className="relative flex items-center justify-center">
            {/* Decorative elements - centered behind phone */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-80 h-80 bg-sunset-500/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.25, 0.4, 0.25],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute w-96 h-96 bg-sea-500/15 rounded-full blur-3xl"
              />
            </div>

            <PhoneMockup>
              <img
                src={telaInicial}
                alt="Tela inicial do Explore"
                className="w-full h-full object-cover"
              />
            </PhoneMockup>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FAF7F1"
          />
        </svg>
      </div>
    </section>
  )
}
