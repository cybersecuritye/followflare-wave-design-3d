
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
      depth: number;
    }[] = [];
    
    // Generate random particles with depth
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 15 + Math.random() * 30,
        speed: 0.5 + Math.random() * 1.5,
        iconType: iconTypes[Math.floor(Math.random() * iconTypes.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        alpha: 0.4 + Math.random() * 0.6,
        depth: 0.3 + Math.random() * 0.7 // Random depth between 0.3 and 1
      });
    }
    
    // Draw social media icon based on type
    const drawIcon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, type: string, rotation: number, alpha: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = alpha;
      
      // Use simplified icon paths for canvas drawing
      ctx.strokeStyle = `hsla(${hue}, 80%, 65%, ${alpha})`;
      ctx.lineWidth = size / 10;
      ctx.fillStyle = `hsla(${hue}, 80%, 65%, ${alpha * 0.3})`;
      
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
        // Plus sign
        ctx.moveTo(0, halfSize * 0.2);
        ctx.lineTo(0, halfSize * 0.8);
        ctx.moveTo(-halfSize * 0.3, halfSize * 0.5);
        ctx.lineTo(halfSize * 0.3, halfSize * 0.5);
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
    
    // Draw 3D floating counter
    const drawCounter = (ctx: CanvasRenderingContext2D) => {
      const counter = Math.floor(1000 + 9000 * (0.5 + 0.5 * Math.sin(time / 10)));
      
      // Create 3D effect for counter with multiple layers
      for (let i = 5; i >= 0; i--) {
        const offset = i * 2;
        const alpha = i === 0 ? 1 : (5 - i) / 15;
        
        ctx.save();
        ctx.font = `bold ${30 + i}px 'Tajawal', sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = `hsla(${hue}, 80%, 60%, ${alpha})`;
        ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 5 - i;
        ctx.shadowOffsetY = 5 - i;
        ctx.fillText(`+${counter.toLocaleString()}`, canvas.width / 2 + offset, canvas.height / 2);
        
        if (i === 0) {
          ctx.font = "bold 16px 'Tajawal', sans-serif";
          ctx.fillText("متابعين", canvas.width / 2, canvas.height / 2 + 30);
          
          // Draw decorative elements
          ctx.beginPath();
          ctx.moveTo(canvas.width / 2 - 80, canvas.height / 2 + 50);
          ctx.lineTo(canvas.width / 2 + 80, canvas.height / 2 + 50);
          ctx.strokeStyle = `hsla(${hue}, 70%, 60%, 0.5)`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        ctx.restore();
      }
    };
    
    // Draw wave connections between particles - more 3D effect
    const drawConnections = (ctx: CanvasRenderingContext2D, particles: any[]) => {
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < canvas.width / 4) {
            const alpha = (1 - distance / (canvas.width / 4)) * 0.2 * 
                          particles[i].depth * particles[j].depth;
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(${hue}, 80%, 60%, ${alpha})`;
            ctx.lineWidth = 1 * Math.min(particles[i].depth, particles[j].depth);
            ctx.stroke();
          }
        }
      }
    };
    
    // Draw flowing background with 3D perspective effect
    const draw3DFlowingBackground = (ctx: CanvasRenderingContext2D) => {
      // Create 3D grid effect
      const gridSize = 20;
      const perspective = 800;
      const gridDepth = 5;
      
      for (let z = 0; z < gridDepth; z++) {
        const depth = 1 - z / gridDepth;
        const scale = 0.5 + depth * 0.5;
        const offset = (1 - scale) * canvas.height / 2;
        const yOffset = Math.sin(time * 0.3) * 30 * depth;
        const xOffset = Math.cos(time * 0.2) * 30 * depth;
        
        ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${depth * 0.1})`;
        ctx.lineWidth = depth * 2;
        
        // Draw horizontal lines with perspective
        for (let y = 0; y <= canvas.height / gridSize; y++) {
          const yPos = y * gridSize * scale + offset + yOffset;
          ctx.beginPath();
          ctx.moveTo(0, yPos);
          ctx.lineTo(canvas.width, yPos);
          ctx.stroke();
        }
        
        // Draw vertical lines with perspective
        for (let x = 0; x <= canvas.width / gridSize; x++) {
          const xPos = x * gridSize * scale + xOffset;
          ctx.beginPath();
          ctx.moveTo(xPos, offset + yOffset);
          ctx.lineTo(xPos, canvas.height - offset + yOffset);
          ctx.stroke();
        }
      }
    };
    
    const drawAnimation = () => {
      if (!ctx) return;
      time += 0.05;
      
      // Clear canvas with transparent background for better effect
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update hue for color animation
      hue = 260 + Math.sin(time * 0.1) * 20; // Oscillate around purple
      
      // Draw 3D flowing background
      draw3DFlowingBackground(ctx);
      
      // Draw flowing radial gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time * 0.2) * 100, 
        canvas.height / 2 + Math.cos(time * 0.3) * 50, 
        0,
        canvas.width / 2, 
        canvas.height / 2, 
        Math.max(canvas.width, canvas.height) * 0.8
      );
      gradient.addColorStop(0, `hsla(${hue}, 70%, 95%, 0.1)`);
      gradient.addColorStop(0.5, `hsla(${hue + 10}, 70%, 90%, 0.05)`);
      gradient.addColorStop(1, `hsla(${hue + 20}, 70%, 85%, 0)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw multiple wave patterns in background for depth
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath();
        const amplitude = 30 + layer * 20;
        const period = 50 + layer * 30;
        const layerSpeed = 0.7 + layer * 0.3;
        const alpha = 0.3 - layer * 0.1;
        
        for (let x = 0; x < canvas.width; x += 10) {
          const y = canvas.height / 2 + 
                  Math.sin(x / period + time * layerSpeed) * amplitude * Math.sin(time / 5) + 
                  Math.cos(x / (period * 2) + time * layerSpeed * 0.7) * (amplitude / 2);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${alpha})`;
        ctx.lineWidth = 3 - layer;
        ctx.stroke();
      }
      
      // Update and draw particles with depth
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update particle positions with flowing motion and respect depth
        p.y -= p.speed * p.depth * (1 + 0.2 * Math.sin(time / 10 + i));
        p.x += Math.sin(time / 5 + i) * 0.7 * p.depth;
        p.rotation += p.rotationSpeed * p.depth;
        
        // Scale size based on depth to create perspective
        const scaledSize = p.size * p.depth;
        
        // Reset particles that go off-screen
        if (p.y < -scaledSize) {
          p.y = canvas.height + scaledSize;
          p.x = Math.random() * canvas.width;
          p.depth = 0.3 + Math.random() * 0.7;
        }
        
        // Draw the social media icon with depth effect
        drawIcon(ctx, p.x, p.y, scaledSize, p.iconType, p.rotation, p.alpha * p.depth);
      }
      
      // Draw connections between particles with depth effect
      drawConnections(ctx, particles);
      
      // Draw follower counter in the center with 3D effect
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
    <div className="h-full w-full absolute inset-0 overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="w-full h-full absolute inset-0"
        style={{ background: 'transparent' }}
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
