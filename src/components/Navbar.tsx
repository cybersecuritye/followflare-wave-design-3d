
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Home, Info, Phone, Settings, Zap } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "الرئيسية", href: "/", icon: Home },
  { label: "الخدمات", href: "/services", icon: Zap },
  { label: "من نحن", href: "/about", icon: Info },
  { label: "اتصل بنا", href: "/contact", icon: Phone },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if a navItem is active
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-white/10 shadow-sm">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl">
            فولو<span className="text-primary">فلير</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-2 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300",
                    isActive(item.href) 
                      ? "text-foreground after:scale-x-100" 
                      : "text-muted-foreground hover:text-foreground after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-left"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button 
              asChild 
              className="bg-gradient-to-br from-primary to-accent hover:opacity-90 shadow-md hover:shadow-lg transition-all"
            >
              <a href="https://app.followflare.net">ابدأ الآن</a>
            </Button>
          </div>
        </nav>

        {/* Mobile navigation */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="backdrop-blur-sm bg-white/5 hover:bg-white/10 border border-white/10"
          >
            <Menu />
            <span className="sr-only">القائمة</span>
          </Button>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <GlassCard className="m-3 rounded-xl overflow-hidden">
          <div className="py-4 px-3">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-2 p-2 rounded-lg transition-colors",
                      isActive(item.href)
                        ? "bg-white/10 text-foreground"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Button 
                  asChild 
                  className="w-full mt-2 bg-gradient-to-br from-primary to-accent hover:opacity-90"
                >
                  <a href="https://app.followflare.net">ابدأ الآن</a>
                </Button>
              </li>
            </ul>
          </div>
        </GlassCard>
      </div>
    </header>
  );
}
