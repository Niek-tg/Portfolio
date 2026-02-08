---
applyTo: "**/*.astro"
---

# Astro Component Instructions

When working with Astro components in this project, follow these guidelines:

## Component Structure

Astro components consist of two main sections:
1. **Frontmatter** (between `---` markers) - TypeScript/JavaScript code
2. **Template** - HTML markup with optional JSX-like expressions

## Best Practices

### 1. Keep Component Logic Simple

- Keep the frontmatter section focused on data preparation and simple logic
- Extract complex logic into utility functions in `src/utils/`
- Aim for 5-20 lines of logic in the frontmatter

### 2. Use TypeScript Interfaces for Props

```astro
---
interface Props {
  title: string;
  description?: string;
  items: string[];
}

const { title, description, items } = Astro.props;
---
```

### 3. Clear and Descriptive Prop Names

- Use full, descriptive names: `userEmailAddress` not `email`
- Boolean props should start with `is`, `has`, or `can`: `isVisible`, `hasPermission`

### 4. Styling

- Use semantic class names that describe purpose, not appearance
- Keep CSS simple and maintainable in the `<style>` section
- Avoid overly complex CSS tricks - prefer clarity

### 5. Extract Complex Logic

If you need complex calculations or data transformations:
```astro
---
import { processData } from '../utils/dataProcessing';

interface Props {
  rawData: string[];
}

const { rawData } = Astro.props;
const processedData = processData(rawData);
---
```

### 6. Component Imports

Organize imports in this order:
1. Astro built-ins (if any)
2. External dependencies
3. Local components
4. Utility functions

### 7. Documentation

Add JSDoc comments for complex components:
```astro
---
/**
 * Displays a user profile card with avatar and bio
 */
interface Props {
  name: string;
  bio: string;
  avatarUrl: string;
}
---
```

## Testing

- Extract testable logic from components into utility functions
- Write tests for utility functions in co-located `.test.ts` files
- Test components through integration tests when needed

## Framework

This project uses:
- **Framework**: Astro
- **Build command**: `npm run build`
- **Dev server**: `npm run dev` (runs on `http://localhost:4321`)
- **Preview**: `npm run preview`

## Remember

- **Readable code is maintainable code**
- **Explicit is better than implicit**
- **Extract complex logic into testable utility functions**
