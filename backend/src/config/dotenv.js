const dotenv = require("dotenv")
const path = require("path")

dotenv.config({ path: path.resolve(__dirname, "../.env") })

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/reviewWatcher",
  JWT_SECRET: process.env.JWT_SECRET || "defaultsecret",
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || "",
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
}
