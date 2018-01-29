const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const indexPage = require("../../controllers/app.controller.js");

describe("AppController", function()  {
  describe("getIndexPage", function() {
    it("should send hey when user is logged in", function() {
      // instantiate a user object with an empty isLoggedIn function
      let user = {
        isLoggedIn: function(){}
      }

      // Stub isLoggedIn function and make it return true always
      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);

      // pass user into the req object
      let req = {
        user: user
      }

      // Have `res` have a send key with a function value coz we use `res.send()` in our func
      let res = {
        send: function(){}
      }

      // mock res
      const mock = sinon.mock(res);
      // build how we expect it t work
      mock.expects("send").once().withExactArgs("Hey");

      indexPage.getIndexPage(req, res);
      expect(isLoggedInStub.calledOnce).to.be.true;

      // verify that mock works as expected
      mock.verify();
    });
  });
});