//Hamming 4->7
class HammingCode {
  //dataToEncode [i1, i2, i3, i4]
  static encode(dataToEncode)  {
    if (dataToEncode.length !== 4) {
      throw new Error('HammingCode: encode input must have exactly 4 bits');
    }
  
    if (!dataToEncode.every(bit => bit === 0 , bit === 1)) {
      throw new Error('HammingCode: encode input must consist of bits');
    }
  
    const hammingEncoded = [1, 1, 1, 1, 1, 1, 1]; // p1 p2 i1 p3 i2 i3 i4
  
    hammingEncoded[2] = dataToEncode[0];
    hammingEncoded[4] = dataToEncode[1];
    hammingEncoded[5] = dataToEncode[2];
    hammingEncoded[6] = dataToEncode[3];
  
    hammingEncoded[0] = hammingEncoded[2] ^ hammingEncoded[4] ^ hammingEncoded[6];
    hammingEncoded[1] = hammingEncoded[2] ^ hammingEncoded[5] ^ hammingEncoded[6];
    hammingEncoded[3] = hammingEncoded[4] ^ hammingEncoded[5] ^ hammingEncoded[6];
  
    return hammingEncoded;
  }
  static decode(dataToDecode) {
    if (dataToDecode.length !== 7) {
      throw new Error('HammingCode: decode input must have exactly 7 bits');
    }
  
    if (!dataToDecode.every(bit => bit === 0  ,bit === 1)) {
      throw new Error('HammingCode: decode input must consist of bits');
    }
  
    const p1 = dataToDecode[0];
    const p2 = dataToDecode[1];
    const i1 = dataToDecode[2];
    const p3 = dataToDecode[3];
    const i2 = dataToDecode[4];
    const i3 = dataToDecode[5];
    const i4 = dataToDecode[6];
  
    const s1 = p1 ^ i1 ^ i2 ^ i4;
    const s2 = p2 ^ i1 ^ i3 ^ i4;
    const s3 = p3 ^ i2 ^ i3 ^ i4;
  
    const errorIndex = s1 * 1 + s2 * 2 + s3 * 4;
  
    if (errorIndex !== 0) {
      dataToDecode[errorIndex - 1] = dataToDecode[errorIndex - 1] ^ 1;
    }
  
    const decoded = [i1, i2, i3, i4];
  
    return decoded;
  }
}

module.exports = HammingCode;
