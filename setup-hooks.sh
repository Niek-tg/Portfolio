#!/bin/bash
# Setup script to install git hooks for the Portfolio project

echo "🔧 Setting up git hooks..."

# Get the git hooks directory in a way that works with worktrees/submodules
HOOKS_DIR="$(git rev-parse --git-path hooks 2>/dev/null)"

# Ensure we are inside a git repository and have a valid hooks directory path
if [ -z "$HOOKS_DIR" ] || ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "❌ Error: Not inside a git repository. Are you in the repository root?"
    exit 1
fi

# Create hooks directory if it doesn't exist
mkdir -p "$HOOKS_DIR"

# Check if pre-commit hook already exists
if [ -f "$HOOKS_DIR/pre-commit" ]; then
    echo "⚠️  Warning: A pre-commit hook already exists at $HOOKS_DIR/pre-commit"
    echo "Creating backup at $HOOKS_DIR/pre-commit.backup"
    cp "$HOOKS_DIR/pre-commit" "$HOOKS_DIR/pre-commit.backup"
fi

# Copy pre-commit hook
if [ -f ".github/hooks/pre-commit" ]; then
    cp .github/hooks/pre-commit "$HOOKS_DIR/pre-commit"
    chmod +x "$HOOKS_DIR/pre-commit"
    echo "✅ Pre-commit hook installed"
else
    echo "❌ Error: .github/hooks/pre-commit not found"
    exit 1
fi

echo ""
echo "✨ Git hooks setup complete!"
echo ""
echo "The pre-commit hook will now:"
echo "  • Check for changes that may require documentation updates"
echo "  • Remind you to use the update-docs skill when needed"
echo "  • Work with GitHub Copilot to keep your README.md current"
echo ""
echo "📚 For more information, see .github/skills/update-docs/SKILL.md"
