let express = require ('express');	
let Employee=require('./../model/schema');
	let app=express();
	app.delete('/',(req, res,next) =>{
	  Employee.remove({
	    'name': req.body.name
	  }, (err, userData) => {
	    if(err) {
	      res.send('error removing')
	    } else {
	      console.log(userData);
	      res.json(userData);
	  }
	});
	});
module.exports = app;