"use client"

import { DocsSidebar } from "@/components/docs-sidebar"
import { CodeBlock } from "@/components/code-block"
import { ComponentPreview } from "@/components/component-preview"
import { Scene, Cone } from "@3d-ui/components"

export default function ConeDocsPage() {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <main className="flex-1 pl-64">
        <div className="mx-auto max-w-3xl px-8 py-12">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold tracking-tight">Cone</h1>
            <p className="text-xl text-muted-foreground mt-4">
              A cone primitive with variants, sizes, and animation support.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Preview</h2>
            <ComponentPreview>
              <Scene backgroundColor="#171717" environment="studio" cameraPosition={[2, 2, 2]}>
                <Cone variant="primary" size="lg" animate rotationSpeed={0.008} />
              </Scene>
            </ComponentPreview>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Usage</h2>
            <CodeBlock>
{`import { Scene, Cone } from "@3d-ui/components"

export function MyCone() {
  return (
    <Scene>
      <Cone 
        variant="destructive" 
        size="lg" 
        animate 
      />
    </Scene>
  )
}`}
            </CodeBlock>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Variants</h2>
            <ComponentPreview className="mb-4">
              <Scene backgroundColor="#171717" environment="studio" cameraPosition={[5, 2.5, 5]} controls={true}>
                <Cone variant="default" animate position={[-2.5, 0, 0]} rotationSpeed={0.005} />
                <Cone variant="primary" animate position={[-0.8, 0, 0]} rotationSpeed={0.005} />
                <Cone variant="secondary" animate position={[0.8, 0, 0]} rotationSpeed={0.005} />
                <Cone variant="destructive" animate position={[2.5, 0, 0]} rotationSpeed={0.005} />
              </Scene>
            </ComponentPreview>

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
                    <td className="py-3 px-2 font-mono">{'"default" | "primary" | "secondary" | "destructive"'}</td>
                    <td className="py-3 px-2">{'"default"'}</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 font-mono text-foreground">size</td>
                    <td className="py-3 px-2 font-mono">{'"sm" | "default" | "lg"'}</td>
                    <td className="py-3 px-2">{'"default"'}</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 font-mono text-foreground">segments</td>
                    <td className="py-3 px-2 font-mono">number</td>
                    <td className="py-3 px-2">32</td>
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
