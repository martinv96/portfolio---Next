'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Center, Text3D } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'

function AnimatedInitials() {
  const groupRef = useRef<THREE.Group>(null)
  const materialRef = useRef<THREE.MeshStandardMaterial>(null)
  const [progress, setProgress] = useState(0)

  useFrame(() => {
    if (progress < 1) {
      const newProgress = Math.min(progress + 0.02, 1)
      setProgress(newProgress)

      const scale = 0.8 + 0.2 * newProgress
      const yPos = -1 + 1 * newProgress
      const rotationY = Math.PI / 4 * (1 - newProgress) // 45° → 0°
      const opacity = newProgress

      if (groupRef.current) {
        groupRef.current.scale.set(scale, scale, scale)
        groupRef.current.position.y = yPos
        groupRef.current.rotation.y = rotationY
      }

      if (materialRef.current) {
        materialRef.current.opacity = opacity
        materialRef.current.transparent = true
      }
    }
  })

  return (
    <Center>
      <group ref={groupRef}>
        <Text3D
          font="/fonts/helvetiker_bold.typeface.json"
          size={2}
          height={0.4}
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.02}
        >
          MV
          <meshStandardMaterial ref={materialRef} color="#ffffff" />
        </Text3D>
      </group>
    </Center>
  )
}

export default function Initiales3D() {
  return (
    <Canvas style={{ background: 'transparent' }} camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <AnimatedInitials />
      </Suspense>
    </Canvas>
  )
}
