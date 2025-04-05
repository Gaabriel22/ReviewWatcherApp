const Review = require("../models/Review")

const reviewController = {
  getReviews: async (req, res) => {
    try {
      const userId = req.user.userId

      const reviews = await Review.find({ user: userId })
        .sort({ createdAt: -1 })
        .limit(100) // Exibe até 100 avaliações mais recentes

      res.status(200).json({ reviews })
    } catch (error) {
      console.error("Erro ao buscar avaliações:", error)
      res.status(500).json({ message: "Erro interno ao buscar avaliações." })
    }
  },

  getReviewById: async (req, res) => {
    try {
      const { id } = req.params
      const review = await Review.findById(id).populate("business")

      if (!review) {
        return res.status(404).json({ message: "Avaliação não encontrada" })
      }

      res.status(200).json(review)
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar avaliação", error })
    }
  },
}

module.exports = reviewController
