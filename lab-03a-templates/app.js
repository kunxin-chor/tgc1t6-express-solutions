const express = require('express');
const hbs = require('hbs');
let app = express();

app.set('view engine', 'hbs');

app.get('/', function(req,res){
    res.render('index')
})

app.get('/about-us', function(req,res){
    res.render('about-us')
})

app.get('/multiply/:left/:right', function(req,res){
    let n1 = req.params.left;
    let n2 = req.params.right;
    let result = n1*n2;
    res.render('results',{
        'left': n1,
        'right': n2,
        'answer': result
    })
})

// this is so that we can test
module.exports = app;