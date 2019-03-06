var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var request = require('request');
//const admin = require('firebase-admin');

app.use(express.static('public'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {    
    res.sendFile(__dirname + "/" + "index.html" );
})

app.post('/token', urlencodedParser,function (req, res) {
    console.log("inside d")
    console.log(req.body.data)
   
    var fs = require('fs')
    var logger = fs.createWriteStream('token.txt', {
    flags: 'a' // 'a' means appending (old data will be preserved)
    })
    logger.write(req.body.data+'\r\n') // append string to your file    
});

const port = process.env.PORT || 8000
app.listen(port);
