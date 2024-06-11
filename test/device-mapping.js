"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("DeviceMapping", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.deviceMapping;
  });


  it("is saved", function () {
    var item = new models.DeviceMapping(testItem);
    item.save().then((ress) => {

      assert.isNotNull(testItem._id);
      assert.equal(testItem.departmentId, ress.departmentId);
      assert.equal(testItem.deviceType, ress.deviceType);
      assert.equal(testItem.mapId, ress.mapId);
      assert.equal(testItem.deviceId, ress.deviceId);
      assert.equal(testItem.modified_unix_date, ress.modified_unix_date);
      assert.equal(testItem.remoteAddress, ress.remoteAddress);
      assert.equal(testItem.note, ress.note);
      assert.isFalse(ress.active);
      assert.isFalse(ress.mapHidden);

    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
