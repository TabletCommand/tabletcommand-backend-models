"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("ActionLog", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.actionLog;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        const item = new models.ActionLog(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.action, sut.action);
        chai_1.assert.equal(testItem.email, sut.email);
        chai_1.assert.equal(testItem.userId, sut.userId);
        chai_1.assert.equal(testItem.object, sut.object);
        chai_1.assert.equal(testItem.before, sut.before);
        chai_1.assert.equal(testItem.after, sut.after);
        chai_1.assert.equal(testItem.delta, sut.delta);
        const expectedDate = new Date().valueOf() / 1000.0;
        const timeDelta = expectedDate - sut.modified_unix_date;
        chai_1.assert.isTrue(timeDelta < 1);
    });
});
//# sourceMappingURL=action-log.js.map