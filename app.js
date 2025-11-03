require('dotenv').config({path: './.env'})
const path = require('path');
const express = require("express");
const expressLayouts = require("express-ejs-layouts")


const app = express();

// add static files in public folder
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', "./views");

app.use(expressLayouts);
app.set('layout', "./layouts/layout");




// configuration mongoose
require('./controllers/mongoose_init');



app.use('/', (req, res, next)=>{
    console.log(`une requete ${req.method} est arrive`);
    next();
})


app.use('/', require('./routes/homeRoute'));
app.use('/movies', require('./routes/moviesRoute'));



const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`le serveur s'ecoute sur http:127.0.0.1:${port}`);
})



