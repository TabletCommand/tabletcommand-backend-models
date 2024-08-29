"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("Department", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.department;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13;
        chai_1.assert.isObject(testItem);
        const item = new models.Department(testItem);
        const sut = await item.save();
        await models.Department.findOne({ _id: testItem._id }).lean();
        chai_1.assert.isNotNull(sut._id);
        chai_1.assert.isNotNull(sut.id);
        chai_1.assert.equal(sut.department, testItem.department);
        chai_1.assert.equal(sut.addressDetails.city, (_a = testItem.addressDetails) === null || _a === void 0 ? void 0 : _a.city);
        chai_1.assert.isTrue(sut.active);
        chai_1.assert.equal(sut.apikey, testItem.apikey);
        chai_1.assert.equal(sut.partialApiKey, testItem.partialApiKey);
        chai_1.assert.isTrue(sut.personnelStaffingEnabled);
        chai_1.assert.isTrue(sut.rtsEnabled);
        chai_1.assert.equal(sut.rtsChannelPrefix, testItem.rtsChannelPrefix);
        chai_1.assert.equal(sut.pubNubV3.token, (_b = testItem.pubNubV3) === null || _b === void 0 ? void 0 : _b.token);
        chai_1.assert.equal(sut.pubNubV3.expireAt.toISOString(), (_c = testItem.pubNubV3) === null || _c === void 0 ? void 0 : _c.expireAt.toISOString());
        chai_1.assert.equal(sut.pubNubV3.runAt.toISOString(), (_d = testItem.pubNubV3) === null || _d === void 0 ? void 0 : _d.runAt.toISOString());
        chai_1.assert.equal(sut.signupKey, testItem.signupKey);
        chai_1.assert.equal(sut.incidentTypes.length, 1);
        chai_1.assert.equal(sut.agencyIds.length, 1);
        if ((_e = testItem.agencyIds) === null || _e === void 0 ? void 0 : _e.length) {
            chai_1.assert.equal(sut.agencyIds[0], testItem.agencyIds[0]);
        }
        else {
            chai_1.assert.equal((_f = testItem.agencyIds) === null || _f === void 0 ? void 0 : _f.length, 1);
        }
        chai_1.assert.equal(sut.safetyPriorityKeywords.length, 3);
        if ((_g = testItem.incidentTypes) === null || _g === void 0 ? void 0 : _g.length) {
            chai_1.assert.equal((_h = sut.incidentTypes[0]) === null || _h === void 0 ? void 0 : _h.name, (_j = testItem.incidentTypes[0]) === null || _j === void 0 ? void 0 : _j.name);
        }
        else {
            chai_1.assert.equal((_k = testItem.incidentTypes) === null || _k === void 0 ? void 0 : _k.length, 1);
        }
        chai_1.assert.isFalse(sut.shareLocationPhones);
        chai_1.assert.isTrue(sut.shareLocationTablets);
        chai_1.assert.isFalse(sut.cadOneWayVehiclesEnabled);
        chai_1.assert.isFalse(sut.cadGetLocationEnabled);
        chai_1.assert.isTrue(sut.mowsEnabled);
        chai_1.assert.isTrue(sut.shareAVL.enabled);
        chai_1.assert.equal(sut.shareAVL.opAreaCode, (_l = testItem.shareAVL) === null || _l === void 0 ? void 0 : _l.opAreaCode);
        chai_1.assert.equal(sut.shareAVL.opAreaName, (_m = testItem.shareAVL) === null || _m === void 0 ? void 0 : _m.opAreaName);
        chai_1.assert.equal(sut.accountType, testItem.accountType);
        chai_1.assert.equal(sut.timeZone, testItem.timeZone);
        chai_1.assert.equal(sut.firstArrivingEnabled, testItem.firstArrivingEnabled);
        chai_1.assert.equal(sut.simpleSense.token, (_o = testItem.simpleSense) === null || _o === void 0 ? void 0 : _o.token);
        chai_1.assert.equal(sut.firstArriving.token, (_p = testItem.firstArriving) === null || _p === void 0 ? void 0 : _p.token);
        chai_1.assert.equal(sut.simpleSenseEnabled, testItem.simpleSenseEnabled);
        chai_1.assert.equal(sut.webDisclaimer.message, (_q = testItem.webDisclaimer) === null || _q === void 0 ? void 0 : _q.message);
        chai_1.assert.equal(sut.webDisclaimer.enabled, (_r = testItem.webDisclaimer) === null || _r === void 0 ? void 0 : _r.enabled);
        chai_1.assert.equal(JSON.stringify(sut.licensing), JSON.stringify(testItem.licensing));
        chai_1.assert.equal(sut.externalNotificationsEnabled, testItem.externalNotificationsEnabled);
        chai_1.assert.equal(sut.notificationEmails.length, (_s = testItem.notificationEmails) === null || _s === void 0 ? void 0 : _s.length);
        chai_1.assert.equal(sut.restrictedComments.callTypesAllowed.length, (_t = testItem.restrictedComments) === null || _t === void 0 ? void 0 : _t.callTypesAllowed.length);
        chai_1.assert.equal(sut.restrictedComments.statusesAllowed.length, (_u = testItem.restrictedComments) === null || _u === void 0 ? void 0 : _u.statusesAllowed.length);
        chai_1.assert.equal(sut.restrictedComments.restrictedFields.length, (_v = testItem.restrictedComments) === null || _v === void 0 ? void 0 : _v.restrictedFields.length);
        chai_1.assert.equal(sut.restrictedComments.restrictedMessage, (_w = testItem.restrictedComments) === null || _w === void 0 ? void 0 : _w.restrictedMessage);
        chai_1.assert.equal(sut.restrictedComments.enabled, (_x = testItem.restrictedComments) === null || _x === void 0 ? void 0 : _x.enabled);
        if ((_y = testItem.customButtons) === null || _y === void 0 ? void 0 : _y.length) {
            chai_1.assert.equal((_z = sut.customButtons[0]) === null || _z === void 0 ? void 0 : _z.name, (_0 = testItem.customButtons[0]) === null || _0 === void 0 ? void 0 : _0.name);
            chai_1.assert.equal((_1 = sut.customButtons[0]) === null || _1 === void 0 ? void 0 : _1.url, (_2 = testItem.customButtons[0]) === null || _2 === void 0 ? void 0 : _2.url);
            chai_1.assert.equal((_3 = sut.customButtons[0]) === null || _3 === void 0 ? void 0 : _3.order, (_4 = testItem.customButtons[0]) === null || _4 === void 0 ? void 0 : _4.order);
            chai_1.assert.equal((_5 = sut.customButtons[0]) === null || _5 === void 0 ? void 0 : _5.allowExternal, (_6 = testItem.customButtons[0]) === null || _6 === void 0 ? void 0 : _6.allowExternal);
            chai_1.assert.equal((_7 = sut.customButtons[0]) === null || _7 === void 0 ? void 0 : _7.defaultExternal, (_8 = testItem.customButtons[0]) === null || _8 === void 0 ? void 0 : _8.defaultExternal);
            chai_1.assert.equal((_9 = sut.customButtons[0]) === null || _9 === void 0 ? void 0 : _9.allowFloating, (_10 = testItem.customButtons[0]) === null || _10 === void 0 ? void 0 : _10.allowFloating);
            chai_1.assert.equal(JSON.stringify((_11 = sut.customButtons[0]) === null || _11 === void 0 ? void 0 : _11.color), JSON.stringify((_12 = testItem.customButtons[0]) === null || _12 === void 0 ? void 0 : _12.color));
        }
        else {
            chai_1.assert.equal((_13 = testItem.customButtons) === null || _13 === void 0 ? void 0 : _13.length, 1);
        }
        chai_1.assert.equal(sut.reportNumberEnabled, testItem.reportNumberEnabled);
        chai_1.assert.equal(JSON.stringify(sut.samsara), JSON.stringify(testItem.samsara));
        chai_1.assert.equal(sut.reportOdometer, "status");
    });
});
//# sourceMappingURL=department.js.map