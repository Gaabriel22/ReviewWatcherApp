const rateLimit = require("express-rate-limit")

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // limita cada IP a 100 requisições por janela
  standardHeaders: true, // retorna infos nos headers padrão
  legacyHeaders: false, // desativa headers obsoletos
})

module.exports = rateLimiter
