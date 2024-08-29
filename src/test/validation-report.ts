import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("ValidationReport", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.ValidationReport>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.validationReport;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.ValidationReport(testItem);
    const sut = await item.save();

    assert.isNotNull(item._id);
    assert.equal(testItem.departmentId?.toString(), sut.departmentId.toString());
    assert.equal(testItem.modified?.toString(), sut.modified.toString());
    assert.deepEqual(testItem.location, []);
  });
});
