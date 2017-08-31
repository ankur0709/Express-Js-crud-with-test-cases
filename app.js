    let express = require('express');
	let bodyParser = require('body-parser');
	let mongoose = require('mongoose');
	let fetch = require('./routes/fetch');
	let insert = require('./routes/insert');
	let updates = require('./routes/updates');
	let deletes = require('./routes/deletes');
   let config = require('./config/config');
    let path = require('path');
	const app=express();
	let http = require('http');
	var fs = require('fs')
   // var morgan = require('morgan')
    //var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), 
	//    {flags: 'a'})
// app.use(morgan('combined', {stream: accessLogStream}))
app.use(bodyParser.json());         //Defines the form of data..
	app.use(bodyParser.urlencoded({
	  extended: true
	}));
	app.use('/fetch',fetch);
	app.use('/insert',insert);
	app.use('/updates',updates);
	app.use('/deletes',deletes);
	mongoose.connect(config.dbURL,{useMongoClient:true});//umc used to remove warning when running server

   http.createServer(app).listen (8080,'127.0.0.1');


   module.exports=app;


