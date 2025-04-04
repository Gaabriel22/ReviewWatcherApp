const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config/dotenv")

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")
  if (!token)
    return res
      .status(401)
      .json({ message: "Acesso negado. Token não fornecido." })

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(400).json({ message: "Token inválido." })
  }
}

module.exports = authMiddleware
