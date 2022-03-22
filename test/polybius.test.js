// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius.js").polybius;

describe("Checking polybius", () => {
  it("it translates the letter i to 42.", () => {
    expect(polybius("i")).to.eql('42');
  });
  
  it("it translates the letter j to 42.", () => {
    expect(polybius("j")).to.eql('42');
  });
  
  it("it translates 42 to (i/j).", () => {
    expect(polybius("42", false)).to.eql("(i/j)");
  });
  
  it("It ignores capital letters.", () => {
    expect(polybius("A Message")).to.eql(polybius("a message"));
  });
  
  it("It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {
    expect(polybius(" a 1 b ", 1)).to.eql(" 11 1 21 ");
  });
});