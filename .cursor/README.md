# MCP Server Configuration

This directory contains the MCP (Model Context Protocol) server configuration for this repository.

## ⚠️ Important Security Note

The `mcp.json` file in this directory contains a placeholder API key (`YOUR_API_KEY`). **Never commit your actual API key to version control.** 

For personal/local use:
- Replace `YOUR_API_KEY` with your actual key locally
- The file is committed as a template to help others set up their environment

For team/production use:
- Consider using environment variables or a secure secret management system
- Add `mcp.json` to your local `.gitignore` after configuring

## Context7 MCP Server

This repository is configured to use the [Context7 MCP server](https://context7.com) which provides up-to-date documentation for libraries and frameworks directly in your AI assistant's context.

### Configuration

The `mcp.json` file configures the Context7 MCP server for Cursor IDE.

### Setup

1. Get your API key from [Context7](https://context7.com)
2. Replace `YOUR_API_KEY` in `mcp.json` with your actual API key
   - **Important**: Never commit your actual API key to version control
   - Consider using environment variables for sensitive credentials in production
3. Restart Cursor IDE to load the MCP server configuration

### Usage

Once configured, you can use Context7 in your prompts:

```
Create a Next.js component that fetches data. use context7
```

Or add a rule in Cursor to automatically invoke Context7:

```
Always use Context7 MCP when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.
```

### Alternative Configuration Options

#### Local MCP Server

If you prefer to run the MCP server locally:

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp", "--api-key", "YOUR_API_KEY"]
    }
  }
}
```

#### OAuth Authentication

For clients supporting OAuth 2.0:

```json
{
  "mcpServers": {
    "context7": {
      "url": "https://mcp.context7.com/mcp/oauth"
    }
  }
}
```

### More Information

- [Context7 Documentation](https://context7.com/docs)
- [Context7 GitHub](https://github.com/upstash/context7)
- [MCP Protocol](https://modelcontextprotocol.io)
