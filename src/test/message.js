"use strict";

const assert = require("chai").assert;

const m = require("../../definitions");
const config = require("./config");

describe("Message", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.message;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.Message(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.title, sut.title);
    assert.equal(testItem.uuid, sut.uuid);
    assert.equal(testItem.requestId, sut.requestId);
    assert.equal(testItem.body, sut.body);
    assert.equal(testItem.actionTitle, sut.actionTitle);
    assert.equal(testItem.url, sut.url);
    assert.equal(testItem.priority, sut.priority);
    assert.equal(JSON.stringify(testItem.type), JSON.stringify(sut.type));
  });
});
