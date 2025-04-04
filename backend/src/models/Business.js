const mongoose = require("mongoose")

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    enum: ["google", "yelp", "tripadvisor"],
    required: true,
  },
  externalId: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Business", businessSchema)
