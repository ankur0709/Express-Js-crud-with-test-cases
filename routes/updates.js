let express = require ('express');	
let Employee=require('./../model/schema');
	let app=express();

	app.put('/:name',(req, res,next) => {
	  Employee.findOneAndUpdate({
	    name: req.params.name
	    },
	    { $set: { age: req.body.age }
	  }, {upsert: true}, (err, newUser) => {
	    if (err) {
	      res.send('error updating ');
	    } else {
	      console.log(newUser);
	      res.send(newUser);
	  }
	});
	});
module.exports = app;