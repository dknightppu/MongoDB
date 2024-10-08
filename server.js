const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port =3000;

mongoose.connect('mongodb://localhost:27017/CMPS_Database')

.then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Connection error', error);
  });

app.listen(3000, () => {
    console.log('app is listening to port 3000')
})

//routes
app.get('/Movies', (req, res) => {
    res.json({mssg: "Welcome to my MongoDB API"})
})