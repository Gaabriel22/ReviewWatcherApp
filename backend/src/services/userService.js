const User = require("../models/User")
const bcrypt = require("bcryptjs")

const createUser = async (userData) => {
  const { name, email, password } = userData

  // Verifica se o e-mail já está em uso
  const existingUser = await User.findOne({ email })
  if (existingUser) {
    throw new Error("E-mail já está em uso")
  }

  // Criptografa a senha antes de salvar
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  })

  return await newUser.save()
}

const findUserByEmail = async (email) => {
  return await User.findOne({ email })
}

const findUserById = async (id) => {
  return await User.findById(id)
}

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
}
