const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Quiz = new Schema({
    Question: {
        type: String
    },
    Answer: {
        type: String
    },
    
});

module.exports = mongoose.model('Quiz', Quiz);
