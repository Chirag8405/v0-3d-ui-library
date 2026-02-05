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
        "relative rounded-lg border border-border bg-background",
        className
      )}
    >
      <div className="h-[400px] w-full">{children}</div>
    </div>
  )
}
