"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("CADStatusMap", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.cadStatusMap;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", function(done) {
    const item = new models.CADStatusMap(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.modifiedDate, sut.modifiedDate);

      assert.equal(testItem.fromStatusId, sut.fromStatusId);
      assert.equal(sut.toStatusIds.length, 1);
      assert.equal(testItem.toStatusIds[0].statusId, sut.toStatusIds[0].statusId);
      assert.isTrue(sut.toStatusIds[0].userEnabled);
      assert.equal(sut.toStatusIds[0].position, 0);

      return done();
    });
  });
});
