
import { GlassCard } from "./GlassCard";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <GlassCard className="p-6 h-full transform transition-transform hover:scale-[1.02] hover:shadow-xl group">
      <div className="absolute top-2 right-3 text-5xl opacity-20 font-serif text-primary group-hover:opacity-30">"</div>
      <p className="italic mb-4 relative z-10">{quote}</p>
      <div className="mt-auto">
        <p className="font-bold bg-gradient-to-r from-primary to-foreground/80 bg-clip-text text-transparent">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
      
      {/* Enhanced hover effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity pointer-events-none"></div>
    </GlassCard>
  );
}
