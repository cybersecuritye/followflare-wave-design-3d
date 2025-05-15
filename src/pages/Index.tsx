
import { Navbar } from "@/components/Navbar";
import { ThreeScene } from "@/components/ThreeScene";
import { WaveBackground } from "@/components/WaveBackground";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/components/ThemeProvider";
import { Circle, Square, User, Box, Instagram, TrendingUp, UserPlus, Share } from "lucide-react";
import { Button3D } from "@/components/Button3D";
import { GlassCard } from "@/components/GlassCard";
import { PlatformIcon3D } from "@/components/PlatformIcon3D";
import { TestimonialCard } from "@/components/TestimonialCard";

const Index = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <ThreeScene />
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-6 backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                نمّي حضورك على وسائل التواصل الإجتماعي مع <span className="text-foreground">فولو<span className="text-primary">فلير</span></span>
              </h1>
              <p className="text-xl text-muted-foreground">
                عزز متابعيك، والتفاعل، والظهور مع حلولنا القوية للنمو.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button3D size="lg" className="shadow-purple-500/30">
                  <a href="https://app.followflare.net">ابدأ الآن</a>
                </Button3D>
                <Button3D size="lg" variant="outline" className="backdrop-blur-sm">
                  <a href="#services">اعرف المزيد</a>
                </Button3D>
              </div>
            </div>
            <div className="hidden md:block"></div> {/* Spacer for the canvas animation */}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">خدماتنا</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نقدم حلولاً شاملة لمساعدتك على تنمية وجودك على وسائل التواصل الاجتماعي
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="زيادة المتابعين"
              description="زد عدد متابعيك باستخدام استراتيجيات وأدوات النمو المستهدفة."
              icon={<UserPlus className="h-6 w-6 text-primary" />}
              className="animate-float"
            />
            <ServiceCard 
              title="تعزيز التفاعل"
              description="احصل على المزيد من الإعجابات والتعليقات والمشاركات من خلال تحسين التفاعل."
              icon={<TrendingUp className="h-6 w-6 text-primary" />}
              className="animate-float delay-200"
            />
            <ServiceCard 
              title="استراتيجية المحتوى"
              description="طور استراتيجيات محتوى فعالة تتناسب مع جمهورك المستهدف."
              icon={<Square className="h-6 w-6 text-primary" />}
              className="animate-float delay-400"
            />
            <ServiceCard 
              title="التحليلات والرؤى"
              description="استفد من تحليلات مفصلة لفهم النمو وسلوك الجمهور."
              icon={<Box className="h-6 w-6 text-primary" />}
              className="animate-float delay-600"
            />
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-16 relative overflow-hidden">
        <WaveBackground className="absolute inset-0" />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">المنصات المدعومة</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نمِّ جمهورك عبر جميع شبكات التواصل الاجتماعي الرئيسية
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            <PlatformIcon3D 
              icon={<Instagram size={40} />} 
              label="انستجرام" 
            />
            
            <PlatformIcon3D 
              icon={<div className="relative"><Box size={32} /><p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">X</p></div>}
              label="قريباً"
              disabled
            />
            
            <PlatformIcon3D 
              icon={<Box size={32} />}
              label="قريباً"
              disabled
            />
            
            <PlatformIcon3D 
              icon={<Box size={32} />}
              label="قريباً"
              disabled
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <WaveBackground className="py-20">
        <section id="features" className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">الميزات الرئيسية</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              أدوات قوية مصممة لتعظيم إمكاناتك على وسائل التواصل الاجتماعي
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GlassCard className="p-8 rounded-xl flex flex-col gap-4">
              <h3 className="text-2xl font-bold gradient-text">استهداف متقدم</h3>
              <p className="text-muted-foreground">
                يبحث نظام الاستهداف المدعوم بالذكاء الاصطناعي لدينا عن الجمهور المثالي لمحتواك،
                مما يضمن أنك تتواصل مع المستخدمين المهتمين حقًا بما تشاركه.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Circle className="h-4 w-4 text-primary" />
                  <span>استهداف الجمهور على أساس الاهتمامات</span>
                </li>
                <li className="flex items-center gap-2">
                  <Circle className="h-4 w-4 text-primary" />
                  <span>تصفية ديموغرافية</span>
                </li>
                <li className="flex items-center gap-2">
                  <Circle className="h-4 w-4 text-primary" />
                  <span>تحليل جمهور المنافسين</span>
                </li>
              </ul>
            </GlassCard>
            <GlassCard className="p-8 rounded-xl flex flex-col gap-4">
              <h3 className="text-2xl font-bold gradient-text">تحليلات النمو</h3>
              <p className="text-muted-foreground">
                تتبع تقدمك من خلال تحليلات شاملة توفر رؤى حول أنماط النمو الخاصة بك
                ومقاييس المشاركة وسلوك الجمهور.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Circle className="h-4 w-4 text-primary" />
                  <span>تتبع النمو في الوقت الحقيقي</span>
                </li>
                <li className="flex items-center gap-2">
                  <Circle className="h-4 w-4 text-primary" />
                  <span>تحليل معدل المشاركة</span>
                </li>
                <li className="flex items-center gap-2">
                  <Circle className="h-4 w-4 text-primary" />
                  <span>مقارنة الأداء</span>
                </li>
              </ul>
            </GlassCard>
          </div>
          
          <div className="mt-12 text-center">
            <Button3D size="lg" className="shadow-purple-500/30">
              <a href="https://app.followflare.net">ابدأ النمو اليوم</a>
            </Button3D>
          </div>
        </section>
      </WaveBackground>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">ماذا يقول عملاؤنا</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              قصص نجاح من أشخاص غيروا وجودهم على وسائل التواصل الاجتماعي
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="منذ استخدام فولوفلير، زاد عدد متابعي على انستغرام بنسبة 300% في شهرين فقط. أدوات الاستهداف فعالة بشكل لا يصدق!"
              author="أحمد م."
              role="مؤثر في مجال نمط الحياة"
            />
            <TestimonialCard
              quote="التحليلات التي يوفرها فولوفلير ساعدتني على فهم جمهوري بشكل أفضل وإنشاء محتوى يتفاعل معهم حقًا."
              author="سارة ك."
              role="صاحبة أعمال"
            />
            <TestimonialCard
              quote="لقد جربت العديد من أدوات النمو، لكن فولوفلير يبرز بفضل استراتيجياته المخصصة ونتائجه المتسقة."
              author="محمد أ."
              role="منشئ محتوى"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <WaveBackground className="py-20">
        <section className="container">
          <GlassCard className="p-10 rounded-2xl text-center overflow-hidden relative">
            {/* Animated background elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '-2s' }}></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">هل أنت جاهز لتعزيز وجودك على وسائل التواصل الاجتماعي؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              انضم إلى آلاف منشئي المحتوى والشركات الذين حولوا وجودهم على وسائل التواصل الاجتماعي
              باستخدام أدوات النمو القوية لدينا.
            </p>
            <Button3D size="lg" className="shadow-purple-500/30">
              <a href="https://app.followflare.net">ابدأ الآن</a>
            </Button3D>
          </GlassCard>
        </section>
      </WaveBackground>

      {/* Footer */}
      <footer className="py-12 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">فولو<span className="text-primary">فلير</span></h3>
              <p className="text-muted-foreground">
                تمكين نمو وسائل التواصل الاجتماعي الخاصة بك من خلال أدوات واستراتيجيات متقدمة.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 gradient-text">الخدمات</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">زيادة المتابعين</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">تعزيز التفاعل</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">استراتيجية المحتوى</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">التحليلات</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 gradient-text">الشركة</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">من نحن</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">اتصل بنا</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">الوظائف</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">المدونة</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 gradient-text">القانونية</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">شروط الخدمة</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">سياسة الخصوصية</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">سياسة الاسترداد</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">سياسة ملفات تعريف الارتباط</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 opacity-30" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} فولو<span className="text-primary">فلير</span>. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">انستجرام</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">مشاركة</span>
                <Share className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">نمو</span>
                <TrendingUp className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
