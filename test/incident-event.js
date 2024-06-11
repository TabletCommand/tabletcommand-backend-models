"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("IncidentEvent", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.incidentEvent;
    await models.IncidentEvent.deleteMany({
      departmentId: testItem.departmentId
    });
  });


  it("is saved", async function () {
    const item = new models.IncidentEvent(testItem);
    const ress = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, ress.departmentId);
    assert.equal(testItem.IncidentNumber, ress.IncidentNumber);
    assert.equal(testItem.modified_unix_date, ress.modified_unix_date);
    assert.equal(testItem.message, ress.message);
    assert.equal(testItem.userTime, ress.userTime);
    assert.equal(testItem.type, ress.type);
    assert.equal(testItem.uuid, ress.uuid);
    assert.equal(testItem.location.latitude, ress.location.latitude);
    assert.equal(testItem.location.longitude, ress.location.longitude);
    assert.equal(testItem.user.email, ress.user.email);
    assert.equal(testItem.user.username, ress.user.username);
    assert.equal(testItem.user.radioName, ress.user.radioName);
    assert.equal(testItem.user.userId, ress.user.userId);

    const items = await models.IncidentEvent.find({
      departmentId: item.departmentId
    }).lean({
      virtuals: true
    });
    assert.equal(items.length, 1);
  });
});
