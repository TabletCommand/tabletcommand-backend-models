"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("CADStatusMap", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.cadStatusMap;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        var _a, _b, _c, _d, _e, _f;
        const item = new models.CADStatusMap(testItem);
        const sut = await item.save();
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.modifiedDate, sut.modifiedDate);
        chai_1.assert.equal(testItem.fromStatusId, sut.fromStatusId);
        if (sut.toStatusIds.length && ((_a = testItem.toStatusIds) === null || _a === void 0 ? void 0 : _a.length)) {
            chai_1.assert.equal((_b = testItem.toStatusIds[0]) === null || _b === void 0 ? void 0 : _b.statusId, (_c = sut.toStatusIds[0]) === null || _c === void 0 ? void 0 : _c.statusId);
            chai_1.assert.isTrue((_d = sut.toStatusIds[0]) === null || _d === void 0 ? void 0 : _d.userEnabled);
            chai_1.assert.equal((_e = sut.toStatusIds[0]) === null || _e === void 0 ? void 0 : _e.position, 0);
        }
        else {
            chai_1.assert.equal(sut.toStatusIds.length, 1);
            chai_1.assert.equal((_f = testItem.toStatusIds) === null || _f === void 0 ? void 0 : _f.length, 1);
        }
    });
});
//# sourceMappingURL=cad-status-map.js.map