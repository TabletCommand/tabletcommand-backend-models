"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("CADVehicleStatusHistory", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.cadVehicleStatusHistory;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        const item = new models.CADVehicleStatusHistory(testItem);
        const sut = await item.save();
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.vehicleId, sut.vehicleId);
        chai_1.assert.equal(testItem.radioName, sut.radioName);
        chai_1.assert.equal(testItem.status, sut.status);
        chai_1.assert.equal(testItem.statusCode, sut.statusCode);
        chai_1.assert.equal(testItem.requestedAt, sut.requestedAt);
        chai_1.assert.equal(testItem.requestedBy, sut.requestedBy);
        chai_1.assert.equal(testItem.incidentNumber, sut.incidentNumber);
    });
});
//# sourceMappingURL=cad-vehicle-status-history.js.map