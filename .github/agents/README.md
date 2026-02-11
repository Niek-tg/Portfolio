# Multi-Agent System for Portfolio Project

This directory contains a multi-agent orchestration system designed to coordinate complex development tasks across specialized AI agents.

## Overview

The multi-agent system consists of four specialized agents that work together to handle different aspects of development:

| Agent | Model | Role | Capabilities |
|-------|-------|------|--------------|
| **Orchestrator** | Claude Sonnet 4.5 | Coordinates all work | Breaks down tasks, delegates to specialists, manages parallel execution |
| **Planner** | GPT-5.2 | Creates implementation plans | Researches codebase, identifies edge cases, creates detailed plans |
| **Coder** | Claude Opus 4.6 | Implements code | Writes code following mandatory principles, creates tests |
| **Designer** | Gemini 3 Pro | Handles UI/UX | Creates designs, implements styling, ensures accessibility |

## How It Works

### 1. User Request
You interact with the **Orchestrator** agent and describe what you want to accomplish.

### 2. Planning Phase
The Orchestrator delegates to the **Planner** to:
- Research the existing codebase
- Identify relevant files and patterns
- Create a detailed implementation plan
- Identify which tasks can run in parallel

### 3. Execution Phases
The Orchestrator breaks the plan into phases:
- **Parallel execution**: Tasks touching different files run simultaneously
- **Sequential execution**: Tasks with dependencies run in order
- **File conflict prevention**: Each agent is explicitly assigned specific files

### 4. Implementation
The Orchestrator delegates to specialists:
- **Coder**: Implements logic, creates utilities, writes tests
- **Designer**: Creates layouts, styles components, ensures accessibility

### 5. Verification
After all phases complete, the Orchestrator verifies the work and reports results.

## Example Workflow

**User Request**: "Add a blog section to my portfolio"

```
1. Orchestrator receives request

2. Orchestrator → Planner
   "Create implementation plan for adding blog section"

3. Planner responds with:
   - Design blog layout (Designer)
   - Create blog utilities (Coder)
   - Build blog pages (Coder)
   - Update navigation (Coder)

4. Orchestrator parses plan into phases:
   
   Phase 1 (parallel):
   - Designer: Create blog layout and styling
   - Coder: Create blog utilities with tests
   
   Phase 2 (after Phase 1):
   - Coder: Build blog listing page
   - Coder: Build blog post template
   
   Phase 3 (after Phase 2):
   - Coder: Update navigation

5. Orchestrator executes phases sequentially,
   running parallel tasks within each phase

6. Orchestrator verifies and reports completion
```

## Key Features

### Parallel Execution
Tasks that don't interfere with each other run simultaneously:
- Different files: `src/utils/helper.ts` and `src/components/Nav.astro`
- Different domains: Styling vs. logic
- Independent features: Header component and footer component

### File Conflict Prevention
The Orchestrator explicitly assigns files to prevent conflicts:
```
Coder A: "Create src/utils/validation.ts"
Coder B: "Create src/pages/contact.astro"
```

### Context-Aware Planning
Each agent understands the Portfolio project:
- Astro framework patterns
- TypeScript conventions
- Testing with Vitest
- Existing code structure
- Project-specific requirements

### Quality Built-In
- Mandatory coding principles
- Accessibility requirements
- Testing standards
- Build verification
- Type checking

## Agent Details

### Orchestrator (`orchestrator.agent.md`)
- **Never implements code** — only coordinates
- Calls Planner first to get strategy
- Parses plans into executable phases
- Manages parallel and sequential execution
- Prevents file conflicts through explicit assignment
- Verifies final results

**Use when**: You need to coordinate complex, multi-step tasks

### Planner (`planner.agent.md`)
- **Never writes code** — only creates plans
- Researches existing codebase thoroughly
- Consults documentation via #context7
- Identifies edge cases and implicit requirements
- Specifies exact file paths for each step
- Notes which tasks can run in parallel

**Use when**: You need a detailed implementation strategy

### Coder (`coder.agent.md`)
- Writes clean, maintainable code
- Follows mandatory coding principles
- Creates co-located tests
- Uses #context7 for documentation
- Verifies builds and type checks
- Extracts complex logic from components

**Use when**: You need code implementation, bug fixes, or logic changes

### Designer (`designer.agent.md`)
- Focuses on user experience
- Ensures accessibility compliance
- Creates responsive designs
- Writes semantic, maintainable CSS
- Polishes micro-interactions
- Makes authoritative design decisions

**Use when**: You need UI/UX work, styling, or visual design

## Project Context

All agents understand this is an Astro-based portfolio with:
- **Framework**: Astro 5.17+
- **Language**: TypeScript 5.7+
- **Styling**: Vanilla CSS3
- **Testing**: Vitest
- **Structure**: `src/pages/`, `src/components/`, `src/utils/`, `src/styles/`

## Installation

These agents follow the [Agent Skills standard](https://github.com/agentskills/agentskills) format.

### VS Code / VS Code Insiders

Click the install badges below to add agents to your editor:

| Agent | VS Code | VS Code Insiders |
|-------|---------|------------------|
| **Orchestrator** | [Install](vscode:chat-agent/install?url=https://raw.githubusercontent.com/Niek-tg/Portfolio/main/.github/agents/orchestrator.agent.md) | [Install](vscode-insiders:chat-agent/install?url=https://raw.githubusercontent.com/Niek-tg/Portfolio/main/.github/agents/orchestrator.agent.md) |
| **Planner** | [Install](vscode:chat-agent/install?url=https://raw.githubusercontent.com/Niek-tg/Portfolio/main/.github/agents/planner.agent.md) | [Install](vscode-insiders:chat-agent/install?url=https://raw.githubusercontent.com/Niek-tg/Portfolio/main/.github/agents/planner.agent.md) |
| **Coder** | [Install](vscode:chat-agent/install?url=https://raw.githubusercontent.com/Niek-tg/Portfolio/main/.github/agents/coder.agent.md) | [Install](vscode-insiders:chat-agent/install?url=https://raw.githubusercontent.com/Niek-tg/Portfolio/main/.github/agents/coder.agent.md) |
| **Designer** | [Install](vscode:chat-agent/install?url=https://raw.githubusercontent.com/Niek-tg/Portfolio/main/.github/agents/designer.agent.md) | [Install](vscode-insiders:chat-agent/install?url=https://raw.githubusercontent.com/Niek-tg/Portfolio/main/.github/agents/designer.agent.md) |

### Manual Installation

Alternatively, copy the `.agent.md` files to your local `.github/agents/` directory and reference them in your editor's configuration.

## Usage

### Quick Start
1. Install the agents (see Installation above)
2. Open GitHub Copilot Chat in VS Code
3. Mention `@Orchestrator` in your chat
4. Describe what you want to accomplish
5. The Orchestrator will coordinate the work

### Example Prompts

**Simple task**:
```
@Orchestrator Add a contact form to the portfolio
```

**Complex task**:
```
@Orchestrator Redesign the homepage with a hero section, featured projects, and skills display
```

**Specific request**:
```
@Orchestrator Fix the TypeScript errors in the resume page and add proper type definitions
```

**Design-focused**:
```
@Orchestrator Improve the mobile responsive design of the navigation menu
```

### Direct Agent Usage

You can also call agents directly for specific tasks:

```
@Planner What's the best approach for adding a blog to this portfolio?
@Coder Create a utility function to format dates with tests
@Designer Design a responsive card component for project showcases
```

## Best Practices

### For Users
- **Start with the Orchestrator** for complex tasks
- **Be specific** about what you want to accomplish
- **Let agents decide how** — describe outcomes, not implementations
- **Trust the process** — agents are designed to work together

### For Developers
- **Each agent has a specific role** — respect the boundaries
- **File assignments prevent conflicts** — be explicit about which files each agent touches
- **Parallel execution** — leverage it when tasks are independent
- **Quality checks** — built into each agent's workflow

## Troubleshooting

### Agents not appearing in VS Code
- Ensure you're using a compatible version of VS Code
- Check that GitHub Copilot extension is installed and active
- Try reloading VS Code window

### Agents not coordinating properly
- Make sure you're starting with the Orchestrator for complex tasks
- Verify that agents have access to the necessary tools (read, edit, execute, etc.)

### Build or test failures
- Agents verify builds and tests, but if issues persist:
  - Run `npm run build` to check for build errors
  - Run `npm test` to verify tests pass
  - Check `npm run check` for TypeScript errors

## Related Resources

- [Agent Skills Standard](https://github.com/agentskills/agentskills)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Astro Documentation](https://docs.astro.build)
- [Project Skills](../.github/skills/) - testing and update-docs skills

## Differences from Original Gist

This implementation is specifically adapted for the Portfolio project:

1. **Project-specific context**: All agents understand the Astro tech stack
2. **Testing conventions**: Co-located tests with Vitest
3. **Code style guidelines**: Follows existing project conventions
4. **Accessibility focus**: Designer enforces WCAG compliance
5. **Build verification**: Quality checks integrated into workflows

## Contributing

To modify or extend the agent system:

1. Edit the `.agent.md` files in this directory
2. Test changes with simple tasks first
3. Ensure all agents maintain their specialized roles
4. Update this README if adding new agents or capabilities

## License

MIT - Same as the Portfolio project
