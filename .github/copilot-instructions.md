# GitHub Copilot Instructions

This file provides instructions and guardrails for GitHub Copilot when working on this repository.

## Core Principles

### Readability Over Performance

**The most important principle: Write readable code over fast code.**

- Prioritize code that is easy to understand, maintain, and modify
- Choose clarity over cleverness
- Optimize only when necessary and after profiling shows a real performance issue
- Readable code reduces bugs and makes future changes easier

## Code Style Guidelines

### General Guidelines

- **Use descriptive variable and function names**: Names should clearly indicate purpose
  - Good: `userEmailAddress`, `calculateTotalPrice`, `isValidInput`
  - Bad: `e`, `calc`, `x`, `data`

- **Prefer explicit over implicit**: Make intentions clear
  - Use explicit return statements
  - Avoid complex ternary operators (break into if/else if clearer)
  - Write out conditions rather than using shortcuts when it improves clarity

- **Keep functions small and focused**: Each function should do one thing well
  - Ideal function length: 5-20 lines
  - If a function is doing multiple things, split it

- **Add meaningful comments**: Document the "why", not the "what"
  - Use JSDoc comments for all exported functions
  - Explain complex logic or non-obvious decisions
  - Don't comment obvious code

### TypeScript Specific

- **Use explicit types**: Avoid `any`, prefer explicit type definitions
  - Define interfaces for object shapes
  - Use type aliases for complex types
  - Leverage TypeScript's type system for safety

- **Prefer readable type definitions over complex generics**
  - Break complex types into smaller, named pieces
  - Use type aliases to give descriptive names to types

### Code Organization

- **Co-locate related code**: Keep test files next to source files
  - Source: `src/utils/helpers.ts`
  - Tests: `src/utils/helpers.test.ts`
  - No separate `__tests__` directories

- **Organize imports logically**:
  1. External dependencies (npm packages)
  2. Internal absolute imports
  3. Relative imports
  - Add blank lines between groups

- **Use consistent file structure**: Follow existing patterns in the project

### Functions and Logic

- **Single Responsibility Principle**: Each function has one job
  - Functions should be easy to name because they do one thing
  - If you're using "and" in the function name, it probably does too much

- **Avoid deep nesting**: Flatten logic when possible
  - Use early returns to reduce nesting
  - Extract nested logic into separate functions
  - Maximum nesting depth: 3 levels

- **Prefer declarative over imperative**: Use array methods, clear conditionals
  - Good: `items.filter(item => item.isActive).map(item => item.name)`
  - Avoid: Complex loops with multiple mutations

### Error Handling

- **Be explicit about errors**: Don't silently fail
  - Validate inputs explicitly
  - Throw descriptive errors
  - Use meaningful error messages that help debugging

### Testing

- **Write readable tests**: Tests are documentation
  - Use descriptive test names that explain what is being tested
  - Follow the Arrange-Act-Assert pattern
  - One logical assertion per test
  - Use `describe` blocks to group related tests

- **Test behavior, not implementation**: Focus on what the code does, not how

## Project-Specific Conventions

### Astro Components

- Keep component logic simple and readable
- Extract complex logic into utility functions
- Use clear prop names with TypeScript interfaces

### Styling

- Use semantic class names that describe purpose
- Keep CSS simple and maintainable
- Avoid overly clever CSS tricks

### Utilities and Helpers

- Each utility function should have:
  - JSDoc comment explaining its purpose
  - Clear parameter names
  - Explicit return type
  - Co-located test file

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

### Good: Clear Control Flow

```typescript
export function processUser(user: User): ProcessedUser | null {
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

### Bad: Nested and Hard to Follow

```typescript
export function processUser(user: User) {
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

## Remember

- **Readable code is maintainable code**
- **Future you (and your teammates) will thank you**
- **If you need to add a comment to explain it, consider rewriting it more clearly**
- **When in doubt, choose the more explicit, readable option**
