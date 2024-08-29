"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("Mark43IncidentRetry", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.mark43IncidentRetry;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        const item = new models.Mark43IncidentRetry(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(sut._id);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.active, sut.active);
        chai_1.assert.equal(testItem.mark43IncidentId, sut.mark43IncidentId);
        chai_1.assert.equal(JSON.stringify(testItem.retryPayload), JSON.stringify(sut.retryPayload));
    });
});
//# sourceMappingURL=mark43-incident-retry.js.map