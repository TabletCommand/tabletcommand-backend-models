"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("UserRegistration", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.userRegistration;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        const item = new models.UserRegistration(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(sut._id);
        chai_1.assert.equal(sut.id, sut._id);
        chai_1.assert.equal(testItem.email, sut.email);
        chai_1.assert.equal(testItem.name, sut.name);
        chai_1.assert.equal(testItem.firstName, sut.firstName);
        chai_1.assert.equal(testItem.lastName, sut.lastName);
        chai_1.assert.equal(testItem.department, sut.department);
        chai_1.assert.equal(testItem.title, sut.title);
        chai_1.assert.equal(testItem.modifiedDate, sut.modifiedDate);
        chai_1.assert.equal(testItem.stage, sut.stage);
        chai_1.assert.equal(testItem.presentedAt, sut.presentedAt);
        chai_1.assert.equal(testItem.managedIncidentsCount, sut.managedIncidentsCount);
        chai_1.assert.equal(testItem.checklistsCount, sut.checklistsCount);
        chai_1.assert.equal(testItem.firstIncidentUnixTime, sut.firstIncidentUnixTime);
        chai_1.assert.equal(testItem.lastIncidentLocation, sut.lastIncidentLocation);
        chai_1.assert.equal(testItem.lastIncidentUnixTime, sut.lastIncidentUnixTime);
    });
});
//# sourceMappingURL=user-registration.js.map