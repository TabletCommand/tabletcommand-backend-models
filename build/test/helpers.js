"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../helpers");
describe("helpers", function () {
    it("retrieveCurrentUnixTime", function () {
        const item = m.retrieveCurrentUnixTime();
        const expected = new Date().valueOf() / 1000.0;
        const delta = Math.abs(expected - item);
        chai_1.assert.isTrue(delta < 1);
    });
});
//# sourceMappingURL=helpers.js.map