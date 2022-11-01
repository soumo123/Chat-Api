const Sender = require('../models/sendMessagesModel')
const Reciever = require('../models/recievedMessagesModel')
const User = require('../models/userModels')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middleware/catchAsyncError')
const ApiFeatures = require('../utils/apifeature')
const cloudinary = require("cloudinary");

exports.sendMessage = catchAsyncError(async (req, res, next) => {


    const {messages} = req.body

    const sender = await Sender.create({
        messages,
        to:req.params.senderId
    })

    const sendPerson = await User.findById(req.user.id)
    sendPerson.sendmessages.push(sender)
    await sendPerson.save()


    


    const recievePerson = await User.findById(req.params.senderId)
    recievePerson.recievedmessages.push(sender)
    await recievePerson.save()

    res.status(201).json({
        success: true,
        message: 'Mesage send successfully',
        sender
    })

})


exports.getSendMessages = catchAsyncError(async (req, res, next) => {

const messages = await User.findById(req.params.id)

const {sendmessages} = messages
    res.status(201).json({
        success: true,
        message: 'All Send Messages',
        sendmessages
    })

})




exports.getRecivedMessages = catchAsyncError(async (req, res, next) => {

    const messages = await User.findById(req.params.id)
    
    const {recievedmessages} = messages
        res.status(201).json({
            success: true,
            message: 'All Get Messages',
            recievedmessages
        })
    
    })