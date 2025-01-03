"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("Template", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.template;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        const item = new models.Template(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(item._id);
        chai_1.assert.equal(item._id, sut.id);
        chai_1.assert.equal(sut.id, sut._id);
        chai_1.assert.equal(testItem.position, sut.position);
        chai_1.assert.equal(testItem.active, sut.active);
        chai_1.assert.equal(testItem.name, sut.name);
        chai_1.assert.equal(testItem.userId, sut.userId);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.isMandatory, sut.isMandatory);
        chai_1.assert.isArray(testItem.group);
        chai_1.assert.isArray(testItem.checklist);
        chai_1.assert.equal(testItem.agencyId, sut.agencyId);
        const expectedDate = new Date().valueOf() / 1000.0;
        const timeDelta = expectedDate - sut.modified_unix_date;
        chai_1.assert.isTrue(timeDelta < 1);
    });
});
//# sourceMappingURL=template.js.map