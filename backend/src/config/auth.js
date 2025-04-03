const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("./dotenv")

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: "7d",
  })
}

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return reject(err)
      }
      resolve(decoded)
    })
  })
}

module.exports = { generateToken, verifyToken }
