import { assert } from "chai";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("ReleaseNote", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.ReleaseNote>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.releaseNote;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });


  it("is saved", async function() {
    const item = new models.ReleaseNote(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(testItem.title, sut.title);
    assert.equal(testItem.notes, sut.notes);
    assert.equal(testItem.version, sut.version);
    assert.equal(testItem.releaseDate, sut.releaseDate);
    assert.equal(testItem.status, sut.status);
  });
});