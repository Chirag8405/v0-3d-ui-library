"use client"

import * as React from "react"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { RoundedBox } from "@react-three/drei"
import type * as THREE from "three"
import { cva, type VariantProps } from "class-variance-authority"

const cubeVariants = cva("", {
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

const sizeValues: Record<string, [number, number, number]> = {
  sm: [0.75, 0.75, 0.75],
  default: [1, 1, 1],
  lg: [1.5, 1.5, 1.5],
}

export interface CubeProps
  extends Omit<React.ComponentProps<typeof RoundedBox>, "args">,
    VariantProps<typeof cubeVariants> {
  animate?: boolean
  rotationSpeed?: number
  wireframe?: boolean
  metalness?: number
  roughness?: number
  color?: string
  radius?: number
}

const Cube = React.forwardRef<THREE.Mesh, CubeProps>(
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
      radius = 0.05,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<THREE.Mesh>(null)
    const meshRef = (ref as React.RefObject<THREE.Mesh>) || internalRef

    useFrame(() => {
      if (animate && meshRef.current) {
        meshRef.current.rotation.x += rotationSpeed
        meshRef.current.rotation.y += rotationSpeed * 1.1
      }
    })

    const dimensions = sizeValues[size || "default"]
    const resolvedColor = color || variantColors[variant || "default"]

    return (
      <RoundedBox
        ref={meshRef}
        args={dimensions}
        radius={radius}
        smoothness={4}
        {...props}
      >
        <meshStandardMaterial
          color={resolvedColor}
          wireframe={wireframe}
          metalness={metalness}
          roughness={roughness}
        />
      </RoundedBox>
    )
  }
)
Cube.displayName = "Cube"

export { Cube, cubeVariants }
