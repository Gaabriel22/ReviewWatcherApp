const TelegramUser = require("../models/TelegramUser")

const telegramController = {
  setTelegramId: async (req, res) => {
    try {
      const userId = req.user.userId
      const { telegramId } = req.body

      if (!telegramId || typeof telegramId !== "string") {
        return res.status(400).json({ message: "ID do Telegram inválido." })
      }

      const existing = await TelegramUser.findOneAndUpdate(
        { user: userId },
        { telegramId },
        { upsert: true, new: true }
      )

      res.status(200).json({ telegramUser: existing })
    } catch (error) {
      console.error("Erro ao configurar ID do Telegram:", error)
      res
        .status(500)
        .json({ message: "Erro interno ao configurar ID do Telegram." })
    }
  },

  getTelegramId: async (req, res) => {
    try {
      const userId = req.user.userId
      const telegramUser = await TelegramUser.findOne({ user: userId })

      if (!telegramUser) {
        return res
          .status(404)
          .json({ message: "ID do Telegram não configurado." })
      }

      res.status(200).json({ telegramId: telegramUser.telegramId })
    } catch (error) {
      console.error("Erro ao obter ID do Telegram:", error)
      res.status(500).json({ message: "Erro interno ao obter ID do Telegram." })
    }
  },
}

module.exports = telegramController
