import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("Message", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.Message>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.message;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.Message(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.title, sut.title);
    assert.equal(testItem.uuid, sut.uuid);
    assert.equal(testItem.requestId, sut.requestId);
    assert.equal(testItem.body, sut.body);
    assert.equal(testItem.actionTitle, sut.actionTitle);
    assert.equal(testItem.url, sut.url);
    assert.equal(testItem.priority, sut.priority);
    assert.equal(JSON.stringify(testItem.type), JSON.stringify(sut.type));
  });
});
