
import { Navbar } from "@/components/Navbar";
import { ThreeScene } from "@/components/ThreeScene";
import { WaveBackground } from "@/components/WaveBackground";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/components/ThemeProvider";
import { Circle, Square, User, Box, Instagram, TrendingUp, UserPlus, Share } from "lucide-react";

const Index = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <ThreeScene />
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-6 backdrop-blur-sm bg-white/5 p-8 rounded-2xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                نمّي حضورك على وسائل التواصل الإجتماعي مع <span className="text-foreground">فولو<span className="text-primary">فلير</span></span>
              </h1>
              <p className="text-xl text-muted-foreground">
                عزز متابعيك، والتفاعل، والظهور مع حلولنا القوية للنمو.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                  <a href="https://app.followflare.net">ابدأ الآن</a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary/30 hover:bg-primary/10">
                  <a href="#services">اعرف المزيد</a>
                </Button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا</h2>
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
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">المنصات المدعومة</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نمِّ جمهورك عبر جميع شبكات التواصل الاجتماعي الرئيسية
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            <div className="group flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white mb-3 group-hover:scale-110 transition-transform">
                <Instagram size={40} />
              </div>
              <p className="font-medium">انستجرام</p>
            </div>
            
            <div className="group flex flex-col items-center opacity-60">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/50 to-blue-500/50 text-white mb-3 group-hover:scale-110 transition-transform">
                <div className="relative">
                  <Box size={32} />
                  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                    X
                  </p>
                </div>
              </div>
              <p className="font-medium">قريباً</p>
            </div>
            
            <div className="group flex flex-col items-center opacity-60">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/50 to-red-500/50 text-white mb-3 group-hover:scale-110 transition-transform">
                <Box size={32} />
              </div>
              <p className="font-medium">قريباً</p>
            </div>
            
            <div className="group flex flex-col items-center opacity-60">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/50 to-green-500/50 text-white mb-3 group-hover:scale-110 transition-transform">
                <Box size={32} />
              </div>
              <p className="font-medium">قريباً</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <WaveBackground className="py-20 bg-secondary/50">
        <section id="features" className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">الميزات الرئيسية</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              أدوات قوية مصممة لتعظيم إمكاناتك على وسائل التواصل الاجتماعي
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-xl flex flex-col gap-4 backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10">
              <h3 className="text-2xl font-bold">استهداف متقدم</h3>
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
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col gap-4 backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10">
              <h3 className="text-2xl font-bold">تحليلات النمو</h3>
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
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              <a href="https://app.followflare.net">ابدأ النمو اليوم</a>
            </Button>
          </div>
        </section>
      </WaveBackground>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ماذا يقول عملاؤنا</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              قصص نجاح من أشخاص غيروا وجودهم على وسائل التواصل الاجتماعي
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10">
              <p className="italic mb-4">
                "منذ استخدام فولوفلير، زاد عدد متابعي على انستغرام بنسبة 300% في شهرين فقط. أدوات الاستهداف فعالة بشكل لا يصدق!"
              </p>
              <p className="font-bold">أحمد م.</p>
              <p className="text-sm text-muted-foreground">مؤثر في مجال نمط الحياة</p>
            </div>
            <div className="glass-card p-6 rounded-xl backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10">
              <p className="italic mb-4">
                "التحليلات التي يوفرها فولوفلير ساعدتني على فهم جمهوري بشكل أفضل وإنشاء محتوى يتفاعل معهم حقًا."
              </p>
              <p className="font-bold">سارة ك.</p>
              <p className="text-sm text-muted-foreground">صاحبة أعمال</p>
            </div>
            <div className="glass-card p-6 rounded-xl backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10">
              <p className="italic mb-4">
                "لقد جربت العديد من أدوات النمو، لكن فولوفلير يبرز بفضل استراتيجياته المخصصة ونتائجه المتسقة."
              </p>
              <p className="font-bold">محمد أ.</p>
              <p className="text-sm text-muted-foreground">منشئ محتوى</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <WaveBackground className="py-20 bg-primary/5">
        <section className="container">
          <div className="glass-card p-10 rounded-2xl text-center backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">هل أنت جاهز لتعزيز وجودك على وسائل التواصل الاجتماعي؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              انضم إلى آلاف منشئي المحتوى والشركات الذين حولوا وجودهم على وسائل التواصل الاجتماعي
              باستخدام أدوات النمو القوية لدينا.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              <a href="https://app.followflare.net">ابدأ الآن</a>
            </Button>
          </div>
        </section>
      </WaveBackground>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">فولو<span className="text-primary">فلير</span></h3>
              <p className="text-muted-foreground">
                تمكين نمو وسائل التواصل الاجتماعي الخاصة بك من خلال أدوات واستراتيجيات متقدمة.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">الخدمات</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">زيادة المتابعين</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">تعزيز التفاعل</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">استراتيجية المحتوى</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">التحليلات</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">الشركة</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">من نحن</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">اتصل بنا</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">الوظائف</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">المدونة</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">القانونية</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">شروط الخدمة</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">سياسة الخصوصية</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">سياسة الاسترداد</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">سياسة ملفات تعريف الارتباط</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} فولو<span className="text-primary">فلير</span>. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">انستجرام</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">مشاركة</span>
                <Share className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
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
