const mongoose = require("mongoose")

const telegramUserSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  telegramId: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  languageCode: {
    type: String,
  },
  isBot: {
    type: Boolean,
    default: false,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("TelegramUser", telegramUserSchema)
