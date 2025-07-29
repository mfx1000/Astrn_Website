import { useEffect, useRef } from 'react';

export default function ASCIIIntelligence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;

    // ASCII characters representing different aspects of intelligence
    const intelligenceChars = [
      // Neural patterns
      '●', '○', '◐', '◑', '◒', '◓',
      // Flow patterns  
      '∞', '∿', '〜', '⟡', '⟢',
      // Connection patterns
      '◊', '◈', '▲', '▼', '◆',
      // Consciousness symbols
      '※', '∴', '∵', '⊕', '⊗',
      // Data flow
      '▣', '▢', '⬢', '⬡', '⟨', '⟩'
    ];

    // Intelligence patterns that morph and flow
    const patterns: Array<{
      x: number;
      y: number;
      char: string;
      phase: number;
      speed: number;
      size: number;
      color: { r: number; g: number; b: number };
      alpha: number;
      waveOffset: number;
    }> = [];

    // Initialize patterns
    for (let i = 0; i < 60; i++) {
      patterns.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        char: intelligenceChars[Math.floor(Math.random() * intelligenceChars.length)],
        phase: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.03,
        size: 12 + Math.random() * 16,
        color: {
          r: Math.random() < 0.5 ? 0 : 20,
          g: 180 + Math.random() * 75,
          b: 150 + Math.random() * 105
        },
        alpha: 0.3 + Math.random() * 0.7,
        waveOffset: Math.random() * Math.PI * 2
      });
    }

    // Central intelligence core patterns
    const corePatterns: Array<{
      radius: number;
      angle: number;
      char: string;
      speed: number;
      size: number;
    }> = [];

    for (let i = 0; i < 20; i++) {
      corePatterns.push({
        radius: 60 + Math.random() * 80,
        angle: (i / 20) * Math.PI * 2,
        char: intelligenceChars[Math.floor(Math.random() * intelligenceChars.length)],
        speed: 0.01 + Math.random() * 0.02,
        size: 10 + Math.random() * 12
      });
    }

    let time = 0;

    const animate = () => {
      time += 0.016;

      // Clear canvas with slight trail effect for flowing motion
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw flowing intelligence patterns
      patterns.forEach((pattern, index) => {
        // Update phase for morphing effect
        pattern.phase += pattern.speed;
        
        // Create flowing, organic movement
        const wave1 = Math.sin(time * 0.8 + pattern.waveOffset) * 30;
        const wave2 = Math.cos(time * 0.6 + pattern.phase) * 20;
        const wave3 = Math.sin(time * 1.2 + index * 0.1) * 15;
        
        const flowX = pattern.x + wave1 + Math.sin(pattern.phase) * 40;
        const flowY = pattern.y + wave2 + Math.cos(pattern.phase * 0.7) * 35;
        
        // Morphing character selection based on time
        const charIndex = Math.floor((time * 2 + index) % intelligenceChars.length);
        pattern.char = intelligenceChars[charIndex];
        
        // Dynamic sizing for breathing effect
        const breathe = Math.sin(time * 3 + pattern.phase) * 0.3 + 1;
        const dynamicSize = pattern.size * breathe;
        
        // Dynamic alpha for pulsing consciousness
        const pulse = Math.sin(time * 4 + pattern.phase * 2) * 0.3 + 0.7;
        const dynamicAlpha = pattern.alpha * pulse;
        
        // Gradient color shifting
        const colorShift = Math.sin(time + pattern.phase) * 0.5 + 0.5;
        const r = Math.floor(pattern.color.r + colorShift * 50);
        const g = Math.floor(pattern.color.g + Math.sin(time * 2 + pattern.phase) * 40);
        const b = Math.floor(pattern.color.b + Math.cos(time * 1.5 + pattern.phase) * 60);
        
        ctx.font = `${dynamicSize}px monospace`;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${dynamicAlpha})`;
        ctx.textAlign = 'center';
        ctx.fillText(pattern.char, flowX % canvas.width, flowY % canvas.height);
        
        // Add glow effect for enhanced intelligence feel
        ctx.shadowColor = `rgb(${pattern.color.r}, ${pattern.color.g}, ${pattern.color.b})`;
        ctx.shadowBlur = 10;
        ctx.fillText(pattern.char, flowX % canvas.width, flowY % canvas.height);
        ctx.shadowBlur = 0;
        
        // Wrap around screen edges
        if (flowX > canvas.width + 50) pattern.x = -50;
        if (flowX < -50) pattern.x = canvas.width + 50;
        if (flowY > canvas.height + 50) pattern.y = -50;
        if (flowY < -50) pattern.y = canvas.height + 50;
      });

      // Draw central intelligence core - spiraling consciousness
      corePatterns.forEach((core, index) => {
        core.angle += core.speed;
        
        // Spiraling outward and inward motion
        const spiralRadius = core.radius + Math.sin(time + index * 0.5) * 30;
        const spiralX = centerX + Math.cos(core.angle) * spiralRadius;
        const spiralY = centerY + Math.sin(core.angle) * spiralRadius;
        
        // Morphing core characters
        const coreCharIndex = Math.floor((time * 3 + index * 2) % intelligenceChars.length);
        core.char = intelligenceChars[coreCharIndex];
        
        // Central intelligence glow
        const coreGlow = Math.sin(time * 5 + index) * 0.4 + 0.8;
        const coreBreathe = Math.sin(time * 2.5 + index * 0.3) * 0.5 + 1.2;
        
        ctx.font = `${core.size * coreBreathe}px monospace`;
        ctx.fillStyle = `rgba(0, 255, 200, ${coreGlow})`;
        ctx.shadowColor = 'rgba(0, 255, 200, 0.8)';
        ctx.shadowBlur = 15;
        ctx.textAlign = 'center';
        ctx.fillText(core.char, spiralX, spiralY);
        ctx.shadowBlur = 0;
      });

      // Draw connecting intelligence streams
      ctx.strokeStyle = 'rgba(0, 212, 170, 0.3)';
      ctx.lineWidth = 1;
      for (let i = 0; i < corePatterns.length - 1; i++) {
        const current = corePatterns[i];
        const next = corePatterns[i + 1];
        
        const x1 = centerX + Math.cos(current.angle) * (current.radius + Math.sin(time + i * 0.5) * 30);
        const y1 = centerY + Math.sin(current.angle) * (current.radius + Math.sin(time + i * 0.5) * 30);
        const x2 = centerX + Math.cos(next.angle) * (next.radius + Math.sin(time + (i + 1) * 0.5) * 30);
        const y2 = centerY + Math.sin(next.angle) * (next.radius + Math.sin(time + (i + 1) * 0.5) * 30);
        
        // Flowing connection lines
        const connectionAlpha = Math.sin(time * 3 + i) * 0.2 + 0.3;
        ctx.strokeStyle = `rgba(0, 128, 255, ${connectionAlpha})`;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center" style={{ minHeight: '400px' }}>
      <canvas
        ref={canvasRef}
        className="max-w-full max-h-full"
        style={{ 
          filter: 'contrast(1.2) brightness(1.1)',
          background: 'transparent'
        }}
      />
    </div>
  );
}