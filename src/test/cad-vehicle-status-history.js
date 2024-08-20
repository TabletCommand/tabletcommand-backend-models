const assert = require("chai").assert;

const m = require("../../definitions");
const config = require("./config");

describe("CADVehicleStatusHistory", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.cadVehicleStatusHistory;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.CADVehicleStatusHistory(testItem);
    const sut = await item.save();

    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.vehicleId, sut.vehicleId);
    assert.equal(testItem.radioName, sut.radioName);
    assert.equal(testItem.status, sut.status);
    assert.equal(testItem.statusCode, sut.statusCode);
    assert.equal(testItem.requestedAt, sut.requestedAt);
    assert.equal(testItem.requestedBy, sut.requestedBy);
    assert.equal(testItem.incidentNumber, sut.incidentNumber);
  });
});
