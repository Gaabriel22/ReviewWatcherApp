const Notification = require("../models/Notification")

const notificationController = {
  getNotifications: async (req, res) => {
    try {
      const userId = req.user.userId

      const notifications = await Notification.find({ user: userId })
        .sort({ createdAt: -1 })
        .limit(50) // Limita às 50 notificações mais recentes

      res.status(200).json({ notifications })
    } catch (error) {
      console.error("Erro ao buscar notificações:", error)
      res.status(500).json({ message: "Erro interno ao buscar notificações." })
    }
  },
}

module.exports = notificationController
