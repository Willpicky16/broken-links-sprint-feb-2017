const fs = require('fs');
var http = require('http');
var https = require('https');

function concatUrl(arr) {
    const ncLink = 'https://broken-links-api.herokuapp.com';
    return arr.map(function (x) {
        return /https/.test(x) ? x : ncLink + x;
    });
}

function linkTester(links) {
// to be finished 
 
}

function linkPinger(url, callback) {

    const reg = /https/.test(url);
    let identifier = '';

    reg ? identifier = https : identifier = http;

    identifier.get(url, (res) => {
        return callback(res.statusCode);
    }).on('error', (e) => {
        console.log(e);
    });
}

module.exports = {
    linkTester: linkTester,
    linkPinger: linkPinger,
};