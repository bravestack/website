import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index?: number
  className?: string
}

export function FeatureCard({ icon: Icon, title, description, index = 0, className }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "group relative bg-white rounded-[var(--radius-lg)] p-6 border border-neutral-200 shadow-[var(--shadow-sm)] transition-all duration-[var(--duration-base)] hover:shadow-[var(--shadow-md)] hover:-translate-y-1",
        className
      )}
    >
      {/* Icon container */}
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-[var(--radius-md)] bg-sunset-100 mb-4 transition-colors group-hover:bg-sunset-200">
        <Icon className="w-7 h-7 text-sunset-500" />
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-lg text-ink mb-2">
        {title}
      </h3>
      <p className="text-neutral-600 text-base leading-relaxed">
        {description}
      </p>

      {/* Hover border effect */}
      <div className="absolute inset-0 rounded-[var(--radius-lg)] border-2 border-transparent group-hover:border-sunset-500/20 transition-colors pointer-events-none" />
    </motion.div>
  )
}
