---
applyTo: "**/*.test.ts"
---

# Test File Instructions

When writing or modifying test files in this project, follow these guidelines:

## Testing Framework

This project uses [Vitest](https://vitest.dev/) for unit testing.

## Test Structure

1. **Co-locate tests with source files** - Place test files next to the code they test
   - Source: `src/utils/helpers.ts`
   - Tests: `src/utils/helpers.test.ts`

2. **Use descriptive test names** - Test names should clearly explain what is being tested
   ```typescript
   it('should format date as YYYY-MM-DD', () => { ... })
   ```

3. **Follow Arrange-Act-Assert pattern**
   ```typescript
   describe('functionName', () => {
     it('should do something when given valid input', () => {
       // Arrange: Set up test data
       const input = 'test';
       
       // Act: Execute the function
       const result = functionName(input);
       
       // Assert: Verify the result
       expect(result).toBe('expected');
     });
   });
   ```

4. **Use `describe` blocks to group related tests**
   - Group tests for the same function or component
   - Nest `describe` blocks for different scenarios

5. **One logical assertion per test** - Keep tests focused on a single behavior

6. **Test behavior, not implementation** - Focus on what the code does, not how it does it

## Test Commands

- Run all tests: `npm test`
- Run tests in watch mode: `npm test -- --watch`
- Run tests with UI: `npm run test:ui`
- Run tests with coverage: `npm run test:coverage`

## Best Practices

- Write tests for new functionality before committing
- Ensure tests are independent and can run in any order
- Use meaningful variable names in tests
- Mock external dependencies appropriately
- Keep tests simple and readable - they serve as documentation

For more details, see `.github/skills/testing/SKILL.md` and `TESTING.md`.
