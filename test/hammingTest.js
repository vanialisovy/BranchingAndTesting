let HammingCode = require('../index.js');
let assert = require('chai').assert;
describe('Hamming code encoding', function() {


  it('throws an error with incorrect input length', function() {
    assert.throws(() => {
      let dataToEncode = [0,0,0];
      HammingCode.encode(dataToEncode);
    }, Error);

    assert.throws(() => {
      let dataToEncode = [0,0,0,0,0];
      HammingCode.encode(dataToEncode);
    }, Error);

    assert.throws(() => {
      let dataToEncode = [];
      HammingCode.encode(dataToEncode);
    }, Error);
  });

  it('throws an error with invalid input values', function() {
    assert.throws(() => {
      let dataToEncode = [0,0,0,2];
      HammingCode.encode(dataToEncode);
    }, Error);

    assert.throws(() => {
      let dataToEncode = [0,0,0,'a'];
      HammingCode.encode(dataToEncode);
    }, Error);

    assert.throws(() => {
      let dataToEncode = [0,0,0,null];
      HammingCode.encode(dataToEncode);
    }, Error);
  });
});

describe('Hamming code decoding', function() {

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

  it('throws an error with invalid input values', function() {
    assert.throws(() => {
      let dataToDecode = [0,0,0,2,0,0,0];
      HammingCode.decode(dataToDecode);
    }, Error);

    assert.throws(() => {
      let dataToDecode = [0,0,0,'a',0,0,0];
      HammingCode.decode(dataToDecode);
    }, Error);

    assert.throws(() => {
      let dataToDecode = [0,0,0,null,0,0,0];
      HammingCode.decode(dataToDecode);
    }, Error);
  });
});