const chai = require("chai");
const expect = chai.expect;
// import sinon
const sinon = require("sinon");
const indexPage = require("../../controllers/app.controller.js");

describe("getIndexPage", function() {
  it("should send hey", function() {
    req = {}
    // Have `res` have a send key with a function value coz we use `res.send()` in our func
    res = {
      send: sinon.spy()
    }

    indexPage.getIndexPage(req, res);
    // let's see what we get on res.send
    // console.log(res.send);
    // `res.send` called once
    expect(res.send.calledOnce).to.be.true;
    expect(res.send.firstCall.args[0]).to.equal("Hey");
  });
});