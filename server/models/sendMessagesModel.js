const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const cookieParser = require('cookie-parser')

const sendMessageSchema = new mongoose.Schema({

    messages: {
        type: String
    },
    to: {
        type: String
    }
})



module.exports = mongoose.model("Sender", sendMessageSchema)