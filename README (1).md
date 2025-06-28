# Tiffany-AI WhatsApp Bot 🤖

A powerful, feature-rich WhatsApp bot built using [Baileys](https://github.com/WhiskeySockets/Baileys).  
Created and maintained with ❤️ by [M-axie](https://github.com/M-axie).

---

## 🌐 Deployment Options

You can deploy Tiffany-AI on various platforms:

### 🚀 Heroku

> Requires `Procfile` and `heroku.yml`

1. Push your repo to GitHub.
2. Connect GitHub to Heroku.
3. Enable automatic deploys or trigger manual deploy.

### 🐳 Docker (for Pterodactyl)

> Uses `Dockerfile` and optionally `.env`  
Create an egg with Docker support or import it via the panel. Set your startup command to:

```
node index.js
```

### ⚙️ Render

> Requires `render.yaml` or manual setup via dashboard

1. Create new Web Service.
2. Set build command: `npm install`
3. Start command: `node index.js`

---

## 🛠 Features

- ✅ YouTube Downloader (MP3/MP4)
- ✅ TikTok Downloader (with fallback)
- ✅ Text to Speech
- ✅ AI Commands (OpenAI/Gemini)
- ✅ Anime Search, Lyrics, Stickers & More

---

## 📦 Installation (for local or panel use)

```bash
git clone https://github.com/M-axie/Tiffany-AI.git
cd Tiffany-AI
npm install
node index.js
```

---

## 📁 Important Files

- `index.js`: Bot entrypoint
- `package.json`: Dependency list
- `.env`: Optional config for API keys, etc.
- `Procfile`: Required for Heroku
- `Dockerfile`: Required for Docker-based panels
- `render.yaml`: Optional for Render deployments

---

## 👏 Credits

- [@M-axie](https://github.com/M-axie) — Developer
- [Baileys](https://github.com/WhiskeySockets/Baileys)
- [UrusTech](https://github.com/UrusTech) — Bot foundation
- [BochilTeam](https://github.com/BochilTeam/scraper)
- [Dylux API](https://github.com/Dylan-XD/api-dylux)
- [openai](https://github.com/openai/openai-node)
- and many other OSS contributors ❤️

---

## 📜 License

This project is licensed under the [ISC License](LICENSE).