"use strict";

if (process.env.NODE_ENV !== 'test') {
  console.log('NODE_ENV=' + process.env.NODE_ENV + ' which might cause problems.');
  process.exit(1);
}

var assert = require("chai").assert;
var mongoose = require("mongoose");

var config = require("../config");
var models = require("../index");

var setupMongoose = function(done) {
  mongoose.connect(config.db, done);
};

var clearMongoose = function(done) {
  mongoose.connection.db.dropDatabase(function() {
    mongoose.connection.close(done);
  });
};

var testItem = {
  _id: mongoose.Types.ObjectId(),
  nick: "Test",
  departmentId: "d123",
  deviceType: "hello",
  mapId: "map123",
  deviceId: "deviceType121",
  modified_unix_date: 1432230780,
  active: false,
  remoteAddress: "1.2.3.4"
};

describe("DeviceMapping", function() {

  before(setupMongoose);
  after(clearMongoose);

  it("is saved", function(done) {
    var item = new models.DeviceMapping(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.deviceType, sut.deviceType);
      assert.equal(testItem.mapId, sut.mapId);
      assert.equal(testItem.deviceId, sut.deviceId);
      assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
      assert.equal(testItem.remoteAddress, sut.remoteAddress);
      assert.isFalse(sut.active);

      return done();
    });
  });
});
