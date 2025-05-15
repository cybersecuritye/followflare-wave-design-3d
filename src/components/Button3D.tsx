
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

interface Button3DProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
  asChild?: boolean;
}

export const Button3D = forwardRef<HTMLButtonElement, Button3DProps>(
  ({ children, variant = "primary", size = "default", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative group transition-all duration-300 btn-3d font-medium rounded-lg text-center inline-flex items-center justify-center",
          "overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
          {
            "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700": variant === "primary",
            "bg-white/10 backdrop-blur-md border border-white/20 text-foreground hover:bg-white/20": variant === "secondary",
            "bg-transparent border border-primary/30 text-foreground hover:bg-primary/10": variant === "outline",
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "default",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 overflow-hidden rounded-lg z-0">
          <span className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-white via-transparent to-white duration-1000 group-hover:translate-x-full transform -translate-x-full transition-all"></span>
        </span>
      </button>
    );
  }
);

Button3D.displayName = "Button3D";
