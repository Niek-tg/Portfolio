# GitHub Copilot Preferences

This file defines specific preferences for how GitHub Copilot should work in this repository.

## Testing Preferences

### Test File Location
Tests must be co-located with source files in the same directory.

**Correct structure:**
```
src/utils/
  helpers.ts
  helpers.test.ts
```

**Incorrect structure:**
```
src/utils/
  helpers.ts
  __tests__/
    helpers.test.ts  ❌
```

### Test File Naming
- Use `.test.ts` extension for test files
- Test file name should match source file: `{filename}.test.ts`
- Use relative imports in tests: `import { fn } from './module'`

For detailed testing guidelines, see the **testing skill** at `.github/skills/testing/SKILL.md`.
