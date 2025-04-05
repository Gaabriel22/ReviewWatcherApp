const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const authMiddleware = require('../middleware/authMiddleware');

// Middleware de autenticação em todas as rotas
router.use(authMiddleware);

// Listar notificações recentes do usuário
router.get('/', notificationController.getUserNotifications);

// Atualizar status de uma notificação (ex: marcada como lida)
router.patch('/:id', notificationController.markAsRead);

module.exports = router;
