
import { Instagram, Facebook, Twitter, Linkedin, MessageSquare, MapPin, Mail, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { GlassCard } from "./GlassCard";
import { Button3D } from "./Button3D";
import { useTheme } from "@/components/ThemeProvider";

export function EnhancedFooter() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent"></div>
      
      {/* 3D Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '-3s' }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <GlassCard className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl transition-all hover:transform hover:translate-y-[-5px] duration-300">
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-xl mb-2">
                فولو<span className="text-primary">فلير</span>
              </h3>
              <p className="text-muted-foreground">
                تمكين نمو وسائل التواصل الاجتماعي الخاصة بك من خلال أدوات واستراتيجيات متقدمة.
              </p>
              <div className="flex space-x-4 space-x-reverse mt-4">
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Facebook className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Twitter className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </GlassCard>

          {/* Services */}
          <GlassCard className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl transition-all hover:transform hover:translate-y-[-5px] duration-300">
            <h4 className="font-bold text-lg mb-4 gradient-text">خدماتنا</h4>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span>زيادة المتابعين</span>
                </a>
              </li>
              <li>
                <a href="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span>تعزيز التفاعل</span>
                </a>
              </li>
              <li>
                <a href="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span>استراتيجية المحتوى</span>
                </a>
              </li>
              <li>
                <a href="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span>التحليلات</span>
                </a>
              </li>
            </ul>
          </GlassCard>

          {/* Company */}
          <GlassCard className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl transition-all hover:transform hover:translate-y-[-5px] duration-300">
            <h4 className="font-bold text-lg mb-4 gradient-text">الشركة</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span>من نحن</span>
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span>اتصل بنا</span>
                </a>
              </li>
              <li>
                <a href="/careers" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span>الوظائف</span>
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span>المدونة</span>
                </a>
              </li>
            </ul>
          </GlassCard>

          {/* Contact */}
          <GlassCard className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl transition-all hover:transform hover:translate-y-[-5px] duration-300">
            <h4 className="font-bold text-lg mb-4 gradient-text">اتصل بنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@followflare.net</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+966 12 345 6789</span>
              </li>
              <li className="mt-4">
                <Button3D size="sm" className="w-full shadow-purple-500/20">
                  <a href="/contact" className="flex items-center justify-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>تواصل معنا</span>
                  </a>
                </Button3D>
              </li>
            </ul>
          </GlassCard>
        </div>
        
        {/* Newsletter */}
        <GlassCard className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl mt-10 transition-all">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="md:w-1/2 text-center md:text-right">
              <h4 className="font-bold text-xl mb-2 gradient-text">اشترك في نشرتنا الإخبارية</h4>
              <p className="text-muted-foreground">احصل على أحدث النصائح والاستراتيجيات لتنمية حسابك على وسائل التواصل الاجتماعي.</p>
            </div>
            <div className="md:w-1/2 w-full flex">
              <input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                className="flex-1 px-4 py-2 rounded-r-none rounded-l-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button3D className="rounded-l-none rounded-r-lg shadow-purple-500/20">
                اشتراك
              </Button3D>
            </div>
          </div>
        </GlassCard>
        
        <Separator className="my-8 opacity-30" />
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} فولو<span className="text-primary">فلير</span>. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">سياسة الخصوصية</a>
            <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">الشروط والأحكام</a>
            <a href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">سياسة ملفات تعريف الارتباط</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
