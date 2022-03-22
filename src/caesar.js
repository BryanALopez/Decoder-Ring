// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if((shift == 0) || (shift < -25) || (shift > 25) || (shift == undefined)) return false;
    
    if(encode == false) shift *= -1;
    
    input = input.toLowerCase();
    let result = '';
    let c, n;
    
    for(i in input) {
      if((input[i] >= 'a') && (input[i] <= 'z')) {
        n = input.charCodeAt(i) + shift;
        if(n > 'z'.charCodeAt(0)) n -= 26;
        else if(n < 'a'.charCodeAt(0)) n += 26;
        c = String.fromCharCode(n);
      } else c = input[i];
      
      result += c;
    }
    
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
