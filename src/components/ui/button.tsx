import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-[var(--duration-fast)] ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-500/45 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary:
          "bg-sunset-500 text-white hover:bg-sunset-600 hover:shadow-[var(--shadow-brand)]",
        secondary:
          "bg-sea-500 text-white hover:bg-sea-600 hover:shadow-[var(--shadow-sea)]",
        outline:
          "border-2 border-sunset-500 text-sunset-500 bg-transparent hover:bg-sunset-50",
        ghost:
          "text-ink hover:bg-neutral-100",
        accent:
          "bg-sand-400 text-ink hover:bg-sand-500",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-[var(--radius-pill)]",
        md: "h-11 px-6 text-base rounded-[var(--radius-pill)]",
        lg: "h-14 px-8 text-lg rounded-[var(--radius-pill)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, iconLeft, iconRight, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {iconLeft}
        {children}
        {iconRight}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
