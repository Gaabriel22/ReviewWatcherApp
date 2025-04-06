import axios from "./axios"

export const getAllBusinesses = async () => {
  const response = await axios.get("/businesses")
  return response.data
}

export const getBusinessById = async (id) => {
  const response = await axios.get(`/businesses/${id}`)
  return response.data
}

export const createBusiness = async (businessData) => {
  const response = await axios.post("/businesses", businessData)
  return response.data
}

export const updateBusiness = async (id, updatedData) => {
  const response = await axios.put(`/businesses/${id}`, updatedData)
  return response.data
}

export const deleteBusiness = async (id) => {
  const response = await axios.delete(`/businesses/${id}`)
  return response.data
}
