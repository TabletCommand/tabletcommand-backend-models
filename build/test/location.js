"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
const location_1 = require("../models/location");
const constants_1 = require("../constants");
describe("Location", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.location;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const item = new models.Location(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(testItem.departmentId, sut.departmentId);
        chai_1.assert.equal(testItem.userId, sut.userId);
        chai_1.assert.equal(testItem.uuid, sut.uuid);
        chai_1.assert.equal(testItem.username, sut.username);
        chai_1.assert.equal(testItem.device_type, sut.device_type);
        chai_1.assert.equal(testItem.session, sut.session);
        chai_1.assert.equal(testItem.active, sut.active);
        chai_1.assert.equal(testItem.heading, sut.heading);
        chai_1.assert.equal((_a = testItem.locationGeoJSON) === null || _a === void 0 ? void 0 : _a.coordinates[0], (_b = sut.location) === null || _b === void 0 ? void 0 : _b.longitude);
        chai_1.assert.equal((_c = testItem.locationGeoJSON) === null || _c === void 0 ? void 0 : _c.coordinates[1], (_d = sut.location) === null || _d === void 0 ? void 0 : _d.latitude);
        chai_1.assert.equal((_e = testItem.locationGeoJSON) === null || _e === void 0 ? void 0 : _e.type, "Point");
        chai_1.assert.equal((_f = testItem.locationGeoJSON) === null || _f === void 0 ? void 0 : _f.coordinates[0], sut.locationGeoJSON.coordinates[0]);
        chai_1.assert.equal((_g = testItem.locationGeoJSON) === null || _g === void 0 ? void 0 : _g.coordinates[1], sut.locationGeoJSON.coordinates[1]);
        chai_1.assert.equal(testItem.opAreaCode, sut.opAreaCode);
        chai_1.assert.equal(testItem.opAreaName, sut.opAreaName);
        chai_1.assert.equal(testItem.shared, sut.shared);
        chai_1.assert.equal(testItem.state, sut.state);
        chai_1.assert.equal(testItem.sendToCAD, sut.sendToCAD);
        chai_1.assert.equal((_h = testItem.color) === null || _h === void 0 ? void 0 : _h.text, sut.color.text);
        chai_1.assert.equal((_j = testItem.color) === null || _j === void 0 ? void 0 : _j.background, sut.color.background);
        chai_1.assert.isTrue(sut.uuid !== "");
        const { longitude, latitude } = (_k = sut.location) !== null && _k !== void 0 ? _k : { latitude: 0, longitude: 0 };
        const maxDistance = 10000;
        const geoQuery = {
            locationGeoJSON: {
                $nearSphere: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: maxDistance
                }
            }
        };
        try {
            await models.Location.findOne(geoQuery);
            chai_1.assert.isFalse(true, "Expecting above to fail.");
        }
        catch (error) {
            chai_1.assert.isNotNull(error, "Expecting above to fail");
        }
        await models.Location.createIndexes();
        const found = await models.Location.findOne(geoQuery);
        chai_1.assert.isObject(found);
        await models.Location.collection.dropIndexes();
    });
    it("decodes .visibility", async function () {
        const item = new models.Location(testItem);
        const sut = await item.save();
        const sutVis = (0, location_1.decodeLocationVisibility)(sut.visibility);
        chai_1.assert.equal(sutVis.length, 4);
        chai_1.assert.notEqual(sutVis.indexOf(constants_1.LocationVisibility.Hidden), -1);
        chai_1.assert.notEqual(sutVis.indexOf(constants_1.LocationVisibility.Visible), -1);
        chai_1.assert.notEqual(sutVis.indexOf(constants_1.LocationVisibility.CAD), -1);
        chai_1.assert.notEqual(sutVis.indexOf(constants_1.LocationVisibility.Shared), -1);
    });
});
//# sourceMappingURL=location.js.map