let express=require('express'); //import dependency for express
let supertest=require('supertest');
let chai=require('chai');
const should=chai.should();
const expect=require('chai').expect;
let app=require('../app');
let api=supertest('http://localhost:8080');
let sinon=require('sinon');
let coll = require('../model/schema');
//declaring variables for each stub
let modelStub=sinon.stub(coll,'find');
let postStub=sinon.stub(coll,'insertMany');
let updateStub=sinon.stub(coll,'findOneAndUpdate');
let deleteStub=sinon.stub(coll,'remove');

//Test cases for retrieve method
describe('Test cases for retrieving', () => {
beforeEach(()=>{
     modelStub.yields(null, [{ name: "Ankur", age: 25, gender:"male" }]);
  })
 it('fetching test case', (done) => {
         api.get('/fetch')
         .expect('Content-Type',/json/)
         .end((err, res) => {
             if (err) {return done(err)}
                 else{
            console.log(res.body);
             expect(res.body[0].name).to.be.equal("Ankur");
             expect(res.body[0].age).to.be.equal(25);
             expect(res.body[0].gender).to.be.equal("male");         
         done();
         }
         });
 });
 });
//Test cases for insert method
describe('Test cases for insertion', () => {
beforeEach(()=>{
     postStub.yields(null, [{ name: "Ankur", age: 25, gender:"male" }]); 
  })
  it('insertion test case', (done) => {    
         api
         .post('/insert')
         .end((err, res) => {
             if (err) {return done(err)}
                 else{
                    console.log(res.body.data[0]);
             expect(res.body.data[0].name).to.be.equal("Ankur");
             done();
                    }         
         });
     });
  });

//Test cases for update method
describe('Test cases for updation', () => {
    let update={age:25};

beforeEach(()=>{
     updateStub.yields(null, [{ ok: 1, modified: 1, n:1 }])
  })
  it('updation test case', (done) => {    
         api
         .put('/updates/NIshant')
         .expect('Content-Type', /json/)
         .send(update)
         .end((err, res) => {
             if (err) {return done(err);}
                 else{
             expect(res.body[0].ok).to.be.equal(1);
             expect(res.body[0].modified).to.be.equal(1);
             expect(res.body[0].n).to.be.equal(1);
             done();
                    }         
         });
     });
  });

//Test cases for delete method
describe('Test cases for deletion', () => {
    let del = {name:"shivam"};

beforeEach(()=>{
     deleteStub.yields(null, [{ ok: 1, n:1 }])
  })
  it('deletion test case', (done) => {    
         api
         .delete('/deletes')
         .expect('Content-Type', /json/)
         .send(del)
         .end((err, res) => {
             if (err) {return done(err);}
                 else{
                    console.log(res.body);
             expect(res.body[0].ok).to.be.equal(1);
             expect(res.body[0].n).to.be.equal(1);
             done();
                    }         
         });
     });
  });