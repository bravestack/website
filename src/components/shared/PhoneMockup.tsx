import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PhoneMockupProps {
  children: React.ReactNode
  className?: string
}

export function PhoneMockup({ children, className }: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative w-[280px] sm:w-[320px] mx-auto",
        className
      )}
    >
      {/* Phone frame */}
      <div className="bg-[#16140F] rounded-[42px] sm:rounded-[46px] p-2 sm:p-2.5 shadow-[var(--shadow-xl)]">
        {/* Screen */}
        <div className="relative rounded-[34px] sm:rounded-[38px] overflow-hidden bg-white aspect-[9/19.5]">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
          {children}
        </div>
      </div>

      {/* Reflection effect */}
      <div className="absolute inset-0 rounded-[42px] sm:rounded-[46px] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
    </motion.div>
  )
}
