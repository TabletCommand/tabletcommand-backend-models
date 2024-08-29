import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("DeviceMapping", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.DeviceMapping>, testItemForTrim: Partial<m.DeviceMapping>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.deviceMapping;
    testItemForTrim = mock.deviceMappingWithWhiteSpaces;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.DeviceMapping(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.deviceType, sut.deviceType);
    assert.equal(testItem.mapId, sut.mapId);
    assert.equal(testItem.deviceId, sut.deviceId);
    assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
    assert.equal(testItem.remoteAddress, sut.remoteAddress);
    assert.equal(testItem.note, sut.note);
    assert.isFalse(sut.active);
    assert.isFalse(sut.mapHidden);
  });


  it("is saved with trim", async function() {
    const item = new models.DeviceMapping(testItemForTrim);
    const sut = await item.save();
    assert.isNotNull(testItemForTrim._id);
    assert.equal(testItemForTrim.departmentId, sut.departmentId);
    assert.equal(testItemForTrim.modified_unix_date, sut.modified_unix_date);
    assert.equal(testItemForTrim.mapId?.trim(), sut.mapId); // Should be trimmed by Schema
    assert.equal(testItemForTrim.deviceId?.trim(), sut.deviceId); // Should be trimmed by Schema
    assert.equal(testItemForTrim.remoteAddress?.trim(), sut.remoteAddress); // Should be trimmed by Schema
    assert.equal(testItemForTrim.note?.trim(), sut.note); // Should be trimmed by Schema
  });
});
