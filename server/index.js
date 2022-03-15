import express from 'express';


// import components
import Connection from './database/db.js';

const app = express();

const PORT = 8000;

Connection();

app.listen(PORT, ()=>{
    console.log(`Server is runnign on POST : ${PORT}`)
});

// app.listen(8001)

// console.log("server is running");
