     let express = require ('express');	
let Employee=require('./../model/schema');
let app=express();
	app.get('/',(req, res) =>{
	  console.log('getting details of all the employees');
	  Employee.find({},(err,employees)=>{
	      if(err) {
	        res.send('error occured')
	      } else {
	       console.log(employees);
	        res.json(employees);
	    }
	 }); 
	});
module.exports = app;
