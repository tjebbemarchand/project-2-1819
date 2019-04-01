const   express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        path = require('path'),
        fs = require('fs'),
        HTMLParser = require('node-html-parser'),
        fetch = require('node-fetch'),
        port = process.env.PORT || 5000;


app.use(bodyParser.json());

app.set('views', 'app/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('app/static'));

app.get('/samenwerken', renderSamenwerken);

function renderSamenwerken(req, res) {
    
}

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});