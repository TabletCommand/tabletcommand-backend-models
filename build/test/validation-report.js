"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("ValidationReport", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.validationReport;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        var _a, _b;
        const item = new models.ValidationReport(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(item._id);
        chai_1.assert.equal((_a = testItem.departmentId) === null || _a === void 0 ? void 0 : _a.toString(), sut.departmentId.toString());
        chai_1.assert.equal((_b = testItem.modified) === null || _b === void 0 ? void 0 : _b.toString(), sut.modified.toString());
        chai_1.assert.deepEqual(testItem.location, []);
    });
});
//# sourceMappingURL=validation-report.js.map