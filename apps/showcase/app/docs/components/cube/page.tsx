"use client"

import { DocsSidebar } from "@/components/docs-sidebar"
import { CodeBlock } from "@/components/code-block"
import { ComponentPreview } from "@/components/component-preview"
import { Scene, Cube } from "@3d-ui/components"

export default function CubeDocsPage() {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <main className="flex-1 pl-64">
        <div className="mx-auto max-w-3xl px-8 py-12">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold tracking-tight">Cube</h1>
            <p className="text-xl text-muted-foreground mt-4">
              A rounded box primitive with variants, sizes, and animation support.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Preview</h2>
            <ComponentPreview>
              <Scene backgroundColor="#171717" environment="studio" cameraPosition={[2.5, 2, 2.5]}>
                <Cube variant="primary" size="lg" animate rotationSpeed={0.008} />
              </Scene>
            </ComponentPreview>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Usage</h2>
            <CodeBlock>
{`import { Scene, Cube } from "@3d-ui/components"

export function MyCube() {
  return (
    <Scene>
      <Cube 
        variant="primary" 
        size="lg" 
        animate 
        rotationSpeed={0.01}
        metalness={0.2}
        roughness={0.4}
      />
    </Scene>
  )
}`}
            </CodeBlock>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Variants</h2>
            <ComponentPreview className="mb-4">
              <Scene backgroundColor="#171717" environment="studio" cameraPosition={[6, 3, 6]} controls={true}>
                <Cube variant="default" animate position={[-3, 0, 0]} rotationSpeed={0.005} />
                <Cube variant="primary" animate position={[-1, 0, 0]} rotationSpeed={0.005} />
                <Cube variant="secondary" animate position={[1, 0, 0]} rotationSpeed={0.005} />
                <Cube variant="destructive" animate position={[3, 0, 0]} rotationSpeed={0.005} />
              </Scene>
            </ComponentPreview>
            <p className="text-muted-foreground text-sm mb-6">
              From left to right: default, primary, secondary, destructive
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Props</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 font-semibold">Prop</th>
                    <th className="text-left py-3 px-2 font-semibold">Type</th>
                    <th className="text-left py-3 px-2 font-semibold">Default</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 font-mono text-foreground">variant</td>
                    <td className="py-3 px-2 font-mono">{'"default" | "primary" | "secondary" | "destructive" | "outline" | "ghost"'}</td>
                    <td className="py-3 px-2">{'"default"'}</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 font-mono text-foreground">size</td>
                    <td className="py-3 px-2 font-mono">{'"sm" | "default" | "lg"'}</td>
                    <td className="py-3 px-2">{'"default"'}</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 font-mono text-foreground">animate</td>
                    <td className="py-3 px-2 font-mono">boolean</td>
                    <td className="py-3 px-2">false</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 font-mono text-foreground">rotationSpeed</td>
                    <td className="py-3 px-2 font-mono">number</td>
                    <td className="py-3 px-2">0.01</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 font-mono text-foreground">wireframe</td>
                    <td className="py-3 px-2 font-mono">boolean</td>
                    <td className="py-3 px-2">false</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 font-mono text-foreground">metalness</td>
                    <td className="py-3 px-2 font-mono">number</td>
                    <td className="py-3 px-2">0.1</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 font-mono text-foreground">roughness</td>
                    <td className="py-3 px-2 font-mono">number</td>
                    <td className="py-3 px-2">0.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}
