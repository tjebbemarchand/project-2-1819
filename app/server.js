const   express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        https = require('https'),
        fetch = require('node-fetch'),
        sanitizeHtml = require('sanitize-html'),
        port = process.env.PORT || 5000;


app.use(bodyParser.json());

app.set('views', 'app/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('app/static'));

enableCompression();

app.get('/samenwerken', renderSamenwerken);

app.get('/offline', function(req, res) {
    res.render('pages/offline');
});


function renderSamenwerken(req, res) {
    res.render('pages/samenwerken');

    /* fetch('https://www.cmd-amsterdam.nl/wp-json/wp/v2/pages/758')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            return sanitizeHtml(json.content.rendered, {
                allowedTags: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a', 'ul', 'ol', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'iframe', 'img' ],
                allowedAttributes: {
                  'a': [ 'href' ],
                  'img': [ 'src' ],
                  'div': [ 'class' ]
                },
                transformTags: {
                    'span': 'h2'
                },
              });
        })
        .then(function(html){
            const rx1 = /\[.+\]/g;
            // <(\w+)(?:\s+\w+="[^"]+(?:"\$[^"]+"[^"]+)?")*>\s*</\1> // Delete empty HTML tags
            return normalHtml = html.replace(rx1, "");
        })
        .then(function(html) {
            res.send(html);
        }); */

   /* https.get("https://www.cmd-amsterdam.nl/wp-json/wp/v2/pages/758", response => {
        let data = "";

        response.on("data", buffer => data += buffer)

        response.on("end", () => {
            const html = JSON.parse(data).content.rendered;


            // Selects all the: [full-width] bs
            const rx1 = /\[.+\]/g;

            // Selects all white spaces
            const rx2 = /(?<=\>)[\t\n\r\s]+(?=\<)/g;

            // Selects all the useful tags
            const rx3 = /\<(p|a|form|button|h[1-6]).+?\1\>|\<img.+?\/?\>|(?<=(div|span).+\>).[^\<\>]+(?=\<\/(div|span))/g;

            const normalHtml = html.replace(rx1, "");
            const minifiedHtml = normalHtml.replace(rx2, "")

            const temp = [];
            let result;

            while ((result = rx3.exec(minifiedHtml)) !== null) {
                temp.push(result[0])
            }
        
            res.send(html);

            // res.render('pages/samenwerken', {
            //     data: html
            // });
        })
    }) */
}

function enableCompression() {
   
}

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});