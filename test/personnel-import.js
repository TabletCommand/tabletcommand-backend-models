"use strict";

const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const models = require("../index");

const Mockgoose = require("mockgoose").Mockgoose;
const mockgoose = new Mockgoose(mongoose);

const redisClient = require("redis-js");

const mock = require("./mock")({
  mockgoose,
  mongoose,
  models,
  redisClient
});

const assert = require("chai").assert;
const testItem = mock.personnelImport;

describe("PersonnelImport", function() {
  beforeEach(function(done) {
    mock.beforeEach(done);
  });

  afterEach(function(done) {
    mock.afterEach(done);
  });

  it("is saved", function(done) {
    const item = new models.PersonnelImport(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");
      assert.isNotNull(testItem._id);
      assert.equal(testItem.userId, sut.userId);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.notificationCount, sut.notificationCount);
      assert.equal(testItem.PersonnelID, sut.PersonnelID);
      assert.equal(testItem.PersonnelName, sut.PersonnelName);
      assert.equal(testItem.PersonnelRank, sut.PersonnelRank);
      assert.equal(testItem.PersonnelWorkCode, sut.PersonnelWorkCode);
      assert.equal(testItem.PersonnelNote, sut.PersonnelNote);
      assert.equal(testItem.DepartmentId, sut.DepartmentId);
      assert.equal(testItem.UnitID, sut.UnitID);
      assert.equal(testItem.ShiftStartDateTime, sut.ShiftStartDateTime);
      assert.equal(testItem.ShiftEndDateTime, sut.ShiftEndDateTime);
      assert.equal(testItem.ImportedDateTime, sut.ImportedDateTime);

      return done();
    });
  });
});
