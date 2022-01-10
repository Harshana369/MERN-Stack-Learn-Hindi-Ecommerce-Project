const express = require('express')

const dotenv = require('dotenv')
const connectDatabase = require('./config/database')


//config

dotenv.config({path:"backend/config/config.env"})

connectDatabase()   
const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});    
console.log()

module.express = app  