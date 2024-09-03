"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("Esri", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.esri;
        await mock.cleanup();
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        chai_1.assert.isObject(testItem);
        const item = new models.Esri(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(sut._id);
        chai_1.assert.isNotNull(sut.id);
        chai_1.assert.equal(sut._id.toString(), (_a = testItem._id) === null || _a === void 0 ? void 0 : _a.toString());
        chai_1.assert.equal(sut.departmentId, testItem.departmentId);
        chai_1.assert.equal(sut.auth.username, (_b = testItem.auth) === null || _b === void 0 ? void 0 : _b.username);
        chai_1.assert.equal(sut.auth.encrypted.iv, (_c = testItem.auth) === null || _c === void 0 ? void 0 : _c.encrypted.iv);
        chai_1.assert.equal(sut.auth.encrypted.encryptedData, (_d = testItem.auth) === null || _d === void 0 ? void 0 : _d.encrypted.encryptedData);
        chai_1.assert.equal(sut.fireMapperAuth.username, (_e = testItem.fireMapperAuth) === null || _e === void 0 ? void 0 : _e.username);
        chai_1.assert.equal(sut.fireMapperAuth.encrypted.iv, (_f = testItem.fireMapperAuth) === null || _f === void 0 ? void 0 : _f.encrypted.iv);
        chai_1.assert.equal(sut.fireMapperAuth.encrypted.encryptedData, (_g = testItem.fireMapperAuth) === null || _g === void 0 ? void 0 : _g.encrypted.encryptedData);
        chai_1.assert.equal(sut.fireMapperAuth.encryptedAccessCode.iv, (_h = testItem.fireMapperAuth) === null || _h === void 0 ? void 0 : _h.encryptedAccessCode.iv);
        chai_1.assert.equal(sut.fireMapperAuth.encryptedAccessCode.encryptedData, (_j = testItem.fireMapperAuth) === null || _j === void 0 ? void 0 : _j.encryptedAccessCode.encryptedData);
        chai_1.assert.equal(sut.maps.length, 1);
        const sutm = sut.maps[0];
        let testItemM;
        if ((_k = testItem.maps) === null || _k === void 0 ? void 0 : _k.length) {
            testItemM = testItem.maps[0];
        }
        chai_1.assert.equal(sutm === null || sutm === void 0 ? void 0 : sutm.itemId, testItemM === null || testItemM === void 0 ? void 0 : testItemM.itemId);
        chai_1.assert.equal(sutm === null || sutm === void 0 ? void 0 : sutm.title, testItemM === null || testItemM === void 0 ? void 0 : testItemM.title);
        chai_1.assert.equal(sutm === null || sutm === void 0 ? void 0 : sutm.url, testItemM === null || testItemM === void 0 ? void 0 : testItemM.url);
        chai_1.assert.equal(sutm === null || sutm === void 0 ? void 0 : sutm.access, testItemM === null || testItemM === void 0 ? void 0 : testItemM.access);
        chai_1.assert.equal(sutm === null || sutm === void 0 ? void 0 : sutm.owner, testItemM === null || testItemM === void 0 ? void 0 : testItemM.owner);
        chai_1.assert.equal(sutm === null || sutm === void 0 ? void 0 : sutm.type, testItemM === null || testItemM === void 0 ? void 0 : testItemM.type);
        chai_1.assert.equal(sutm === null || sutm === void 0 ? void 0 : sutm.mapLayers.length, 3);
        chai_1.assert.equal(sutm === null || sutm === void 0 ? void 0 : sutm.mapLayers.length, 3);
        chai_1.assert.equal(sutm === null || sutm === void 0 ? void 0 : sutm.baseMap.baseMapLayers.length, 1);
        chai_1.assert.equal(sutm === null || sutm === void 0 ? void 0 : sutm.baseMap.title, testItemM === null || testItemM === void 0 ? void 0 : testItemM.baseMap.title);
        const itemId = "01cebf7aede94ed3a9f4c260e18a7d7e";
        // compare saved items
        chai_1.assert.equal(sut.mapsProperties.length, 1, "all items");
        const mapPropsFound = sut.mapsProperties.filter(p => { return p.itemId === itemId; });
        chai_1.assert.equal(mapPropsFound.length, 1, "found items");
        const props = mapPropsFound[0];
        chai_1.assert.equal(props === null || props === void 0 ? void 0 : props.download, true);
    });
});
//# sourceMappingURL=esri.js.map