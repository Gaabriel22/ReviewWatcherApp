const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

const authController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body

      const existingUser = await User.findOne({ email })
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "Usuário já registrado com este e-mail." })
      }

      const hashedPassword = await bcrypt.hash(password, 10)
      const newUser = new User({ name, email, password: hashedPassword })
      await newUser.save()

      return res
        .status(201)
        .json({ message: "Usuário registrado com sucesso." })
    } catch (error) {
      console.error("Erro ao registrar:", error)
      res
        .status(500)
        .json({ message: "Erro no servidor ao registrar usuário." })
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body

      const user = await User.findOne({ email })
      if (!user) {
        return res.status(401).json({ message: "Credenciais inválidas." })
      }

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(401).json({ message: "Credenciais inválidas." })
      }

      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
      )

      return res.status(200).json({
        message: "Login bem-sucedido.",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      })
    } catch (error) {
      console.error("Erro no login:", error)
      res.status(500).json({ message: "Erro no servidor ao fazer login." })
    }
  },
}

module.exports = authController
