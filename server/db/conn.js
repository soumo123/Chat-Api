
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:"../config/config.env"})
process.on('uncaughtException',(err)=>{
  console.error(`Error:${err.message}`)
  console.log("Shutting down the server due to unhandle promise rejection")
  process.exit(1)
})


const URL = `mongodb://admin:admin@ac-erdpky7-shard-00-00.ht1f1x8.mongodb.net:27017,ac-erdpky7-shard-00-01.ht1f1x8.mongodb.net:27017,ac-erdpky7-shard-00-02.ht1f1x8.mongodb.net:27017/?ssl=true&replicaSet=atlas-12z0tt-shard-0&authSource=admin&retryWrites=true&w=majority`

mongoose.connect(URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log(`Connection is succesful`)
}).catch((err)=> console.log('No connection'))

