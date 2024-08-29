import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("CADVehicleStatusHistory", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.CADVehicleStatusHistory>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.cadVehicleStatusHistory;
  });
  afterEach(async function() {
    await mongoose.disconnect();
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
