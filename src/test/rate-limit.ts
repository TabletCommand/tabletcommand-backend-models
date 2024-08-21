import { assert } from "chai";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("RateLimit", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.RateLimit>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.rateLimit;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.RateLimit(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(sut.username, testItem.username);
    assert.equal(sut.modified_unix_date, testItem.modified_unix_date);
    assert.equal(sut.count, testItem.count);
  });
});
