
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div 
      className={cn(
        "relative isolate overflow-hidden transform transition-all duration-300",
        "backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10", 
        "rounded-xl shadow-lg",
        "before:absolute before:inset-0 before:z-[-1] before:bg-gradient-to-br before:from-primary/10 before:to-accent/5 before:opacity-70",
        "after:absolute after:inset-0 after:z-[-2] after:bg-gradient-to-tr after:from-primary/5 after:via-transparent after:to-accent/5 after:opacity-50",
        className
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-70"></div>
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-70"></div>
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent opacity-70"></div>
      
      {/* 3D lighting effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity pointer-events-none"></div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
