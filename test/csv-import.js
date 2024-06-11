"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("CSVImport", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.csvImport;
  });


  it("is saved", async function () {
    const item = new models.CSVImport(testItem);
    const ress = await item.save();
    assert.equal(testItem._id, ress._id);
    assert.equal(testItem.batchId, ress.batchId);
    // assert.equal(testItem.importCreated, ress.importCreated);
    assert.equal(testItem.departmentId, ress.departmentId);
    assert.equal(testItem.agencyId, ress.agencyId);
    assert.equal(testItem.importType, ress.importType);
    assert.equal(testItem.fileType, ress.fileType);
    assert.equal(testItem.fileName, ress.fileName);
    assert.equal(testItem.fileSize, ress.fileSize);
    assert.equal(testItem.status, ress.status);
    // assert.equal(testItem.modifiedDate, ress.modifiedDate);
    // assert.equal(testItem.fileLastModified, ress.fileLastModified);
    assert.equal(testItem.records.length, 0);
    assert.equal(testItem.userId, ress.userId);
    assert.equal(testItem.sendNotification, ress.sendNotification);
  });
});

