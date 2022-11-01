const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const cookieParser = require('cookie-parser')

const RecieveMessageSchema = new mongoose.Schema({

    messages: {
        type: String
    },
    from: {
        type: String
    }
})



module.exports = mongoose.model("Reciever", RecieveMessageSchema)