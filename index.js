const express = require('express');
const app = express();//initial express application
const router = express.Router();
const mongoose = require('mongoose');  //node tool for mongodb
const config = require('./config/database');//mongooes config
const path = require('path');  //nodejs package for file path
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');
const cors =require('cors');



//Database Connection   
mongoose.Promise = global.Promise;  
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('could not conect to database: ', err);
    } else {
        // console.log(config.secret);
        console.log('connected to database: ' + config.db);
    }
});


app.use(cors({
    origin:'http://localhost:4200'
}));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(__dirname +'/client/dist/'));
app.use('/authentication', authentication);

app.get('*',(req,res)=>{
res.sendFile(path.join(__dirname +'/client/dist/index.html'));
});

// app.get('*', (req, res) => {
//     res.send('<h1>hello world');
// });


app.listen(8080, () => {
    console.log('Listening on port 8080');
});  