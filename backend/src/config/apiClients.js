const axios = require("axios")
const {
  GOOGLE_API_KEY,
  YELP_API_KEY,
  TRIPADVISOR_API_KEY,
} = require("./dotenv")

const googleClient = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/place",
  params: { key: GOOGLE_API_KEY },
})

const yelpClient = axios.create({
  baseURL: "https://api.yelp.com/v3",
  headers: { Authorization: `Bearer ${YELP_API_KEY}` },
})

const tripAdvisorClient = axios.create({
  baseURL: "https://api.tripadvisor.com/api/internal/1.14",
  headers: { Authorization: `Bearer ${TRIPADVISOR_API_KEY}` },
})

module.exports = { googleClient, yelpClient, tripAdvisorClient }
