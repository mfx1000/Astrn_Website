import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ASCIIIntelligence() {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true
    });
    
    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create flowing intelligence visualization
    const particleCount = 300;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    // Initialize particles in organic flowing patterns
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Create organic distribution
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 1 + Math.sin(angle * 3) * 0.5;
      const height = Math.cos(angle * 2) * 2;
      
      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 1] = height;
      positions[i3 + 2] = Math.sin(angle) * radius;
      
      // Set initial velocities for organic flow
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
      
      // Gradient colors representing intelligence
      const t = i / particleCount;
      colors[i3] = 0.0 + Math.sin(t * Math.PI) * 0.3;     // R
      colors[i3 + 1] = 0.7 + Math.sin(t * Math.PI * 2) * 0.3; // G (teal)
      colors[i3 + 2] = 0.6 + Math.cos(t * Math.PI) * 0.4;     // B (blue)
      
      sizes[i] = 2 + Math.random() * 3;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Enhanced shader for intelligence visualization
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 customColor;
        varying vec3 vColor;
        varying float vSize;
        uniform float time;
        
        void main() {
          vColor = customColor;
          vSize = size;
          
          vec3 pos = position;
          
          // Create organic, brain-like flow patterns
          float wave1 = sin(time * 0.8 + pos.x * 2.0 + pos.z * 1.5) * 0.3;
          float wave2 = cos(time * 0.6 + pos.y * 1.8 + pos.z * 2.2) * 0.25;
          float wave3 = sin(time * 1.2 + pos.x * 1.2 + pos.y * 1.6) * 0.2;
          
          pos.x += wave1;
          pos.y += wave2;
          pos.z += wave3;
          
          // Add spiraling motion for consciousness effect
          float spiral = time * 0.5;
          float cosSpiral = cos(spiral + pos.y * 0.5);
          float sinSpiral = sin(spiral + pos.y * 0.5);
          
          float newX = pos.x * cosSpiral - pos.z * sinSpiral;
          float newZ = pos.x * sinSpiral + pos.z * cosSpiral;
          pos.x = newX;
          pos.z = newZ;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = size * (200.0 / -mvPosition.z);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vSize;
        uniform float time;
        
        void main() {
          vec2 center = gl_PointCoord - 0.5;
          float dist = length(center);
          
          // Create complex patterns for intelligence representation
          float pattern1 = sin(gl_PointCoord.x * 15.0 + time * 2.0) * 0.5 + 0.5;
          float pattern2 = cos(gl_PointCoord.y * 12.0 + time * 1.5) * 0.5 + 0.5;
          float pattern3 = sin((gl_PointCoord.x + gl_PointCoord.y) * 10.0 + time * 3.0) * 0.5 + 0.5;
          
          // Combine patterns for ASCII-like effect
          float combined = pattern1 * pattern2 * pattern3;
          float asciiPattern = step(0.4, combined);
          
          // Create pulsing consciousness effect
          float pulse = sin(time * 3.0 + dist * 8.0) * 0.3 + 0.7;
          
          // Soft circular falloff
          float alpha = (1.0 - smoothstep(0.0, 0.5, dist)) * asciiPattern * pulse;
          
          gl_FragColor = vec4(vColor, alpha * 0.8);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Create morphing DNA-like helixes representing intelligence structure
    const helixCount = 3;
    const helixes: THREE.Points[] = [];
    
    for (let h = 0; h < helixCount; h++) {
      const helixParticles = 50;
      const helixPositions = new Float32Array(helixParticles * 3);
      const helixColors = new Float32Array(helixParticles * 3);
      const helixSizes = new Float32Array(helixParticles);
      
      for (let i = 0; i < helixParticles; i++) {
        const t = (i / helixParticles) * Math.PI * 4;
        const radius = 0.8 + h * 0.3;
        const offset = (h * Math.PI * 2) / helixCount;
        
        helixPositions[i * 3] = Math.cos(t + offset) * radius;
        helixPositions[i * 3 + 1] = (i / helixParticles - 0.5) * 4;
        helixPositions[i * 3 + 2] = Math.sin(t + offset) * radius;
        
        const colorPhase = h / helixCount;
        helixColors[i * 3] = 0.1 + colorPhase * 0.2;
        helixColors[i * 3 + 1] = 0.8 - colorPhase * 0.3;
        helixColors[i * 3 + 2] = 0.7 + colorPhase * 0.3;
        
        helixSizes[i] = 1.5 + Math.sin(t) * 0.5;
      }
      
      const helixGeometry = new THREE.BufferGeometry();
      helixGeometry.setAttribute('position', new THREE.BufferAttribute(helixPositions, 3));
      helixGeometry.setAttribute('customColor', new THREE.BufferAttribute(helixColors, 3));
      helixGeometry.setAttribute('size', new THREE.BufferAttribute(helixSizes, 1));
      
      const helix = new THREE.Points(helixGeometry, material);
      helixes.push(helix);
      scene.add(helix);
    }

    camera.position.z = 6;

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.016;
      
      material.uniforms.time.value = time;
      
      // Rotate main particle system
      points.rotation.y += 0.008;
      points.rotation.x = Math.sin(time * 0.3) * 0.2;
      
      // Animate helixes with different speeds
      helixes.forEach((helix, index) => {
        helix.rotation.y += 0.01 * (index + 1);
        helix.rotation.x = Math.sin(time * 0.5 + index) * 0.3;
        helix.position.y = Math.sin(time * 0.7 + index * 2) * 0.5;
      });
      
      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full flex items-center justify-center"
      style={{ minHeight: '400px' }}
    />
  );
}