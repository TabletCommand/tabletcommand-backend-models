import { assert } from "chai";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("CADVehicleStatus", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.CADVehicleStatus>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.cadVehicleStatus;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.CADVehicleStatus(testItem);
    const sut = await item.save();

    assert.equal(testItem.uuid, sut.uuid);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.vehicleId, sut.vehicleId);
    assert.equal(testItem.radioName, sut.radioName);
    assert.equal(testItem.requestTime, sut.requestTime);
    assert.equal(testItem.responseTime, sut.responseTime);
    assert.equal(testItem.status, sut.status);
    assert.equal(testItem.statusCode, sut.statusCode);
    assert.equal(testItem.modifiedDate, sut.modifiedDate);
    assert.equal(testItem.requestStatus, sut.requestStatus);
    assert.equal(testItem.incidentNumber, sut.incidentNumber);
    assert.equal(testItem.capability, sut.capability);
    assert.equal(testItem.owner, sut.owner);
    assert.equal(testItem.ownerId, sut.ownerId);
  });
});
