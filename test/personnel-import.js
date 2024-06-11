"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("PersonnelImport", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.personnelImport;
  });


  it("is saved", async function () {
    const item = new models.PersonnelImport(testItem);
    const ress = await item.save();
    assert.equal(testItem._id, ress._id);
    assert.equal(testItem.PersonnelID, ress.PersonnelID);
    assert.equal(testItem.PersonnelName, ress.PersonnelName);
    assert.equal(testItem.PersonnelRank, ress.PersonnelRank);
    assert.equal(testItem.PersonnelWorkCode, ress.PersonnelWorkCode);
    assert.equal(testItem.PersonnelNote, ress.PersonnelNote);
    assert.equal(testItem.departmentId, ress.departmentId);
    assert.equal(testItem.radioNames[0], ress.radioNames[0]);
    assert.equal(testItem.radioNames[1], ress.radioNames[1]);
    assert.equal(ress.radioNames.length, 2);
    assert.equal(testItem.shiftStartTime, ress.shiftStartTime);
    assert.equal(testItem.shiftEndTime, ress.shiftEndTime);
    assert.equal(testItem.modified_unix_date, ress.modified_unix_date);
    assert.equal(testItem.active, ress.active);
    assert.equal(testItem.agencyName, ress.agencyName);
    assert.equal(testItem.agencyCode, ress.agencyCode);
    assert.equal(testItem.agencyId, ress.agencyId);
    assert.equal(testItem.importNotes, ress.importNotes);
    assert.equal(testItem.modified.toString(), ress.modified.toISOString());
    assert.equal(testItem.shiftStart.toString(), ress.shiftStart.toISOString());
    assert.equal(testItem.shiftEnd.toString(), ress.shiftEnd.toISOString());
  });
});

