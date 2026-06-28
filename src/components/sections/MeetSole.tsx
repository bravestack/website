import { motion } from "framer-motion"
import { Mic, Sparkles, MapPin } from "lucide-react"
import { PhoneMockup } from "@/components/shared/PhoneMockup"
import telaIA from "@/assets/images/sole-screen.jpeg"

export function MeetSole() {
  return (
    <section id="sole" className="section bg-neutral-50 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockup with IA screen */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <PhoneMockup>
              <img
                src={telaIA}
                alt="Solê - Assistente de IA"
                className="w-full h-full object-cover"
              />
            </PhoneMockup>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <span className="eyebrow flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4" />
              Conheça a Solê
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-ink mb-6">
              Uma amiga local,
              <br />
              <span className="text-sunset-500">sempre com você</span>
            </h2>

            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              A Solê nasceu para aproximar turistas da cultura e da história dos municípios do Rio Grande do Norte. Como uma verdadeira amiga local, ela conhece cada canto, cada história e cada segredo das cidades potiguares.
            </p>

            <div className="space-y-6 mt-10">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-[var(--radius-md)] bg-sunset-100 flex items-center justify-center">
                  <Mic className="w-6 h-6 text-sunset-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-ink mb-1">
                    Conversa natural
                  </h3>
                  <p className="text-neutral-600">
                    Pergunte em português, como se estivesse conversando com um amigo. A Solê entende e responde de forma natural.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-[var(--radius-md)] bg-sea-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-sea-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-ink mb-1">
                    Conhecimento local
                  </h3>
                  <p className="text-neutral-600">
                    Ela conhece as praias, dunas, fortes, gastronomia e toda a história do RN. De Ponta Negra a Genipabu, ela está lá.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
