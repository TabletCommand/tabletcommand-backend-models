import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("Session", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.Session>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.session;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.Session(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(sut.user, testItem.user);
    assert.equal(sut.email, testItem.email);
    assert.equal(sut.nick, testItem.nick);
    assert.isFalse(sut.active);
    assert.equal(sut.deviceId, testItem.deviceId);
    assert.equal(sut.remoteAddress, testItem.remoteAddress);
    assert.equal(sut.userAgent, testItem.userAgent);
    assert.equal(sut.source, testItem.source);
    assert.equal(sut.token, testItem.token);
    assert.equal(sut.ended, testItem.ended);
    assert.equal(sut.departmentId, testItem.departmentId);
    assert.equal(sut.when, testItem.when);
    assert.equal(sut.id, sut._id);
  });
});
