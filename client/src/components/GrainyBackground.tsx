import { useEffect, useRef } from 'react';

export default function GrainyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create grainy texture inspired by Genesis AI
    const createGrainTexture = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        // Create noise pattern
        const noise = Math.random();
        const grain = Math.random() > 0.95 ? 255 : 0;
        
        // Base color (very dark)
        const baseColor = 5 + Math.random() * 10;
        
        // Add teal/blue tints randomly
        const r = baseColor + (Math.random() > 0.98 ? noise * 20 : 0);
        const g = baseColor + (Math.random() > 0.97 ? noise * 40 : 0);
        const b = baseColor + (Math.random() > 0.96 ? noise * 60 : 0);
        
        data[i] = Math.min(255, r + grain * 0.1);     // Red
        data[i + 1] = Math.min(255, g + grain * 0.2); // Green  
        data[i + 2] = Math.min(255, b + grain * 0.3); // Blue
        data[i + 3] = 255; // Alpha
      }

      ctx.putImageData(imageData, 0, 0);
    };

    // Create floating abstract shapes
    const drawAbstractShapes = () => {
      // Draw some subtle geometric patterns
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3 + 1;
        const opacity = Math.random() * 0.3;
        
        // Teal accent dots
        if (Math.random() > 0.7) {
          ctx.fillStyle = `rgba(0, 212, 170, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Blue accent dots
        if (Math.random() > 0.8) {
          ctx.fillStyle = `rgba(0, 128, 255, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw subtle lines and connections
      for (let i = 0; i < 10; i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = x1 + (Math.random() - 0.5) * 200;
        const y2 = y1 + (Math.random() - 0.5) * 200;
        
        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        gradient.addColorStop(0, 'rgba(0, 212, 170, 0.1)');
        gradient.addColorStop(1, 'rgba(0, 128, 255, 0.05)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = Math.random() * 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    };

    // Render the background
    const render = () => {
      createGrainTexture();
      drawAbstractShapes();
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      style={{ 
        filter: 'contrast(1.1) brightness(0.9)',
        mixBlendMode: 'screen'
      }}
    />
  );
}