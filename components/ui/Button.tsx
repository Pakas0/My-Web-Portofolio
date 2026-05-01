import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "solid" | "ghost"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-8 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50",
          {
            // Primary Transparent Pill
            "rounded-full bg-transparent text-foreground border border-border hover:bg-[rgba(255,255,255,0.1)] btn-slide": variant === "primary",
            // White Solid Pill
            "rounded-full bg-white text-black hover:bg-white/90": variant === "solid",
            // Ghost Button
            "rounded bg-transparent text-foreground hover:bg-white/5": variant === "ghost",
            // Sizes
            "h-10 px-6 py-2": size === "default",
            "h-9 px-4": size === "sm",
            "h-11 px-8": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
