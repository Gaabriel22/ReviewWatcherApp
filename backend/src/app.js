const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const rateLimiter = require("./middleware/rateLimiter")
const errorHandler = require("./middleware/errorHandler")
const authMiddleware = require("./middleware/authMiddleware")
const swaggerUi = require("swagger-ui-express")
const swaggerDocument = require("./swagger.json")
require("dotenv").config()

// Conexão com o banco
require("./config/db")

const app = express()

// Middlewares globais
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(rateLimiter)

// Documentação Swagger
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Rotas públicas
app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/telegram", require("./routes/telegramRoutes"))

// Middleware de autenticação para rotas protegidas
app.use(authMiddleware)

// Rotas protegidas
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/businesses", require("./routes/businessRoutes"))
app.use("/api/keywords", require("./routes/keywordRoutes"))
app.use("/api/reviews", require("./routes/reviewRoutes"))
app.use("/api/notifications", require("./routes/notificationRoutes"))

// Middleware de tratamento de erros
app.use(errorHandler)

module.exports = app
