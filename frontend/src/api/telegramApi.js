import axios from "./axios"

export const sendTokenToTelegram = async (token) => {
  const response = await axios.post("/telegram/send-token", { token })
  return response.data
}

export const verifyTelegramConnection = async (userId) => {
  const response = await axios.get(`/telegram/verify/${userId}`)
  return response.data
}
