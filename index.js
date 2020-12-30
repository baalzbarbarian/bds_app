const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// setting bodyparser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const db = require('./config/mongokey').mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log('Mongo connected error:' + err);

    } else {
        console.log('Mongo connected !');

    }
})

app.get('/', function(req, res){
    res.send("Hello World");
})

//API for APP
const Property = require('./routes/property.route');
Property(app)

const PORT = process.env.PORT || port;
app.listen(PORT, console.log(`Server started on port ${PORT}`));