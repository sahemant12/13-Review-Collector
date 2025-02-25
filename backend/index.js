require('dotenv').config();
const reviewRouter = require('./routes/review.js');

//connect DB
const mongoose = require('mongoose')
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL)
  console.log("DataBase Connected")
}


const express = require('express');
const server = express();
server.use(express.json());
server.use('/',reviewRouter.router);

//connect to the server
server.listen(process.env.PORT, ()=>{
    console.log("server is listening")
})