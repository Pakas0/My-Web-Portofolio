import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "orange" | "green" | "blue" | "yellow" | "red"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-white/10 text-foreground": variant === "default",
          "border-transparent bg-accent-orange/20 text-accent-orange": variant === "orange",
          "border-transparent bg-accent-green/20 text-accent-green": variant === "green",
          "border-transparent bg-accent-blue/20 text-accent-blue": variant === "blue",
          "border-transparent bg-accent-yellow/20 text-accent-yellow": variant === "yellow",
          "border-transparent bg-accent-red/20 text-accent-red": variant === "red",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
