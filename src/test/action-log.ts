import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("ActionLog", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.ActionLog>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.actionLog;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.ActionLog(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.action, sut.action);
    assert.equal(testItem.email, sut.email);
    assert.equal(testItem.userId, sut.userId);
    assert.equal(testItem.object, sut.object);
    assert.equal(testItem.before, sut.before);
    assert.equal(testItem.after, sut.after);
    assert.equal(testItem.delta, sut.delta);
    const expectedDate = new Date().valueOf() / 1000.0;
    const timeDelta = expectedDate - sut.modified_unix_date;
    assert.isTrue(timeDelta < 1);
  });
});
