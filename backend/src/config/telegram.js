const { Telegraf } = require("telegraf")
const { TELEGRAM_BOT_TOKEN } = require("./dotenv")

if (!TELEGRAM_BOT_TOKEN) {
  throw new Error("Telegram bot token não configurado em .env")
}

const bot = new Telegraf(TELEGRAM_BOT_TOKEN)

module.exports = bot
