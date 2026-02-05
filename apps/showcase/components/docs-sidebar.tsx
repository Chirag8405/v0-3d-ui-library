"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Box, Circle, Cylinder, Donut, Triangle, Layers, Home } from "lucide-react"

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Home", href: "/", icon: Home },
      { title: "Introduction", href: "/docs", icon: Layers },
      { title: "Installation", href: "/docs/installation", icon: Box },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Scene", href: "/docs/components/scene", icon: Layers },
      { title: "Cube", href: "/docs/components/cube", icon: Box },
      { title: "Sphere", href: "/docs/components/sphere", icon: Circle },
      { title: "Cylinder", href: "/docs/components/cylinder", icon: Cylinder },
      { title: "Torus", href: "/docs/components/torus", icon: Donut },
      { title: "Cone", href: "/docs/components/cone", icon: Triangle },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-0 left-0 z-30 h-screen w-64 border-r border-border bg-background">
      <div className="flex h-14 items-center border-b border-border px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Box className="h-5 w-5" />
          <span>3D UI</span>
        </Link>
      </div>
      <nav className="h-[calc(100vh-3.5rem)] overflow-y-auto p-4">
        {navigation.map((group) => (
          <div key={group.title} className="mb-6">
            <h4 className="mb-2 px-2 text-sm font-semibold text-muted-foreground">
              {group.title}
            </h4>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                        isActive
                          ? "bg-secondary text-foreground font-medium"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
