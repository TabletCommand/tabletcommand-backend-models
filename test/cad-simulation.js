"use strict";

const assert = require("chai").assert;

const mongoose = require('mongoose');

describe("CadSimulation", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.cadSimulation;
  });


  it("is saved", function () {
    var item = new models.CADSimulation(testItem);
    item.save().then((ress) => {
      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, ress.departmentId);
      assert.equal(testItem.title, ress.title);
      assert.equal(testItem.friendlyId, ress.friendlyId);

    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
