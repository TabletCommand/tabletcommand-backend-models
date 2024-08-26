import { assert } from "chai";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("CADStatus", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.CADStatus>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.cadStatus;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.CADStatus(testItem);
    const sut = await item.save();

    assert.equal(testItem.uuid, sut.uuid);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.modifiedDate, sut.modifiedDate);
    assert.equal(testItem.code, sut.code);
    assert.equal(testItem.codeDisplay, sut.codeDisplay);
    assert.equal(testItem.color?.background, sut.color.background);
    assert.equal(testItem.color?.text, sut.color.text);
    assert.equal(testItem.name, sut.name);
    assert.equal(testItem.normalized, sut.normalized);
    assert.isFalse(sut.roaming);
    assert.isTrue(sut.selfAssignable);
    assert.equal(testItem.status, sut.status);
    assert.equal(testItem.statusId, sut.statusId);
    if (testItem.options?.length && sut.options.length) {
      assert.equal(testItem.options[0]?.cadKey, sut.options[0]?.cadKey);
      assert.equal(testItem.options[0]?.name, sut.options[0]?.name);
      assert.equal(testItem.options[0]?.position, sut.options[0]?.position);
      assert.isTrue(sut.options[0]?.visible);
      assert.equal(testItem.options[0]?.cadValues[0]?.name, sut.options[0]?.cadValues[0]?.name);
      assert.equal(testItem.options[0]?.cadValues[0]?.type, sut.options[0]?.cadValues[0]?.type);
      assert.equal(testItem.options[0]?.cadValues[0]?.value, sut.options[0]?.cadValues[0]?.value);
      assert.isTrue(sut.options[0]?.cadValues[0]?.visible);
      assert.isFalse(sut.options[0]?.cadValues[0]?.favorite);
    } else {
      assert.equal(testItem.options?.length, 1);
      assert.equal(sut.options?.length, 1);

    }
  });
});
