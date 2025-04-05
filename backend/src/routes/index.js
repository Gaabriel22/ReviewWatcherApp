const express = require("express")
const router = express.Router()

const authRoutes = require("./authRoutes")
const businessRoutes = require("./businessRoutes")
const keywordRoutes = require("./keywordRoutes")
const notificationRoutes = require("./notificationRoutes")
const reviewRoutes = require("./reviewRoutes")
const telegramRoutes = require("./telegramRoutes")

router.use("/auth", authRoutes)
router.use("/business", businessRoutes)
router.use("/keywords", keywordRoutes)
router.use("/notifications", notificationRoutes)
router.use("/reviews", reviewRoutes)
router.use("/telegram", telegramRoutes)

module.exports = router
