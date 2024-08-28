import { assert } from "chai";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("IncidentNotified", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.IncidentNotified>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.incidentNotified;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.IncidentNotified(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.IncidentNumber, sut.IncidentNumber);
    assert.deepEqual(testItem.incidentTypes, sut.incidentTypes);
    assert.deepEqual(testItem.units, sut.units);
    if (testItem.unitsByDispatch?.length) {
      assert.equal(testItem.unitsByDispatch[0]?.UnitID, sut.unitsByDispatch[0]?.UnitID);
      assert.equal(testItem.unitsByDispatch[0]?.UnitDispatchNumber, sut.unitsByDispatch[0]?.UnitDispatchNumber);
    } else {
      assert.equal(testItem?.unitsByDispatch?.length, 1);
    }
    assert.equal(testItem.updated?.toISOString(), sut.updated.toISOString());
  });
});
