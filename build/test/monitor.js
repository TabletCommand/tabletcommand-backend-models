"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("Monitor", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.monitor;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        const item = new models.Monitor(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(sut._id);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.agencyId, sut.agencyId);
        chai_1.assert.equal(testItem.notificationType, sut.notificationType);
        chai_1.assert.equal(testItem.status, sut.status);
        chai_1.assert.equal(testItem.sentUnixDate, sut.sentUnixDate);
    });
});
//# sourceMappingURL=monitor.js.map