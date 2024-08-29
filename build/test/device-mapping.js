"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("DeviceMapping", function () {
    let models, mongoose;
    let testItem, testItemForTrim;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.deviceMapping;
        testItemForTrim = mock.deviceMappingWithWhiteSpaces;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        const item = new models.DeviceMapping(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.deviceType, sut.deviceType);
        chai_1.assert.equal(testItem.mapId, sut.mapId);
        chai_1.assert.equal(testItem.deviceId, sut.deviceId);
        chai_1.assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
        chai_1.assert.equal(testItem.remoteAddress, sut.remoteAddress);
        chai_1.assert.equal(testItem.note, sut.note);
        chai_1.assert.isFalse(sut.active);
        chai_1.assert.isFalse(sut.mapHidden);
    });
    it("is saved with trim", async function () {
        var _a, _b, _c, _d;
        const item = new models.DeviceMapping(testItemForTrim);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItemForTrim._id);
        chai_1.assert.equal(testItemForTrim.departmentId, sut.departmentId);
        chai_1.assert.equal(testItemForTrim.modified_unix_date, sut.modified_unix_date);
        chai_1.assert.equal((_a = testItemForTrim.mapId) === null || _a === void 0 ? void 0 : _a.trim(), sut.mapId); // Should be trimmed by Schema
        chai_1.assert.equal((_b = testItemForTrim.deviceId) === null || _b === void 0 ? void 0 : _b.trim(), sut.deviceId); // Should be trimmed by Schema
        chai_1.assert.equal((_c = testItemForTrim.remoteAddress) === null || _c === void 0 ? void 0 : _c.trim(), sut.remoteAddress); // Should be trimmed by Schema
        chai_1.assert.equal((_d = testItemForTrim.note) === null || _d === void 0 ? void 0 : _d.trim(), sut.note); // Should be trimmed by Schema
    });
});
//# sourceMappingURL=device-mapping.js.map