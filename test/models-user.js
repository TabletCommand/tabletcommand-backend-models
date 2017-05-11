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

var testUser = {
  _id: mongoose.Types.ObjectId(),
  nick: "Test",
  email: "test@save.me",
  mapId: "TEST",
  departmentId: "d123"
};

describe("User", function() {
  before(setupMongoose);
  after(clearMongoose);

  it("is saved", function(done) {
    var item = new models.User(testUser);
    item.save(function(err, sut) {
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
