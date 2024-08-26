import { assert } from "chai";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("Mark43IncidentRetry", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.Mark43IncidentRetry>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.mark43IncidentRetry;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.Mark43IncidentRetry(testItem);
    const sut = await item.save();

    assert.isNotNull(sut._id);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.active, sut.active);
    assert.equal(testItem.mark43IncidentId, sut.mark43IncidentId);
    assert.equal(JSON.stringify(testItem.retryPayload), JSON.stringify(sut.retryPayload));
  });
});
