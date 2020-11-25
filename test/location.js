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
    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.userId, sut.userId);
    assert.equal(testItem.uuid, sut.uuid);
    assert.equal(testItem.username, sut.username);
    assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
    assert.equal(testItem.device_type, sut.device_type);
    assert.equal(testItem.session, sut.session);
    assert.equal(testItem.active, sut.active);
    assert.equal(testItem.location.longitude, sut.location.longitude);
    assert.equal(testItem.location.latitude, sut.location.latitude);
    assert.equal(testItem.locationGeoJSON.type, "Point");
    assert.equal(testItem.locationGeoJSON.coordinates[0], sut.location.longitude);
    assert.equal(testItem.locationGeoJSON.coordinates[1], sut.location.latitude);
    assert.equal(testItem.prefix, sut.prefix);
    assert.equal(testItem.shared, sut.shared);
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
      await models.Location.findOne(geoQuery);
      assert.isFalse(true, "Expecting above to fail.");
    } catch (error) {
      assert.isNotNull(error, "Expecting above to fail");
    }

    await models.Location.createIndexes();

    const found = await models.Location.findOne(geoQuery);
    assert.isObject(found);

    await models.Location.collection.dropIndexes();
  });

  it("propagateToObject with object", function(done) {
    let nextUpdate = JSON.parse(JSON.stringify(testItem)); // Clone
    nextUpdate.username = "abc";
    nextUpdate.session = "def";
    nextUpdate.active = false;

    const item1 = new models.Location(testItem);
    item1.save(function(err, sut) {
      assert.isNull(err, "Should not err");
      assert.isNotNull(testItem._id);
      assert.equal(testItem.uuid, sut.uuid);
      assert.equal(testItem.username, sut.username);
      assert.equal(testItem.session, sut.session);
      assert.equal(testItem.active, sut.active);

      const item2 = new models.Location(nextUpdate);
      item2.propagateToObject(sut, function(itemToSave) {
        assert.equal(item1._id, itemToSave._id);
        assert.equal(itemToSave.username, nextUpdate.username);
        assert.equal(itemToSave.session, nextUpdate.session);
        assert.equal(itemToSave.active, nextUpdate.active);
        return done();
      });
    });
  });

  it("propagateToObject with null", function(done) {
    let item = new models.Location(testItem);
    item.propagateToObject(null, function(sut) {
      assert.equal(testItem.uuid, sut.uuid);
      assert.equal(testItem.username, sut.username);
      assert.equal(testItem.session, sut.session);
      assert.equal(testItem.active, sut.active);

      return done();
    });
  });
});
