# Testing Guide

This project uses [Vitest](https://vitest.dev/) for unit testing.

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in watch mode
```bash
npm test -- --watch
```

### Run tests with UI
```bash
npm run test:ui
```

### Run tests with coverage
```bash
npm run test:coverage
```

## Writing Tests

Tests are co-located with the source code in the same directory. For example:
- Source: `src/utils/helpers.ts`
- Tests: `src/utils/helpers.test.ts`

Example test structure:
```typescript
import { describe, it, expect } from 'vitest';
import { myFunction } from './myModule';

describe('myFunction', () => {
  it('should do something', () => {
    expect(myFunction()).toBe(expectedResult);
  });
});
```

## GitHub Actions Workflows

### Test Workflow
- **File**: `.github/workflows/test.yml`
- **Trigger**: Runs on all pull requests and pushes to main
- **Actions**: 
  - Runs unit tests
  - Generates coverage reports
  - Uploads coverage artifacts

### Auto-Merge Workflow
- **File**: `.github/workflows/auto-merge.yml`
- **Trigger**: Runs on pull request events
- **Actions**:
  - Provides automated code review
  - Auto-merges PRs from dependabot or with 'automerge' label
  - Waits for all tests to pass before merging

To enable auto-merge for a PR, add the `automerge` label to it.

## Coverage Reports

Coverage reports are generated in the `coverage/` directory and are excluded from git. After running tests with coverage, you can:
- View text summary in the terminal
- Open `coverage/index.html` in a browser for detailed reports
- Download coverage artifacts from GitHub Actions runs
