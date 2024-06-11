"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("UserRegistration", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.userRegistration;
  });


  it("is saved", function () {
    const item = new models.UserRegistration(testItem);
    item.save().then((ress) => {

      assert.isNotNull(testItem._id);
      assert.equal(ress.id, ress._id);
      assert.equal(testItem.email, ress.email);
      assert.equal(testItem.name, ress.name);
      assert.equal(testItem.firstName, ress.firstName);
      assert.equal(testItem.lastName, ress.lastName);
      assert.equal(testItem.department, ress.department);
      assert.equal(testItem.title, ress.title);
      assert.equal(testItem.modifiedDate, ress.modifiedDate);
      assert.equal(testItem.stage, ress.stage);
      assert.equal(testItem.presentedAt, ress.presentedAt);
      assert.equal(testItem.managedIncidentsCount, ress.managedIncidentsCount);
      assert.equal(testItem.checklistsCount, ress.checklistsCount);
      assert.equal(testItem.firstIncidentUnixTime, ress.firstIncidentUnixTime);
      assert.equal(testItem.lastIncidentLocation, ress.lastIncidentLocation);
      assert.equal(testItem.lastIncidentUnixTime, ress.lastIncidentUnixTime);

    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
