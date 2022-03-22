// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let result = "";
    let c = "", n;
    
    if(encode == true) {
      input = input.toLowerCase();
      for(i in input) {
        if((input[i] >= 'a') && (input[i] <= 'z')) {
          n = input.charCodeAt(i) - 'a'.charCodeAt(0);
          if(input[i] >= 'j') n--;
          
          c = `${((n%5) + 1)}${Math.floor((n/5) + 1)}`;
         //   String.fromCharCode((n%5) + 'b'.charCodeAt(0)) +
          //  String.fromCharCode((n/5) + 'b'.charCodeAt(0));
          
        } else c = input[i];
        
        result += c;
      }
    } else {
      const words = input.split(" ");
      for(i in words) {
        if(words[i].length%2 == 0) {
          for(let j = 0; j < words[i].length/2; j++) {
            let c = words[i][j*2] + words[i][j*2 + 1];
            n = (c[1] - 1)*5 + (c[0] - 1);
            if(n == 8) {
              result += "(i/j)";
              continue;
            } else if(n > 8) n++;
            
            result += String.fromCharCode(n + 'a'.charCodeAt(0));
          }
        } else return false;
        if(i < (words.length - 1)) result += " ";
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
