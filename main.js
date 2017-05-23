var express = require('express');
var nunjucks = require('nunjucks');
var url = require('url');
var path = require('path');
var exec = require('child_process').exec;
var phantomjs = require('phantomjs-prebuilt');
var crypto = require('crypto');
var mkdirp = require('mkdirp');

mkdirp.sync('tmp');

var app = express();

app.use(express.static('public'));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function (req, res) {
    var i = req.url.indexOf('?');
    var query = req.url.substr(i+1);
    var hash = crypto.createHash('md5').update(query).digest('hex');
    var filePath = './tmp/' + hash + '.png';
    var cmd = phantomjs.path + ' rasterize.js \'http://localhost:3000/diagram?' + query + '\' ' + filePath;

    res.setHeader('Content-Type', 'image/png');

    // TODO: Cache in a way that will work on Heroku
    exec(cmd, function (err, stdout, stderr) {
        var img = new Buffer(stdout, 'base64');
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': img.length
        });
        res.end(img);
    });
});

app.get('/diagram', function (req, res) {
    var i = req.url.indexOf('?');
    var query = req.url.substr(i+1);

    res.render('diagram.njk', { query: query });
});

app.listen(process.env.PORT || 3000);
