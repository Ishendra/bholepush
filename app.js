var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var request = require('request');
//const admin = require('firebase-admin');

app.use(express.static('public'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {    
    res.sendFile(__dirname + "/" + "index.html" );
})

app.post('/token', urlencodedParser,function (req, res) {
    let c = 0;
    let c2 = 0;
    var logger = fs.createWriteStream('token.txt', {
    flags: 'a' // 'a' means appending (old data will be preserved)
    });
    var data = fs.readFileSync('token.txt');
    data = data.toString();
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('token.txt')
      });
      lineReader.on('line', function (line) {
        c++;
      });
      lineReader.on('line', function (line) {
        if(req.body.data !== line) {
            c2++;
        }
      });

      setTimeout(()=>{
        if(c === c2) {
          logger.write(req.body.data+'\r\n');
        }
      },1000)
    // console.log("Synchronous read: " + data);

    // logger.write(req.body.data+'\r\n'); // append string to your file    
});

const port = process.env.PORT || 8000
app.listen(port);
