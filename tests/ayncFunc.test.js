const chai = require("chai");
const expect = chai.expect;

// This is just an async func that takes in a bool
// and calls a callback that returns a some message
// depending on the bool value
function someMadeUpAyncFunc(boolValue, cb) {
  setTimeout(function() {
    cb(boolValue ? "You get a sweet :)" : "You get nothing!!")
  }, 0);
}

// Added the `only` tag to have only this set of tests to run
describe.only("AsyncTest", function()  {
  it("should return `You get a sweet :)` if `true` is passed in", function(done) {
    someMadeUpAyncFunc(true, function(sweetCheck){
      expect(sweetCheck).to.equal("You get a sweet :)");
      done();
    });
  });

  it("should return `You get nothing!!` if `false` is passed in", function(done) {
    someMadeUpAyncFunc(false, function(sweetCheck){
      // Let's fail it on purpose just to see what happens
      expect(sweetCheck).to.equal("You get nothing!!");
      done();
    });
  });
});