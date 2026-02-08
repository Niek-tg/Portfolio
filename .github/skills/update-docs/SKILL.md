---
name: update-docs
description: Guide for keeping README.md documentation up-to-date with code changes. Use this when asked to update documentation or when making changes that affect user-facing features, dependencies, or configuration.
license: MIT
---

# Documentation Update Skill

This skill helps keep the README.md documentation synchronized with code changes in the repository.

## When to Use This Skill

Update documentation when changes include:
- New features, pages, or components
- New dependencies or technologies
- Changes to build scripts or deployment processes
- Changes to project structure or file organization
- New environment variables or configuration requirements
- Changes to setup, installation, or usage instructions

## When NOT to Update Documentation

Do NOT update documentation for:
- Minor bug fixes without user-facing changes
- Code refactoring without functional changes
- Style/formatting changes
- Comment updates
- Test file changes (unless demonstrating new features)
- Version bumps without functional changes

## How to Update Documentation

When relevant changes are detected:

1. **Review the current README.md** to understand its structure and sections
2. **Identify affected sections** based on the type of changes made
3. **Make minimal, precise updates** to reflect the changes accurately
4. **Preserve existing style** and tone of the documentation
5. **Verify accuracy** of all code examples and commands

## Documentation Sections

Consider updating these README sections based on change type:

- **Features**: New features or capabilities added
- **Tech Stack**: New technologies, frameworks, or major dependencies
- **Getting Started**: Installation or setup process changes
- **Scripts**: New npm/build scripts added
- **Building for Production**: Build process changes
- **Deployment**: Deployment process changes
- **Customization**: New customization options or file paths
- **Configuration**: New environment variables or config requirements

## Guidelines

- Make only necessary changes—avoid unnecessary rewrites
- Be concise and clear
- Keep code examples accurate and tested
- Don't remove existing documentation unless truly obsolete
- Maintain consistency with existing documentation style
- Update version numbers or dependency lists when applicable

## Example Workflow

### Scenario: Adding a New Page

**Changes made:**
```
src/pages/projects.astro (new file)
```

**Documentation update:**
Add to the "Customization" section:
```markdown
- Edit `src/pages/projects.astro` to update your projects showcase
```

### Scenario: Adding a New Dependency

**Changes made:**
```
package.json: added @astrojs/sitemap
astro.config.mjs: imported and configured sitemap
```

**Documentation update:**
1. Add to "Tech Stack" section:
   ```markdown
   - **Sitemap**: @astrojs/sitemap for automatic sitemap generation
   ```
2. Optionally add configuration notes if complex

### Scenario: Minor Bug Fix

**Changes made:**
```
src/pages/about.astro: fixed a typo
```

**Documentation update:**
No update needed—this is a minor fix that doesn't affect functionality or usage.

## Integration with Pre-commit Hook

This skill works with the pre-commit hook at `.github/hooks/pre-commit`:
- The hook checks for relevant changes before each commit
- If detected, it reminds you to review documentation
- You can use this skill's guidelines to update the README
- Either use GitHub Copilot with this skill or update manually

## Best Practices

1. Run `./setup-hooks.sh` after cloning to install the pre-commit hook
2. Let the hook remind you when documentation might need updates
3. Review staged changes to determine if documentation updates are needed
4. Keep commits focused—consider separate commits for code and docs if preferred
5. Always verify that examples and commands in documentation actually work
