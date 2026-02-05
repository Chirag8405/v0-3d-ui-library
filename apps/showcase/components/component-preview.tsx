"use client"

import { cn } from "@/lib/utils"

interface ComponentPreviewProps {
  children: React.ReactNode
  className?: string
}

export function ComponentPreview({ children, className }: ComponentPreviewProps) {
  return (
    <div
      className={cn(
        "not-prose relative rounded-lg border border-border bg-background overflow-hidden h-[400px]",
        className
      )}
    >
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  )
}
