"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("Battalion", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.battalion;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        var _a;
        const item = new models.Battalion(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.active, sut.active);
        chai_1.assert.equal(testItem.isMandatory, sut.isMandatory);
        chai_1.assert.equal(testItem.name, sut.name);
        chai_1.assert.equal(testItem.userId, sut.userId);
        chai_1.assert.equal(testItem.position, sut.position);
        chai_1.assert.equal(testItem.agencyId, sut.agencyId);
        chai_1.assert.equal(testItem.local_id, sut.local_id);
        chai_1.assert.equal((_a = testItem.units) === null || _a === void 0 ? void 0 : _a.length, 1);
        const expectedDate = new Date().valueOf() / 1000.0;
        let timeDelta = 1;
        if (sut.modified_unix_date) {
            timeDelta = expectedDate - sut.modified_unix_date;
        }
        chai_1.assert.isTrue(timeDelta < 1);
    });
});
//# sourceMappingURL=battalion.js.map