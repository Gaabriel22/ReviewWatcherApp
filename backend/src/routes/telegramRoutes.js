const express = require("express")
const router = express.Router()
const telegramController = require("../controllers/telegramController")
const authMiddleware = require("../middleware/authMiddleware")

// Rota para setar o ID do Telegram do usuário autenticado
router.post("/set", authMiddleware, telegramController.setTelegramId)

// Rota para obter o ID do Telegram do usuário autenticado
router.get("/get", authMiddleware, telegramController.getTelegramId)

module.exports = router
