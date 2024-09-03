import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";
describe("Esri", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.Esri>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;
    const mock = mockModule({
      mongoose
    });
    testItem = mock.esri;
    await mock.cleanup();
  });

  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    assert.isObject(testItem);
    const item = new models.Esri(testItem);
    const sut = await item.save();
    assert.isNotNull(sut._id);
    assert.isNotNull(sut.id);
    assert.equal(sut._id.toString(), testItem._id?.toString());
    assert.equal(sut.departmentId, testItem.departmentId);

    assert.equal(sut.auth.username, testItem.auth?.username);
    assert.equal(sut.auth.encrypted.iv, testItem.auth?.encrypted.iv);
    assert.equal(sut.auth.encrypted.encryptedData, testItem.auth?.encrypted.encryptedData);

    assert.equal(sut.fireMapperAuth.username, testItem.fireMapperAuth?.username);
    assert.equal(sut.fireMapperAuth.encrypted.iv, testItem.fireMapperAuth?.encrypted.iv);
    assert.equal(sut.fireMapperAuth.encrypted.encryptedData, testItem.fireMapperAuth?.encrypted.encryptedData);
    assert.equal(sut.fireMapperAuth.encryptedAccessCode.iv, testItem.fireMapperAuth?.encryptedAccessCode.iv);
    assert.equal(sut.fireMapperAuth.encryptedAccessCode.encryptedData, testItem.fireMapperAuth?.encryptedAccessCode.encryptedData);

    assert.equal(sut.maps.length, 1);
    const sutm = sut.maps[0];
    let testItemM;
    if (testItem.maps?.length) {
      testItemM = testItem.maps[0];
    }
    assert.equal(sutm?.itemId, testItemM?.itemId);
    assert.equal(sutm?.title, testItemM?.title);
    assert.equal(sutm?.url, testItemM?.url);
    assert.equal(sutm?.access, testItemM?.access);
    assert.equal(sutm?.owner, testItemM?.owner);
    assert.equal(sutm?.type, testItemM?.type);
    assert.equal(sutm?.mapLayers.length, 3);
    assert.equal(sutm?.mapLayers.length, 3);
    assert.equal(sutm?.baseMap.baseMapLayers.length, 1);
    assert.equal(sutm?.baseMap.title, testItemM?.baseMap.title);

    const itemId = "01cebf7aede94ed3a9f4c260e18a7d7e";
    // compare saved items
    assert.equal(sut.mapsProperties.length, 1, "all items");
    const mapPropsFound = sut.mapsProperties.filter(p => { return p.itemId === itemId; });
    assert.equal(mapPropsFound.length, 1, "found items");
    const props = mapPropsFound[0];
    assert.equal(props?.download, true);
  });
});
