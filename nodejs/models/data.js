const mongoose = require('mongoose');

var Data = mongoose.model('Data', {
    plane_id: { 
        type: Number
    },
    time: { 
        type: String 
    },
    name: { 
        type: String 
    },
    date: {
        type:String
    },
    fuel: { 
        type: Number 
    },
    status:{ 
        type: String 
    }
});

module.exports = { Data };