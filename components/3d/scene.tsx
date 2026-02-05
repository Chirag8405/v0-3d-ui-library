"use client"

import * as React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei"
import { cn } from "@/lib/utils"

type EnvironmentPreset =
  | "apartment"
  | "city"
  | "dawn"
  | "forest"
  | "lobby"
  | "night"
  | "park"
  | "studio"
  | "sunset"
  | "warehouse"

export interface SceneProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  controls?: boolean
  shadows?: boolean
  environment?: EnvironmentPreset | false
  backgroundColor?: string
  cameraPosition?: [number, number, number]
  contactShadows?: boolean
  ambientIntensity?: number
}

const Scene = React.forwardRef<HTMLDivElement, SceneProps>(
  (
    {
      children,
      className,
      controls = true,
      shadows = true,
      environment = "studio",
      backgroundColor = "#f5f5f5",
      cameraPosition = [3, 3, 3],
      contactShadows = true,
      ambientIntensity = 0.5,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("w-full h-full min-h-[400px]", className)}
        {...props}
      >
        <Canvas
          shadows={shadows}
          camera={{ position: cameraPosition, fov: 50 }}
          style={{ background: backgroundColor }}
        >
          <ambientLight intensity={ambientIntensity} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow={shadows}
            shadow-mapSize={[1024, 1024]}
          />
          
          {children}
          
          {contactShadows && (
            <ContactShadows
              position={[0, -1, 0]}
              opacity={0.4}
              scale={10}
              blur={2}
              far={4}
            />
          )}
          
          {environment && <Environment preset={environment} />}
          
          {controls && (
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={2}
              maxDistance={10}
            />
          )}
        </Canvas>
      </div>
    )
  }
)
Scene.displayName = "Scene"

export { Scene }
