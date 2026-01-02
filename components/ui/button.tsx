import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link"
    size?: "sm" | "md" | "lg" | "xl"
    rounded?: "none" | "sm" | "md" | "lg" | "full"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", rounded = "md", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        // Base styles - comum a todos os botões
        const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap"

        // Variant styles - seguindo a paleta Red, Black, White com vibe residencial
        const variants = {
            primary: "bg-primary text-white hover:bg-primary/90 hover:scale-[1.02] shadow-md hover:shadow-lg",
            secondary: "bg-black text-white hover:bg-gray-800 hover:scale-[1.02] shadow-md hover:shadow-lg",
            outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white shadow-sm",
            ghost: "text-foreground hover:bg-gray-50 hover:text-primary",
            link: "text-primary underline-offset-4 hover:underline font-medium"
        }

        // Size styles
        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-12 px-6 text-xs",
            lg: "h-14 px-8 text-sm",
            xl: "h-16 px-10 text-base"
        }

        // Rounded styles
        const roundedStyles = {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            full: "rounded-full"
        }

        return (
            <Comp
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    roundedStyles[rounded],
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
