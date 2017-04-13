const fs = require('fs');
var http = require('http');
var https = require('https');
const path = require('path');

http.createServer(function(req, res) {
    var url = req.url;
    switch (url) {
        case '/' :
            getStaticFileContent(res, 'main.html','text/html');
            break;
        case '/css/main.css':
            getStaticFileContent(res, 'css/main.css','text/css');
            break;
        case '/js/main.js':
            getStaticFileContent(res, 'js/main.js','text/javascript');
            break;
        default:

        res.writeHead(404, {'Content-Type':'text/plain'});
        res.end('404 - Page not Found');
}

}).listen(8000);

function getStaticFileContent(response, filepath, contentType) {
    fs.readFile(filepath, function(error, data) {
      response.writeHead(200,{'Content-Type': contentType});
      response.end(data);
    });
}

function writeUrlToFile(url) {
  fs.writeFile('initialUrl.json', url, 'utf8', err => {
    if (err) throw err;
    console.log('file has been saved');
  });
}

function validateUrl(url) {
  var re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  if (!re.test(url)) {
    document.getElementById(
      'result'
    ).innerHTML = `<h3 class='error'>ERROR - <b>${url}</b> is not a valid URL!</h3>`;
    console.log('url error');
    return false;
  } else {
    document.getElementById(
      'result'
    ).innerHTML = `<h3 class='success'>SUCCESS - <b>${url}</b> is a valid URL!</h3>`;
    console.log('success');
    return httpsCurl(url);
  }
}

function httpsCurl(url) {
  const reg = /https/.test(url);

  let identifier = '';

  reg ? (identifier = https) : (identifier = http);

  identifier
    .get(url, res => {
      console.log('statusCode:', res.statusCode);
      console.log('headers:', res.headers);

      res.on('data', d => {
        process.stdout.write(d);
      });
    })
    .on('error', e => {
      console.error(e);
    });
}
