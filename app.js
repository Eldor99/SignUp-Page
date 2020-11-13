// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const { response } = require('express');

const app = express();
const port = 3000;

// Static files
app.use(express.static('public'));

// body parser
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/signup.html');
});


app.post('/',(req,res) => {
    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let email = req.body.email;

    console.log(firstName, lastName, email);
});


app.listen(port, () => {
    console.log(`Server is runing on port ${port}`);
});