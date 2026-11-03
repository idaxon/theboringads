"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import BoringMascot from "./BoringMascot";

function Abstract3DObject({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const baseRotation = useRef({ x: 0, y: 0, z: 0 });

  useFrame(() => {
    if (!meshRef.current) return;

    // Slow constant rotation (0.002 rad/frame)
    baseRotation.current.x += 0.002;
    baseRotation.current.y += 0.002;

    // Subtle rotation offset driven by normalized mouse position (-1 to 1)
    const targetOffsetMouseX = mousePosition.y * 0.35;
    const targetOffsetMouseY = mousePosition.x * 0.35;

    // Lerp for smoothness, no jitter
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      baseRotation.current.x + targetOffsetMouseX,
      0.05
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      baseRotation.current.y + targetOffsetMouseY,
      0.05
    );
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Abstract 3D Geometry: Sharp faceted icosahedron in flat black material */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <icosahedronGeometry args={[2.2, 0]} />
        <meshStandardMaterial
          color="#0A0A0A"
          roughness={0.4}
          metalness={0.2}
          flatShading={true}
        />
      </mesh>
    </group>
  );
}

export default function HeroCanvas3D({ className = "" }: { className?: string }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      if (mediaQuery.matches) return;
      // Normalized coordinates: -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!mounted) {
    return (
      <div className={`w-40 h-40 md:w-72 md:h-72 flex items-center justify-center opacity-60 ${className}`}>
        <BoringMascot size={80} />
      </div>
    );
  }

  // Mobile / Reduced Motion fallback
  if (isMobile || prefersReducedMotion) {
    return (
      <div className={`w-32 h-32 sm:w-48 sm:h-48 flex items-center justify-center p-2 opacity-75 ${className}`}>
        <div className="relative">
          <BoringMascot size={88} interactive={true} />
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full select-none pointer-events-none relative ${className}`}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center opacity-60">
            <BoringMascot size={80} />
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 0, 4.0], fov: 50 }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          style={{ background: "transparent" }}
        >
          {/* Subtle ambient lighting for base visibility */}
          <ambientLight intensity={0.4} />

          {/* Front fill light so black facets reveal structure */}
          <directionalLight position={[0, 2, 4]} intensity={0.5} color="#FFFFFF" />

          {/* Thin acid-yellow rim lights to highlight sharp edges */}
          <directionalLight position={[-4, 3, -3.5]} intensity={6.5} color="#DFFF00" />
          <pointLight position={[3.5, -2.5, -2.5]} intensity={4.0} color="#DFFF00" />

          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
            <Abstract3DObject mousePosition={mousePos} />
          </Float>
        </Canvas>
      </Suspense>
    </div>
  );
}
