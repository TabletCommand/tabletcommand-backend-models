"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("CADVehicleStatus", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.cadVehicleStatus;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        const item = new models.CADVehicleStatus(testItem);
        const sut = await item.save();
        chai_1.assert.equal(testItem.uuid, sut.uuid);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.vehicleId, sut.vehicleId);
        chai_1.assert.equal(testItem.radioName, sut.radioName);
        chai_1.assert.equal(testItem.requestTime, sut.requestTime);
        chai_1.assert.equal(testItem.responseTime, sut.responseTime);
        chai_1.assert.equal(testItem.status, sut.status);
        chai_1.assert.equal(testItem.statusCode, sut.statusCode);
        chai_1.assert.equal(testItem.modifiedDate, sut.modifiedDate);
        chai_1.assert.equal(testItem.requestStatus, sut.requestStatus);
        chai_1.assert.equal(testItem.incidentNumber, sut.incidentNumber);
        chai_1.assert.equal(testItem.capability, sut.capability);
        chai_1.assert.equal(testItem.owner, sut.owner);
        chai_1.assert.equal(testItem.ownerId, sut.ownerId);
    });
});
//# sourceMappingURL=cad-vehicle-status.js.map