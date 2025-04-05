const express = require("express")
const router = express.Router()
const reviewController = require("../controllers/reviewController")
const authMiddleware = require("../middleware/authMiddleware")

// Middleware de autenticação em todas as rotas
router.use(authMiddleware)

// Listar todas as avaliações de um usuário (com filtros opcionais)
router.get("/", reviewController.getReviews)

// Obter uma avaliação específica por ID
router.get("/:id", reviewController.getReviewById)

module.exports = router
