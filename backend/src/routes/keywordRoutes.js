const express = require("express")
const router = express.Router()
const keywordController = require("../controllers/keywordController")
const authMiddleware = require("../middleware/authMiddleware")

// Middleware de autenticação em todas as rotas
router.use(authMiddleware)

// Adicionar nova palavra-chave
router.post("/", keywordController.addKeyword)

// Listar palavras-chave do usuário
router.get("/", keywordController.getUserKeywords)

// Deletar palavra-chave
router.delete("/:id", keywordController.deleteKeyword)

module.exports = router
