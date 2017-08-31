# Express-Js-crud-with-test-cases

Project Title: Express JS crud with test cases

About the project: It is a project that has been developed using ExpressJS and various Node Package Manager(NPM)'s packages, which makes use of chrome extension Postman for handling the

-GET

-POST

-UPDATE

-DELETE requests.

It makes use of Mongoose ORM for MongoDB for the database operations.

Testing has been performed by the Chai library, and Mocha framework(sinon,supertest,assert,should,expect).

It also checks the code coverage by using Istanbul.

Prerequisites: Your system must have latest version of node js installed and a text editor.Install dependencies as listed on package.json.

Technology: ExpressJS, Mongoose

Tools: Postman for handling requests.

Description: This project is a simple CRUD operation using ExpressJS, which performs get,post,delete,update operations on mongoDB using Mongoose ORM. It works on the localhost and Chrome's Postman extension. Testing is performed using Chai to test our code and framework used is Mocha. The code coverage is determined using Istanbul.

Files description-
    Routes-(methods files)
       -insert
       -update
       -delete
       -find/fetch

     Config (configuration files)
        -config.js

     Model
        - schema

      Test
        -test.js

       app.js
       package.json


    Installation process-
      mkdir myapp
      cd myapp
      npm init


     To run-(methods)
       node app

      For test-
      npm testLicense: MIT license

Permission is hereby granted, free of charge, to any person obtaining a copy of this software.



Author Name: Ankur Agarwal
