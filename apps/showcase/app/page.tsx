"use client"

import Link from "next/link"
import { ArrowRight, Github, Box, Zap, Palette, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Scene, Cube, Sphere, Torus, Cylinder, Cone } from "@3d-ui/components"

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Box className="h-5 w-5" />
            <span>3D UI</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#components" className="hover:text-foreground transition-colors">
              Components
            </Link>
            <Link href="#features" className="hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/docs" className="hover:text-foreground transition-colors">
              Docs
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/docs">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-14">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm">
                <span className="text-muted-foreground">Introducing 3D UI</span>
                <ArrowRight className="h-3 w-3" />
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Beautiful 3D Components for React
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                A shadcn-style component library for 3D primitives. Built with React Three Fiber,
                designed for modern web applications.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/docs">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span>TypeScript Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span>Fully Customizable</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl border border-border bg-card overflow-hidden">
              <Scene backgroundColor="#0a0a0a" environment="city" cameraPosition={[4, 3, 4]}>
                <Cube variant="primary" animate rotationSpeed={0.005} position={[-1.5, 0, 0]} />
                <Sphere variant="secondary" animate rotationSpeed={0.008} position={[1.5, 0.5, 0]} color="#06b6d4" />
                <Torus variant="destructive" animate rotationSpeed={0.006} position={[0, -0.5, 1.5]} color="#f43f5e" />
              </Scene>
            </div>
          </div>
        </div>
      </section>

      {/* Components Grid */}
      <section id="components" className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Component Library</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Five beautiful 3D primitives with variants, sizes, and full customization support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Cube", component: <Cube variant="primary" animate rotationSpeed={0.008} />, color: "#2563eb" },
              { name: "Sphere", component: <Sphere variant="secondary" animate rotationSpeed={0.008} color="#06b6d4" />, color: "#06b6d4" },
              { name: "Cylinder", component: <Cylinder variant="default" animate rotationSpeed={0.008} />, color: "#171717" },
              { name: "Torus", component: <Torus variant="destructive" animate rotationSpeed={0.008} color="#f43f5e" />, color: "#f43f5e" },
              { name: "Cone", component: <Cone variant="secondary" animate rotationSpeed={0.008} color="#8b5cf6" />, color: "#8b5cf6" },
              { name: "Scene", component: (
                <>
                  <Cube size="sm" animate rotationSpeed={0.006} position={[-0.8, 0, 0]} color="#3b82f6" />
                  <Sphere size="sm" animate rotationSpeed={0.008} position={[0.8, 0, 0]} color="#06b6d4" />
                </>
              ), color: "#3b82f6" },
            ].map((item) => (
              <div
                key={item.name}
                className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-muted-foreground/50 transition-colors"
              >
                <div className="relative h-64">
                  <Scene backgroundColor="#0a0a0a" environment="city" cameraPosition={[2, 1.5, 2]} controls={false} contactShadows={false}>
                    {item.component}
                  </Scene>
                </div>
                <div className="p-4 border-t border-border">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.name === "Scene" ? "Container with lighting and controls" : `3D ${item.name.toLowerCase()} primitive`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why 3D UI?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built with the same principles as shadcn/ui - copy and paste, fully customizable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Variant System",
                description: "Default, primary, secondary, and destructive variants out of the box.",
              },
              {
                icon: Palette,
                title: "Full Customization",
                description: "Adjust colors, metalness, roughness, and more with simple props.",
              },
              {
                icon: Code2,
                title: "TypeScript First",
                description: "Full type safety with exported interfaces for all component props.",
              },
              {
                icon: Box,
                title: "Animation Ready",
                description: "Built-in rotation animations with customizable speed controls.",
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Simple, Intuitive API</h2>
              <p className="text-muted-foreground text-lg">
                Import the components you need and start building. The API follows familiar React patterns
                with props for variants, sizes, and customization.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link href="/docs">
                  Read the Docs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="rounded-xl border border-border bg-zinc-950 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>
                <span className="text-xs text-zinc-500 ml-2">scene.tsx</span>
              </div>
              <pre className="p-4 text-sm overflow-x-auto">
                <code className="text-zinc-300">
{`import { Scene, Cube, Sphere } from "@3d-ui/components"

export function MyScene() {
  return (
    <Scene 
      backgroundColor="#0a0a0a" 
      environment="city"
    >
      <Cube 
        variant="primary" 
        size="lg" 
        animate 
        position={[-1.5, 0, 0]} 
      />
      <Sphere 
        color="#06b6d4" 
        animate 
        metalness={0.3}
        roughness={0.2}
      />
    </Scene>
  )
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build in 3D?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get started with 3D UI today. Copy the components, customize them, and ship beautiful 3D experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/docs">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              Star on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Box className="h-4 w-4" />
            <span>3D UI - Built with React Three Fiber</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/docs" className="hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link href="https://github.com" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
