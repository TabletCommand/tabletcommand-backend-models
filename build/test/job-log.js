"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("JobLog", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.jobLog;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        const item = new models.JobLog(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(testItem.host, sut.host);
        chai_1.assert.equal(testItem.jobName, sut.jobName);
        chai_1.assert.equal(testItem.state, sut.state);
        chai_1.assert.equal(testItem.bidDate, sut.bidDate);
        chai_1.assert.equal(testItem.startDate, sut.startDate);
        chai_1.assert.equal(testItem.completedDate, sut.completedDate);
        chai_1.assert.equal(testItem.forceClosed, sut.forceClosed);
    });
});
//# sourceMappingURL=job-log.js.map