const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/db_buku",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.log.bind(console, "Connected Failed"));
db.once("open",()=>{
    console.log("Connection Succed!");
});