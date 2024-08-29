"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("PersonnelImport", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.personnelImport;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        var _a, _b, _c, _d, _e;
        const item = new models.PersonnelImport(testItem);
        const sut = await item.save();
        chai_1.assert.equal(testItem._id, sut._id);
        chai_1.assert.equal(testItem.PersonnelID, sut.PersonnelID);
        chai_1.assert.equal(testItem.PersonnelName, sut.PersonnelName);
        chai_1.assert.equal(testItem.PersonnelRank, sut.PersonnelRank);
        chai_1.assert.equal(testItem.PersonnelWorkCode, sut.PersonnelWorkCode);
        chai_1.assert.equal(testItem.PersonnelNote, sut.PersonnelNote);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        if ((_a = testItem.radioNames) === null || _a === void 0 ? void 0 : _a.length) {
            chai_1.assert.equal(testItem.radioNames[0], sut.radioNames[0]);
            chai_1.assert.equal(testItem.radioNames[1], sut.radioNames[1]);
        }
        else {
            chai_1.assert.equal((_b = testItem.radioNames) === null || _b === void 0 ? void 0 : _b.length, 1);
        }
        chai_1.assert.equal(sut.radioNames.length, 2);
        chai_1.assert.equal(testItem.shiftStartTime, sut.shiftStartTime);
        chai_1.assert.equal(testItem.shiftEndTime, sut.shiftEndTime);
        chai_1.assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
        chai_1.assert.equal(testItem.active, sut.active);
        chai_1.assert.equal(testItem.agencyName, sut.agencyName);
        chai_1.assert.equal(testItem.agencyCode, sut.agencyCode);
        chai_1.assert.equal(testItem.agencyId, sut.agencyId);
        chai_1.assert.equal(testItem.importNotes, sut.importNotes);
        chai_1.assert.equal((_c = testItem.modified) === null || _c === void 0 ? void 0 : _c.toISOString(), sut.modified.toISOString());
        chai_1.assert.equal((_d = testItem.shiftStart) === null || _d === void 0 ? void 0 : _d.toISOString(), sut.shiftStart.toISOString());
        chai_1.assert.equal((_e = testItem.shiftEnd) === null || _e === void 0 ? void 0 : _e.toISOString(), sut.shiftEnd.toISOString());
    });
});
//# sourceMappingURL=personnel-import.js.map