import { CodeBlock } from "./code-block";

const files = [
  {
    title: "theme.ts",
    code: `export const theme = {
  colors: {
    primary: '#3b82f6',
    secondary: '#10b981',
    background: '#0f172a',
  },
  fonts: {
    body: 'Inter, sans-serif',
    code: 'Fira Code, monospace',
  }
}`,
    language: "typescript",
  },
  {
    title: "styles.css",
    code: `.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.button {
  background: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}`,
    language: "css",
  },
];

export function CodeBlockDemo() {
  return (
    <div className="p-4 size-[400px]">
      <CodeBlock
        files={files}
        defaultTitle="theme.ts"
        className="size-[400px]"
      />
    </div>
  );
}