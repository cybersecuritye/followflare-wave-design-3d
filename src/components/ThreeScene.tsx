
import { useEffect, useRef } from 'react';
import { Instagram, TrendingUp, UserPlus, Share } from 'lucide-react';

export function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    let animationFrameId: number;
    let hue = 260; // Purple hue
    let time = 0;
    
    // Create particles for social media icons
    const iconTypes = ['instagram', 'trending', 'userplus', 'share'];
    const particles: {
      x: number;
      y: number;
      size: number;
      speed: number;
      iconType: string;
      rotation: number;
      rotationSpeed: number;
      alpha: number;
    }[] = [];
    
    // Generate random particles
    for (let i = 0; i < 15; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 15 + Math.random() * 25,
        speed: 0.5 + Math.random() * 1,
        iconType: iconTypes[Math.floor(Math.random() * iconTypes.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        alpha: 0.4 + Math.random() * 0.6
      });
    }
    
    // Draw social media icon based on type
    const drawIcon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, type: string, rotation: number, alpha: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = alpha;
      
      // Use simplified icon paths for canvas drawing
      ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${alpha})`;
      ctx.lineWidth = size / 10;
      ctx.fillStyle = `hsla(${hue}, 70%, 60%, ${alpha * 0.3})`;
      
      const halfSize = size / 2;
      
      ctx.beginPath();
      
      if (type === 'instagram') {
        // Instagram-like icon
        ctx.rect(-halfSize, -halfSize, size, size);
        ctx.arc(0, 0, halfSize * 0.6, 0, Math.PI * 2);
        ctx.moveTo(halfSize * 0.7, -halfSize * 0.7);
        ctx.arc(halfSize * 0.7, -halfSize * 0.7, size / 10, 0, Math.PI * 2);
      } else if (type === 'trending') {
        // Trending icon
        ctx.moveTo(-halfSize, halfSize);
        ctx.lineTo(0, 0);
        ctx.lineTo(halfSize, -halfSize);
        ctx.moveTo(halfSize * 0.3, -halfSize * 0.3);
        ctx.lineTo(halfSize, -halfSize);
        ctx.lineTo(halfSize, -halfSize * 0.3);
      } else if (type === 'userplus') {
        // User plus icon
        ctx.arc(0, -halfSize * 0.3, halfSize * 0.4, 0, Math.PI * 2);
        ctx.moveTo(-halfSize * 0.6, halfSize * 0.5);
        ctx.arcTo(-halfSize * 0.6, halfSize, halfSize * 0.6, halfSize, halfSize * 0.6);
        ctx.arcTo(halfSize * 0.6, halfSize, halfSize * 0.6, halfSize * 0.5, halfSize * 0.6);
      } else if (type === 'share') {
        // Share icon
        ctx.arc(-halfSize * 0.5, -halfSize * 0.5, size / 5, 0, Math.PI * 2);
        ctx.arc(halfSize * 0.5, 0, size / 5, 0, Math.PI * 2);
        ctx.arc(-halfSize * 0.5, halfSize * 0.5, size / 5, 0, Math.PI * 2);
        ctx.moveTo(-halfSize * 0.5, -halfSize * 0.5);
        ctx.lineTo(halfSize * 0.5, 0);
        ctx.moveTo(-halfSize * 0.5, halfSize * 0.5);
        ctx.lineTo(halfSize * 0.5, 0);
      }
      
      ctx.stroke();
      ctx.fill();
      ctx.restore();
    };
    
    // Draw number counter
    const drawCounter = (ctx: CanvasRenderingContext2D) => {
      const counter = Math.floor(1000 + 8000 * (0.5 + 0.5 * Math.sin(time / 10)));
      
      ctx.save();
      ctx.font = "bold 30px 'Inter', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = `hsla(${hue}, 70%, 50%, 0.9)`;
      ctx.fillText(`+${counter.toLocaleString()}`, canvas.width / 2, canvas.height / 2);
      
      ctx.font = "16px 'Inter', sans-serif";
      ctx.fillText("متابعين", canvas.width / 2, canvas.height / 2 + 30);
      ctx.restore();
    };
    
    // Draw wave connections between particles
    const drawConnections = (ctx: CanvasRenderingContext2D, particles: any[]) => {
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < canvas.width / 5) {
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
          }
        }
      }
      ctx.strokeStyle = `hsla(${hue}, 60%, 50%, 0.1)`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };
    
    const drawAnimation = () => {
      if (!ctx) return;
      time += 0.05;
      
      // Clear canvas with translucent background for trail effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update hue for color animation
      hue = 260 + Math.sin(time * 0.1) * 20; // Oscillate around purple
      
      // Draw flowing background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1.5
      );
      gradient.addColorStop(0, `hsla(${hue}, 70%, 95%, 0.05)`);
      gradient.addColorStop(1, `hsla(${hue}, 70%, 90%, 0)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw wave pattern in background
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 20) {
        const y = canvas.height / 2 + 
                Math.sin(x / 50 + time) * 50 * Math.sin(time / 5) + 
                Math.cos(x / 120 + time * 0.7) * 30;
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.strokeStyle = `hsla(${hue}, 70%, 60%, 0.2)`;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update particle positions with flowing motion
        p.y -= p.speed * (1 + 0.2 * Math.sin(time / 10 + i));
        p.x += Math.sin(time / 5 + i) * 0.5;
        p.rotation += p.rotationSpeed;
        
        // Reset particles that go off-screen
        if (p.y < -p.size) {
          p.y = canvas.height + p.size;
          p.x = Math.random() * canvas.width;
        }
        
        // Draw the social media icon
        drawIcon(ctx, p.x, p.y, p.size, p.iconType, p.rotation, p.alpha);
      }
      
      // Draw connections between particles
      drawConnections(ctx, particles);
      
      // Draw follower counter in the center
      drawCounter(ctx);
      
      // Call the next frame
      animationFrameId = requestAnimationFrame(drawAnimation);
    };
    
    drawAnimation();
    
    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="h-full w-full">
      <canvas 
        ref={canvasRef}
        className="w-full h-full rounded-lg"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      />
      <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full flex gap-2">
        <Instagram className="h-5 w-5 text-primary" />
        <TrendingUp className="h-5 w-5 text-primary" />
        <UserPlus className="h-5 w-5 text-primary" />
        <Share className="h-5 w-5 text-primary" />
      </div>
    </div>
  );
}
