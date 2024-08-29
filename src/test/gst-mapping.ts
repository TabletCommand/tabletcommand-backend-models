import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("GSTMapping", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.GSTMapping>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.gstMapping;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.GSTMapping(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.deviceType, sut.deviceType);
    assert.equal(testItem.unitId, sut.unitId);
    assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
    assert.equal(testItem.remoteAddress, sut.remoteAddress);
    assert.equal(testItem.note, sut.note);
    assert.isFalse(sut.active);
    assert.isFalse(sut.mapHidden);
  });
});
