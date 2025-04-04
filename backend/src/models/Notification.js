const mongoose = require("mongoose")

const notificationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
    required: true,
  },
  sentAt: {
    type: Date,
    default: Date.now,
  },
  channel: {
    type: String,
    enum: ["telegram"],
    required: true,
  },
  status: {
    type: String,
    enum: ["sent", "failed"],
    default: "sent",
  },
})

module.exports = mongoose.model("Notification", notificationSchema)
