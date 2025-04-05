const { Telegraf } = require("telegraf")
const User = require("../models/User")
const TelegramUser = require("../models/TelegramUser")
const Business = require("../models/Business")
const Review = require("../models/Review")

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

const sendReviewNotification = async (telegramId, businessName, review) => {
  const message = `
📍 *${businessName}*
⭐️ Nota: ${review.rating}
👤 Autor: ${review.author}
📝 Comentário: ${review.comment}
🗓️ Data: ${new Date(review.date).toLocaleString()}
  `

  try {
    await bot.telegram.sendMessage(telegramId, message, {
      parse_mode: "Markdown",
    })
  } catch (error) {
    console.error("Erro ao enviar notificação via Telegram:", error)
  }
}

const startBot = () => {
  bot.start(async (ctx) => {
    const telegramId = ctx.from.id
    const username = ctx.from.username || "Sem username"

    const existing = await TelegramUser.findOne({ telegramId })

    if (!existing) {
      await TelegramUser.create({
        telegramId,
        username,
        user: null, // Será vinculado via comando manual ou painel
      })
      ctx.reply("✅ Bot conectado! Agora associe sua conta via painel web.")
    } else {
      ctx.reply("👋 Você já está conectado ao bot.")
    }
  })

  bot.launch().then(() => {
    console.log("🤖 Bot do Telegram iniciado com sucesso!")
  })
}

module.exports = {
  sendReviewNotification,
  startBot,
}
