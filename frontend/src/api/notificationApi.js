import axios from "./axios"

export const getAllNotifications = async () => {
  const response = await axios.get("/notifications")
  return response.data
}

export const getNotificationsByUserId = async (userId) => {
  const response = await axios.get(`/notifications/user/${userId}`)
  return response.data
}

export const createNotification = async (notificationData) => {
  const response = await axios.post("/notifications", notificationData)
  return response.data
}

export const deleteNotification = async (id) => {
  const response = await axios.delete(`/notifications/${id}`)
  return response.data
}
