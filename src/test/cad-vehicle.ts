import { assert } from "chai";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("CADVehicle", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.CADVehicle>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.cadVehicle;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.CADVehicle(testItem);
    const sut = await item.save();

    assert.equal(testItem.uuid, sut.uuid);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.modifiedDate, sut.modifiedDate);
    assert.equal(testItem.vehicleId, sut.vehicleId);
    assert.equal(testItem.radioName, sut.radioName);
    assert.equal(testItem.station?.code, sut.station.code);
    assert.equal(testItem.station?.name, sut.station.name);
    assert.equal(testItem.capability, sut.capability);
    assert.isFalse(sut.locationToCAD);
  });
});
