
import { Navbar } from "@/components/Navbar";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { WaveBackground } from "@/components/WaveBackground";
import { GlassCard } from "@/components/GlassCard";
import { useTheme } from "@/components/ThemeProvider";

const About = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      {/* Header */}
      <WaveBackground className="pt-32 pb-20">
        <section className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">من نحن</h1>
            <p className="text-xl text-muted-foreground">
              تعرف على فريقنا وقصتنا ورؤيتنا لمستقبل وسائل التواصل الاجتماعي
            </p>
          </div>
        </section>
      </WaveBackground>
      
      {/* Our Story */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">قصتنا</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                بدأت فولوفلير كفكرة بسيطة لحل مشكلة معقدة: كيف يمكن للأشخاص والشركات تنمية وجودهم على وسائل التواصل الاجتماعي بطريقة أصيلة وفعالة.
              </p>
              <p className="text-lg text-muted-foreground">
                تأسست شركتنا في عام 2023 بهدف تمكين منشئي المحتوى من الوصول إلى جمهورهم المستهدف وبناء مجتمعات نشطة عبر منصات التواصل الاجتماعي المختلفة.
              </p>
            </div>
            <GlassCard className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl h-64 flex items-center justify-center">
              <div className="text-6xl font-bold gradient-text">2023</div>
            </GlassCard>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <WaveBackground className="py-16">
        <section className="container">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">قيمنا</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl transition-all hover:transform hover:translate-y-[-5px] duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">الشفافية</h3>
              <p className="text-muted-foreground">
                نحن نؤمن بتقديم خدمات شفافة وواضحة، دون وعود كاذبة أو أساليب غير أخلاقية.
              </p>
            </GlassCard>
            
            <GlassCard className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl transition-all hover:transform hover:translate-y-[-5px] duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">الابتكار</h3>
              <p className="text-muted-foreground">
                نبحث باستمرار عن طرق جديدة لمساعدة عملائنا على التميز في عالم وسائل التواصل الاجتماعي المتغير.
              </p>
            </GlassCard>
            
            <GlassCard className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl transition-all hover:transform hover:translate-y-[-5px] duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">التركيز على العميل</h3>
              <p className="text-muted-foreground">
                نضع نجاح عملائنا في صميم كل ما نقوم به، ونقدم حلولاً مخصصة لتلبية احتياجاتهم الفريدة.
              </p>
            </GlassCard>
          </div>
        </section>
      </WaveBackground>
      
      <EnhancedFooter />
    </div>
  );
};

export default About;
