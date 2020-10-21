"use strict";

const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("Esri", function() {
  let models, mongoose, mock;

  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;
    mock = require("./mock")({
      models,
      mongoose,
    });
    await mock.cleanup();
  });

  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const testItem = mock.esri;
    assert.isObject(testItem);
    const item = new models.Esri(testItem);
    const sut = await item.save();
    assert.isNotNull(sut._id);
    assert.isNotNull(sut.id);
    assert.equal(sut._id.toString(), testItem._id.toString());
    assert.equal(sut.toJSON().id, testItem._id.toString());
    assert.equal(sut.departmentId, testItem.departmentId);
    assert.equal(sut.modified_unix_date, testItem.modified_unix_date);
    assert.equal(sut.tokenDateExpiry, testItem.tokenDateExpiry);
    assert.equal(sut.token.access_token, testItem.token.access_token);
    assert.equal(sut.token.expires_in, testItem.token.expires_in);
    assert.equal(sut.token.username, testItem.token.username);
    assert.isTrue(sut.token.ssl);
    assert.equal(sut.token.refresh_token, testItem.token.refresh_token);

    assert.equal(sut.error.code, testItem.error.code);
    assert.equal(sut.error.error, testItem.error.error);
    assert.equal(sut.error.error_description, testItem.error.error_description);
    assert.equal(sut.error.message, testItem.error.message);

    assert.equal(sut.auth.username, testItem.auth.username);
    assert.equal(sut.auth.encrypted.iv, testItem.auth.encrypted.iv);
    assert.equal(sut.auth.encrypted.encryptedData, testItem.auth.encrypted.encryptedData);

    assert.equal(sut.fireMapperAuth.username, testItem.fireMapperAuth.username);
    assert.equal(sut.fireMapperAuth.encrypted.iv, testItem.fireMapperAuth.encrypted.iv);
    assert.equal(sut.fireMapperAuth.encrypted.encryptedData, testItem.fireMapperAuth.encrypted.encryptedData);

    assert.equal(sut.maps.length, 1);
    const sutm = sut.maps[0];
    const testItemM = testItem.maps[0];
    assert.equal(sutm.id, testItemM.id);
    assert.equal(sutm.title, testItemM.title);
    assert.equal(sutm.url, testItemM.url);
    assert.equal(sutm.access, testItemM.access);
    assert.equal(sutm.owner, testItemM.owner);
    assert.equal(sutm.type, testItemM.type);
    assert.equal(sutm.mapLayers.length, 3);
    assert.equal(sutm.mapLayers.length, 3);
    assert.equal(sutm.baseMap.baseMapLayers.length, 1);
    assert.equal(sutm.baseMap.title, testItemM.baseMap.title);
  });
});
