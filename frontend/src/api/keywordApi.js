import axios from "./axios"

export const getAllKeywords = async () => {
  const response = await axios.get("/keywords")
  return response.data
}

export const getKeywordsByBusinessId = async (businessId) => {
  const response = await axios.get(`/keywords/business/${businessId}`)
  return response.data
}

export const createKeyword = async (keywordData) => {
  const response = await axios.post("/keywords", keywordData)
  return response.data
}

export const updateKeyword = async (id, updatedData) => {
  const response = await axios.put(`/keywords/${id}`, updatedData)
  return response.data
}

export const deleteKeyword = async (id) => {
  const response = await axios.delete(`/keywords/${id}`)
  return response.data
}
