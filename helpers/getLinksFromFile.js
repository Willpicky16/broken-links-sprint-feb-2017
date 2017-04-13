const fs = require('fs');

function getLinksFromFile() {
    let initialStr = (fs.readFileSync('test.txt').toString().match(/href="(.*?)"/g));
    
    let res = [];
    for (let i = 0; i < initialStr.length; i++) {
        res.push(initialStr[i].slice(6, -1));
    }

    let links = [];
    for (let i = 0; i < res.length; i++) {
        console.log(res[i].charAt(0));
        if (res[i].charAt(0) === '/') {
            links.push(res[i]);
        }
    }

    fs.writeFile('link-array.txt', JSON.stringify(links), function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
    });
}

getLinksFromFile();

if (typeof module !== 'undefined') {
    module.exports = getLinksFromFile;
}