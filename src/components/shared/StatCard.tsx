import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  icon: LucideIcon
  label: string
  value: number
  suffix?: string
  prefix?: string
  delta?: number
  iconTone?: "sunset" | "sea" | "sand" | "ink"
  className?: string
}

const toneMap = {
  sunset: {
    bg: "bg-sunset-100",
    text: "text-sunset-500",
  },
  sea: {
    bg: "bg-sea-100",
    text: "text-sea-500",
  },
  sand: {
    bg: "bg-sand-100",
    text: "text-sand-600",
  },
  ink: {
    bg: "bg-neutral-100",
    text: "text-ink",
  },
}

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out)
      const eased = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(startValue + (end - startValue) * eased)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return { count, ref }
}

function formatNumber(num: number): string {
  return num.toLocaleString("pt-BR")
}

export function StatCard({
  icon: Icon,
  label,
  value,
  suffix = "",
  prefix = "",
  delta,
  iconTone = "sunset",
  className,
}: StatCardProps) {
  const tone = toneMap[iconTone]
  const { count, ref } = useCountUp(value, 2000)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "bg-white rounded-[var(--radius-lg)] p-5 border border-neutral-200 shadow-[var(--shadow-sm)]",
        className
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={cn("p-2.5 rounded-[var(--radius-sm)]", tone.bg)}>
          <Icon className={cn("w-5 h-5", tone.text)} />
        </div>
        {delta !== undefined && (
          <span
            className={cn(
              "text-xs font-semibold px-2 py-0.5 rounded-full",
              delta >= 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            )}
          >
            {delta >= 0 ? "+" : ""}{delta}%
          </span>
        )}
      </div>

      <div className="font-mono font-bold text-2xl text-ink tracking-tight mb-1">
        {prefix}{formatNumber(count)}{suffix}
      </div>

      <div className="text-sm text-neutral-500">{label}</div>
    </motion.div>
  )
}
