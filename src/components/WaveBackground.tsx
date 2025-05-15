
import { cn } from "@/lib/utils";
import React from "react";

interface WaveBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function WaveBackground({ className, children }: WaveBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-primary/5 to-transparent animate-wave" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-accent/5 to-transparent animate-wave" style={{ animationDelay: '-5s' }} />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
