"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("CSVImport", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.csvImport;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        var _a;
        const item = new models.CSVImport(testItem);
        const sut = await item.save();
        chai_1.assert.equal(testItem._id, sut._id);
        chai_1.assert.equal(testItem.batchId, sut.batchId);
        // assert.equal(testItem.importCreated, sut.importCreated);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.agencyId, sut.agencyId);
        chai_1.assert.equal(testItem.importType, sut.importType);
        chai_1.assert.equal(testItem.fileType, sut.fileType);
        chai_1.assert.equal(testItem.fileName, sut.fileName);
        chai_1.assert.equal(testItem.fileSize, sut.fileSize);
        chai_1.assert.equal(testItem.status, sut.status);
        // assert.equal(testItem.modifiedDate, sut.modifiedDate);
        // assert.equal(testItem.fileLastModified, sut.fileLastModified);
        chai_1.assert.equal((_a = testItem.records) === null || _a === void 0 ? void 0 : _a.length, 0);
        chai_1.assert.equal(testItem.userId, sut.userId);
        chai_1.assert.equal(testItem.sendNotification, sut.sendNotification);
    });
});
//# sourceMappingURL=csv-import.js.map