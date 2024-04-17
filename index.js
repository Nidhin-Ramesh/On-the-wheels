const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/OnTheWheels");

const express = require('express');
const app = express();


const userRoute=require('./routes/userRoute')
app.use('/',userRoute)

app.set('view engine', 'ejs');


app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000/');
});
