import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: string;
  size: string;
  delay: string;
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleData: Particle[] = [
      { id: 1, left: "10%", size: "w-2 h-2", delay: "0s" },
      { id: 2, left: "20%", size: "w-1 h-1", delay: "5s" },
      { id: 3, left: "30%", size: "w-3 h-3", delay: "10s" },
      { id: 4, left: "40%", size: "w-1.5 h-1.5", delay: "15s" },
      { id: 5, left: "60%", size: "w-2 h-2", delay: "8s" },
      { id: 6, left: "70%", size: "w-1 h-1", delay: "12s" },
      { id: 7, left: "80%", size: "w-2.5 h-2.5", delay: "3s" },
      { id: 8, left: "90%", size: "w-1 h-1", delay: "18s" }
    ];
    
    setParticles(particleData);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute ${particle.size} gradient-bg rounded-full opacity-30 animate-particle-float`}
          style={{
            left: particle.left,
            animationDelay: particle.delay
          }}
        />
      ))}
    </div>
  );
}
