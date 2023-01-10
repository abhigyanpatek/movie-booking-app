const serverConfig = require('./configs/server.config');
const dbConfig = require('./configs/db.config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect(dbConfig.DB_URL, (err) => {
    if(err){
        console.log(err.mssage);
    }else{
        console.log("connected to DB");
    }
});

app.listen(serverConfig.PORT, serverConfig.HOST, () => {
    console.log(`Server is running on ${serverConfig.HOST}:${serverConfig.PORT}`);
});