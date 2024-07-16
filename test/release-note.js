"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("ReleaseNote", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.releaseNote;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.ReleaseNote(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(testItem.title, sut.title);
    assert.equal(testItem.notes, sut.notes);
    assert.equal(testItem.version, sut.version);
    assert.equal(testItem.releaseDate, sut.releaseDate);
    assert.equal(testItem.status, sut.status);
  });
});