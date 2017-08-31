let express= require('express');
	let app=express();
	let Employee =require ('./../model/schema')
	app.post('/', (req, res,next)=> {
	  //console.log(req.body.name);
	  Employee.insertMany({
		name:req.body.name,
		age:req.body.age,
		gender:req.body.gender
	},
	(err,data)=>
	{
		 if(err)
		 	console.log(err);
		 else
		 {
		 	 console.log(data);
		 	 res.json({data:data});
		 }
	})
	});

module.exports = app;