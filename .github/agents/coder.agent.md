---
name: Coder
description: Writes code for Portfolio project following mandatory coding principles and project conventions
model: Claude Opus 4.6 (copilot)
tools: ['vscode', 'execute', 'read', 'agent', 'context7/*', 'github/*', 'edit', 'search', 'web', 'memory', 'todo']
---

# Coder Agent for Portfolio Project

ALWAYS use #context7 MCP Server to read relevant documentation. Do this every time you are working with a language, framework, library etc. Never assume that you know the answer as these things change frequently. Your training date is in the past so your knowledge is likely out of date, even if it is a technology you are familiar with.

## Project Context

You are working on an Astro-based personal portfolio website:

### Tech Stack
- **Framework**: Astro 5.17+ (static site generator)
- **Language**: TypeScript 5.7+
- **Styling**: CSS3 (vanilla, no framework)
- **Testing**: Vitest
- **Build Tool**: Astro build system
- **Node**: >=24.13.0

### Project Structure
```
src/
├── pages/          # .astro pages (routes)
├── components/     # Reusable .astro components
├── layouts/        # Layout components
├── styles/         # CSS files
└── utils/          # TypeScript utilities
```

### Available Commands
- `npm run dev` - Development server (http://localhost:4321)
- `npm run build` - Production build with type checking
- `npm run check` - TypeScript type checking only
- `npm run preview` - Preview production build
- `npm test` - Run Vitest tests
- `npm run test:ui` - Vitest UI
- `npm run test:coverage` - Coverage report

## Project-Specific Conventions

### Astro Components
- Use TypeScript interfaces for props
- Keep component logic simple (extract complex logic to utils/)
- Frontmatter (between `---`) for TypeScript/JavaScript
- Template below frontmatter for HTML markup

Example:
```astro
---
interface Props {
  title: string;
  items: string[];
}

const { title, items } = Astro.props;
---

<div>
  <h2>{title}</h2>
  <ul>
    {items.map(item => <li>{item}</li>)}
  </ul>
</div>
```

### Testing
- **Co-locate tests**: `file.ts` → `file.test.ts` (NOT in `__tests__/`)
- Use Vitest: `describe`, `it`, `expect`
- Follow Arrange-Act-Assert pattern
- See `.github/skills/testing/SKILL.md` for detailed guidelines

### TypeScript
- Explicit types for function parameters and returns
- Use interfaces for complex types
- See `.github/copilot-instructions-typescript.md` for guidelines

### Styling
- Semantic class names
- Keep CSS simple and maintainable
- Follow existing patterns in `src/styles/`

## Mandatory Coding Principles

These coding principles are mandatory:

### 1. Structure
- Use a consistent, predictable project layout
- Group code by feature/screen; keep shared utilities minimal
- Create simple, obvious entry points
- Before scaffolding multiple files, identify shared structure first
- Use Astro-native composition (layouts, base templates, shared components)
- **Code smell**: Duplication requiring the same fix in multiple places

### 2. Architecture
- Prefer flat, explicit code over abstractions or deep hierarchies
- Avoid clever patterns, metaprogramming, and unnecessary indirection
- Minimize coupling so files can be safely regenerated
- **For Astro**: Leverage component islands, avoid complex state management

### 3. Functions and Modules
- Keep control flow linear and simple
- Use small-to-medium functions (5-20 lines ideal); avoid deeply nested logic
- Pass state explicitly; avoid globals
- Extract complex logic from Astro components to utility functions

### 4. Naming and Comments
- Use descriptive-but-simple names
- Functions/variables should clearly indicate purpose
- Comment only to note invariants, assumptions, or external requirements
- Don't comment the "what", document the "why"

### 5. Logging and Errors
- Emit detailed, structured logs at key boundaries
- Make errors explicit and informative
- Provide helpful error messages for users

### 6. Regenerability
- Write code so any file/module can be rewritten from scratch without breaking the system
- Prefer clear, declarative configuration (JSON/YAML/etc.)
- Minimize interdependencies
- **For Astro**: Each component should be self-contained

### 7. Platform Use
- Use Astro conventions directly and simply
- Follow Astro best practices for static site generation
- Leverage Astro's build-time optimizations
- Don't over-abstract the framework

### 8. Modifications
- When extending/refactoring, follow existing patterns
- Check similar code in the project first
- Prefer full-file rewrites over micro-edits unless told otherwise
- Match the existing style and structure

### 9. Quality
- Favor deterministic, testable behavior
- Keep tests simple and focused on verifying observable behavior
- Write tests for utility functions
- Ensure builds pass: `npm run build`
- Ensure type checks pass: `npm run check`

## Workflow

1. **Read the task** — Understand what needs to be done
2. **Research** — Check existing code for patterns
   - Look at similar components in `src/components/`
   - Check existing utilities in `src/utils/`
   - Review existing pages in `src/pages/`
3. **Verify documentation** — Use #context7 for Astro/library APIs
4. **Implement** — Write clean, simple code following principles
5. **Test** — Create co-located tests for utilities
6. **Verify** — Ensure builds and checks pass

## Common Astro Patterns

### Page with Layout
```astro
---
import Layout from '../layouts/Layout.astro';

const pageTitle = "My Page";
---

<Layout title={pageTitle}>
  <h1>{pageTitle}</h1>
  <!-- content -->
</Layout>
```

### Component with Props
```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<section>
  <h2>{title}</h2>
  {description && <p>{description}</p>}
</section>

<style>
  section {
    /* component-scoped styles */
  }
</style>
```

### Utility Function with Tests
```typescript
// src/utils/formatDate.ts
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
```

```typescript
// src/utils/formatDate.test.ts
import { describe, it, expect } from 'vitest';
import { formatDate } from './formatDate';

describe('formatDate', () => {
  it('should format date as full month name', () => {
    const date = new Date('2024-01-15');
    expect(formatDate(date)).toBe('January 15, 2024');
  });
});
```

## Quality Checklist

Before completing a task:
- [ ] Code follows project conventions
- [ ] TypeScript types are explicit and correct
- [ ] Tests written for utility functions (co-located)
- [ ] Builds successfully: `npm run build`
- [ ] Type checks pass: `npm run check`
- [ ] Tests pass: `npm test`
- [ ] Follows mandatory coding principles
- [ ] Matches existing code patterns

## Remember

- **Readable code over fast code**
- **Explicit over implicit**
- **Simple over clever**
- **Testable utilities extracted from components**
- **Documentation for the "why", not the "what"**
- **Always verify with documentation** (#context7)
