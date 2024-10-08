import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("Agency", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.Agency>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.agency;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.Agency(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.active, sut.active);
    assert.equal(testItem.code, sut.code);
    assert.equal(testItem.name, sut.name);
    assert.equal(testItem.administrators?.length, 1);
    assert.equal(testItem.personnelIntegration, sut.personnelIntegration);
    assert.equal(testItem.personnelMonitorHours, sut.personnelMonitorHours);
    assert.equal(testItem.crossStaffing?.length, 1);
    const expectedDate = new Date().valueOf() / 1000.0;
    const timeDelta = expectedDate - sut.modified_unix_date;
    assert.isTrue(timeDelta < 1);
  });
});
