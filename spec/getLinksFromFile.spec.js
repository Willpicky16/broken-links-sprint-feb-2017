const expect = require('chai').expect;
const getLinksFromFile = require('../helpers/getLinksFromFile.js');
// const text = require('../text-file-for-testing.txt');

describe('getLinksFromFile', () => {
    it('is a function', () => {
        expect(getLinksFromFile).to.be.a('function');
    });
    it('returns an array of links from a string', () => {
        const text = '<li><a href="/oranges.html">oranges</a></li><li><a href="/nec.html">nec</a></li><li><a href="/salmon.html">salmon</a></li>';
        expect(getLinksFromFile(text)).to.eql([
            '/oranges.html', 
            '/nec.html', 
            '/salmon.html'
            ]);
    });
});