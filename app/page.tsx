"use client"

import { useState } from "react"
import { Scene, Cube, Sphere, Cylinder, Torus, Cone } from "@/components/3d"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

type Variant = "default" | "primary" | "secondary" | "destructive"
type Size = "sm" | "default" | "lg"

export default function Page() {
  const [animate, setAnimate] = useState(true)
  const [wireframe, setWireframe] = useState(false)
  const [variant, setVariant] = useState<Variant>("primary")
  const [size, setSize] = useState<Size>("default")

  const variants: Variant[] = ["default", "primary", "secondary", "destructive"]
  const sizes: Size[] = ["sm", "default", "lg"]

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            3D Component Library
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A shadcn-style component library for 3D primitives built with React Three Fiber.
            Themeable, composable, and ready for production.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Interactive Preview</CardTitle>
                <CardDescription>
                  Drag to rotate, scroll to zoom, and use controls to customize
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[500px] rounded-lg overflow-hidden border bg-muted/30">
                  <Scene
                    backgroundColor="#fafafa"
                    environment="studio"
                    cameraPosition={[4, 3, 6]}
                  >
                    <Cube
                      position={[-2, 0, 0]}
                      variant={variant}
                      size={size}
                      animate={animate}
                      wireframe={wireframe}
                    />
                    <Sphere
                      position={[-0.5, 0, 0]}
                      variant={variant}
                      size={size}
                      animate={animate}
                      wireframe={wireframe}
                    />
                    <Cylinder
                      position={[1, 0, 0]}
                      variant={variant}
                      size={size}
                      animate={animate}
                      wireframe={wireframe}
                    />
                    <Torus
                      position={[2.5, 0, 0]}
                      variant={variant}
                      size={size}
                      animate={animate}
                      wireframe={wireframe}
                    />
                    <Cone
                      position={[4, 0, 0]}
                      variant={variant}
                      size={size}
                      animate={animate}
                      wireframe={wireframe}
                    />
                  </Scene>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Controls</CardTitle>
                <CardDescription>Customize the 3D components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label htmlFor="animate">Animation</Label>
                  <Switch
                    id="animate"
                    checked={animate}
                    onCheckedChange={setAnimate}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="wireframe">Wireframe</Label>
                  <Switch
                    id="wireframe"
                    checked={wireframe}
                    onCheckedChange={setWireframe}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Variant</Label>
                  <div className="flex flex-wrap gap-2">
                    {variants.map((v) => (
                      <Button
                        key={v}
                        variant={variant === v ? "default" : "outline"}
                        size="sm"
                        onClick={() => setVariant(v)}
                        className="capitalize"
                      >
                        {v}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Size</Label>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((s) => (
                      <Button
                        key={s}
                        variant={size === s ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSize(s)}
                        className="uppercase"
                      >
                        {s}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Components</CardTitle>
                <CardDescription>Available 3D primitives</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-mono">{"<Cube />"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-mono">{"<Sphere />"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-mono">{"<Cylinder />"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-mono">{"<Torus />"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-mono">{"<Cone />"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-mono">{"<Scene />"}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Individual Showcases</h2>
          <Tabs defaultValue="cube" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="cube">Cube</TabsTrigger>
              <TabsTrigger value="sphere">Sphere</TabsTrigger>
              <TabsTrigger value="cylinder">Cylinder</TabsTrigger>
              <TabsTrigger value="torus">Torus</TabsTrigger>
              <TabsTrigger value="cone">Cone</TabsTrigger>
            </TabsList>

            <TabsContent value="cube">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {variants.map((v) => (
                  <Card key={v}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm capitalize">{v}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-48 rounded-lg overflow-hidden">
                        <Scene controls={false} contactShadows={false} cameraPosition={[2, 1.5, 2]}>
                          <Cube variant={v} animate rotationSpeed={0.005} position={[0, 0, 0]} />
                        </Scene>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sphere">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {variants.map((v) => (
                  <Card key={v}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm capitalize">{v}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-48 rounded-lg overflow-hidden">
                        <Scene controls={false} contactShadows={false} cameraPosition={[2, 1.5, 2]}>
                          <Sphere variant={v} animate rotationSpeed={0.005} position={[0, 0, 0]} />
                        </Scene>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cylinder">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {variants.map((v) => (
                  <Card key={v}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm capitalize">{v}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-48 rounded-lg overflow-hidden">
                        <Scene controls={false} contactShadows={false} cameraPosition={[2, 1.5, 2]}>
                          <Cylinder variant={v} animate rotationSpeed={0.005} position={[0, 0, 0]} />
                        </Scene>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="torus">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {variants.map((v) => (
                  <Card key={v}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm capitalize">{v}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-48 rounded-lg overflow-hidden">
                        <Scene controls={false} contactShadows={false} cameraPosition={[2, 1.5, 2]}>
                          <Torus variant={v} animate rotationSpeed={0.005} position={[0, 0, 0]} />
                        </Scene>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cone">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {variants.map((v) => (
                  <Card key={v}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm capitalize">{v}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-48 rounded-lg overflow-hidden">
                        <Scene controls={false} contactShadows={false} cameraPosition={[2, 1.5, 2]}>
                          <Cone variant={v} animate rotationSpeed={0.005} position={[0, 0, 0]} />
                        </Scene>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Usage</h2>
          <Card>
            <CardContent className="pt-6">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`import { Scene, Cube, Sphere } from "@/components/3d"

export function MyScene() {
  return (
    <Scene backgroundColor="#fafafa" environment="studio">
      <Cube 
        variant="primary" 
        size="lg" 
        animate 
        position={[-1, 0, 0]} 
      />
      <Sphere 
        variant="secondary" 
        wireframe 
        position={[1, 0, 0]} 
      />
    </Scene>
  )
}`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
