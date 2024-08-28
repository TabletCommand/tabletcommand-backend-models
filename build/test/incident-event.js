"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("IncidentEvent", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.incidentEvent;
        await models.IncidentEvent.deleteMany({
            departmentId: testItem.departmentId
        });
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        var _a, _b, _c, _d, _e, _f;
        const item = new models.IncidentEvent(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.IncidentNumber, sut.IncidentNumber);
        chai_1.assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
        chai_1.assert.equal(testItem.message, sut.message);
        chai_1.assert.equal(testItem.userTime, sut.userTime);
        chai_1.assert.equal(testItem.type, sut.type);
        chai_1.assert.equal(testItem.uuid, sut.uuid);
        chai_1.assert.equal((_a = testItem.location) === null || _a === void 0 ? void 0 : _a.latitude, sut.location.latitude);
        chai_1.assert.equal((_b = testItem.location) === null || _b === void 0 ? void 0 : _b.longitude, sut.location.longitude);
        chai_1.assert.equal((_c = testItem.user) === null || _c === void 0 ? void 0 : _c.email, sut.user.email);
        chai_1.assert.equal((_d = testItem.user) === null || _d === void 0 ? void 0 : _d.username, sut.user.username);
        chai_1.assert.equal((_e = testItem.user) === null || _e === void 0 ? void 0 : _e.radioName, sut.user.radioName);
        chai_1.assert.equal((_f = testItem.user) === null || _f === void 0 ? void 0 : _f.userId, sut.user.userId);
        const items = await models.IncidentEvent.find({
            departmentId: item.departmentId
        }).lean({
            virtuals: true
        });
        chai_1.assert.equal(items.length, 1);
    });
});
//# sourceMappingURL=incident-event.js.map