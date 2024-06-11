"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("Location", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.location;
  });


  it("is saved", async function () {
    const item = new models.Location(testItem);
    const ress = await item.save();
    const result = await models.Location.findOne({ _id: testItem._id });
    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, ress.departmentId);
    assert.equal(testItem.userId, ress.userId);
    assert.equal(testItem.uuid, ress.uuid);
    assert.equal(testItem.username, ress.username);
    assert.equal(testItem.device_type, ress.device_type);
    assert.equal(testItem.session, ress.session);
    assert.equal(testItem.active, ress.active);
    assert.equal(testItem.heading, ress.heading);
    assert.equal(testItem.locationGeoJSON.coordinates[0], ress.location.longitude);
    assert.equal(testItem.locationGeoJSON.coordinates[1], ress.location.latitude);
    assert.equal(testItem.locationGeoJSON.type, "Point");
    assert.equal(testItem.locationGeoJSON.coordinates[0], ress.locationGeoJSON.coordinates[0]);
    assert.equal(testItem.locationGeoJSON.coordinates[1], ress.locationGeoJSON.coordinates[1]);
    assert.equal(testItem.opAreaCode, ress.opAreaCode);
    assert.equal(testItem.opAreaName, ress.opAreaName);
    assert.equal(testItem.shared, ress.shared);
    assert.equal(testItem.state, ress.state);
    assert.equal(testItem.sendToCAD, ress.sendToCAD);
    assert.equal(testItem.color.text, ress.color.text);
    assert.equal(testItem.color.background, ress.color.background);
    assert.isTrue(ress.uuid !== "");

    const { longitude, latitude } = ress.location;
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
      const result = await models.Location.findOne(geoQuery);
      assert.isFalse(true, "Expecting above to fail.");
    } catch (error) {
      assert.isNotNull(error, "Expecting above to fail");
    }

    await models.Location.createIndexes();

    const found = await models.Location.findOne(geoQuery);
    assert.isObject(found);

    await models.Location.collection.dropIndexes();
  });
});
