

let chai = require('chai');
let expect = chai.expect;

let HammingCode = require('../index.js');
let assert = require('chai').assert;

describe('Hamming code non-functional testing', function () {
    it('should not use more than 1GB of memory', function () {
        // create an array with 268435456 elements (each element takes 4 bytes)
        let bigArray = new Array(268435456);
        // check that the memory usage is less than 1GB
        let usedMemoryInBytes = process.memoryUsage().heapUsed;
        let usedMemoryInGB = usedMemoryInBytes / (1024 * 1024 * 1024);
        expect(usedMemoryInGB).to.be.lessThan(1);
    });
    it('throws an error with incorrect input length', function() {
        assert.throws(() => {
          let dataToDecode = [0,0,0,0,0,0,0];
          HammingCode.decode(dataToDecode);
        }, Error);
    
        assert.throws(() => {
          let dataToDecode = [0,0,0,0,0,0];
          HammingCode.decode(dataToDecode);
        }, Error);
    
        assert.throws(() => {
          let dataToDecode = [];
          HammingCode.decode(dataToDecode);
        }, Error);
      });
});


  