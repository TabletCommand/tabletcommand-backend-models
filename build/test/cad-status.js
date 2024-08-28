"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("CADStatus", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.cadStatus;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        const item = new models.CADStatus(testItem);
        const sut = await item.save();
        chai_1.assert.equal(testItem.uuid, sut.uuid);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.modifiedDate, sut.modifiedDate);
        chai_1.assert.equal(testItem.code, sut.code);
        chai_1.assert.equal(testItem.codeDisplay, sut.codeDisplay);
        chai_1.assert.equal((_a = testItem.color) === null || _a === void 0 ? void 0 : _a.background, sut.color.background);
        chai_1.assert.equal((_b = testItem.color) === null || _b === void 0 ? void 0 : _b.text, sut.color.text);
        chai_1.assert.equal(testItem.name, sut.name);
        chai_1.assert.equal(testItem.normalized, sut.normalized);
        chai_1.assert.isFalse(sut.roaming);
        chai_1.assert.isTrue(sut.selfAssignable);
        chai_1.assert.equal(testItem.status, sut.status);
        chai_1.assert.equal(testItem.statusId, sut.statusId);
        if (((_c = testItem.options) === null || _c === void 0 ? void 0 : _c.length) && sut.options.length) {
            chai_1.assert.equal((_d = testItem.options[0]) === null || _d === void 0 ? void 0 : _d.cadKey, (_e = sut.options[0]) === null || _e === void 0 ? void 0 : _e.cadKey);
            chai_1.assert.equal((_f = testItem.options[0]) === null || _f === void 0 ? void 0 : _f.name, (_g = sut.options[0]) === null || _g === void 0 ? void 0 : _g.name);
            chai_1.assert.equal((_h = testItem.options[0]) === null || _h === void 0 ? void 0 : _h.position, (_j = sut.options[0]) === null || _j === void 0 ? void 0 : _j.position);
            chai_1.assert.isTrue((_k = sut.options[0]) === null || _k === void 0 ? void 0 : _k.visible);
            chai_1.assert.equal((_m = (_l = testItem.options[0]) === null || _l === void 0 ? void 0 : _l.cadValues[0]) === null || _m === void 0 ? void 0 : _m.name, (_p = (_o = sut.options[0]) === null || _o === void 0 ? void 0 : _o.cadValues[0]) === null || _p === void 0 ? void 0 : _p.name);
            chai_1.assert.equal((_r = (_q = testItem.options[0]) === null || _q === void 0 ? void 0 : _q.cadValues[0]) === null || _r === void 0 ? void 0 : _r.type, (_t = (_s = sut.options[0]) === null || _s === void 0 ? void 0 : _s.cadValues[0]) === null || _t === void 0 ? void 0 : _t.type);
            chai_1.assert.equal((_v = (_u = testItem.options[0]) === null || _u === void 0 ? void 0 : _u.cadValues[0]) === null || _v === void 0 ? void 0 : _v.value, (_x = (_w = sut.options[0]) === null || _w === void 0 ? void 0 : _w.cadValues[0]) === null || _x === void 0 ? void 0 : _x.value);
            chai_1.assert.isTrue((_z = (_y = sut.options[0]) === null || _y === void 0 ? void 0 : _y.cadValues[0]) === null || _z === void 0 ? void 0 : _z.visible);
            chai_1.assert.isFalse((_1 = (_0 = sut.options[0]) === null || _0 === void 0 ? void 0 : _0.cadValues[0]) === null || _1 === void 0 ? void 0 : _1.favorite);
        }
        else {
            chai_1.assert.equal((_2 = testItem.options) === null || _2 === void 0 ? void 0 : _2.length, 1);
            chai_1.assert.equal((_3 = sut.options) === null || _3 === void 0 ? void 0 : _3.length, 1);
        }
    });
});
//# sourceMappingURL=cad-status.js.map