"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("Session", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.session;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        const item = new models.Session(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(sut.user, testItem.user);
        chai_1.assert.equal(sut.email, testItem.email);
        chai_1.assert.equal(sut.nick, testItem.nick);
        chai_1.assert.isFalse(sut.active);
        chai_1.assert.equal(sut.deviceId, testItem.deviceId);
        chai_1.assert.equal(sut.remoteAddress, testItem.remoteAddress);
        chai_1.assert.equal(sut.userAgent, testItem.userAgent);
        chai_1.assert.equal(sut.source, testItem.source);
        chai_1.assert.equal(sut.token, testItem.token);
        chai_1.assert.equal(sut.ended, testItem.ended);
        chai_1.assert.equal(sut.departmentId, testItem.departmentId);
        chai_1.assert.equal(sut.when, testItem.when);
        chai_1.assert.equal(sut.id, sut._id);
    });
});
//# sourceMappingURL=session.js.map