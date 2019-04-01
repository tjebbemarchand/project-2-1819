const   express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        path = require('path'),
        fs = require('fs'),
        fetch = require('node-fetch'),
        port = process.env.PORT || 5000;


app.use(bodyParser.json());

app.set('views', 'app/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('app/static'));

app.get('/samenwerken', renderSamenwerken);

function renderSamenwerken(req, res) {
    fetch('https://www.cmd-amsterdam.nl/wp-json/wp/v2/pages/758')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            res.render('pages/samenwerken', {
                data: data.content.rendered
            });
        });
}

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});