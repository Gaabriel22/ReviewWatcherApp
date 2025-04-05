const Notification = require("../models/Notification")

const notificationController = {
  getUserNotifications: async (req, res) => {
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

  markAsRead: async (req, res) => {
    try {
      const { id } = req.params
      const notification = await Notification.findById(id)

      if (!notification) {
        return res.status(404).json({ message: "Notificação não encontrada" })
      }

      // Verifica se a notificação pertence ao usuário autenticado
      if (notification.user.toString() !== req.user.id) {
        return res.status(403).json({ message: "Acesso negado" })
      }

      notification.read = true
      await notification.save()

      res.status(200).json({ message: "Notificação marcada como lida" })
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao marcar notificação como lida", error })
    }
  },
}

module.exports = notificationController
