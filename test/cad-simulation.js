"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("CadSimulation", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.cadSimulation;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.CADSimulation(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.title, sut.title);
    assert.equal(testItem.friendlyId, sut.friendlyId);
  });
});
