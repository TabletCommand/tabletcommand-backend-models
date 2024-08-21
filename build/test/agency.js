"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("Agency", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.agency;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        var _a, _b;
        const item = new models.Agency(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.active, sut.active);
        chai_1.assert.equal(testItem.code, sut.code);
        chai_1.assert.equal(testItem.name, sut.name);
        chai_1.assert.equal((_a = testItem.administrators) === null || _a === void 0 ? void 0 : _a.length, 1);
        chai_1.assert.equal(testItem.personnelIntegration, sut.personnelIntegration);
        chai_1.assert.equal(testItem.personnelMonitorHours, sut.personnelMonitorHours);
        chai_1.assert.equal((_b = testItem.crossStaffing) === null || _b === void 0 ? void 0 : _b.length, 1);
        const expectedDate = new Date().valueOf() / 1000.0;
        const timeDelta = expectedDate - sut.modified_unix_date;
        chai_1.assert.isTrue(timeDelta < 1);
    });
});
//# sourceMappingURL=agency.js.map