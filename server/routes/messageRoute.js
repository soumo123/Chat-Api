const express = require('express')
const router = express.Router()
const { sendMessage, getSendMessages, getRecivedMessages } = require('../controllers/messageController')
const { isAuthenticatedUser } = require('../middleware/auth')


router.route("/messsage/send/:senderId/:token").post(isAuthenticatedUser,sendMessage)
router.route("/messsage/sendMessages/:id/:token").get(isAuthenticatedUser,getSendMessages)
router.route("/messsage/recievedMessages/:id/:token").get(isAuthenticatedUser,getRecivedMessages)



module.exports = router