"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("GSTMapping", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.gstMapping;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        const item = new models.GSTMapping(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.deviceType, sut.deviceType);
        chai_1.assert.equal(testItem.unitId, sut.unitId);
        chai_1.assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
        chai_1.assert.equal(testItem.remoteAddress, sut.remoteAddress);
        chai_1.assert.equal(testItem.note, sut.note);
        chai_1.assert.isFalse(sut.active);
        chai_1.assert.isFalse(sut.mapHidden);
    });
});
//# sourceMappingURL=gst-mapping.js.map