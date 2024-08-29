"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("IncidentTakeover", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.incidentTakeover;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        const item = new models.IncidentTakeover(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.incident_id, sut.incident_id);
        chai_1.assert.equal(testItem.incident_name, sut.incident_name);
        chai_1.assert.equal(testItem.incident_number, sut.incident_number);
        chai_1.assert.equal(testItem.old_owner, sut.old_owner);
        chai_1.assert.equal(testItem.new_owner, sut.new_owner);
        chai_1.assert.equal(testItem.status, sut.status);
        chai_1.assert.equal(testItem.request_time, sut.request_time);
        chai_1.assert.isTrue(sut.uuid !== "");
    });
});
//# sourceMappingURL=incident-takeover.js.map