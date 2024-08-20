"use strict";

const assert = require("chai").assert;

const m = require("../../definitions");

describe("helpers", function() {
  it("retrieveCurrentUnixTime", function() {
    const item = m.retrieveCurrentUnixTime();
    const expected = new Date().valueOf() / 1000.0;

    const delta = Math.abs(expected - item);
    assert.isTrue(delta < 1);
  });
});
