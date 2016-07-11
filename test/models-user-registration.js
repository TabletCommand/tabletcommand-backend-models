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

var testItem = {
  email: "test@email.com",
  name: "John Waters",
  department: "New York City, NY",
  title: "Mr",
  modifiedDate: 1426983552.49945,
  status: "registered"
};

describe("UserRegistration", function(){

  before(setupMongoose);
  after(clearMongoose);

  it("is saved", function(done){
    var testData = testItem;
    var item = new models.UserRegistration(testItem);
    return item.save(function(err, sut){
      assert.isNull(err, "Should not err");

      assert.isNotNull(testData._id);
      assert.equal(testData.email, sut.email);
      assert.equal(testData.name, sut.name);
      assert.equal(testData.department, sut.department);
      assert.equal(testData.title, sut.title);
      assert.equal(testData.modifiedDate, sut.modifiedDate);
      assert.equal(testData.status, sut.status);

      return done();
    });
  });
});
