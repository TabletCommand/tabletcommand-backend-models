"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("Checklist", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.checklist;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.Checklist(testItem);
    const sut = await item.save();
    assert.isNotNull(item._id);
    assert.equal(item._id, sut.id);
    assert.equal(testItem.position, sut.position);
    assert.equal(testItem.active, sut.active);
    assert.equal(testItem.name, sut.name);
    assert.equal(testItem.userId, sut.userId);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.isMandatory, sut.isMandatory);
    assert.equal(testItem.agencyId, sut.agencyId);
    const expectedDate = new Date().valueOf() / 1000.0;
    const timeDelta = expectedDate - sut.modified_unix_date;
    assert.isTrue(timeDelta < 1);

    const items = sut.items;
    assert.isArray(items);
    assert.equal(items.length, 1);
  });
});
