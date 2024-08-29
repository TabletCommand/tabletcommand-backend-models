"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("Message", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.message;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        const item = new models.Message(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.title, sut.title);
        chai_1.assert.equal(testItem.uuid, sut.uuid);
        chai_1.assert.equal(testItem.requestId, sut.requestId);
        chai_1.assert.equal(testItem.body, sut.body);
        chai_1.assert.equal(testItem.actionTitle, sut.actionTitle);
        chai_1.assert.equal(testItem.url, sut.url);
        chai_1.assert.equal(testItem.priority, sut.priority);
        chai_1.assert.equal(JSON.stringify(testItem.type), JSON.stringify(sut.type));
    });
});
//# sourceMappingURL=message.js.map