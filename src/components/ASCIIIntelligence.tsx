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

    // Sophisticated ASCII patterns representing intelligence layers
    const intelligenceChars = [
      // Core thinking patterns
      '◯', '◉', '⦿', '⊙', '⊚', '⊛',
      // Neural networks
      '⊗', '⊕', '⊡', '⊟', '⊞', '⊠',
      // Data processing
      '⟐', '⟑', '⟒', '⟓', '⟔', '⟕',
      // Information flow
      '⧆', '⧇', '⧈', '⧉', '⧊', '⧋',
      // Consciousness emergence
      '◈', '◇', '◆', '◊', '⬟', '⬠',
      // Binary thought
      '▣', '▢', '▥', '▦', '▧', '▨'
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

    // Initialize patterns with monochromatic white/grey palette
    for (let i = 0; i < 50; i++) {
      patterns.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        char: intelligenceChars[Math.floor(Math.random() * intelligenceChars.length)],
        phase: Math.random() * Math.PI * 2,
        speed: 0.015 + Math.random() * 0.025,
        size: 10 + Math.random() * 14,
        color: {
          r: 220 + Math.random() * 35,
          g: 220 + Math.random() * 35,
          b: 220 + Math.random() * 35
        },
        alpha: 0.2 + Math.random() * 0.6,
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

      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Create intelligence matrix - grid-based morphing patterns
      const gridSize = 8;
      const matrixRows = Math.floor(canvas.height / (gridSize * 4));
      const matrixCols = Math.floor(canvas.width / (gridSize * 3));

      for (let row = 0; row < matrixRows; row++) {
        for (let col = 0; col < matrixCols; col++) {
          const x = col * gridSize * 3 + gridSize;
          const y = row * gridSize * 4 + gridSize * 2;
          
          // Wave-based character selection for intelligence flow
          const waveIndex = Math.floor(
            (Math.sin(time * 0.8 + col * 0.3) + 
             Math.cos(time * 0.6 + row * 0.2) + 
             Math.sin(time * 1.2 + (col + row) * 0.1) + 3) * 
            (intelligenceChars.length / 6)
          ) % intelligenceChars.length;
          
          const char = intelligenceChars[waveIndex];
          
          // Intensity based on distance from thought waves
          const wave1 = Math.sin(time * 0.7 + col * 0.4 + row * 0.3);
          const wave2 = Math.cos(time * 0.9 + col * 0.2 + row * 0.5);
          const intensity = (wave1 + wave2 + 2) / 4;
          
          // Greyscale intensity mapping
          const greyValue = Math.floor(180 + intensity * 75);
          const alpha = 0.3 + intensity * 0.7;
          
          // Size variation for depth
          const sizeVariation = 0.8 + intensity * 0.4;
          const fontSize = Math.floor(12 * sizeVariation);
          
          ctx.font = `${fontSize}px monospace`;
          ctx.fillStyle = `rgba(${greyValue}, ${greyValue}, ${greyValue}, ${alpha})`;
          ctx.textAlign = 'center';
          ctx.fillText(char, x, y);
        }
      }

      // Central consciousness emanation
      const consciousnessLayers = 5;
      for (let layer = 0; layer < consciousnessLayers; layer++) {
        const layerRadius = 40 + layer * 25;
        const layerSpeed = 0.3 + layer * 0.1;
        const pointsInLayer = 8 + layer * 2;
        
        for (let point = 0; point < pointsInLayer; point++) {
          const angle = (point / pointsInLayer) * Math.PI * 2 + time * layerSpeed;
          const radiusVariation = Math.sin(time * 2 + layer + point * 0.5) * 8;
          const currentRadius = layerRadius + radiusVariation;
          
          const x = centerX + Math.cos(angle) * currentRadius;
          const y = centerY + Math.sin(angle) * currentRadius;
          
          // Character morphing based on layer and time
          const charIndex = Math.floor((time * 2 + layer * 3 + point) % intelligenceChars.length);
          const char = intelligenceChars[charIndex];
          
          // Layer-based opacity and size
          const layerAlpha = 0.8 - (layer * 0.15);
          const layerSize = 16 - layer * 2;
          const breathe = Math.sin(time * 3 + layer + point) * 0.2 + 1;
          
          ctx.font = `${Math.floor(layerSize * breathe)}px monospace`;
          ctx.fillStyle = `rgba(255, 255, 255, ${layerAlpha})`;
          ctx.textAlign = 'center';
          ctx.fillText(char, x, y);
        }
      }

      // Thought streams - vertical ascending patterns
      const streamCount = 6;
      for (let stream = 0; stream < streamCount; stream++) {
        const streamX = (canvas.width / (streamCount + 1)) * (stream + 1);
        const streamChars = 8;
        
        for (let charPos = 0; charPos < streamChars; charPos++) {
          const baseY = canvas.height - 50;
          const yOffset = (charPos * 30) + (time * 60) % (canvas.height + 100);
          const y = baseY - yOffset;
          
          if (y > -50 && y < canvas.height + 50) {
            const charIndex = Math.floor((time + stream * 2 + charPos) % intelligenceChars.length);
            const char = intelligenceChars[charIndex];
            
            // Fade effect as characters ascend
            const fadeAlpha = Math.max(0, Math.min(1, 
              (canvas.height - Math.abs(y - canvas.height / 2)) / (canvas.height / 2)
            )) * 0.6;
            
            const size = 11 + Math.sin(time * 2 + stream + charPos) * 2;
            
            ctx.font = `${size}px monospace`;
            ctx.fillStyle = `rgba(200, 200, 200, ${fadeAlpha})`;
            ctx.textAlign = 'center';
            ctx.fillText(char, streamX, y);
          }
        }
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