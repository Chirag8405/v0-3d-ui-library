"use client"

import * as React from "react"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { cva, type VariantProps } from "class-variance-authority"

const cylinderVariants = cva("", {
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

const sizeValues: Record<string, { radius: number; height: number }> = {
  sm: { radius: 0.35, height: 0.75 },
  default: { radius: 0.5, height: 1 },
  lg: { radius: 0.75, height: 1.5 },
}

export interface CylinderProps
  extends Omit<React.ComponentProps<"mesh">, "args">,
    VariantProps<typeof cylinderVariants> {
  animate?: boolean
  rotationSpeed?: number
  wireframe?: boolean
  metalness?: number
  roughness?: number
  color?: string
  segments?: number
}

const Cylinder = React.forwardRef<THREE.Mesh, CylinderProps>(
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
      segments = 32,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<THREE.Mesh>(null)
    const meshRef = (ref as React.RefObject<THREE.Mesh>) || internalRef

    useFrame(() => {
      if (animate && meshRef.current) {
        meshRef.current.rotation.y += rotationSpeed
      }
    })

    const { radius, height } = sizeValues[size || "default"]
    const resolvedColor = color || variantColors[variant || "default"]

    return (
      <mesh ref={meshRef} {...props}>
        <cylinderGeometry args={[radius, radius, height, segments]} />
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
Cylinder.displayName = "Cylinder"

export { Cylinder, cylinderVariants }
