
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh } from 'three';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingIcon() {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial 
          color={hovered ? '#8b5cf6' : '#6366f1'} 
          roughness={0.4} 
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function WaveMesh() {
  const meshRef = useRef<Mesh>(null!);
  const [amplitude] = useState(0.3);
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    if (meshRef.current && meshRef.current.geometry.attributes.position) {
      const positions = meshRef.current.geometry.attributes.position;
      
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        
        const waveX1 = Math.sin(x * 2 + time) * amplitude;
        const waveX2 = Math.sin(x * 3 + time * 2) * amplitude * 0.5;
        const waveY1 = Math.sin(y * 3 + time * 0.7) * amplitude;
        
        positions.setZ(i, waveX1 + waveX2 + waveY1);
      }
      
      positions.needsUpdate = true;
    }
  });
  
  return (
    <mesh ref={meshRef} rotation={[Math.PI / 4, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[10, 10, 32, 32]} />
      <meshStandardMaterial 
        color="#8b5cf6" 
        wireframe 
        side={THREE.DoubleSide} 
      />
    </mesh>
  );
}

export function ThreeScene() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <FloatingIcon />
        <WaveMesh />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
