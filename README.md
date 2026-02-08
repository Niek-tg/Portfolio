# Portfolio

A personal portfolio website built with [Astro](https://astro.build) to showcase my resume and professional experience.

## 🚀 Features

- Clean and professional design
- Responsive layout that works on all devices
- Resume/CV display
- About page
- Fast and optimized with Astro
- Automated deployment to GitHub Pages
- GitHub Copilot agent skill for automatic documentation updates

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

## 🤖 Agent Skills

This repository includes a GitHub Copilot agent skill for automatic documentation updates.

### Documentation Update Agent

The `update-docs` agent skill automatically keeps the README.md file up-to-date with code changes.

**Setup:**
1. Run `./setup-hooks.sh` to install the pre-commit hook
2. The hook will run before each commit and check for changes that may require documentation updates

**How it works:**
- Before each commit, the pre-commit hook analyzes staged changes
- If relevant changes are detected (new features, dependencies, config changes, etc.), you'll be reminded to update documentation
- GitHub Copilot can use the agent skill instructions in `.github/agents/update-docs.md` to automatically update the README

**Agent skill configuration:**
- Located in `.github/agents/update-docs.md`
- Defines rules for when and how to update documentation
- Can be used by GitHub Copilot to automatically maintain accurate documentation

**Relevant changes include:**
- New pages, components, or features
- New dependencies or technologies
- Changes to build/deployment processes
- New configuration requirements

The agent ensures documentation stays current without manual effort, making it easier for contributors and users to understand the project.

## 📄 License

This project is open source and available under the MIT License.