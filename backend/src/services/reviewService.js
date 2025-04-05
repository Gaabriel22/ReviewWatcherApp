const Review = require("../models/Review")
const Notification = require("../models/Notification")
const Keyword = require("../models/Keyword")
const Business = require("../models/Business")
const TelegramUser = require("../models/TelegramUser")
const telegramService = require("./telegramService")

// Simulação da função que buscaria avaliações via API externa
const fetchReviewsFromExternalAPI = async (platform, businessIdOnPlatform) => {
  // Aqui, uma simulação de avaliação retornada pela API
  return [
    {
      platform,
      author: "John Doe",
      rating: 4,
      comment: "Serviço excelente!",
      date: new Date(),
    },
  ]
}

const saveNewReviews = async (business) => {
  const { _id: businessId, platform, platformBusinessId } = business
  const newReviews = await fetchReviewsFromExternalAPI(
    platform,
    platformBusinessId
  )

  for (const reviewData of newReviews) {
    const exists = await Review.exists({
      business: businessId,
      author: reviewData.author,
      comment: reviewData.comment,
    })

    if (!exists) {
      const review = await Review.create({
        business: businessId,
        ...reviewData,
      })

      // Verifica palavras-chave
      const keywords = await Keyword.find({ business: businessId })
      const matches = keywords.some(({ word }) =>
        review.comment.toLowerCase().includes(word.toLowerCase())
      )

      if (matches) {
        const notification = await Notification.create({
          user: business.owner,
          business: businessId,
          review: review._id,
          sent: false,
        })

        // Envia para o Telegram
        const telegramUser = await TelegramUser.findOne({
          user: business.owner,
        })
        if (telegramUser) {
          await telegramService.sendReviewNotification(
            telegramUser.telegramId,
            business.name,
            review
          )
          notification.sent = true
          await notification.save()
        }
      }
    }
  }
}

module.exports = {
  saveNewReviews,
}
