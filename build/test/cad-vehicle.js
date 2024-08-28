"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("CADVehicle", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.cadVehicle;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        var _a, _b;
        const item = new models.CADVehicle(testItem);
        const sut = await item.save();
        chai_1.assert.equal(testItem.uuid, sut.uuid);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.modifiedDate, sut.modifiedDate);
        chai_1.assert.equal(testItem.vehicleId, sut.vehicleId);
        chai_1.assert.equal(testItem.radioName, sut.radioName);
        chai_1.assert.equal((_a = testItem.station) === null || _a === void 0 ? void 0 : _a.code, sut.station.code);
        chai_1.assert.equal((_b = testItem.station) === null || _b === void 0 ? void 0 : _b.name, sut.station.name);
        chai_1.assert.equal(testItem.capability, sut.capability);
        chai_1.assert.isFalse(sut.locationToCAD);
    });
});
//# sourceMappingURL=cad-vehicle.js.map