import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("Assignment", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.Assignment>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.assignment;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.Assignment(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(sut._id.toString(), sut.id);

    assert.equal(testItem.position, sut.position);
    assert.equal(testItem.active, sut.active);
    assert.equal(testItem.name, sut.name);
    assert.equal(testItem.userId, sut.userId);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.isMandatory, sut.isMandatory);
    const expectedDate = new Date().valueOf() / 1000.0;
    const timeDelta = expectedDate - sut.modified_unix_date;
    assert.isTrue(timeDelta < 1);
  });
});
