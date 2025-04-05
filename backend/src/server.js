require("dotenv").config({
  path: require("path").resolve(__dirname, "../.env"),
})
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const db = require("./config/db")
const routes = require("./routes")

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// Rotas
app.use("/api", routes)

// Iniciar servidor
const PORT = process.env.PORT || 5000
app.listen(PORT, async () => {
  console.log(`🔥 Servidor rodando na porta ${PORT}`)
  await db.connect()
})
