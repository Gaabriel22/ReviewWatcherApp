const Business = require("../models/Business")

const businessController = {
  createBusiness: async (req, res) => {
    try {
      const { name, platform, locationUrl } = req.body
      const userId = req.user.userId

      const newBusiness = new Business({
        name,
        platform,
        locationUrl,
        owner: userId,
      })

      await newBusiness.save()

      res
        .status(201)
        .json({
          message: "Estabelecimento criado com sucesso.",
          business: newBusiness,
        })
    } catch (error) {
      console.error("Erro ao criar estabelecimento:", error)
      res
        .status(500)
        .json({ message: "Erro interno ao criar estabelecimento." })
    }
  },

  getUserBusinesses: async (req, res) => {
    try {
      const userId = req.user.userId
      const businesses = await Business.find({ owner: userId })
      res.status(200).json({ businesses })
    } catch (error) {
      console.error("Erro ao buscar estabelecimentos:", error)
      res
        .status(500)
        .json({ message: "Erro interno ao buscar estabelecimentos." })
    }
  },

  deleteBusiness: async (req, res) => {
    try {
      const businessId = req.params.id
      const userId = req.user.userId

      const deleted = await Business.findOneAndDelete({
        _id: businessId,
        owner: userId,
      })

      if (!deleted) {
        return res
          .status(404)
          .json({
            message: "Estabelecimento não encontrado ou não autorizado.",
          })
      }

      res.status(200).json({ message: "Estabelecimento removido com sucesso." })
    } catch (error) {
      console.error("Erro ao remover estabelecimento:", error)
      res
        .status(500)
        .json({ message: "Erro interno ao remover estabelecimento." })
    }
  },
}

module.exports = businessController
