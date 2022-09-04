const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    Name:{
        type:String,
        required:true,

    },
    Author:{
        type:String,
        required:true,

    },
    Description:{
        type:String,
        required:true,

    },
    Price:{
        type:Number,
        required:true,

    },
    Available:{
        type:Boolean,
    },
    Image:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model("Book", bookSchema);

//books