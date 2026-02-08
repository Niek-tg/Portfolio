# GitHub Copilot Instructions

This file provides general instructions and guardrails for GitHub Copilot when working on this repository.

This is an Astro-based portfolio website built with TypeScript. The project emphasizes code readability and maintainability.

## Core Principle

**Write readable code over fast code.**

- Prioritize code that is easy to understand, maintain, and modify
- Choose clarity over cleverness
- Optimize only when necessary and after profiling shows a real performance issue
- Readable code reduces bugs and makes future changes easier

## Development Workflow

### Build, Test, and Lint Commands

- **Install dependencies**: `npm ci` or `npm install`
- **Development server**: `npm run dev` (runs on `http://localhost:4321`)
- **Build for production**: `npm run build` (includes type checking via `astro check`)
- **Type check only**: `npm run check`
- **Preview production build**: `npm run preview`
- **Run tests**: `npm test`
- **Run tests in watch mode**: `npm test -- --watch`
- **Run tests with UI**: `npm run test:ui`
- **Run tests with coverage**: `npm run test:coverage`

### Before Committing

1. Ensure all tests pass: `npm test`
2. Verify the build succeeds: `npm run build`
3. Check TypeScript types: `npm run check`

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

## 🤖 Skills

This repository uses GitHub Copilot Skills for specialized guidance:

- **update-docs** (`.github/skills/update-docs/SKILL.md`) - Helps keep README.md synchronized with code changes
- **testing** (`.github/skills/testing/SKILL.md`) - Provides testing guidelines and best practices for Vitest

GitHub Copilot automatically uses these skills when relevant. Run `./setup-hooks.sh` to enable the pre-commit hook that integrates with the update-docs skill.

## 📝 Path-Specific Instructions

This repository includes path-specific instructions in `.github/instructions/` for different file types:

- **test-files.instructions.md** - Guidelines for writing test files (`**/*.test.ts`)
- **astro-components.instructions.md** - Best practices for Astro components (`**/*.astro`)

These instructions are automatically applied by GitHub Copilot when working on matching file types.
