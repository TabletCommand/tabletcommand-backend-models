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
  mongoose.connect(config.db, done);
};

var clearMongoose = function(done) {
  mongoose.connection.db.dropDatabase(function() {
    mongoose.connection.close(done);
  });
};

var testItem = {
  email: "test@email.com",
  name: "John Waters",
  department: "New York City, NY",
  title: "Mr",
  modifiedDate: 1426983552.49945,
  status: "registered",
  stage: "afterEULA",
  presentedAt: 1488157071.042124,
  managedIncidentsCount: 1,
  checklistsCount: 2,
  firstIncidentUnixTime: 1443666043.380937,
  lastIncidentLocation: "40.999357,-85.767932",
  lastIncidentUnixTime: 1480525299.50968
};

describe("UserRegistration", function() {
  before(setupMongoose);
  after(clearMongoose);

  it("is saved", function(done) {
    var testData = testItem;
    var item = new models.UserRegistration(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testData._id);
      assert.equal(testData.email, sut.email);
      assert.equal(testData.name, sut.name);
      assert.equal(testData.department, sut.department);
      assert.equal(testData.title, sut.title);
      assert.equal(testData.modifiedDate, sut.modifiedDate);
      assert.equal(testData.stage, sut.stage);
      assert.equal(testData.presentedAt, sut.presentedAt);
      assert.equal(testData.managedIncidentsCount, sut.managedIncidentsCount);
      assert.equal(testData.checklistsCount, sut.checklistsCount);
      assert.equal(testData.firstIncidentUnixTime, sut.firstIncidentUnixTime);
      assert.equal(testData.lastIncidentLocation, sut.lastIncidentLocation);
      assert.equal(testData.lastIncidentUnixTime, sut.lastIncidentUnixTime);

      return done();
    });
  });
});
