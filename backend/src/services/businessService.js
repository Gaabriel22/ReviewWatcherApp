const Business = require("../models/Business")

const createBusiness = async (userId, businessData) => {
  const newBusiness = new Business({
    ...businessData,
    owner: userId,
  })
  return await newBusiness.save()
}

const getUserBusinesses = async (userId) => {
  return await Business.find({ owner: userId })
}

const getBusinessById = async (businessId) => {
  return await Business.findById(businessId)
}

const updateBusiness = async (businessId, updates) => {
  return await Business.findByIdAndUpdate(businessId, updates, { new: true })
}

const deleteBusiness = async (businessId) => {
  return await Business.findByIdAndDelete(businessId)
}

module.exports = {
  createBusiness,
  getUserBusinesses,
  getBusinessById,
  updateBusiness,
  deleteBusiness,
}
