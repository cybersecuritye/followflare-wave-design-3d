
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "relative isolate overflow-hidden",
        "backdrop-blur-lg bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10", 
        "p-6 rounded-xl shadow-lg transition-all hover:-translate-y-2",
        "before:absolute before:inset-0 before:z-[-1] before:bg-gradient-to-br before:from-primary/10 before:to-accent/5 before:opacity-70",
        "after:absolute after:inset-0 after:z-[-2] after:bg-gradient-to-tr after:from-primary/5 after:via-transparent after:to-accent/5 after:opacity-50",
        "hover:shadow-primary/20 hover:shadow-xl",
        "flex flex-col items-start gap-4",
        className
      )}
    >
      <div className="relative flex items-center justify-center w-14 h-14">
        <div className="absolute inset-0 bg-primary/20 dark:bg-primary/30 rounded-lg blur-sm transform -translate-y-1 translate-x-1"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-lg"></div>
        <div className="relative w-full h-full flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-white/80 to-white/40 dark:from-black/50 dark:to-black/20">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">{title}</h3>
      
      <p className="text-muted-foreground">{description}</p>
      
      <div className="absolute w-20 h-20 -top-10 -right-10 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute w-20 h-20 -bottom-10 -left-10 bg-accent/5 rounded-full blur-2xl"></div>
    </div>
  );
}
