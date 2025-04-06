import axios from "./axios"

export const getAllReviews = async () => {
  const response = await axios.get("/reviews")
  return response.data
}

export const getReviewsByBusinessId = async (businessId) => {
  const response = await axios.get(`/reviews/business/${businessId}`)
  return response.data
}

export const createReview = async (reviewData) => {
  const response = await axios.post("/reviews", reviewData)
  return response.data
}

export const deleteReview = async (id) => {
  const response = await axios.delete(`/reviews/${id}`)
  return response.data
}
