
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <div className={cn(
      "glass-card p-6 rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-105",
      "flex flex-col items-start gap-4",
      className
    )}>
      <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-lg text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
