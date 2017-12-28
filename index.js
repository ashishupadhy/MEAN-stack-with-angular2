const express = require('express');
const app = express();
const mongoose=require('mongoose');
const config =require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect( config.uri,(err)=>{
    if (err){
        console.log('could not conect to database:',err);
    }else{
        console.log(config.secret);
        console.log('connected to database: ' + config.db );
    }
});

// app.use(express.static(__dirname +'/client/src/'));
// app.get('*',(req,res)=>{
// res.sendFile(path.join(__dirname + '/client/src/index.html'))
// })
  

app.get('*',(req,res)=>{
    res.send('<h1>hello world');
});


app.listen(8080, ()=>{
    console.log('Listening on port 8080');
});