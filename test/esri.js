"use strict";

const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("Esri", function () {
  let models = mongoose.models;
  let mock;

  beforeEach(async function () {

    mock = require("./mock")({
      models,
      mongoose,
    });
    await mock.cleanup();
  });



  it("is saved", async function () {
    const testItem = mock.esri;
    assert.isObject(testItem);
    const item = new models.Esri(testItem);
    const ress = await item.save();
    assert.isNotNull(ress._id);
    assert.isNotNull(ress.id);
    assert.equal(ress._id.toString(), testItem._id.toString());
    assert.equal(ress.toJSON().id, testItem._id.toString());
    assert.equal(ress.departmentId, testItem.departmentId);

    assert.equal(ress.auth.username, testItem.auth.username);
    assert.equal(ress.auth.encrypted.iv, testItem.auth.encrypted.iv);
    assert.equal(ress.auth.encrypted.encryptedData, testItem.auth.encrypted.encryptedData);

    assert.equal(ress.fireMapperAuth.username, testItem.fireMapperAuth.username);
    assert.equal(ress.fireMapperAuth.encrypted.iv, testItem.fireMapperAuth.encrypted.iv);
    assert.equal(ress.fireMapperAuth.encrypted.encryptedData, testItem.fireMapperAuth.encrypted.encryptedData);
    assert.equal(ress.fireMapperAuth.encryptedAccessCode.iv, testItem.fireMapperAuth.encryptedAccessCode.iv);
    assert.equal(ress.fireMapperAuth.encryptedAccessCode.encryptedData, testItem.fireMapperAuth.encryptedAccessCode.encryptedData);

    assert.equal(ress.maps.length, 1);
    const sutm = ress.maps[0];
    const testItemM = testItem.maps[0];
    assert.equal(sutm.itemId, testItemM.itemId);
    assert.equal(sutm.title, testItemM.title);
    assert.equal(sutm.url, testItemM.url);
    assert.equal(sutm.access, testItemM.access);
    assert.equal(sutm.owner, testItemM.owner);
    assert.equal(sutm.type, testItemM.type);
    assert.equal(sutm.mapLayers.length, 3);
    assert.equal(sutm.mapLayers.length, 3);
    assert.equal(sutm.baseMap.baseMapLayers.length, 1);
    assert.equal(sutm.baseMap.title, testItemM.baseMap.title);

    const itemId = "01cebf7aede94ed3a9f4c260e18a7d7e";
    // compare saved items
    assert.equal(ress.mapsProperties.length, 1, "all items");
    const mapPropsFound = ress.mapsProperties.filter(p => { return p.itemId === itemId; })
    assert.equal(mapPropsFound.length, 1, "found items");
    const props = mapPropsFound[0];
    assert.equal(props.download, true);
  });
});
