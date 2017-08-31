let mongoose = require('mongoose');
mongoose.set('debug',true)
let Schema = mongoose.Schema;

let mySchema = new Schema({
  name:  String,
  age: Number,
  gender: String
});

let model = mongoose.model('Employee1',mySchema);

module.exports=model;

