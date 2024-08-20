import { assert } from "chai";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("CadSimulation", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.CADSimulation>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.cadSimulation;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.CADSimulation(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.title, sut.title);
    assert.equal(testItem.friendlyId, sut.friendlyId);
  });
});
