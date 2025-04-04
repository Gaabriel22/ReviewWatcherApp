const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    required: true,
  },
  source: {
    type: String,
    enum: ["google", "yelp", "tripadvisor"],
    required: true,
  },
  reviewId: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    default: "",
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

reviewSchema.index({ reviewId: 1, source: 1 }, { unique: true })

module.exports = mongoose.model("Review", reviewSchema)
