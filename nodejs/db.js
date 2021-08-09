const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/flight_data',(err) =>{
    if(!err)
    console.log('MongoDB connection suceeded.');
    else
    console.log('Error in DB connection: ', +JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;