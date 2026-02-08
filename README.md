# Portfolio

A personal portfolio website built with [Astro](https://astro.build) to showcase my resume and professional experience.

## 🚀 Features

- Clean and professional design
- Responsive layout that works on all devices
- Resume/CV display
- About page
- Fast and optimized with Astro
- Automated deployment to GitHub Pages
- GitHub Copilot skills for development workflow enhancement

## 🛠️ Tech Stack

- **Framework**: Astro
- **Styling**: CSS3
- **Deployment**: GitHub Pages via GitHub Actions

## 📦 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

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

## 🔌 MCP Server Configuration

This repository includes an MCP (Model Context Protocol) server configuration for enhanced AI assistant capabilities.

### Context7 MCP Server

The repository is configured with [Context7 MCP server](https://github.com/upstash/context7) which provides up-to-date documentation for libraries and frameworks directly in your AI assistant's context.

**Setup:**

1. Get your API key from [Context7](https://context7.com)
2. Replace `YOUR_API_KEY` in `.cursor/mcp.json` with your actual API key
3. Restart Cursor IDE to load the MCP server configuration

**Usage:**

Add `use context7` to your prompts to get up-to-date documentation:

```
Create an Astro component that displays a timeline. use context7
```

For more details, see [`.cursor/README.md`](.cursor/README.md).

## 🤖 Skills

This repository uses GitHub Copilot Skills for enhanced development workflows.

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

### Using Skills

GitHub Copilot automatically uses skills when relevant to your task. You can also explicitly reference them:

```
Use the update-docs skill to update the README
Use the testing skill to help write tests for this function
```

### How It Works

1. Run `./setup-hooks.sh` to install the pre-commit hook
2. Make code changes and stage them with `git add`
3. When you commit, the hook checks for changes that might need documentation updates
4. If relevant changes are detected, you'll see a reminder
5. Ask GitHub Copilot to use the appropriate skill, or update manually following the skill's guidelines

## 📄 License

This project is open source and available under the MIT License.