const express = require("express")
const router = express.Router()
const authController = require("../controllers/authController")
const authMiddleware = require("../middleware/authMiddleware")

// Rota de registro de usuário
router.post("/register", authController.register)

// Rota de login de usuário
router.post("/login", authController.login)

// Rota protegida para obter dados do usuário autenticado
router.get("/me", authMiddleware, authController.getProfile)

module.exports = router
