
# NodeJS MongoDB CRUD template:
this is basic backend envoirment for personal use in future project 

### production Packages :  
express.js  https://expressjs.com/en/starter/installing.html  npm install express
mongoose.js (object data mapper) https://www.npmjs.com/package/mongoose npm install mongoose
dotenv      https://www.npmjs.com/package/dotenv npm install dotenv

### development Dep : 
npm i -D nodemon https://www.npmjs.com/package/nodemon


## clone an install 
1: clone the  project 
2: >: cd projecct    
3: update the .env file with your own data
4: npm -i 
4.a: dev: npm run dev
4.b: pro: npm start

### How it created 
1: init package, json npm init -y (entry point server.js) 
2: installing packages  npm install express
3: installing nodemon as dev pkg so we dont have to keeep restatring the server
3.1: adding sccript dev: npm i -D nodemon 
-----------------------------------------
4.0: scripts addded: npm install mongoose
4.1: conected to mongoDB created the .env file
4.2: configure the database 
4.3: reconfigure the server.js so it works with mongoDB
4.4: creating the ./config/db.js to ccpnnected to mongodb using mongoose
4.5: creating schema in ./model/ieda.js
4.6: configure ideas.js to work with mongoDB 
------------------------------------------

### How it works : 
run the projet :$ npm start [script] npm start
run the project for devlopment [script] npm run  dev

### How to Do it Again ?
0 : init project
1: installing packegs 
2: create  all routes --> CRUD  CREATED √
----------------------
3:  connect to the MonogDB(collections)
3.1: use mongoDB atlas (recomnded by  mongo team) 
3.2: use monogoose (nodejs pkg for working with mongoDB)
3.3: conect to mongodb usinf db.js  --> MongoDb Connected √
------------------------------------------------------------
4.1: Creating the schemas for the database
4.2: configure ideas.js to work with mongoDB --> FULL REST CRUD MongoDb API √ 
------------------------------------------------------------


