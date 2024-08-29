import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("IncidentTakeover", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.IncidentTakeover>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.incidentTakeover;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.IncidentTakeover(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.incident_id, sut.incident_id);
    assert.equal(testItem.incident_name, sut.incident_name);
    assert.equal(testItem.incident_number, sut.incident_number);
    assert.equal(testItem.old_owner, sut.old_owner);
    assert.equal(testItem.new_owner, sut.new_owner);
    assert.equal(testItem.status, sut.status);
    assert.equal(testItem.request_time, sut.request_time);
    assert.isTrue(sut.uuid !== "");
  });
});
