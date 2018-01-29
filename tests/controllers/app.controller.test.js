const chai = require("chai");
const expect = chai.expect;
// import sinon
const sinon = require("sinon");
const indexPage = require("../../controllers/app.controller.js");

describe("AppController", function()  {
  describe("getIndexPage", function() {
    it("should send hey", function() {
      // instantiate a user object with an empty isLoggedIn function
      let user = {
        isLoggedIn: function(){}
      }

      // Stub isLoggedIn function and make it return true always
      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);

      // pas user into the req object
      let req = {
        user: user
      }

      // Have `res` have a send key with a function value coz we use `res.send()` in our func
      let res = {
        // replace empty function with a spy
        send: sinon.spy()
      }

      indexPage.getIndexPage(req, res);
      // let's see what we get on res.send
      // console.log(res.send);
      // `res.send` called once
      expect(res.send.calledOnce).to.be.true;
      expect(res.send.firstCall.args[0]).to.equal("Hey");

      // assert that the stub is logged in at least once
      expect(isLoggedInStub.calledOnce).to.be.true;
    });

    it("should send something else when user is NOT logged in", function() {
      // instantiate a user object with an empty isLoggedIn function
      let user = {
        isLoggedIn: function(){}
      }

      // Stub isLoggedIn function and make it return false always
      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(false);

      // pass user into the req object
      let req = {
        user: user
      }

      // Have `res` have a send key with a function value coz we use `res.send()` in our func
      let res = {
        // replace empty function with a spy
        send: sinon.spy()
      }

      indexPage.getIndexPage(req, res);
      // let's see what we get on res.send
      // console.log(res.send);
      // `res.send` called once
      expect(res.send.calledOnce).to.be.true;
      expect(res.send.firstCall.args[0]).to.equal("Ooops. You need to log in to access this page");

      // assert that the stub is logged in at least once
      expect(isLoggedInStub.calledOnce).to.be.true;
    });
  });
});