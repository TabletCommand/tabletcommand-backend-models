import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("Battalion", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.Battalion>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.battalion;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.Battalion(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.active, sut.active);
    assert.equal(testItem.isMandatory, sut.isMandatory);
    assert.equal(testItem.name, sut.name);
    assert.equal(testItem.userId, sut.userId);
    assert.equal(testItem.position, sut.position);
    assert.equal(testItem.agencyId, sut.agencyId);
    assert.equal(testItem.local_id, sut.local_id);
    assert.equal(testItem.units?.length, 1);
    const expectedDate = new Date().valueOf() / 1000.0;
    let timeDelta = 1;
    if (sut.modified_unix_date) {
      timeDelta = expectedDate - sut.modified_unix_date;
    }
    assert.isTrue(timeDelta < 1);
  });
});
