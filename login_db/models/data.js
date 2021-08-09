const mongoose = require('mongoose');

var Data = mongoose.model('Data', {
    username:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
});



module.exports = { Data };