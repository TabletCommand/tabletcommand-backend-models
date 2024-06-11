const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("CADVehicleStatusHistory", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.cadVehicleStatusHistory;
  });


  it("is saved", function () {
    const item = new models.CADVehicleStatusHistory(testItem);
    item.save().then((ress) => {

      assert.equal(testItem.departmentId, ress.departmentId);
      assert.equal(testItem.vehicleId, ress.vehicleId);
      assert.equal(testItem.radioName, ress.radioName);
      assert.equal(testItem.status, ress.status);
      assert.equal(testItem.statusCode, ress.statusCode);
      assert.equal(testItem.requestedAt, ress.requestedAt);
      assert.equal(testItem.requestedBy, ress.requestedBy);
      assert.equal(testItem.incidentNumber, ress.incidentNumber);

    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
