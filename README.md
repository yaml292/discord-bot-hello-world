# 👋 Hello World Discord Bot

[![Discord.js](https://img.shields.io/badge/discord.js-v14-blue.svg)](https://discord.js.org)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node.js-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org)

> A simple Discord bot that responds to the hello-world command with a cheerful message!

## ✨ Features

- Modern Discord.js v14 implementation
- Slash command support
- Easy setup and configuration
- Minimal permissions required

## 🚀 Quick Start

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   - Copy .env.example to .env
   - Add your Discord bot token and client ID
4. Start the bot:
   ```bash
   npm start
   ```

## 🔧 Configuration

Create a .env file with the following variables:

```
DISCORD_TOKEN=your_discord_bot_token
CLIENT_ID=your_application_client_id
```

<details>
<summary>🔍 How to get these values</summary>
<ol>
  <li>Go to the <a href="https://discord.com/developers/applications" target="_blank">Discord Developer Portal</a></li>
  <li>Create a new application or select an existing one</li>
  <li>Your token can be found under the "Bot" tab (click "Reset Token" if needed)</li>
  <li>Your Client ID can be found in the "OAuth2" tab</li>
</ol>
</details>

## 📋 Requirements

- Node.js 18.0.0 or higher
- Discord.js v14
- A Discord account with a registered application

## 🔗 Inviting Your Bot

Use the following URL to invite your bot to a server, replacing `YOUR_CLIENT_ID` with your actual client ID:

```
https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=2048&scope=bot%20applications.commands
```

## 📜 License

This project is licensed under the [MIT License](/LICENSE) - see the LICENSE file for details.

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/yaml292">yaml292</a>
</div>
