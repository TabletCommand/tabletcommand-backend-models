"use strict";

const _ = require("lodash");
const assert = require("chai").assert;

const mongoose = require('mongoose');

describe("CADIncidentBlock", function() {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function() {

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.cadIncidentBlock;
    await mock.beforeEach();
  });


  it("is saved", async function() {
    const item = new models.CADIncidentBlock(testItem);
    const ress = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(ress.EntryDateTime, testItem.EntryDateTime);
    assert.equal(ress.ClosedDateTime, testItem.ClosedDateTime);
    assert.equal(ress.source, testItem.source);
    assert.equal(ress.IncidentNumber, testItem.IncidentNumber);
    assert.equal(ress.departmentId, testItem.departmentId);
    assert.equal(ress.AgencyIncidentCallTypeDescription, testItem.AgencyIncidentCallTypeDescription);
    assert.equal(ress.createdAt.toISOString(), new Date(testItem.createdAt).toISOString());
    assert.equal(ress.ReportNumber.length, 1);
    const rn = _.first(ress.ReportNumber);
    assert.equal(rn.name, "Incident");
    assert.equal(rn.number, "CA68");
  });
});
