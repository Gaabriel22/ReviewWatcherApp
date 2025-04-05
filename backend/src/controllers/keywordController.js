const Keyword = require("../models/Keyword")

const keywordController = {
  addKeyword: async (req, res) => {
    try {
      const userId = req.user.userId
      const { word } = req.body

      const newKeyword = new Keyword({ word, user: userId })
      await newKeyword.save()

      res.status(201).json({
        message: "Palavra-chave adicionada com sucesso.",
        keyword: newKeyword,
      })
    } catch (error) {
      console.error("Erro ao adicionar palavra-chave:", error)
      res
        .status(500)
        .json({ message: "Erro interno ao adicionar palavra-chave." })
    }
  },

  getUserKeywords: async (req, res) => {
    try {
      const userId = req.user.id
      const keywords = await Keyword.find({ user: userId })
      res.status(200).json(keywords)
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar palavras-chave", error })
    }
  },

  deleteKeyword: async (req, res) => {
    try {
      const userId = req.user.userId
      const keywordId = req.params.id

      const deleted = await Keyword.findOneAndDelete({
        _id: keywordId,
        user: userId,
      })

      if (!deleted) {
        return res
          .status(404)
          .json({ message: "Palavra-chave não encontrada ou não autorizada." })
      }

      res.status(200).json({ message: "Palavra-chave removida com sucesso." })
    } catch (error) {
      console.error("Erro ao remover palavra-chave:", error)
      res
        .status(500)
        .json({ message: "Erro interno ao remover palavra-chave." })
    }
  },
}

module.exports = keywordController
