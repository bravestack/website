import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-semibold transition-colors",
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        outline: "bg-transparent border",
      },
      tone: {
        primary: "",
        sea: "",
        sand: "",
        neutral: "",
      },
      size: {
        sm: "px-2 py-0.5 text-xs rounded-[var(--radius-xs)]",
        md: "px-3 py-1 text-sm rounded-[var(--radius-sm)]",
        lg: "px-4 py-1.5 text-base rounded-[var(--radius-md)]",
      },
    },
    compoundVariants: [
      // Solid variants
      { variant: "solid", tone: "primary", className: "bg-sunset-500 text-white" },
      { variant: "solid", tone: "sea", className: "bg-sea-500 text-white" },
      { variant: "solid", tone: "sand", className: "bg-sand-400 text-ink" },
      { variant: "solid", tone: "neutral", className: "bg-neutral-200 text-ink" },
      // Soft variants
      { variant: "soft", tone: "primary", className: "bg-sunset-100 text-sunset-700" },
      { variant: "soft", tone: "sea", className: "bg-sea-100 text-sea-700" },
      { variant: "soft", tone: "sand", className: "bg-sand-100 text-sand-700" },
      { variant: "soft", tone: "neutral", className: "bg-neutral-100 text-neutral-700" },
      // Outline variants
      { variant: "outline", tone: "primary", className: "border-sunset-500 text-sunset-500" },
      { variant: "outline", tone: "sea", className: "border-sea-500 text-sea-500" },
      { variant: "outline", tone: "sand", className: "border-sand-500 text-sand-600" },
      { variant: "outline", tone: "neutral", className: "border-neutral-300 text-neutral-600" },
    ],
    defaultVariants: {
      variant: "soft",
      tone: "primary",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  iconLeft?: React.ReactNode
}

function Badge({ className, variant, tone, size, iconLeft, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, tone, size }), className)} {...props}>
      {iconLeft}
      {children}
    </span>
  )
}

export { Badge, badgeVariants }
