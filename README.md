# Portfolio

A personal portfolio website built with [Astro](https://astro.build) to showcase my resume and professional experience.

## 🚀 Features

- Clean and professional design
- Responsive layout that works on all devices
- Resume/CV display
- About page
- Fast and optimized with Astro
- Automated deployment to GitHub Pages
- Multi-agent orchestration system for complex development tasks
- GitHub Copilot skills for development workflow enhancement

## 🛠️ Tech Stack

- **Framework**: Astro
- **Styling**: CSS3
- **Deployment**: GitHub Pages via GitHub Actions

## 📦 Getting Started

### Prerequisites

Install [mise](https://mise.jdx.dev/) to automatically manage Node.js and other project tools:

```bash
# Recommended: use your package manager
# macOS
brew install mise

# Ubuntu/Debian
apt install mise

# Arch Linux
pacman -S mise

# Or follow the official installation instructions:
# https://mise.jdx.dev/getting-started.html
```

mise will automatically ensure the correct Node.js version (and other configured tools) are available when you enter the project directory.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Niek-tg/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Set up git hooks for automatic documentation updates:
```bash
./setup-hooks.sh
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:4321`

### Available Scripts

- `npm run dev` / `npm start` - Start the development server
- `npm run build` - Build the site for production (includes type checking)
- `npm run preview` - Preview the production build locally
- `npm run check` - Run Astro's type checking without building

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

The built site will be in the `dist/` directory.

## 🚀 Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

The GitHub Actions workflow:
1. Builds the Astro site
2. Uploads the build artifacts
3. Deploys to GitHub Pages

### GitHub Pages Setup

To enable GitHub Pages for your repository:

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The site will be available at `https://niek-tg.github.io/Portfolio/`

## 📝 Customization

- Edit `src/pages/index.astro` for the home page
- Edit `src/pages/resume.astro` to update your resume
- Edit `src/pages/about.astro` for the about page
- Modify `src/styles/global.css` to customize the styling
- Update `astro.config.mjs` to change site configuration

## 🤖 AI Development Tools

This repository uses GitHub Copilot with enhanced capabilities through Skills and a Multi-Agent System.

### Multi-Agent Orchestration System

A sophisticated multi-agent system that coordinates complex development tasks across specialized AI agents. Located in `.github/agents/`.

**Orchestrator** - Project coordinator that delegates work to specialist agents
- Breaks down complex requests into manageable tasks
- Manages parallel and sequential execution
- Prevents file conflicts through explicit assignment
- Coordinates Planner, Coder, and Designer agents

**Planner** - Creates comprehensive implementation plans
- Researches the codebase and existing patterns
- Identifies edge cases and dependencies
- Determines which tasks can run in parallel
- Provides detailed, actionable steps

**Coder** - Implements code following best practices
- Writes clean, maintainable code with tests
- Follows mandatory coding principles
- Verifies builds and type checks
- Extracts complex logic into testable utilities

**Designer** - Handles all UI/UX design work
- Creates responsive, accessible designs
- Implements semantic, maintainable CSS
- Ensures WCAG compliance
- Makes authoritative design decisions

#### Using the Multi-Agent System

In GitHub Copilot Chat, mention the Orchestrator:
```
@Orchestrator Add a blog section to the portfolio
@Orchestrator Redesign the homepage with a hero section
@Orchestrator Fix TypeScript errors and improve type definitions
```

You can also call agents directly for specific tasks:
```
@Planner What's the best approach for adding authentication?
@Coder Create a date formatting utility with tests
@Designer Design a responsive navigation menu
```

See [`.github/agents/README.md`](.github/agents/README.md) for detailed documentation.

### Available Skills

Skills are located in `.github/skills/` following the [Agent Skills standard](https://github.com/agentskills/agentskills).

**update-docs** - Keeps README.md synchronized with code changes
- Integrates with pre-commit hook to remind you when documentation might need updates
- Guides what sections to update based on code changes
- Run `./setup-hooks.sh` to enable the pre-commit hook

**testing** - Guidelines for writing and maintaining tests
- Provides Vitest testing best practices
- Includes examples and patterns for well-structured tests
- Explains the project's testing conventions

#### Using Skills

GitHub Copilot automatically uses skills when relevant to your task. You can also explicitly reference them:

```
Use the update-docs skill to update the README
Use the testing skill to help write tests for this function
```

#### How It Works

1. Run `./setup-hooks.sh` to install the pre-commit hook
2. Make code changes and stage them with `git add`
3. When you commit, the hook checks for changes that might need documentation updates
4. If relevant changes are detected, you'll see a reminder
5. Ask GitHub Copilot to use the appropriate skill, or update manually following the skill's guidelines

## 📄 License

This project is open source and available under the MIT License.