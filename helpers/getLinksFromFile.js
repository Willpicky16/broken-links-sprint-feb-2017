const fs = require('fs');

function getLinksFromFile(text) {
    let initialStr = (fs.readFileSync(text).toString().match(/<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/g));
    // let initialStr = text.toString().match(/<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/g);

    let res = [];
    for (let i = 0; i < initialStr.length; i++) {
        res.push(initialStr[i].slice(9, -1));
    }
    return res;
}

if (typeof module !== 'undefined') {
  module.exports = getLinksFromFile;
}