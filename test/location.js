"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("Location", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.location;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.Location(testItem);
    const sut = await item.save();
    const result = await models.Location.findOne({ _id: testItem._id });
    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.userId, sut.userId);
    assert.equal(testItem.uuid, sut.uuid);
    assert.equal(testItem.username, sut.username);
    assert.equal(testItem.device_type, sut.device_type);
    assert.equal(testItem.session, sut.session);
    assert.equal(testItem.active, sut.active);
    assert.equal(testItem.heading, sut.heading);
    assert.equal(testItem.locationGeoJSON.coordinates[0], sut.location.longitude);
    assert.equal(testItem.locationGeoJSON.coordinates[1], sut.location.latitude);
    assert.equal(testItem.locationGeoJSON.type, "Point");
    assert.equal(testItem.locationGeoJSON.coordinates[0], sut.locationGeoJSON.coordinates[0]);
    assert.equal(testItem.locationGeoJSON.coordinates[1], sut.locationGeoJSON.coordinates[1]);
    assert.equal(testItem.opAreaCode, sut.opAreaCode);
    assert.equal(testItem.opAreaName, sut.opAreaName);
    assert.equal(testItem.shared, sut.shared);
    assert.equal(testItem.state, sut.state);
    assert.equal(testItem.sendToCAD, sut.sendToCAD);
    assert.equal(testItem.color.text, sut.color.text);
    assert.equal(testItem.color.background, sut.color.background);
    assert.isTrue(sut.uuid !== "");

    const { longitude, latitude } = sut.location;
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
