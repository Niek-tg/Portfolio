# GitHub Copilot Instructions

This file provides general instructions and guardrails for GitHub Copilot when working on this repository.

## Core Principle

**Write readable code over fast code.**

- Prioritize code that is easy to understand, maintain, and modify
- Choose clarity over cleverness
- Optimize only when necessary and after profiling shows a real performance issue
- Readable code reduces bugs and makes future changes easier

## Language-Specific Instructions

For detailed coding guidelines specific to each language:
- **TypeScript**: See [copilot-instructions-typescript.md](./copilot-instructions-typescript.md)

## General Guidelines

- **Use descriptive names**: Variables, functions, and classes should clearly indicate their purpose
- **Keep functions small and focused**: Each function should do one thing well (5-20 lines ideal)
- **Add meaningful comments**: Document the "why", not the "what"
- **Prefer explicit over implicit**: Make intentions clear
- **Single Responsibility Principle**: Each component has one job

## Project Structure

- **Co-locate tests with source files**: Keep test files next to source files
  - Example: `src/utils/helpers.ts` and `src/utils/helpers.test.ts`
  - Do NOT use separate `__tests__` directories

- **Use consistent file structure**: Follow existing patterns in the project

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

## Testing

- **Write readable tests**: Tests are documentation
  - Use descriptive test names that explain what is being tested
  - Follow the Arrange-Act-Assert pattern
  - One logical assertion per test
  - Use `describe` blocks to group related tests

- **Test behavior, not implementation**: Focus on what the code does, not how

## Remember

- **Readable code is maintainable code**
- **Future you (and your teammates) will thank you**
- **If you need to add a comment to explain it, consider rewriting it more clearly**
- **When in doubt, choose the more explicit, readable option**
