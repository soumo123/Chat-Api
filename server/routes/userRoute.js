const express = require('express')
const router = express.Router()

const {registerUser,loginUser} = require('../controllers/userController')
// const {sendMessages}  = require('../controllers/messagesController')
const {isAuthenticatedUser,authorizeRoles} = require('../middleware/auth')

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)





// router.route('/message').post(sendMessages)

module.exports = router