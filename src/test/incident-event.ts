import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("IncidentEvent", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.IncidentEvent>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.incidentEvent;
    await models.IncidentEvent.deleteMany({
      departmentId: testItem.departmentId
    });
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.IncidentEvent(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.IncidentNumber, sut.IncidentNumber);
    assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
    assert.equal(testItem.message, sut.message);
    assert.equal(testItem.userTime, sut.userTime);
    assert.equal(testItem.type, sut.type);
    assert.equal(testItem.uuid, sut.uuid);
    assert.equal(testItem.location?.latitude, sut.location.latitude);
    assert.equal(testItem.location?.longitude, sut.location.longitude);
    assert.equal(testItem.user?.email, sut.user.email);
    assert.equal(testItem.user?.username, sut.user.username);
    assert.equal(testItem.user?.radioName, sut.user.radioName);
    assert.equal(testItem.user?.userId, sut.user.userId);

    const items = await models.IncidentEvent.find({
      departmentId: item.departmentId
    }).lean({
      virtuals: true
    });
    assert.equal(items.length, 1);
  });
});
