// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar.js").caesar;

describe("Checking caesar shift", () => {
  it("It returns false if the shift value is equal to 0.", () => {
    expect(caesar("blah", 0)).to.be.false;
  });
  
  it("It returns false if the shift value is less than -25.", () => {
    expect(caesar("blah", -26)).to.be.false;
  });
  
  it("It returns false if the shift value is greater than 25.", () => {
    expect(caesar("blah", 26)).to.be.false;
  });
  
  it("It returns false if the shift value is not present", () => {
    expect(caesar("blah")).to.be.false;
  });
  
  it("It ignores capital letters.", () => {
    expect(caesar("A Message", 0)).to.eql(caesar("a message", 0));
  });
  
  it("When encoding, it handles shifts that go past the end of the alphabet.", () => {
    expect(caesar("z", 3)).to.eql("c");
  });
  
  it("It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {
    expect(caesar(" a 1 b ", 1)).to.eql(" b 1 c ");
  });
});