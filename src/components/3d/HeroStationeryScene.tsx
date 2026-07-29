import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// 3D Notebook Component
function NotebookModel(props: any) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      meshRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.3) * 0.15;
    }
  });

  return (
    <group ref={meshRef} {...props}>
      {/* Front Cover */}
      <mesh position={[0, 0, 0.16]}>
        <boxGeometry args={[2.2, 3.2, 0.08]} />
        <meshStandardMaterial color="#1d4ed8" roughness={0.2} metalness={0.4} />
      </mesh>
      {/* Pages Block */}
      <mesh position={[0.05, 0, 0]}>
        <boxGeometry args={[2.1, 3.1, 0.24]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.9} />
      </mesh>
      {/* Back Cover */}
      <mesh position={[0, 0, -0.16]}>
        <boxGeometry args={[2.2, 3.2, 0.08]} />
        <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.5} />
      </mesh>
      {/* Gold Foil Accent Ribbon / Band */}
      <mesh position={[0, 0, 0.21]}>
        <boxGeometry args={[2.25, 0.2, 0.02]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.1} metalness={0.9} />
      </mesh>
    </group>
  );
}

// 3D Pencil Model
function PencilModel(props: any) {
  const pencilRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (pencilRef.current) {
      pencilRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.6) * 0.3;
      pencilRef.current.rotation.x += 0.005;
    }
  });

  return (
    <group ref={pencilRef} {...props}>
      {/* Hexagonal Pencil Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 3.5, 6]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.3} />
      </mesh>
      {/* Wood Cone Tip */}
      <mesh position={[0, 1.95, 0]}>
        <coneGeometry args={[0.15, 0.4, 16]} />
        <meshStandardMaterial color="#d97706" roughness={0.8} />
      </mesh>
      {/* Graphite Lead Tip */}
      <mesh position={[0, 2.18, 0]}>
        <coneGeometry args={[0.05, 0.12, 16]} />
        <meshStandardMaterial color="#1e293b" roughness={0.1} metalness={0.8} />
      </mesh>
      {/* Metallic Ferrule */}
      <mesh position={[0, -1.85, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.2, 16]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.1} metalness={0.9} />
      </mesh>
      {/* Pink Eraser */}
      <mesh position={[0, -2.05, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.2, 16]} />
        <meshStandardMaterial color="#f43f5e" roughness={0.6} />
      </mesh>
    </group>
  );
}

// 3D Luxury Pen Model
function PenModel(props: any) {
  const penRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (penRef.current) {
      penRef.current.rotation.y += 0.01;
      penRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.2;
    }
  });

  return (
    <group ref={penRef} {...props}>
      {/* Main Metallic Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 3.2, 16]} />
        <meshStandardMaterial color="#0f172a" roughness={0.1} metalness={0.95} />
      </mesh>
      {/* Gold Ring Accents */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.06, 16]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.1} metalness={0.95} />
      </mesh>
      {/* Gold Pen Clip */}
      <mesh position={[0.15, 1.0, 0]} rotation={[0, 0, -0.1]}>
        <boxGeometry args={[0.04, 1.0, 0.06]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.1} metalness={0.95} />
      </mesh>
    </group>
  );
}

// 3D Calculator Model
function CalculatorModel(props: any) {
  const calcRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (calcRef.current) {
      calcRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
      calcRef.current.rotation.y = Math.cos(state.clock.getElapsedTime() * 0.4) * 0.15;
    }
  });

  return (
    <group ref={calcRef} {...props}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.8, 2.6, 0.15]} />
        <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.6} />
      </mesh>
      {/* LCD Screen */}
      <mesh position={[0, 0.8, 0.09]}>
        <boxGeometry args={[1.5, 0.5, 0.02]} />
        <meshStandardMaterial color="#0284c7" roughness={0.1} metalness={0.8} />
      </mesh>
      {/* Keypad Buttons Grid Mock */}
      <mesh position={[0, -0.3, 0.09]}>
        <boxGeometry args={[1.5, 1.4, 0.02]} />
        <meshStandardMaterial color="#334155" roughness={0.5} />
      </mesh>
    </group>
  );
}

// Glowing Floating Particles
function FloatingParticles({ count = 120 }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorOptions = [new THREE.Color('#2563eb'), new THREE.Color('#f59e0b'), new THREE.Color('#38bdf8')];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18;

      const c = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.14}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Main 3D Canvas Scene
export const HeroStationeryScene: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />

        {/* Ambient & Directional Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -5, -5]} intensity={1.2} color="#2563eb" />
        <pointLight position={[5, -5, 5]} intensity={1.0} color="#f59e0b" />

        {/* Floating Particles */}
        <FloatingParticles count={140} />

        {/* Floating 3D Stationery Items */}
        <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
          <NotebookModel position={[-2.8, 0.5, 0.5]} rotation={[0.2, 0.4, -0.1]} scale={1.1} />
        </Float>

        <Float speed={3.0} rotationIntensity={1.2} floatIntensity={1.5}>
          <PencilModel position={[2.8, 1.2, 0.8]} rotation={[-0.4, 0.2, 0.5]} scale={1.0} />
        </Float>

        <Float speed={2.2} rotationIntensity={0.9} floatIntensity={1.0}>
          <PenModel position={[2.6, -1.6, 0.2]} rotation={[0.5, -0.3, -0.4]} scale={1.1} />
        </Float>

        <Float speed={2.8} rotationIntensity={1.0} floatIntensity={1.3}>
          <CalculatorModel position={[-2.6, -1.8, -0.5]} rotation={[-0.2, -0.5, 0.2]} scale={0.95} />
        </Float>

        {/* Morphing Distort Blob Background Accent */}
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
          <mesh position={[0, 0, -3]} scale={2.5}>
            <sphereGeometry args={[1, 32, 32]} />
            <MeshDistortMaterial
              color="#1d4ed8"
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0.2}
              opacity={0.25}
              transparent
            />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
};
