//Hamming 4->7
class HammingCode {
  //dataToEncode [i1, i2, i3, i4]///aasdad
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
  static decode(encodedData) {
    if(encodedData.length !== 7) {
      throw new Error("HammingCode: decode input must have exactly 7 bits");
    }

    for(let i = 0; i < encodedData.length; i++) {
      if((encodedData[i] > 1)||(encodedData[i] === null)||(encodedData[i] === undefined)) {
        throw new Error("HammingCode: decode input must consist of bits");
      }
    }
  }
};

module.exports = HammingCode;
