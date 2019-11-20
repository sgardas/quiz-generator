"use strict";
//https://www.twilio.com/blog/building-javascript-microservices-node-js
// start the server:
//   node ./quiz.js 8081

//test the server:
//   curl -i --request GET localhost:8081/Music
const express = require('express');
const path = require('path');
const winston = require('./config/winston');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.argv.slice(2)[0];
const app = express();

const morgan = require('morgan')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors());

var corsOptions = {
origin: 'http://localhost:4200',
optionsSuccessStatus: 200
};

const area = [
  { id: 1, name: 'NodeJs' },
  { id: 2, name: 'Sports' },
  { id: 3, name: 'Music' },
];

var http = require('http');


const fs = require('fs');

//let nodejs1 = JSON.parse(fs.readFileSync('./data/node.json'));
//console.log(nodejs1);

// app.get('/area?', (req, res) => {
//   console.log('Returning area list');  
//   res.send(req.query.area);
// });


// app.server.get('*.*', express.static(_app_folder, {maxAge: '1d'}));

// app.all('*', function(req, res){
//     res.status(200).sendFile('/', {root: _app_folder});
// });
app.post('/login',(req, res) => {
  //console.log('Returning login list');
  //console.log(req.body.user);
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  const data=require('./data/login.json');
  //console.log(data);

  //console.log(req.body);
  //console.log('Returning login list');

  var flag = 1;

  for(let i in data){
   
   // console.log(req.body.user+"$$$$"+req.body.pass);
   // console.log(data[i].username+"@@@@"+data[i].password);


    if(req.body.user==data[i].username && req.body.pass==data[i].password){  
  console.log(data[i].username);
    
    
    flag=0;
  }
  




  }

 

  if(flag==0){
    res.send({"status":"success"});
  }else{
    winston.log({
      level: 'debug',
      message: 'wrong username or password'
    });
    res.send({"status":"failure"});
  }

  
});



app.get('/quiz/nodejs', (req, res) => {                                                     
  console.log('Returning nodejs list');
  res.send(JSON.parse(fs.readFileSync('./data/node.json')));
});

app.get('/quiz/sport', (req, res) => {
  console.log('Returning sport list');
  res.send(JSON.parse(fs.readFileSync('./data/sports.json')));
});

app.get('/quiz/music', (req, res) => {
  console.log('Returning music list');
  res.send(JSON.parse(fs.readFileSync('./data/music.json')));
});

app.use(morgan('combined', { stream: winston.stream }));

//error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  res.status(err.status || 500);
  res.render('error');
});

//console.log(`Questions service listening on port ${port}`);
//app.listen(port);

console.log(`Questions service listening on port 8081`);
app.listen(8081);