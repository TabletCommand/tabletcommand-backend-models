import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("JobLog", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.JobLog>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.jobLog;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.JobLog(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(testItem.host, sut.host);
    assert.equal(testItem.jobName, sut.jobName);
    assert.equal(testItem.state, sut.state);
    assert.equal(testItem.bidDate, sut.bidDate);
    assert.equal(testItem.startDate, sut.startDate);
    assert.equal(testItem.completedDate, sut.completedDate);
    assert.equal(testItem.forceClosed, sut.forceClosed);
  });
});
