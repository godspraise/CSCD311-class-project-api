const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000
const s_r = require('./routers/student')
h_r = require('./routers/hostel')
const app = express();

app.use(express.json(), express.urlencoded({extended: true}), s_r,h_r)



app.listen(port, ()=>{
    console.log(port)
})

