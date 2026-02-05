"use client"

import { DocsSidebar } from "@/components/docs-sidebar"
import { CodeBlock } from "@/components/code-block"
import { ComponentPreview } from "@/components/component-preview"
import { Scene, Cube } from "@3d-ui/components"

export default function SceneDocsPage() {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <main className="flex-1 pl-64">
        <div className="mx-auto max-w-3xl px-8 py-12">
          <article className="prose prose-neutral max-w-none">
            <h1 className="text-4xl font-bold tracking-tight">Scene</h1>
            <p className="text-xl text-muted-foreground mt-4">
              The container component that sets up the 3D canvas, lighting, and controls.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Preview</h2>
            <ComponentPreview>
              <Scene backgroundColor="#fafafa" environment="studio">
                <Cube variant="primary" animate rotationSpeed={0.005} />
              </Scene>
            </ComponentPreview>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Usage</h2>
            <CodeBlock>
{`import { Scene, Cube } from "@3d-ui/components"

export function MyScene() {
  return (
    <Scene 
      backgroundColor="#fafafa" 
      environment="studio"
      cameraPosition={[3, 3, 3]}
    >
      <Cube variant="primary" animate />
    </Scene>
  )
}`}
            </CodeBlock>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Props</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 font-semibold">Prop</th>
                    <th className="text-left py-3 px-2 font-semibold">Type</th>
                    <th className="text-left py-3 px-2 font-semibold">Default</th>
                    <th className="text-left py-3 px-2 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 font-mono text-foreground">controls</td>
                    <td className="py-3 px-2 font-mono">boolean</td>
                    <td className="py-3 px-2">true</td>
                    <td className="py-3 px-2">Enable orbit controls</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 font-mono text-foreground">shadows</td>
                    <td className="py-3 px-2 font-mono">boolean</td>
                    <td className="py-3 px-2">true</td>
                    <td className="py-3 px-2">Enable shadow casting</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 font-mono text-foreground">environment</td>
                    <td className="py-3 px-2 font-mono">string | false</td>
                    <td className="py-3 px-2">{'"studio"'}</td>
                    <td className="py-3 px-2">Environment preset or false to disable</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 font-mono text-foreground">backgroundColor</td>
                    <td className="py-3 px-2 font-mono">string</td>
                    <td className="py-3 px-2">{'"#f5f5f5"'}</td>
                    <td className="py-3 px-2">Canvas background color</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 font-mono text-foreground">cameraPosition</td>
                    <td className="py-3 px-2 font-mono">[x, y, z]</td>
                    <td className="py-3 px-2">[3, 3, 3]</td>
                    <td className="py-3 px-2">Initial camera position</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 font-mono text-foreground">contactShadows</td>
                    <td className="py-3 px-2 font-mono">boolean</td>
                    <td className="py-3 px-2">true</td>
                    <td className="py-3 px-2">Enable contact shadows</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 font-mono text-foreground">ambientIntensity</td>
                    <td className="py-3 px-2 font-mono">number</td>
                    <td className="py-3 px-2">0.5</td>
                    <td className="py-3 px-2">Ambient light intensity</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Environment Presets</h2>
            <p className="text-muted-foreground mb-4">
              The following environment presets are available:
            </p>
            <CodeBlock>
{`"apartment" | "city" | "dawn" | "forest" | "lobby" | 
"night" | "park" | "studio" | "sunset" | "warehouse"`}
            </CodeBlock>
          </article>
        </div>
      </main>
    </div>
  )
}
