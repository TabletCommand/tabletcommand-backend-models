"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("CSVImport", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.csvImport;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.CSVImport(testItem);
    const sut = await item.save();
    assert.equal(testItem._id, sut._id);
    assert.equal(testItem.batchId, sut.batchId);
    // assert.equal(testItem.importCreated, sut.importCreated);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.agencyId, sut.agencyId);
    assert.equal(testItem.importType, sut.importType);
    assert.equal(testItem.fileType, sut.fileType);
    assert.equal(testItem.fileName, sut.fileName);
    assert.equal(testItem.fileSize, sut.fileSize);
    assert.equal(testItem.status, sut.status);
    // assert.equal(testItem.modifiedDate, sut.modifiedDate);
    // assert.equal(testItem.fileLastModified, sut.fileLastModified);
    assert.equal(testItem.records.length, 0);
    assert.equal(testItem.userId, sut.userId);
  });
});

