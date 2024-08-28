"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("UserDevice", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.userDevice;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        const item = new models.UserDevice(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(sut.id, sut._id);
        chai_1.assert.equal(testItem.userId, sut.userId);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(sut.devices.length, 1);
        if ((_a = testItem.devices) === null || _a === void 0 ? void 0 : _a.length) {
            chai_1.assert.equal((_b = testItem.devices[0]) === null || _b === void 0 ? void 0 : _b.token, (_c = sut.devices[0]) === null || _c === void 0 ? void 0 : _c.token);
            chai_1.assert.equal((_d = testItem.devices[0]) === null || _d === void 0 ? void 0 : _d.env, (_e = sut.devices[0]) === null || _e === void 0 ? void 0 : _e.env);
            chai_1.assert.equal((_f = testItem.devices[0]) === null || _f === void 0 ? void 0 : _f.ua, (_g = sut.devices[0]) === null || _g === void 0 ? void 0 : _g.ua);
            chai_1.assert.equal((_h = testItem.devices[0]) === null || _h === void 0 ? void 0 : _h.time, (_j = sut.devices[0]) === null || _j === void 0 ? void 0 : _j.time);
            chai_1.assert.equal((_k = testItem.devices[0]) === null || _k === void 0 ? void 0 : _k.drift, (_l = sut.devices[0]) === null || _l === void 0 ? void 0 : _l.drift);
            chai_1.assert.equal((_m = testItem.devices[0]) === null || _m === void 0 ? void 0 : _m.bundleIdentifier, (_o = sut.devices[0]) === null || _o === void 0 ? void 0 : _o.bundleIdentifier);
            chai_1.assert.equal((_p = testItem.devices[0]) === null || _p === void 0 ? void 0 : _p.silentEnabled, (_q = sut.devices[0]) === null || _q === void 0 ? void 0 : _q.silentEnabled);
            chai_1.assert.equal((_r = testItem.devices[0]) === null || _r === void 0 ? void 0 : _r.criticalAlertsEnabled, (_s = sut.devices[0]) === null || _s === void 0 ? void 0 : _s.criticalAlertsEnabled);
            chai_1.assert.equal((_t = testItem.devices[0]) === null || _t === void 0 ? void 0 : _t.session, (_u = sut.devices[0]) === null || _u === void 0 ? void 0 : _u.session);
            chai_1.assert.equal((_v = testItem.devices[0]) === null || _v === void 0 ? void 0 : _v.active, (_w = sut.devices[0]) === null || _w === void 0 ? void 0 : _w.active);
            chai_1.assert.equal((_x = testItem.devices[0]) === null || _x === void 0 ? void 0 : _x.offDuty, (_y = sut.devices[0]) === null || _y === void 0 ? void 0 : _y.offDuty);
        }
        else {
            chai_1.assert.equal((_z = testItem.devices) === null || _z === void 0 ? void 0 : _z.length, 1);
        }
        chai_1.assert.equal(testItem.notificationCount, sut.notificationCount);
        if ((_0 = testItem.notificationIncidentSettings) === null || _0 === void 0 ? void 0 : _0.length) {
            chai_1.assert.equal(JSON.stringify(testItem.notificationIncidentSettings[0]), JSON.stringify(sut.notificationIncidentSettings[0]));
        }
        else {
            chai_1.assert.equal((_1 = testItem.notificationIncidentSettings) === null || _1 === void 0 ? void 0 : _1.length, 1);
        }
        if ((_2 = testItem.notificationUnitSettings) === null || _2 === void 0 ? void 0 : _2.length) {
            chai_1.assert.equal(JSON.stringify(testItem.notificationUnitSettings[0]), JSON.stringify(sut.notificationUnitSettings[0]));
        }
        else {
            chai_1.assert.equal((_3 = testItem.notificationUnitSettings) === null || _3 === void 0 ? void 0 : _3.length, 1);
        }
        chai_1.assert.equal(testItem.offDuty, true);
        chai_1.assert.equal(testItem.criticalAlertsVolume, "MED");
        chai_1.assert.isObject(sut.notificationSounds);
        chai_1.assert.deepEqual(sut.notificationSounds, item.notificationSounds);
        chai_1.assert.isObject(sut.notificationSounds.ios);
        chai_1.assert.isObject(sut.notificationSounds.android);
    });
});
//# sourceMappingURL=user-device.js.map