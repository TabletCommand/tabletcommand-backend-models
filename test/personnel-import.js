"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("PersonnelImport", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.personnelImport;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", function(done) {
    const item = new models.PersonnelImport(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");
      assert.equal(testItem._id, sut._id);
      assert.equal(testItem.PersonnelID, sut.PersonnelID);
      assert.equal(testItem.PersonnelName, sut.PersonnelName);
      assert.equal(testItem.PersonnelRank, sut.PersonnelRank);
      assert.equal(testItem.PersonnelWorkCode, sut.PersonnelWorkCode);
      assert.equal(testItem.PersonnelNote, sut.PersonnelNote);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.radioName, sut.radioName);
      assert.equal(testItem.shiftStartTime, sut.shiftStartTime);
      assert.equal(testItem.shiftEndTime, sut.shiftEndTime);
      assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
      assert.equal(testItem.active, sut.active);

      return done();
    });
  });
});

