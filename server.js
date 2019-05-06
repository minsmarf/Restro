var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/mongoose')()
require('./server/config/routes')(app)

app.listen(8000, function(){
    console.log("listening on port 8000")
})