const fs = require('fs');
var http = require('http');
var https = require('https');

function writeUrlToFile(url) {
    fs.writeFile("initialUrl.json", url, "utf8", (err) => {
        if (err) throw err;
        console.log('file has been saved');
    });
}

function validateUrl(url) {
    var re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if (!re.test(url)) {
        console.log('url error');
        return false;
    } else {
        console.log('success');
        return true;
    }
}

function httpsCurl(url) {

    const reg = /https/.test(url);
    let identifier = '';

    reg ? identifier = https : identifier = http;

    identifier.get(url, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        res.on('data', (d) => {
            process.stdout.write(d);
        });

    }).on('error', (e) => {
        console.error(e);
    });
}
