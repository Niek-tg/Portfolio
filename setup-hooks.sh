#!/bin/bash
# Setup script to install git hooks for the Portfolio project

echo "🔧 Setting up git hooks..."

# Get the git hooks directory
HOOKS_DIR=".git/hooks"

# Check if .git directory exists
if [ ! -d ".git" ]; then
    echo "❌ Error: .git directory not found. Are you in the repository root?"
    exit 1
fi

# Create hooks directory if it doesn't exist
mkdir -p "$HOOKS_DIR"

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
echo "  • Remind you to use the update-docs agent skill when needed"
echo "  • Work with GitHub Copilot to keep your README.md current"
echo ""
echo "📚 For more information, see .github/agents/update-docs.md"
