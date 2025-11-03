const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title:{type: String, required: true},
    synopsis:{type: String, default: "No synopsis available yet!"}
});

module.exports = mongoose.model('Movie', movieSchema);