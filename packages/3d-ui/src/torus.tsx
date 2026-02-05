"use client"

import * as React from "react"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { cva, type VariantProps } from "class-variance-authority"

const torusVariants = cva("", {
  variants: {
    variant: {
      default: "",
      primary: "",
      secondary: "",
      destructive: "",
      outline: "",
      ghost: "",
    },
    size: {
      sm: "",
      default: "",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

const variantColors: Record<string, string> = {
  default: "#171717",
  primary: "#2563eb",
  secondary: "#64748b",
  destructive: "#dc2626",
  outline: "#fafafa",
  ghost: "#f1f5f9",
}

const sizeValues: Record<string, { radius: number; tube: number }> = {
  sm: { radius: 0.4, tube: 0.15 },
  default: { radius: 0.6, tube: 0.2 },
  lg: { radius: 0.9, tube: 0.3 },
}

export interface TorusProps
  extends Omit<React.ComponentProps<"mesh">, "args">,
    VariantProps<typeof torusVariants> {
  animate?: boolean
  rotationSpeed?: number
  wireframe?: boolean
  metalness?: number
  roughness?: number
  color?: string
  radialSegments?: number
  tubularSegments?: number
}

const Torus = React.forwardRef<THREE.Mesh, TorusProps>(
  (
    {
      variant = "default",
      size = "default",
      animate = false,
      rotationSpeed = 0.01,
      wireframe = false,
      metalness = 0.1,
      roughness = 0.5,
      color,
      radialSegments = 16,
      tubularSegments = 48,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<THREE.Mesh>(null)
    const meshRef = (ref as React.RefObject<THREE.Mesh>) || internalRef

    useFrame(() => {
      if (animate && meshRef.current) {
        meshRef.current.rotation.x += rotationSpeed
        meshRef.current.rotation.y += rotationSpeed * 0.7
      }
    })

    const { radius, tube } = sizeValues[size || "default"]
    const resolvedColor = color || variantColors[variant || "default"]

    return (
      <mesh ref={meshRef} {...props}>
        <torusGeometry args={[radius, tube, radialSegments, tubularSegments]} />
        <meshStandardMaterial
          color={resolvedColor}
          wireframe={wireframe}
          metalness={metalness}
          roughness={roughness}
        />
      </mesh>
    )
  }
)
Torus.displayName = "Torus"

export { Torus, torusVariants }
