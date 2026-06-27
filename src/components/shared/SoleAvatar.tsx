import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SoleAvatarProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  animate?: boolean
}

const sizeMap = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
}

export function SoleAvatar({ className, size = "md", animate = true }: SoleAvatarProps) {
  return (
    <div className={cn("relative", sizeMap[size], className)}>
      {/* Outer ring - pulsing */}
      {animate && (
        <motion.div
          className="absolute inset-0 rounded-full bg-sunset-500/20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Middle ring */}
      {animate && (
        <motion.div
          className="absolute inset-[15%] rounded-full bg-sunset-500/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
      )}

      {/* Inner ring */}
      {animate && (
        <motion.div
          className="absolute inset-[30%] rounded-full bg-sunset-500/40"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 0.4, 0.8],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        />
      )}

      {/* Core - solid */}
      <motion.div
        className="absolute inset-[35%] rounded-full bg-sunset-500 shadow-[var(--shadow-brand)]"
        animate={animate ? {
          scale: [1, 1.05, 1],
        } : undefined}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
