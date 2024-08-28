"use strict";

import { assert } from "chai";
import * as m from "../helpers";

describe("helpers", function() {
  it("retrieveCurrentUnixTime", function() {
    const item = m.retrieveCurrentUnixTime();
    const expected = new Date().valueOf() / 1000.0;

    const delta = Math.abs(expected - item);
    assert.isTrue(delta < 1);
  });
});
