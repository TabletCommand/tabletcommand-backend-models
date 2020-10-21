"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("ManagedIncident", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.managedIncident;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", function(done) {
    var item = new models.ManagedIncident(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(sut.departmentId, testItem.departmentId);
      assert.equal(sut.CallerNumber, testItem.CallerNumber);
      assert.equal(sut.CommandChannel, testItem.CommandChannel);
      assert.equal(sut.TacticalAltChannel, testItem.TacticalAltChannel);
      assert.equal(sut.TacticalChannel, testItem.TacticalChannel);
      assert.equal(sut.active, testItem.active);
      assert.equal(sut.address, testItem.address);
      assert.equal(sut.api_incident_number, testItem.api_incident_number);
      assert.equal(sut.channel, testItem.channel);
      assert.equal(sut.channel_owner, testItem.channel_owner);
      assert.equal(sut.end_time, testItem.end_time);
      assert.equal(sut.end_unix_time, testItem.end_unix_time);
      assert.equal(sut.is_closed, testItem.is_closed);
      assert.equal(sut.location, testItem.location);
      assert.equal(sut.managed, testItem.managed);
      assert.equal(sut.modified_date, testItem.modified_date);
      assert.equal(sut.modified_unix_date, testItem.modified_unix_date);
      assert.equal(sut.name, testItem.name);
      assert.equal(sut.preference_location, testItem.preference_location);
      assert.equal(sut.slave_map_changed, testItem.slave_map_changed);
      assert.equal(sut.source, testItem.source);
      assert.equal(sut.start_time, testItem.start_time);
      assert.equal(sut.start_unix_time, testItem.start_unix_time);
      assert.equal(sut.userId, testItem.userId);
      assert.equal(sut.uuid, testItem.uuid);

      assert.isTrue(sut.active);
      assert.isTrue(sut.is_closed);

      return done();
    });
  });
});
