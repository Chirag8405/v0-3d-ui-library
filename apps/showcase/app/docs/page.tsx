import { DocsSidebar } from "@/components/docs-sidebar"
import { CodeBlock } from "@/components/code-block"

export default function DocsPage() {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <main className="flex-1 pl-64">
        <div className="mx-auto max-w-3xl px-8 py-12">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold tracking-tight">3D UI Components</h1>
            <p className="text-xl text-muted-foreground mt-4">
              A shadcn-style component library for 3D primitives built with React Three Fiber.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              3D UI is a collection of beautifully designed, accessible 3D components that you can
              copy and paste into your apps. The components follow the shadcn/ui pattern with
              variants, sizes, and full customization support.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Features</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-foreground font-medium">Variant System</span> - Each component supports default, primary, secondary, destructive, outline, and ghost variants.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground font-medium">Size Options</span> - Small, default, and large sizes for flexible layouts.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground font-medium">Animation Support</span> - Built-in rotation animations with customizable speed.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground font-medium">Material Control</span> - Adjust metalness, roughness, and wireframe rendering.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground font-medium">TypeScript</span> - Full type safety with exported prop interfaces.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Quick Start</h2>
            <p className="text-muted-foreground mb-4">
              Install the required dependencies and start using 3D components in your React app.
            </p>
            <CodeBlock language="bash">
{`npm install @react-three/fiber @react-three/drei three
npm install class-variance-authority clsx tailwind-merge`}
            </CodeBlock>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Basic Usage</h2>
            <CodeBlock>
{`import { Scene, Cube, Sphere } from "@3d-ui/components"

export function MyScene() {
  return (
    <Scene backgroundColor="#fafafa" environment="studio">
      <Cube 
        variant="primary" 
        size="lg" 
        animate 
        position={[-1.5, 0, 0]} 
      />
      <Sphere 
        variant="secondary" 
        animate 
        position={[1.5, 0, 0]} 
      />
    </Scene>
  )
}`}
            </CodeBlock>
          </article>
        </div>
      </main>
    </div>
  )
}
