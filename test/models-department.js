"use strict";

if (process.env.NODE_ENV !== "test") {
  console.log(`NODE_ENV=${process.env.NODE_ENV} which might cause problems.`);
  process.exit(1);
}

var assert = require("chai").assert;
var mongoose = require("mongoose");

var config = require("../config");
var models = require("../index");

var setupMongoose = function(done) {
  mongoose.Promise = require("bluebird");
  mongoose.connect(config.db, done);
};

var clearMongoose = function(done) {
  mongoose.connection.db.dropDatabase(function() {
    mongoose.connection.close(done);
  });
};

var testData = {
  _id: mongoose.Types.ObjectId(),
  department: "Test Department",
  city: "San Francisco",
  active: true,
  apikey: "abcd",
  rtsEnabled: true,
  rtsChannelPrefix: "CHTEST",
  rtsAuthKey: "CHAUTHKEY",
  agency: [
    "A", "B", "C"
  ],
  signupKey: "A1B2",
  incidentTypes: [{
    name: "Type",
    value: "type"
  }]
};

describe("Department", function() {
  before(setupMongoose);
  after(clearMongoose);

  it("is saved", function(done) {
    var item = new models.Department(testData);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testData._id);
      assert.equal(sut.department, testData.department);
      assert.equal(sut.city, testData.city);
      assert.isTrue(sut.active);
      assert.equal(sut.apikey, testData.apikey);
      assert.isTrue(sut.rtsEnabled);
      assert.equal(sut.rtsChannelPrefix, testData.rtsChannelPrefix);
      assert.equal(sut.rtsAuthKey, testData.rtsAuthKey);
      assert.equal(sut.signupKey, testData.signupKey);
      assert.equal(sut.agency.length, 3);
      assert.equal(sut.agency[0], testData.agency[0]);
      assert.equal(sut.incidentTypes.length, 1);
      assert.equal(sut.incidentTypes[0].name, testData.incidentTypes[0].name);

      return done();
    });
  });
});
