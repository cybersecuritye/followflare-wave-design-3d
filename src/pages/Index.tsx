
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <WaveBackground className="pt-24 md:pt-32 pb-20">
        <section className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Grow your social media presence with <span className="text-foreground">follow<span className="text-primary">flare</span></span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Boost your followers, engagement, and visibility with our powerful growth solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                  <a href="https://app.followflare.net">Get Started</a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary/30 hover:bg-primary/10">
                  <a href="#services">Learn More</a>
                </Button>
              </div>
            </div>
            <div className="h-[400px] md:h-[500px] relative overflow-hidden rounded-lg glass-card">
              <ThreeScene />
            </div>
          </div>
        </section>
      </WaveBackground>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive solutions to help you grow your social media presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Follower Growth"
              description="Increase your follower count with our targeted growth strategies and tools."
              icon={<UserPlus className="h-6 w-6 text-primary" />}
              className="animate-float"
            />
            <ServiceCard 
              title="Engagement Boost"
              description="Get more likes, comments and shares with our engagement optimization."
              icon={<TrendingUp className="h-6 w-6 text-primary" />}
              className="animate-float delay-200"
            />
            <ServiceCard 
              title="Content Strategy"
              description="Develop effective content strategies that resonate with your audience."
              icon={<Square className="h-6 w-6 text-primary" />}
              className="animate-float delay-400"
            />
            <ServiceCard 
              title="Analytics & Insights"
              description="Access detailed analytics to understand your growth and audience behavior."
              icon={<Box className="h-6 w-6 text-primary" />}
              className="animate-float delay-600"
            />
          </div>
        </div>
      </section>

      {/* Platform Section - NEW */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Grow your audience across all major social media networks
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            <div className="group flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white mb-3 group-hover:scale-110 transition-transform">
                <Instagram size={40} />
              </div>
              <p className="font-medium">Instagram</p>
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
              <p className="font-medium">Coming Soon</p>
            </div>
            
            <div className="group flex flex-col items-center opacity-60">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/50 to-red-500/50 text-white mb-3 group-hover:scale-110 transition-transform">
                <Box size={32} />
              </div>
              <p className="font-medium">Coming Soon</p>
            </div>
            
            <div className="group flex flex-col items-center opacity-60">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/50 to-green-500/50 text-white mb-3 group-hover:scale-110 transition-transform">
                <Box size={32} />
              </div>
              <p className="font-medium">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <WaveBackground className="py-20 bg-secondary/50">
        <section id="features" className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed to maximize your social media potential
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-xl flex flex-col gap-4 backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10">
              <h3 className="text-2xl font-bold">Advanced Targeting</h3>
              <p className="text-muted-foreground">
                Our AI-powered targeting system finds the perfect audience for your content, 
                ensuring that you connect with users who are genuinely interested in what you share.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Circle className="h-4 w-4 text-primary" />
                  <span>Interest-based audience targeting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Circle className="h-4 w-4 text-primary" />
                  <span>Demographic filtering</span>
                </li>
                <li className="flex items-center gap-2">
                  <Circle className="h-4 w-4 text-primary" />
                  <span>Competitor audience analysis</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col gap-4 backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10">
              <h3 className="text-2xl font-bold">Growth Analytics</h3>
              <p className="text-muted-foreground">
                Track your progress with comprehensive analytics that provide insights into your
                growth patterns, engagement metrics, and audience behavior.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Circle className="h-4 w-4 text-primary" />
                  <span>Real-time growth tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Circle className="h-4 w-4 text-primary" />
                  <span>Engagement rate analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Circle className="h-4 w-4 text-primary" />
                  <span>Performance comparison</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              <a href="https://app.followflare.net">Start Growing Today</a>
            </Button>
          </div>
        </section>
      </WaveBackground>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Success stories from people who've transformed their social media presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10">
              <p className="italic mb-4">
                "Since using followflare, my Instagram followers have increased by 300% in just two months. 
                The targeting tools are incredibly effective!"
              </p>
              <p className="font-bold">Ahmed M.</p>
              <p className="text-sm text-muted-foreground">Lifestyle Influencer</p>
            </div>
            <div className="glass-card p-6 rounded-xl backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10">
              <p className="italic mb-4">
                "The analytics provided by followflare have helped me understand my audience better 
                and create content that truly resonates with them."
              </p>
              <p className="font-bold">Sarah K.</p>
              <p className="text-sm text-muted-foreground">Business Owner</p>
            </div>
            <div className="glass-card p-6 rounded-xl backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10">
              <p className="italic mb-4">
                "I've tried many growth tools, but followflare stands out with its 
                personalized strategies and consistent results."
              </p>
              <p className="font-bold">Mohammed A.</p>
              <p className="text-sm text-muted-foreground">Content Creator</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <WaveBackground className="py-20 bg-primary/5">
        <section className="container">
          <div className="glass-card p-10 rounded-2xl text-center backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Boost Your Social Media Presence?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of content creators and businesses who've transformed their social media
              with our powerful growth tools.
            </p>
            <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              <a href="https://app.followflare.net">Get Started Now</a>
            </Button>
          </div>
        </section>
      </WaveBackground>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">follow<span className="text-primary">flare</span></h3>
              <p className="text-muted-foreground">
                Empowering your social media growth with advanced tools and strategies.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Follower Growth</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Engagement Boost</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Content Strategy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Refund Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} follow<span className="text-primary">flare</span>. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Share</span>
                <Share className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Growth</span>
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
