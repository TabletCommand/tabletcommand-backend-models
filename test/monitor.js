"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("Monitor", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.monitor;
  });


  it("is saved", async function () {
    const item = new models.Monitor(testItem);
    const ress = await item.save();
    assert.isNotNull(ress._id);

    assert.equal(testItem.departmentId, ress.departmentId);
    assert.equal(testItem.agencyId, ress.agencyId);
    assert.equal(testItem.notificationType, ress.notificationType);
    assert.equal(testItem.status, ress.status);
    assert.equal(testItem.sentUnixDate, ress.sentUnixDate);
  });
});
