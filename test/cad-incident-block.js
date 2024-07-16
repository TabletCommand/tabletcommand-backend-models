"use strict";

const _ = require("lodash");
const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("CADIncidentBlock", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.cadIncidentBlock;
    await mock.beforeEach();
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.CADIncidentBlock(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(sut.EntryDateTime, testItem.EntryDateTime);
    assert.equal(sut.ClosedDateTime, testItem.ClosedDateTime);
    assert.equal(sut.source, testItem.source);
    assert.equal(sut.IncidentNumber, testItem.IncidentNumber);
    assert.equal(sut.departmentId, testItem.departmentId);
    assert.equal(sut.AgencyIncidentCallTypeDescription, testItem.AgencyIncidentCallTypeDescription);
    assert.equal(sut.createdAt.toISOString(), new Date(testItem.createdAt).toISOString());
    assert.equal(sut.ReportNumber.length, 1);
    const rn = _.first(sut.ReportNumber);
    assert.equal(rn.name, "Incident");
    assert.equal(rn.number, "CA68");
  });
});
