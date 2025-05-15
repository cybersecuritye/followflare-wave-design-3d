
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PlatformIcon3DProps {
  icon: ReactNode;
  label: string;
  disabled?: boolean;
  className?: string;
}

export function PlatformIcon3D({ icon, label, disabled = false, className }: PlatformIcon3DProps) {
  return (
    <div className={cn("group flex flex-col items-center", disabled && "opacity-60", className)}>
      <div className="relative perspective-500 mb-3">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-accent/50 rounded-full blur-md transform translate-y-1 opacity-70"></div>
        <div 
          className={cn(
            "w-20 h-20 flex items-center justify-center rounded-full",
            "bg-gradient-to-br from-purple-500 to-pink-500 text-white",
            "transition-transform group-hover:scale-110 duration-300 animate-rotate-3d",
            "shadow-lg shadow-purple-500/20"
          )}
        >
          {icon}
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 bg-purple-500 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
      </div>
      <p className="font-medium relative">
        {label}
        {/* Underline animation */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
      </p>
    </div>
  );
}
