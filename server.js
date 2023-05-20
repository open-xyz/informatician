const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const dbURI = 'mongodb+srv://sonakshi:1234@cluster0.2pd8qqu.mongodb.net/Infomatician?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then(() => {
    console.log("DB connected");
    app.listen(5000);
}).catch((err) => {
    console.log(err);
});

app.set('view engine','ejs'); //ejs - embedded javascript templates

//app.use(express.static('public')); //middleware to serve static CSS files
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bookRoutes);

