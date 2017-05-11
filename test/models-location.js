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

var testLocation = {
  _id: mongoose.Types.ObjectId(),
  departmentId: "d123",
  userId: "542a40db20783c000000153d",
  uuid: "92c8f732-52b7-46cc-855a-d54fddfe3172",
  username: "E23",
  modified_unix_date: 1426983552.49945,
  device_type: "iPad",
  active: true,
  location: {
    "longitude": -122.304804409037,
    "latitude": 37.5419679656974
  }
};

describe("Location", function() {

  before(setupMongoose);
  after(clearMongoose);

  it("is saved", function(done) {
    var testData = testLocation;
    var item = new models.Location(testLocation);
    return item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testData._id);
      assert.equal(testData.departmentId, sut.departmentId);
      assert.equal(testData.userId, sut.userId);
      assert.equal(testData.uuid, sut.uuid);
      assert.equal(testData.username, sut.username);
      assert.equal(testData.modified_unix_date, sut.modified_unix_date);
      assert.equal(testData.device_type, sut.device_type);
      assert.equal(testData.request_time, sut.request_time);
      assert.equal(testData.active, sut.active);
      assert.equal(testData.location.longitude, sut.location.longitude);
      assert.equal(testData.location.latitude, sut.location.latitude);

      return done();
    });
  });
});
