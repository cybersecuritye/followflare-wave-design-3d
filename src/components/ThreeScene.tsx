
import { useEffect, useRef } from 'react';

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
    let hue = 0;
    
    const drawAnimation = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update hue for color animation
      hue = (hue + 0.5) % 360;
      
      // Draw an animated gradient shape
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) * 0.7;
      
      // Draw outer circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(
        centerX, centerY, radius * 0.3,
        centerX, centerY, radius
      );
      gradient.addColorStop(0, `hsla(${hue}, 70%, 60%, 0.8)`);
      gradient.addColorStop(1, `hsla(${hue + 60}, 70%, 50%, 0.4)`);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Draw wave patterns
      ctx.beginPath();
      const waveCount = 8;
      for (let i = 0; i <= waveCount; i++) {
        const t = i / waveCount;
        const x = canvas.width * t;
        const y = centerY + Math.sin(t * Math.PI * 4 + performance.now() / 1000) * radius * 0.3;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.strokeStyle = `hsla(${hue + 120}, 70%, 60%, 0.6)`;
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Draw floating particles
      for (let i = 0; i < 12; i++) {
        const time = performance.now() / 1000;
        const t = (time * 0.2 + i) % 6;
        const size = 10 + Math.sin(time * 0.5 + i) * 5;
        const x = centerX + Math.cos(t) * radius * 0.6;
        const y = centerY + Math.sin(t) * radius * 0.6;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${(hue + i * 30) % 360}, 80%, 60%, 0.8)`;
        ctx.fill();
      }
      
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
        style={{ background: 'rgba(0,0,0,0.05)' }}
      />
    </div>
  );
}
