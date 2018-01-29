const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-as-promised"));

// This is just an async func that takes in a bool
// and that returns a promise
function someMadeUpAyncFunc(boolValue, cb) {
  return new Promise(function(resolve){
    setTimeout(function() {
      resolve(boolValue ? "You get a sweet :)" : "You get nothing!!")
    }, 0);
  })
}

// Added the `only` tag to have only this set of tests to run
describe.only("AsyncTest", function()  {
  it("should return `You get a sweet :)` if `true` is passed in", function() {
    return expect(someMadeUpAyncFunc(true)).to.eventually.equal("You get a sweet :)");
  });

  it("should return `You get nothing!!` if `false` is passed in", function() {
    return expect(someMadeUpAyncFunc(false)).to.eventually.equal("You get nothing!!");
  });
});
