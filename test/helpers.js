"use strict";

const helpers = require("../helpers");
const assert = require("chai").assert;

describe("helpers", function() {
  it("currentUnixTime", function() {
    var item = helpers.currentUnixTime();
    var expectedTime = new Date().valueOf() / 1000.0;
    var delta = Math.abs(item - expectedTime);
    assert.isTrue(delta < 1.0);
  });
});
