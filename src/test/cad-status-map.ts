import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("CADStatusMap", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.CADStatusMap>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.cadStatusMap;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.CADStatusMap(testItem);
    const sut = await item.save();

    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.modifiedDate, sut.modifiedDate);

    assert.equal(testItem.fromStatusId, sut.fromStatusId);
    if (sut.toStatusIds.length && testItem.toStatusIds?.length) {
      assert.equal(testItem.toStatusIds[0]?.statusId, sut.toStatusIds[0]?.statusId);
      assert.isTrue(sut.toStatusIds[0]?.userEnabled);
      assert.equal(sut.toStatusIds[0]?.position, 0);
    } else {
      assert.equal(sut.toStatusIds.length, 1);
      assert.equal(testItem.toStatusIds?.length, 1);
    }
  });
});
