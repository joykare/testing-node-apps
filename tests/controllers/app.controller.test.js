const chai = require("chai");
const expect = chai.expect;
// import sinon
const sinon = require("sinon");
const indexPage = require("../../controllers/app.controller.js");

const user = {
  addUser: (name) => {
    this.name = name;
  }
}
describe("User", function() {
  describe("addUser", function() {
    it("should set name", function() {
      sinon.spy(user, "addUser");
      user.addUser('John Doe');

      // lets log `addUser` and see what we get
      console.log(user.addUser);
      expect(user.addUser.calledOnce).to.be.true;
    })
  })
})