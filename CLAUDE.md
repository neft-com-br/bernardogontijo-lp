# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build static site (outputs to /out directory)
npm run start    # Start production server
npm run lint     # Run ESLint checks
```

## Architecture Overview

This is a **Next.js static landing page** for bernardogontijo.com personal website, using:
- **Pages Router** (not App Router) - pages in `src/pages/`
- **Static Export** - configured with `output: 'export'` for static hosting
- **TypeScript** with strict configuration
- **Tailwind CSS** with custom theme
- **Framer Motion** for animations

### Key Directories

- `src/pages/` - Next.js pages (Pages Router)
- `src/components/` - Reusable components
- `out/` - Generated static files after build

### Important Configuration

**next.config.js**:
- `output: 'export'` - Static HTML export
- `trailingSlash: true` - Required for static hosting
- `images.unoptimized: true` - Required for static export

**Path Alias**: `@/*` maps to `./src/*`
