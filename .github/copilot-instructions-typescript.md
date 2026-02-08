# TypeScript Coding Instructions

This file provides TypeScript-specific coding instructions for GitHub Copilot.

## Core Principle

**Write readable code over fast code.**

## Type Definitions

- **Avoid `any`**: Always use explicit types
  - Good: `function processData(input: string): ProcessedData`
  - Bad: `function processData(input: any): any`

- **Use union types for optional/nullable values**:
  - Good: `user: User | null`
  - Bad: `user: User` (then checking `if (!user)`)

- **Prefer readable type definitions**:
  - Break complex types into smaller, named pieces
  - Use type aliases for descriptive names

- **Define interfaces for object shapes**:
  ```typescript
  interface UserProfile {
    id: string;
    email: string;
    name: string;
  }
  ```

## Naming Conventions

- **Use descriptive names**:
  - Good: `userEmailAddress`, `calculateTotalPrice`, `isValidInput`
  - Bad: `e`, `calc`, `x`, `data`

- **Boolean variables start with is/has/can**:
  - Good: `isValid`, `hasPermission`, `canEdit`
  - Bad: `valid`, `permission`, `edit`

## Functions

- **Keep functions small** (5-20 lines ideal) - each function does one thing
- **Use explicit return types**:
  ```typescript
  export function formatDate(date: Date): string {
    return date.toLocaleDateString();
  }
  ```

- **Add JSDoc comments for exported functions**:
  ```typescript
  /**
   * Calculate the total price including tax
   */
  export function calculateTotalWithTax(subtotal: number, taxRate: number): number {
    return subtotal + (subtotal * taxRate);
  }
  ```

## Control Flow

- **Use early returns to reduce nesting**:
  ```typescript
  export function processUser(user: User | null): ProcessedUser | null {
    if (!user) return null;
    if (!user.email) throw new Error('User email is required');
    
    return {
      id: user.id,
      email: user.email.toLowerCase(),
      name: user.name.trim(),
    };
  }
  ```

- **Maximum nesting depth: 3 levels**
- **Prefer explicit over implicit** - use explicit returns and clear conditions
- **Prefer declarative code**: `items.filter(item => item.isActive).map(item => item.name)`

## Error Handling

- **Be explicit about errors** - validate inputs and throw descriptive errors:
  ```typescript
  export function divideNumbers(a: number, b: number): number {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
  }
  ```

## Code Organization

- **Organize imports logically**:
  1. External dependencies
  2. Internal absolute imports
  3. Relative imports
  - Add blank lines between groups

- **Co-locate tests with source files**: `src/utils/helpers.ts` and `src/utils/helpers.test.ts`

## Testing

- **Write readable tests** with descriptive names using the Arrange-Act-Assert pattern:
  ```typescript
  describe('formatDate', () => {
    it('should format a date correctly', () => {
      // Arrange
      const date = new Date(2024, 0, 15);
      
      // Act
      const formatted = formatDate(date);
      
      // Assert
      expect(formatted).toMatch(/2024-01-15/);
    });
  });
  ```

For detailed testing guidelines, see the **testing skill** at `.github/skills/testing/SKILL.md`.

## Remember

- **Readable code is maintainable code**
- **TypeScript's type system is your friend - use it**
- **If you need a comment to explain it, consider rewriting it more clearly**
- **When in doubt, choose the more explicit, readable option**
