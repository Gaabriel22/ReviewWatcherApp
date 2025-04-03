const cron = require("node-cron")
const reviewService = require("../services/reviewService")

// Agendamento de tarefa para buscar avaliações a cada 30 minutos
cron.schedule("*/30 * * * *", async () => {
  console.log("Executando tarefa agendada: verificação de novas avaliações")
  await reviewService.checkNewReviews()
})

module.exports = cron
