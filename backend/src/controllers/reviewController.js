const Review = require('../models/Review');

const reviewController = {
  getReviews: async (req, res) => {
    try {
      const userId = req.user.userId;

      const reviews = await Review.find({ user: userId })
        .sort({ createdAt: -1 })
        .limit(100); // Exibe até 100 avaliações mais recentes

      res.status(200).json({ reviews });
    } catch (error) {
      console.error('Erro ao buscar avaliações:', error);
      res.status(500).json({ message: 'Erro interno ao buscar avaliações.' });
    }
  }
};

module.exports = reviewController;
