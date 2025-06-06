const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/reviewWatcher"

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("✅ Conectado ao MongoDB")
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error)
    process.exit(1)
  }
}

module.exports = { connect: connectDB }
