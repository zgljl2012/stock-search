
var express = require("express")
var bodyParser = require("body-parser")
var app = express()

// static files
app.use(express.static('public'))

// use bodyParser
app.use(bodyParser.urlencoded({extended:true}))

// Index
app.get('/', function(req, res){
	res.redirect('/index.html')
});

// add a stock
app.post('/add', function(req, res) {
	var sid = req.body.sid;
	console.log(sid)
});

// create server listening at 3000
var server = app.listen(3000, function(){
	console.log("App listening at 3000...")
});
