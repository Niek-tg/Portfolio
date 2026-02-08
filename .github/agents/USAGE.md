# Agent Skill Usage Example

This document provides examples of how to use the documentation update agent skill.

## Setup

First, install the git hooks:

```bash
./setup-hooks.sh
```

This will install the pre-commit hook that displays reminders when relevant code changes are staged. The hook helps you remember to review and update documentation as needed.

## Example Workflow

### Scenario 1: Adding a New Page

1. **Make your changes:**
   ```bash
   # Create a new page
   touch src/pages/projects.astro
   # Edit the page to add content
   ```

2. **Stage your changes:**
   ```bash
   git add src/pages/projects.astro
   ```

3. **Commit your changes:**
   ```bash
   git commit -m "Add projects page"
   ```

4. **The hook detects relevant changes:**
   ```
   🤖 Checking for documentation updates...
   📝 Relevant changes detected. Documentation may need updating.
   
   Agent Skill: update-docs
   Changed files that may require documentation updates:
     - src/pages/projects.astro
   ```

5. **Update documentation using GitHub Copilot:**
   - Open GitHub Copilot Chat
   - Reference the agent skill: "Use the update-docs agent skill to update README.md"
   - GitHub Copilot will analyze your changes and update the README accordingly
   - The agent will add the new "Projects" page to the Features or Customization section

6. **Stage and commit the updated README:**
   ```bash
   git add README.md
   git commit --amend --no-edit
   # or
   git commit -m "Update documentation for projects page"
   ```

### Scenario 2: Adding a New Dependency

1. **Install a new package:**
   ```bash
   npm install @astrojs/sitemap
   ```

2. **Update your configuration:**
   ```javascript
   // astro.config.mjs
   import { defineConfig } from 'astro/config';
   import sitemap from '@astrojs/sitemap';
   
   export default defineConfig({
     integrations: [sitemap()],
   });
   ```

3. **Stage your changes:**
   ```bash
   git add package.json package-lock.json astro.config.mjs
   ```

4. **The hook will detect these changes as relevant**

5. **Use GitHub Copilot to update the README:**
   - The agent will add sitemap to the Tech Stack section
   - It may add configuration instructions if needed

### Scenario 3: Minor Bug Fix (No Documentation Update Needed)

1. **Fix a typo in a component:**
   ```bash
   # Edit src/pages/about.astro to fix a typo
   git add src/pages/about.astro
   git commit -m "Fix typo on about page"
   ```

2. **The hook may detect the change but documentation doesn't need updating:**
   - You can proceed with the commit normally
   - The README doesn't need changes for minor fixes

## GitHub Copilot Integration

When using GitHub Copilot, you can reference the agent skill:

### In GitHub Copilot Chat:
```
@workspace Use the update-docs agent skill in .github/agents/update-docs.md 
to review my staged changes and update README.md if necessary
```

### In GitHub Copilot Workspace:
```
Review the changes in this commit using the update-docs agent skill 
and update the README.md to reflect any new features or changes
```

## What Gets Updated

The agent skill will update relevant sections of README.md:

- **Features**: New features or capabilities
- **Tech Stack**: New frameworks, libraries, or tools
- **Getting Started**: Installation or setup changes
- **Building**: Build process changes
- **Deployment**: Deployment process changes
- **Customization**: New files or customization options

## Best Practices

1. **Run the setup script** after cloning the repository
2. **Let the hook remind you** when documentation might need updates
3. **Use GitHub Copilot** to automate the documentation updates
4. **Review the changes** before committing to ensure accuracy
5. **Keep commits focused** - separate code changes from documentation updates if preferred

## Troubleshooting

### Hook not running
If the pre-commit hook isn't running:
```bash
# Re-run the setup script
./setup-hooks.sh

# Check if the hook is executable
ls -la .git/hooks/pre-commit

# Make it executable if needed
chmod +x .git/hooks/pre-commit
```

### Disabling the hook temporarily
If you need to commit without the hook:
```bash
git commit --no-verify -m "Your commit message"
```

### Updating the hook
After pulling changes that update the hook:
```bash
./setup-hooks.sh
```

## Manual Documentation Updates

If you prefer to update documentation manually:

1. Review the agent skill guidelines in `.github/agents/update-docs.md`
2. Follow the same patterns and sections
3. Keep the documentation style consistent
4. Stage and commit README.md with your changes

The agent skill provides guidelines even if you update documentation manually.
