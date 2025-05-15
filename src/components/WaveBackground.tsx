
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
        {/* Animated particles */}
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/5"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                animation: 'float 10s infinite ease-in-out'
              }}
            />
          ))}
        </div>

        {/* Wave gradients */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-primary/5 to-transparent animate-wave" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-accent/5 to-transparent animate-wave" style={{ animationDelay: '-5s' }} />
        
        {/* Diagonal glow */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-70" />
        
        {/* Animated wave lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary) / 0.3)" />
              <stop offset="50%" stopColor="hsl(var(--accent) / 0.3)" />
              <stop offset="100%" stopColor="hsl(var(--primary) / 0.3)" />
            </linearGradient>
          </defs>
          <path 
            d="M-100,100 C200,200 300,0 500,100 C700,200 800,0 1000,100 C1200,200 1300,0 1500,100" 
            fill="none" 
            stroke="url(#wave-gradient)" 
            strokeWidth="2"
            style={{ animation: 'wave 20s linear infinite' }}
          />
          <path 
            d="M-100,200 C200,300 300,100 500,200 C700,300 800,100 1000,200 C1200,300 1300,100 1500,200" 
            fill="none" 
            stroke="url(#wave-gradient)" 
            strokeWidth="2"
            style={{ animation: 'wave 15s linear infinite reverse', animationDelay: '-5s' }}
          />
        </svg>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
