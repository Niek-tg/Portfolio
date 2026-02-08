# GitHub Copilot Skills

This directory contains GitHub Copilot Skills that enhance development workflows in this repository.

## What are Skills?

Skills are specialized instructions that GitHub Copilot can use to perform specific tasks more effectively. They follow the [Agent Skills standard](https://github.com/agentskills/agentskills), an open standard used by various AI agents.

## Available Skills

### update-docs
**Location:** `.github/skills/update-docs/SKILL.md`

Helps keep README.md documentation synchronized with code changes.

- Automatically reminds you when documentation might need updates
- Provides guidelines on what sections to update
- Integrates with pre-commit hook for seamless workflow

**Usage:** GitHub Copilot uses this skill automatically when you ask it to update documentation. Run `./setup-hooks.sh` to enable the pre-commit hook that works with this skill.

### testing
**Location:** `.github/skills/testing/SKILL.md`

Provides comprehensive testing guidelines and best practices for this project.

- Explains how to use Vitest in this project
- Provides testing patterns and examples
- Guides on test structure and organization

**Usage:** GitHub Copilot uses this skill when you ask it to help with tests, or explicitly reference it.

## How Skills Work

Skills are automatically used by GitHub Copilot based on:
1. Your prompt/question to Copilot
2. The skill's description (defined in YAML frontmatter)
3. The context of your current task

You can also explicitly reference a skill:
```
Use the update-docs skill to update the README
Use the testing skill to help me write tests
```

## Skill Structure

Each skill is a directory containing:
- `SKILL.md` - The main skill file with YAML frontmatter and instructions
- (Optional) Additional resources, scripts, or examples

### SKILL.md Format

```markdown
---
name: skill-name
description: What the skill does and when to use it
license: MIT
---

# Skill Content

Instructions, guidelines, and examples...
```

## Creating New Skills

To add a new skill:

1. Create a new directory: `.github/skills/your-skill-name/`
2. Create `SKILL.md` with required frontmatter (`name`, `description`)
3. Add instructions, examples, and guidelines in the markdown body
4. Optionally add supporting files (scripts, examples, etc.)

## Learn More

- [Agent Skills Standard](https://github.com/agentskills/agentskills)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
- [Anthropic Skills Collection](https://github.com/anthropics/skills)
