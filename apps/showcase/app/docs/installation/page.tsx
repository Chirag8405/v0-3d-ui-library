import { DocsSidebar } from "@/components/docs-sidebar"
import { CodeBlock } from "@/components/code-block"

export default function InstallationPage() {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <main className="flex-1 pl-64">
        <div className="mx-auto max-w-3xl px-8 py-12">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold tracking-tight">Installation</h1>
            <p className="text-xl text-muted-foreground mt-4">
              How to install and set up the 3D UI component library.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Prerequisites</h2>
            <p className="text-muted-foreground leading-relaxed">
              Before you begin, make sure you have a React 18+ project set up. The library works
              with Next.js, Vite, Create React App, or any React framework.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Install Dependencies</h2>
            <p className="text-muted-foreground mb-4">
              Install React Three Fiber and its peer dependencies:
            </p>
            <CodeBlock language="bash">
{`npm install @react-three/fiber @react-three/drei three`}
            </CodeBlock>

            <p className="text-muted-foreground mt-6 mb-4">
              Install the styling utilities used by the components:
            </p>
            <CodeBlock language="bash">
{`npm install class-variance-authority clsx tailwind-merge`}
            </CodeBlock>

            <h2 className="text-2xl font-semibold mt-12 mb-4">TypeScript Support</h2>
            <p className="text-muted-foreground mb-4">
              For TypeScript projects, install the Three.js type definitions:
            </p>
            <CodeBlock language="bash">
{`npm install -D @types/three`}
            </CodeBlock>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Copy Components</h2>
            <p className="text-muted-foreground mb-4">
              Copy the components you need from the documentation into your project. 
              Each component is self-contained and can be used independently.
            </p>
            <CodeBlock language="bash">
{`# Create the 3D components directory
mkdir -p components/3d

# Copy the components you need
# - scene.tsx (required for all components)
# - cube.tsx
# - sphere.tsx
# - cylinder.tsx
# - torus.tsx
# - cone.tsx`}
            </CodeBlock>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Next.js Configuration</h2>
            <p className="text-muted-foreground mb-4">
              If you are using Next.js, you may need to configure transpilation for the Three.js
              packages in your next.config.js:
            </p>
            <CodeBlock language="javascript">
{`/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
}

module.exports = nextConfig`}
            </CodeBlock>
          </article>
        </div>
      </main>
    </div>
  )
}
