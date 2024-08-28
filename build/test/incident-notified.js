"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("IncidentNotified", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.incidentNotified;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        var _a, _b, _c, _d, _e, _f, _g;
        const item = new models.IncidentNotified(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.IncidentNumber, sut.IncidentNumber);
        chai_1.assert.deepEqual(testItem.incidentTypes, sut.incidentTypes);
        chai_1.assert.deepEqual(testItem.units, sut.units);
        if ((_a = testItem.unitsByDispatch) === null || _a === void 0 ? void 0 : _a.length) {
            chai_1.assert.equal((_b = testItem.unitsByDispatch[0]) === null || _b === void 0 ? void 0 : _b.UnitID, (_c = sut.unitsByDispatch[0]) === null || _c === void 0 ? void 0 : _c.UnitID);
            chai_1.assert.equal((_d = testItem.unitsByDispatch[0]) === null || _d === void 0 ? void 0 : _d.UnitDispatchNumber, (_e = sut.unitsByDispatch[0]) === null || _e === void 0 ? void 0 : _e.UnitDispatchNumber);
        }
        else {
            chai_1.assert.equal((_f = testItem === null || testItem === void 0 ? void 0 : testItem.unitsByDispatch) === null || _f === void 0 ? void 0 : _f.length, 1);
        }
        chai_1.assert.equal((_g = testItem.updated) === null || _g === void 0 ? void 0 : _g.toISOString(), sut.updated.toISOString());
    });
});
//# sourceMappingURL=incident-notified.js.map