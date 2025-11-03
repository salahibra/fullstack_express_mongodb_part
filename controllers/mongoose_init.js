const mongoose = require('mongoose');
require('dotenv').config({path: '../.env'});


const db_name = 'movies_db';

// Use IPv4 address explicitly to avoid IPv6 connection issues
const mongodb = `mongodb://127.0.0.1:27017/${db_name}`;
mongoose.connect(mongodb, {useUnifiedTopology: true})
    .then(() => console.log("MongoDB OK!"))
    .catch(() => console.log("MongoDB ERREUR!"));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected to the db");
});