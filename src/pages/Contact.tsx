
import { Navbar } from "@/components/Navbar";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { WaveBackground } from "@/components/WaveBackground";
import { GlassCard } from "@/components/GlassCard";
import { Button3D } from "@/components/Button3D";
import { MapPin, Mail, Phone, MessageSquare } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useState } from "react";

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    // Here you would typically show a success message
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      {/* Header */}
      <WaveBackground className="pt-32 pb-20">
        <section className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">اتصل بنا</h1>
            <p className="text-xl text-muted-foreground">
              نحن هنا للإجابة على أسئلتك ومساعدتك في تنمية وجودك على وسائل التواصل الاجتماعي
            </p>
          </div>
        </section>
      </WaveBackground>
      
      {/* Contact Info & Form */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 gradient-text">معلومات الاتصال</h2>
              
              <div className="space-y-8">
                <GlassCard className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">العنوان</h3>
                    <p className="text-muted-foreground">الرياض، المملكة العربية السعودية</p>
                  </div>
                </GlassCard>
                
                <GlassCard className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">البريد الإلكتروني</h3>
                    <p className="text-muted-foreground">info@followflare.net</p>
                  </div>
                </GlassCard>
                
                <GlassCard className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">الهاتف</h3>
                    <p className="text-muted-foreground">+966 12 345 6789</p>
                  </div>
                </GlassCard>
              </div>
            </div>
            
            {/* Contact Form */}
            <GlassCard className="p-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 gradient-text">أرسل لنا رسالة</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">الاسم</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">الموضوع</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">الرسالة</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  ></textarea>
                </div>
                
                <Button3D type="submit" className="w-full shadow-purple-500/30">
                  <div className="flex items-center justify-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>إرسال الرسالة</span>
                  </div>
                </Button3D>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>
      
      <EnhancedFooter />
    </div>
  );
};

export default Contact;
