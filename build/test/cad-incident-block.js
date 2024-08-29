"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const _ = require("lodash");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("CADIncidentBlock", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.cadIncidentBlock;
        await mock.beforeEach();
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        const item = new models.CADIncidentBlock(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(sut.EntryDateTime, testItem.EntryDateTime);
        chai_1.assert.equal(sut.ClosedDateTime, testItem.ClosedDateTime);
        chai_1.assert.equal(sut.source, testItem.source);
        chai_1.assert.equal(sut.IncidentNumber, testItem.IncidentNumber);
        chai_1.assert.equal(sut.departmentId, testItem.departmentId);
        chai_1.assert.equal(sut.AgencyIncidentCallTypeDescription, testItem.AgencyIncidentCallTypeDescription);
        // No longer in models? EntryDateTime seems replacement
        // assert.equal(sut.createdAt.toISOString(), new Date(testItem.createdAt).toISOString());
        chai_1.assert.equal(sut.ReportNumber.length, 1);
        const rn = _.first(sut.ReportNumber);
        chai_1.assert.equal(rn === null || rn === void 0 ? void 0 : rn.name, "Incident");
        chai_1.assert.equal(rn === null || rn === void 0 ? void 0 : rn.number, "CA68");
    });
});
//# sourceMappingURL=cad-incident-block.js.map