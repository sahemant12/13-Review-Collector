require('dotenv').config();
const reviewRouter = require('./routes/review.js');
const cors = require('cors');
//connect DB
const mongoose = require('mongoose')
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL)
  console.log("DataBase Connected")
}


const express = require('express');
const server = express();

server.use(cors({
  origin: ["https://13-review-collector-frontend.vercel.app"],
  methods: ["POST", "GET"],
}));
server.use(express.json());
server.use('/',reviewRouter.router);

//connect to the server
server.listen(process.env.PORT, ()=>{
    console.log("server is listening")
})
