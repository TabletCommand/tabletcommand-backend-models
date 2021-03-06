"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("PersonnelImport", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
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

  it("is saved", async function() {
    const item = new models.PersonnelImport(testItem);
    const sut = await item.save();
    assert.equal(testItem._id, sut._id);
    assert.equal(testItem.PersonnelID, sut.PersonnelID);
    assert.equal(testItem.PersonnelName, sut.PersonnelName);
    assert.equal(testItem.PersonnelRank, sut.PersonnelRank);
    assert.equal(testItem.PersonnelWorkCode, sut.PersonnelWorkCode);
    assert.equal(testItem.PersonnelNote, sut.PersonnelNote);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.radioNames[0], sut.radioNames[0]);
    assert.equal(testItem.radioNames[1], sut.radioNames[1]);
    assert.equal(sut.radioNames.length, 2);
    assert.equal(testItem.shiftStartTime, sut.shiftStartTime);
    assert.equal(testItem.shiftEndTime, sut.shiftEndTime);
    assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
    assert.equal(testItem.active, sut.active);
    assert.equal(testItem.agencyName, sut.agencyName);
    assert.equal(testItem.agencyCode, sut.agencyCode);
    assert.equal(testItem.agencyId, sut.agencyId);
    assert.equal(testItem.importNotes, sut.importNotes);
    assert.equal(testItem.modified.toString(), sut.modified.toISOString());
    assert.equal(testItem.shiftStart.toString(), sut.shiftStart.toISOString());
    assert.equal(testItem.shiftEnd.toString(), sut.shiftEnd.toISOString());
  });
});

