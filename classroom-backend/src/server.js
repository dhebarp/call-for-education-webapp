require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const dbName = process.env.MONGO_COLLECTION || 'classroom'
const MongoURI = process.env.MONGODB_URI || `mongodb://localhost/${dbName}` 
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(cookieParser());
app.use(cors());
// app.use(express.static('./financetrackerbackend/client')); add static when serving
app.use(express.json())
app.use(express.urlencoded({extended: false}));

mongoose.Promise = global.Promise;
mongoose.connect( MongoURI , { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    //we're connected!
    console.log("Mongoose online")
         });


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("port" + port);
});