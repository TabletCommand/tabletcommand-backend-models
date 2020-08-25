const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("CADVehicleStatusHistory", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(url);
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

  it("is saved", function(done) {
    const item = new models.CADVehicleStatusHistory(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.vehicleId, sut.vehicleId);
      assert.equal(testItem.radioName, sut.radioName);
      assert.equal(testItem.status, sut.status);
      assert.equal(testItem.statusCode, sut.statusCode);
      assert.equal(testItem.requestedAt, sut.requestedAt);
      assert.equal(testItem.requestedBy, sut.requestedBy);
      assert.equal(testItem.incidentNumber, sut.incidentNumber);

      return done();
    });
  });
});
