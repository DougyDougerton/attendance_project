const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {console.log('Connected to MongoDB Database :)')})
.catch((err) => {console.log(`You broke the database :( ${err}`) });



//View engines
app.set('view engine', 'ejs');
app.set('views', './views');

//Middlewares
app.use(express.static('public'));

//Start server
app.listen(PORT, () => {
    console.log(`connected to port ${PORT}`);
});