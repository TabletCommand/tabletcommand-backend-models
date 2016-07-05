/* jslint node: true */
"use strict";

if ( process.env.NODE_ENV !== 'test' ) {
    console.log('NODE_ENV=' + process.env.NODE_ENV + ' which might cause problems.');
    process.exit(1);
}

var assert = require("chai").assert;
var mongoose = require("mongoose");

var config = require("../config");
var models = require("../index");

var setupMongoose = function(done){
  mongoose.connect(config.db, done);
};

var clearMongoose = function(done){
  mongoose.connection.db.dropDatabase(function(){
    mongoose.connection.close(done);
  });
};

var testUser = {
  _id: mongoose.Types.ObjectId(),
  nick: "Test",
  email: "test@save.me",
  mapId: "TEST",
  departmentId: "d123"
};

var testIncidentTakeover = {
  _id: mongoose.Types.ObjectId(),
  incident_id: "i1234",
  incident_name: "Test Incident",
  departmentId: "d123",
  old_owner: "user1",
  new_owner: "user2",
  owner: "",
  status: "request",
  request_time: 1442888560
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
    "longitude" : -122.304804409037,
    "latitude" : 37.5419679656974
  }
};

describe("Models", function(){
  it("are wired", function(done){

    // These should match index.js
    assert.isFunction(models.CADStatus, "Missing CadStatus");
    assert.isFunction(models.CADStatusMap, "Missing CadStatusMap");
    assert.isFunction(models.CADVehicle, "Missing CadVehicle");
    assert.isFunction(models.CADVehicleStatus, "Missing CadVehicleStatus");
    assert.isFunction(models.Department, "Missing Department");
    assert.isFunction(models.IncidentTakeover, "Missing IncidentTakeover");
    assert.isFunction(models.Location, "Missing Location");
    assert.isFunction(models.Session, "Missing Session");
    assert.isFunction(models.User, "Missing User");

    return done();
  });
});

describe("User", function(){

  before(setupMongoose);
  after(clearMongoose);

  it("is saved", function(done){
    var item = new models.User(testUser);
    return item.save(function(err, sut){
      assert.isNull(err, "Should not err");

      assert.isNotNull(testUser._id);
      assert.equal(testUser.nick, sut.nick);
      assert.equal(testUser.email, sut.email);
      assert.equal(testUser.mapId, sut.mapId);
      assert.equal(testUser.departmentId, sut.departmentId);
      assert.isFalse(sut.active);
      assert.isFalse(sut.admin);
      assert.isFalse(sut.superuser);

      return done();
    });
  });
});

describe("IncidentTakeover", function(){

  before(setupMongoose);
  after(clearMongoose);

  it("is saved", function(done){
    var testData = testIncidentTakeover;
    var item = new models.IncidentTakeover(testData);
    return item.save(function(err, sut){
      assert.isNull(err, "Should not err");

      assert.isNotNull(testData._id);
      assert.equal(testData.departmentId, sut.departmentId);
      assert.equal(testData.incident_id, sut.incident_id);
      assert.equal(testData.incident_name, sut.incident_name);
      assert.equal(testData.old_owner, sut.old_owner);
      assert.equal(testData.new_owner, sut.new_owner);
      assert.equal(testData.status, sut.status);
      assert.equal(testData.request_time, sut.request_time);

      return done();
    });
  });
});

describe("Location", function(){

  before(setupMongoose);
  after(clearMongoose);

  it("is saved", function(done){
    var testData = testLocation;
    var item = new models.Location(testLocation);
    return item.save(function(err, sut){
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
