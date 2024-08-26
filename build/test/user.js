"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("User", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.user;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        const item = new models.User(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(sut.uuid);
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(sut.nick, testItem.nick);
        chai_1.assert.equal(sut.email, testItem.email);
        chai_1.assert.equal(sut.mapId, testItem.mapId);
        chai_1.assert.equal(sut.departmentId, testItem.departmentId);
        chai_1.assert.isFalse(sut.active);
        chai_1.assert.isFalse(sut.admin);
        chai_1.assert.isFalse(sut.superuser);
        chai_1.assert.isTrue(sut.isPro);
        chai_1.assert.isTrue(sut.mobileAccess);
        chai_1.assert.isFalse(sut.webAccess);
        chai_1.assert.isFalse(sut.shareLocationPhone);
        chai_1.assert.isTrue(sut.shareLocationTablet);
        chai_1.assert.equal(item.uuid, sut.uuid);
        chai_1.assert.equal(item.agencyId, sut.agencyId);
        chai_1.assert.equal(item.offDutyEnabled, sut.offDutyEnabled);
        chai_1.assert.equal(item.managedAgencies[0], sut.managedAgencies[0]);
        chai_1.assert.isTrue(sut.offlineMapsEnabled);
        chai_1.assert.equal(item.webMapSettings.defaultZoomLevel, 10);
        chai_1.assert.equal(item.webMapSettings.defaultCenter[0], 1);
        chai_1.assert.equal(item.webMapSettings.defaultCenter[1], 1);
        chai_1.assert.equal(item.webMapSettings.defaultMap, "Default");
        chai_1.assert.equal(item.restrictedCommentsEnabled, true);
    });
});
//# sourceMappingURL=user.js.map