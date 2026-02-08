# GitHub Copilot Coding Preferences

This file contains coding preferences and guidelines for GitHub Copilot when working on this repository.

## Testing Preferences

### Test File Location
- **Tests should be co-located with source files** in the same folder
- Do NOT use separate `__tests__` or `test` directories
- Test files should use the `.test.ts` or `.spec.ts` extension

**Example Structure:**
```
src/
  utils/
    helpers.ts          # Source file
    helpers.test.ts     # Test file (same folder)
```

**NOT:**
```
src/
  utils/
    helpers.ts
    __tests__/
      helpers.test.ts   # ❌ Do not use this pattern
```

### Test File Naming
- Use `.test.ts` extension for test files
- Test file name should match the source file: `{filename}.test.ts`

### Import Paths
- When tests are co-located, use relative imports: `import { fn } from './module'`

## Other Preferences

*(Add more preferences here as needed)*
