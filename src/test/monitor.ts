import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("Monitor", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.Monitor>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.monitor;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.Monitor(testItem);
    const sut = await item.save();
    assert.isNotNull(sut._id);

    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.agencyId, sut.agencyId);
    assert.equal(testItem.notificationType, sut.notificationType);
    assert.equal(testItem.status, sut.status);
    assert.equal(testItem.sentUnixDate, sut.sentUnixDate);
  });
});
