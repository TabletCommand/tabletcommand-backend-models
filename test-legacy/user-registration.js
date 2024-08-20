"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("UserRegistration", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.userRegistration;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.UserRegistration(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(sut.id, sut._id);
    assert.equal(testItem.email, sut.email);
    assert.equal(testItem.name, sut.name);
    assert.equal(testItem.firstName, sut.firstName);
    assert.equal(testItem.lastName, sut.lastName);
    assert.equal(testItem.department, sut.department);
    assert.equal(testItem.title, sut.title);
    assert.equal(testItem.modifiedDate, sut.modifiedDate);
    assert.equal(testItem.stage, sut.stage);
    assert.equal(testItem.presentedAt, sut.presentedAt);
    assert.equal(testItem.managedIncidentsCount, sut.managedIncidentsCount);
    assert.equal(testItem.checklistsCount, sut.checklistsCount);
    assert.equal(testItem.firstIncidentUnixTime, sut.firstIncidentUnixTime);
    assert.equal(testItem.lastIncidentLocation, sut.lastIncidentLocation);
    assert.equal(testItem.lastIncidentUnixTime, sut.lastIncidentUnixTime);
  });
});
