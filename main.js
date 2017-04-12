const fs = require('fs');

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

function pingUrl(url) {

}

writeUrlToFile('http://www.msn.com');