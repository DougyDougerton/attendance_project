const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const authRoutes = require('./routes/authRoutes.js');
const studentRoutes = require('./routes/studentRoutes.js');
const PORT = process.env.PORT || 3000;


//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => { console.log('아싸! You connected to MongoDB Database! :)') })
.catch((err) => { console.log(`안 좋다! Server is broken :(): ${err}`) });

//View engines
app.set('view engine', 'ejs');
app.set('views', './views');

//Middlewares
app.use(express.static('public'));
app.use(express.static('public'));
app.use('/', authRoutes);
app.use('/', studentRoutes);
app.use((err, res, req, next) =>{
    console.error(err.stack);
    res.status(500).send('Shit\'s fucked >:(');
    next();
});




//Start server
app.listen(PORT, () =>{
    console.log(`Connected to port ${PORT}`);
});