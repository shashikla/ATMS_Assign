const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Data } = require('../models/data');

//records get from db
router.get('/', (req, res) => {
    Data.find((err, docs) => {
        if (!err) 
        { 
            res.send(docs); 
        }
        else 
        { 
            console.log('Error in Retriving Datas :' + JSON.stringify(err, undefined, 2)); 
        }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Data.findById(req.params.id, (err, doc) => {
        if (!err) 
        { 
            res.send(doc); 
        }
        else
        { 
            console.log('Error in Retriving Data :' + JSON.stringify(err, undefined, 2)); 
        }
    });
});
router.post('/', (req, res) => {
    var list = new Data({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    list.save((err, doc) => {
        if (!err) 
        { 
            res.send(doc); 
            console.log("Data Created!!");
            // log = console.log;
            // date = new Date();
            // log(date);
        }
        else 
        { 
            console.log('Error in Data Save || pwd not match :' + JSON.stringify(err, undefined, 2)); 
        }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var list = {
        username: req.body.username,
       email: req.body.email,
        password: req.body.password
    };
    Data.findByIdAndUpdate(req.params.id, { $set: list }, { new: true }, (err, doc) => {
        if (!err) 
        { 
            res.send(doc); 
        }
        else { console.log('Error in Data Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Data.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) 
        { 
            res.send(doc); 
            console.log('Data Details Deleted!!!');
        }
        else 
        { 
            console.log('Error in Data Delete :' + JSON.stringify(err, undefined, 2)); 
        }
    });
});

module.exports = router; 