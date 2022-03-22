// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if((alphabet == undefined) || (alphabet.length != 26)) return false;
    
    // check for duplicate chars
    for(i in alphabet) {
      if(alphabet.substr(i+1).split("").some(b => alphabet[i] == b) == true) return false;
    }
    
    let result = '', c;
    input = input.toLowerCase();
    for(i in input) {
      if(input[i] == " ") c = " ";
      else if(encode == true)  c = alphabet[input.charCodeAt(i) - 'a'.charCodeAt(0)];
      else {
        for(j = 0; j < alphabet.length; j++)
          if(input[i] == alphabet[j]) {
            c = String.fromCharCode('a'.charCodeAt(0) + j);
            break;
          }
      }
        
      result += c;
    }
    
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
