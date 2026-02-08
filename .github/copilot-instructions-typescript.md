# TypeScript Coding Instructions

This file provides TypeScript-specific coding instructions for GitHub Copilot when working on this repository.

## Core Principle

**Write readable code over fast code.**

## TypeScript Guidelines

### Type Definitions

- **Avoid `any`**: Always use explicit types
  - Good: `function processData(input: string): ProcessedData`
  - Bad: `function processData(input: any): any`

- **Use union types for optional/nullable values**:
  - Good: `user: User | null | undefined`
  - Bad: `user: User` (then checking `if (!user)`)

- **Prefer readable type definitions over complex generics**:
  - Break complex types into smaller, named pieces
  - Use type aliases to give descriptive names to types

- **Define interfaces for object shapes**:
  ```typescript
  interface UserProfile {
    id: string;
    email: string;
    name: string;
  }
  ```

- **Use type aliases for complex types**:
  ```typescript
  type ProcessedUser = Omit<User, 'password'> & { isActive: boolean };
  ```

### Naming Conventions

- **Use descriptive variable and function names**:
  - Good: `userEmailAddress`, `calculateTotalPrice`, `isValidInput`
  - Bad: `e`, `calc`, `x`, `data`

- **Boolean variables should be prefixed with is/has/can**:
  - Good: `isValid`, `hasPermission`, `canEdit`
  - Bad: `valid`, `permission`, `edit`

### Functions

- **Keep functions small and focused** (5-20 lines ideal)
  - Each function should do one thing well
  - If using "and" in the function name, it probably does too much

- **Use explicit return types**:
  ```typescript
  export function formatDate(date: Date): string {
    return date.toLocaleDateString();
  }
  ```

- **Add JSDoc comments for all exported functions**:
  ```typescript
  /**
   * Calculate the total price including tax
   */
  export function calculateTotalWithTax(subtotal: number, taxRate: number): number {
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    return total;
  }
  ```

### Control Flow

- **Use early returns to reduce nesting**:
  ```typescript
  // Good
  export function processUser(user: User | null): ProcessedUser | null {
    if (!user) {
      return null;
    }

    if (!user.email) {
      throw new Error('User email is required');
    }

    return {
      id: user.id,
      email: user.email.toLowerCase(),
      name: user.name.trim(),
    };
  }

  // Bad
  export function processUser(user: User | null) {
    if (user) {
      if (user.email) {
        return {
          id: user.id,
          email: user.email.toLowerCase(),
          name: user.name.trim(),
        };
      } else {
        throw new Error('User email is required');
      }
    } else {
      return null;
    }
  }
  ```

- **Prefer explicit over implicit**:
  - Use explicit return statements
  - Avoid complex ternary operators (break into if/else if clearer)
  - Write out conditions rather than using shortcuts

- **Maximum nesting depth: 3 levels**

- **Prefer declarative over imperative**:
  - Good: `items.filter(item => item.isActive).map(item => item.name)`
  - Avoid: Complex loops with multiple mutations

### Error Handling

- **Be explicit about errors**:
  - Validate inputs explicitly
  - Throw descriptive errors with helpful messages
  - Use Error classes for different error types

  ```typescript
  export function divideNumbers(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
  ```

### Code Organization

- **Organize imports logically**:
  1. External dependencies (npm packages)
  2. Internal absolute imports
  3. Relative imports
  - Add blank lines between groups

  ```typescript
  // External
  import { describe, it, expect } from 'vitest';

  // Relative
  import { formatDate, getCurrentYear } from './helpers';
  ```

- **Co-locate test files with source files**:
  - Source: `src/utils/helpers.ts`
  - Tests: `src/utils/helpers.test.ts`
  - No separate `__tests__` directories

### Testing

- **Write readable tests**:
  - Use descriptive test names
  - Follow Arrange-Act-Assert pattern
  - One logical assertion per test
  - Use `describe` blocks to group related tests

  ```typescript
  describe('formatDate', () => {
    it('should format a date correctly', () => {
      // Arrange
      const date = new Date(2024, 0, 15);

      // Act
      const formatted = formatDate(date);

      // Assert
      expect(formatted).toMatch(/January 15, 2024/);
    });
  });
  ```

## Examples

### Good: Readable Function

```typescript
/**
 * Calculate the total price including tax
 */
export function calculateTotalWithTax(subtotal: number, taxRate: number): number {
  const tax = subtotal * taxRate;
  const total = subtotal + tax;
  return total;
}
```

### Bad: Less Readable

```typescript
// Less clear, harder to understand at a glance
export const calc = (s: number, t: number) => s + s * t;
```

### Good: Type-Safe Nullable Handling

```typescript
interface User {
  id: string;
  email: string;
  name: string;
}

interface ProcessedUser {
  id: string;
  email: string;
  name: string;
}

export function processUser(user: User | null): ProcessedUser | null {
  if (!user) {
    return null;
  }

  if (!user.email) {
    throw new Error('User email is required');
  }

  return {
    id: user.id,
    email: user.email.toLowerCase(),
    name: user.name.trim(),
  };
}
```

### Bad: Type Mismatch

```typescript
// TypeScript type doesn't match the runtime check
export function processUser(user: User): ProcessedUser | null {
  if (!user) {  // Type error with strictNullChecks
    return null;
  }
  // ...
}
```

## Remember

- **Readable code is maintainable code**
- **TypeScript's type system is your friend - use it**
- **If you need to add a comment to explain it, consider rewriting it more clearly**
- **When in doubt, choose the more explicit, readable option**
