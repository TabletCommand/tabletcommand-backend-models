"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("IncidentNotified", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.incidentNotified;
  });


  it("is saved", function () {
    const item = new models.IncidentNotified(testItem);
    item.save().then((ress) => {

      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, ress.departmentId);
      assert.equal(testItem.IncidentNumber, ress.IncidentNumber);
      assert.deepEqual(testItem.incidentTypes, ress.incidentTypes);
      assert.deepEqual(testItem.units, ress.units);
      assert.equal(testItem.unitsByDispatch[0].UnitID, ress.unitsByDispatch[0].UnitID);
      assert.equal(testItem.unitsByDispatch[0].UnitDispatchNumber, ress.unitsByDispatch[0].UnitDispatchNumber);
      assert.equal(testItem.updated, ress.updated.toISOString());

    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
