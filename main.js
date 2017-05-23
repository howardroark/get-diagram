var express = require('express');
var nunjucks = require('nunjucks');
var url = require('url');
var path = require('path');
var fs = require('fs');
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

    if (!fs.existsSync(filePath)) {
        exec(cmd, function (err, stdout, stderr) {
            var stream = fs.createReadStream(filePath);
            stream.on('open', function () {
                stream.pipe(res);
            });
        });
    } else {
        var stream = fs.createReadStream(filePath);
        stream.on('open', function () {
            stream.pipe(res);
        });
    }
});

app.get('/diagram', function (req, res) {
    var i = req.url.indexOf('?');
    var query = req.url.substr(i+1);

    res.render('diagram.njk', { query: query });
});

app.listen(process.env.PORT || 3000);
