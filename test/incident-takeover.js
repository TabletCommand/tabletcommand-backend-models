"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("IncidentTakeover", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.incidentTakeover;
  });


  it("is saved", function () {
    var item = new models.IncidentTakeover(testItem);
    item.save().then((ress) => {

      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, ress.departmentId);
      assert.equal(testItem.incident_id, ress.incident_id);
      assert.equal(testItem.incident_name, ress.incident_name);
      assert.equal(testItem.incident_number, ress.incident_number);
      assert.equal(testItem.old_owner, ress.old_owner);
      assert.equal(testItem.new_owner, ress.new_owner);
      assert.equal(testItem.status, ress.status);
      assert.equal(testItem.request_time, ress.request_time);
      assert.isTrue(ress.uuid !== "");

    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
