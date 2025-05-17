
import { GlassCard } from "./GlassCard";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <GlassCard className="p-6 h-full transform transition-transform hover:scale-[1.03] hover:shadow-xl group">
      <div className="relative h-full flex flex-col">
        {/* Decorative elements */}
        <div className="absolute top-2 right-3 text-5xl opacity-20 font-serif text-primary group-hover:opacity-40 transition-opacity">"</div>
        <div className="absolute bottom-2 left-3 text-5xl opacity-10 font-serif text-primary group-hover:opacity-20 transition-opacity rotate-180">"</div>
        
        {/* 3D floating elements */}
        <div className="absolute top-4 left-4 w-8 h-8 bg-primary/10 rounded-full blur-md animate-pulse opacity-30"></div>
        <div className="absolute bottom-10 right-8 w-12 h-12 bg-accent/10 rounded-full blur-md animate-pulse opacity-30" style={{ animationDelay: '-2s' }}></div>
        
        {/* Content */}
        <p className="italic mb-6 relative z-10 text-lg">{quote}</p>
        
        <div className="mt-auto">
          <div className="w-10 h-[2px] bg-gradient-to-r from-primary/60 to-transparent mb-3"></div>
          <p className="font-bold bg-gradient-to-r from-primary to-foreground/80 bg-clip-text text-transparent">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        
        {/* Enhanced hover effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity pointer-events-none"></div>
        
        {/* 3D tilt effect handled by transform */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
      </div>
    </GlassCard>
  );
}
