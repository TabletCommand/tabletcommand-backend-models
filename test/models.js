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
  if (mongoose.connection.db){
    return done();
  }

  mongoose.connect(config.db);
  mongoose.connection.on("open", function(){
    return done();
  });

  mongoose.connection.on("error", function(){
    assert.fail("Could not connect");
    return done();
  });
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
  departmentId: "123"
};

describe("Models", function(){
  it("are wired", function(done){

    // These should match index.js
    assert.isFunction(models.CadStatus, "Missing CadStatus");
    assert.isFunction(models.CadStatusMap, "Missing CadStatusMap");
    assert.isFunction(models.CadVehicle, "Missing CadVehicle");
    assert.isFunction(models.CadVehicleStatus, "Missing CadVehicleStatus");
    assert.isFunction(models.Department, "Missing Department");
    assert.isFunction(models.Session, "Missing Session");
    assert.isFunction(models.User, "Missing User");

    return done();
  });
});

describe("User", function(){

  before(setupMongoose);
  after(clearMongoose);

  it("is saved", function(done){
    var user = new models.User(testUser);

    return user.save(function(err, sut){
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
