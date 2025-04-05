const express = require("express")
const router = express.Router()
const businessController = require("../controllers/businessController")
const authMiddleware = require("../middleware/authMiddleware")

// Todas as rotas abaixo requerem autenticação
router.use(authMiddleware)

// Criar novo estabelecimento
router.post("/", businessController.createBusiness)

// Listar todos os estabelecimentos do usuário
router.get("/", businessController.getUserBusinesses)

// Obter um estabelecimento específico
router.get("/:id", businessController.getBusinessById)

// Atualizar informações do estabelecimento
router.put("/:id", businessController.updateBusiness)

// Deletar um estabelecimento
router.delete("/:id", businessController.deleteBusiness)

module.exports = router
