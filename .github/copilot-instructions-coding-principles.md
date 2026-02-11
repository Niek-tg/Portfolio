# Coding Principles for Portfolio Project

This file contains mandatory coding principles that should be followed when writing code for this project.

## Mandatory Coding Principles

These coding principles are mandatory:

### 1. Structure
- Use a consistent, predictable project layout
- Group code by feature/screen; keep shared utilities minimal
- Create simple, obvious entry points
- Before scaffolding multiple files, identify shared structure first
- Use framework-native composition patterns (layouts, base templates, providers, shared components) for elements that appear across pages
- **Code smell**: Duplication requiring the same fix in multiple places is a code smell, not a pattern to preserve

**For Astro**:
- Use Astro-native composition (layouts, base templates, shared components)
- Leverage component islands architecture

### 2. Architecture
- Prefer flat, explicit code over abstractions or deep hierarchies
- Avoid clever patterns, metaprogramming, and unnecessary indirection
- Minimize coupling so files can be safely regenerated

**For Astro**:
- Leverage component islands
- Avoid complex state management
- Remember: Astro is a static site generator - consider build-time vs runtime

### 3. Functions and Modules
- Keep control flow linear and simple
- Use small-to-medium functions (5-20 lines ideal); avoid deeply nested logic
- Pass state explicitly; avoid globals

**For Astro**:
- Extract complex logic from Astro components to utility functions in `src/utils/`
- Keep component frontmatter focused on data preparation, not complex logic

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

**For Astro**:
- Each component should be self-contained
- Props should be the primary interface to components

### 7. Platform Use
- Use platform conventions directly and simply
- Don't over-abstract the framework
- Follow framework best practices

**For Astro**:
- Use Astro conventions directly and simply
- Follow Astro best practices for static site generation
- Leverage Astro's build-time optimizations

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

## Quality Checklist

Before completing any code task:
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
