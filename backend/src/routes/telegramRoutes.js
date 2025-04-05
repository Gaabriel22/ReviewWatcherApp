const express = require('express');
const router = express.Router();
const telegramController = require('../controllers/telegramController');

// Webhook do Telegram
router.post('/webhook', telegramController.handleTelegramWebhook);

module.exports = router;
