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
