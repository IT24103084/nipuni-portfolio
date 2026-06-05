// NeuralSphere.jsx
// 3D animated neural network sphere using React Three Fiber + Drei.
// Rendered in the Hero section.

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// ── Floating node dots on sphere surface ──
function SphereNodes() {
  const ref = useRef()

  // Generate points on sphere surface using Fibonacci spiral
  const positions = useMemo(() => {
    const count = 180
    const pts = new Float32Array(count * 3)
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = golden * i
      pts[i * 3] = Math.cos(theta) * r * 1.6
      pts[i * 3 + 1] = y * 1.6
      pts[i * 3 + 2] = Math.sin(theta) * r * 1.6
    }
    return pts
  }, [])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.12
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.07) * 0.2
    }
  })

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#b06ef3"
          size={0.045}
          sizeAttenuation
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
    </group>
  )
}

// ── Rotating wire-frame ring ──
function Ring({ radius, rotation, speed, color }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * speed
      ref.current.rotation.x = rotation
    }
  })
  const geometry = useMemo(() => new THREE.TorusGeometry(radius, 0.008, 4, 80), [radius])
  return (
    <mesh ref={ref} geometry={geometry}>
      <meshBasicMaterial color={color} transparent opacity={0.35} />
    </mesh>
  )
}

// ── Central glowing core ──
function Core() {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      const s = 1 + Math.sin(clock.getElapsedTime() * 1.5) * 0.08
      ref.current.scale.setScalar(s)
    }
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.22, 32, 32]} />
      <meshStandardMaterial
        color="#7c6af7"
        emissive="#7c6af7"
        emissiveIntensity={2.5}
        transparent
        opacity={0.9}
      />
    </mesh>
  )
}

// ── Orbiting satellite dots ──
function Satellite({ radius, speed, offset, color }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius
      ref.current.position.y = Math.sin(t * 0.7) * radius * 0.4
      ref.current.position.z = Math.sin(t) * radius
    }
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.04, 12, 12]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

// ── Main exported component ──
export default function NeuralSphere() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 50 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 3, 3]} intensity={1.5} color="#7c6af7" />
        <pointLight position={[-3, -2, -2]} intensity={0.8} color="#b06ef3" />

        {/* Scene objects */}
        <SphereNodes />
        <Core />

        <Ring radius={1.9} rotation={0.3} speed={0.15} color="#7c6af7" />
        <Ring radius={1.65} rotation={1.1} speed={-0.2} color="#b06ef3" />
        <Ring radius={2.1} rotation={0.8} speed={0.1} color="#4fc3f7" />

        <Satellite radius={2.2} speed={0.5} offset={0} color="#7c6af7" />
        <Satellite radius={1.8} speed={-0.4} offset={2} color="#b06ef3" />
        <Satellite radius={2.4} speed={0.3} offset={4} color="#4fc3f7" />

        {/* Allow subtle drag interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      </Canvas>
    </div>
  )
}
