
import { Navbar } from "@/components/Navbar";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { WaveBackground } from "@/components/WaveBackground";
import { GlassCard } from "@/components/GlassCard";
import { Button3D } from "@/components/Button3D";
import { useTheme } from "@/components/ThemeProvider";
import { UserPlus, TrendingUp, Square, Box, Instagram, ChartBar, Zap, Target } from "lucide-react";

const Services = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      {/* Header */}
      <WaveBackground className="pt-32 pb-20">
        <section className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">خدماتنا</h1>
            <p className="text-xl text-muted-foreground">
              حلول متكاملة لتنمية وجودك على وسائل التواصل الاجتماعي
            </p>
          </div>
        </section>
      </WaveBackground>
      
      {/* Main Services */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Service 1 */}
            <GlassCard className="p-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl transition-all hover:transform hover:translate-y-[-5px] duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <UserPlus className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">زيادة المتابعين</h3>
              <p className="text-muted-foreground mb-6">
                زد عدد متابعيك بشكل طبيعي وأصيل باستخدام استراتيجيات واستهداف ذكية. نساعدك على الوصول إلى الجمهور المناسب وتحويلهم إلى متابعين مخلصين.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>استهداف جماهير مشابهة لمتابعيك الحاليين</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>استراتيجيات تفاعل مخصصة</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>تحسين الوصول العضوي</span>
                </li>
              </ul>
              <Button3D className="shadow-purple-500/20">
                اعرف المزيد
              </Button3D>
            </GlassCard>
            
            {/* Service 2 */}
            <GlassCard className="p-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl transition-all hover:transform hover:translate-y-[-5px] duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">تعزيز التفاعل</h3>
              <p className="text-muted-foreground mb-6">
                زد من معدلات التفاعل مع منشوراتك من خلال استراتيجيات محتوى متقدمة وتوقيت نشر مثالي. ساعد متابعيك على التفاعل بشكل أكبر مع المحتوى الخاص بك.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>تحليل أوقات النشر المثالية</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>تحسين نسب الإعجابات والتعليقات</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>استراتيجيات المحتوى التفاعلي</span>
                </li>
              </ul>
              <Button3D className="shadow-purple-500/20">
                اعرف المزيد
              </Button3D>
            </GlassCard>
            
            {/* Service 3 */}
            <GlassCard className="p-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl transition-all hover:transform hover:translate-y-[-5px] duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Square className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">استراتيجية المحتوى</h3>
              <p className="text-muted-foreground mb-6">
                طور استراتيجيات محتوى فعالة تتناسب مع جمهورك المستهدف وتعزز من تفاعلهم. نساعدك على إنشاء محتوى يجذب انتباه متابعيك ويحافظ على اهتمامهم.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>تخطيط محتوى شهري</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>أفكار محتوى إبداعية</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>تحليل أداء المحتوى</span>
                </li>
              </ul>
              <Button3D className="shadow-purple-500/20">
                اعرف المزيد
              </Button3D>
            </GlassCard>
            
            {/* Service 4 */}
            <GlassCard className="p-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl transition-all hover:transform hover:translate-y-[-5px] duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Box className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">التحليلات والرؤى</h3>
              <p className="text-muted-foreground mb-6">
                استفد من تحليلات مفصلة لفهم النمو وسلوك الجمهور. نقدم لك رؤى عميقة حول أداء حساباتك على وسائل التواصل الاجتماعي لاتخاذ قرارات أفضل.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>تقارير أداء أسبوعية</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>تحليل سلوك الجمهور</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>توصيات لتحسين الأداء</span>
                </li>
              </ul>
              <Button3D className="shadow-purple-500/20">
                اعرف المزيد
              </Button3D>
            </GlassCard>
          </div>
        </div>
      </section>
      
      {/* Advanced Features */}
      <WaveBackground className="py-16">
        <section className="container">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">ميزات متقدمة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl transition-all hover:transform hover:translate-y-[-5px] duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Instagram className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">دعم متعدد المنصات</h3>
              <p className="text-muted-foreground">
                إدارة جميع حساباتك على وسائل التواصل الاجتماعي من مكان واحد مع تحليلات موحدة.
              </p>
            </GlassCard>
            
            <GlassCard className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl transition-all hover:transform hover:translate-y-[-5px] duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <ChartBar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">تحليلات متقدمة</h3>
              <p className="text-muted-foreground">
                فهم عميق لجمهورك من خلال تحليلات تفصيلية للبيانات الديموغرافية والسلوكية.
              </p>
            </GlassCard>
            
            <GlassCard className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl transition-all hover:transform hover:translate-y-[-5px] duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">أتمتة ذكية</h3>
              <p className="text-muted-foreground">
                توفير الوقت مع ميزات الأتمتة الذكية التي تساعد على نمو حسابك دون جهد إضافي.
              </p>
            </GlassCard>
            
            <GlassCard className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl transition-all hover:transform hover:translate-y-[-5px] duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">استهداف متقدم</h3>
              <p className="text-muted-foreground">
                الوصول إلى الجمهور المناسب من خلال أدوات استهداف دقيقة تعتمد على الاهتمامات والسلوك.
              </p>
            </GlassCard>
          </div>
        </section>
      </WaveBackground>
      
      {/* CTA */}
      <section className="py-16 relative">
        <div className="container">
          <GlassCard className="p-10 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text">جاهز لتنمية حسابات التواصل الاجتماعي الخاصة بك؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              ابدأ اليوم واستفد من أدواتنا القوية لزيادة متابعيك وتعزيز تفاعلهم مع المحتوى الخاص بك.
            </p>
            <Button3D size="lg" className="shadow-purple-500/30">
              <a href="https://app.followflare.net">ابدأ الآن</a>
            </Button3D>
          </GlassCard>
        </div>
      </section>
      
      <EnhancedFooter />
    </div>
  );
};

export default Services;
