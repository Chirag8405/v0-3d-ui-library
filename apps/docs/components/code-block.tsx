"use client"

import { cn } from "@/lib/utils"

interface CodeBlockProps {
  children: string
  className?: string
  language?: string
}

export function CodeBlock({ children, className, language = "tsx" }: CodeBlockProps) {
  return (
    <div className={cn("relative rounded-lg bg-zinc-950 text-zinc-50", className)}>
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
        <span className="text-xs text-zinc-500">{language}</span>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="text-sm font-mono">{children}</code>
      </pre>
    </div>
  )
}
