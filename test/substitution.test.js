// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution.js").substitution;

describe("Checking substitution", () => {
  it("It returns false if the given alphabet isn't exactly 26 characters long.", () => {
    expect(substitution("i", "a")).to.be.false;
  });
  
  it("It correctly translates the given phrase, based on the alphabet given to the function.", () => {
    expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.eql('jrufscpw');
  });
  
  it("It returns false if there are any duplicate characters in the given alphabet.", () => {
    expect(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")).to.be.false;
  });
  
  it("It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding, \
     and ignores capital letters.", () => {
    expect(substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")).to.eql(
      "elp xhm xf mbymwwmfj dne");
  });
});// Write your tests here!
