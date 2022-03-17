import express from 'express';
// rs allow to access different ports on same localhost
import cors from 'cors';
import bodyParser from 'body-parser';

// import components
import Connection from './database/db.js';
import Router from './routes/route.js';

const app = express();

const PORT = 8000;

Connection();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',Router);

app.listen(PORT, ()=>{
    console.log(`Server is runnign on POST : ${PORT}`)
});

// app.listen(8001)

// console.log("server is running");

