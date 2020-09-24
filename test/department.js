"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("Department", function() {
  let models, mongoose, mock;

  beforeEach(async function() {
    const c = await m.connect(url);
    models = c.models;
    mongoose = c.mongoose;
    mock = require("./mock")({
      mongoose
    });
  });

  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", async function() {
    const testItem = mock.department;
    assert.isObject(testItem);
    const item = new models.Department(testItem);
    const sut = await item.save();
    assert.isNotNull(sut._id);
    assert.isNotNull(sut.id);
    assert.equal(sut.department, testItem.department);
    assert.equal(sut.city, testItem.city);
    assert.isTrue(sut.active);
    assert.equal(sut.apikey, testItem.apikey);
    assert.isTrue(sut.personnelStaffingEnabled);
    assert.isTrue(sut.rtsEnabled);
    assert.equal(sut.rtsChannelPrefix, testItem.rtsChannelPrefix);
    assert.equal(sut.rtsAuthKey, testItem.rtsAuthKey);
    assert.equal(sut.signupKey, testItem.signupKey);
    assert.equal(sut.incidentTypes.length, 1);
    assert.equal(sut.agencyIds.length, 1);
    assert.equal(sut.agencyIds[0], testItem.agencyIds[0]);
    assert.equal(sut.safetyPriorityKeywords.length, 1);
    assert.equal(sut.incidentTypes[0].name, testItem.incidentTypes[0].name);
    assert.isFalse(sut.shareLocationPhones);
    assert.isTrue(sut.shareLocationTablets);
    assert.isFalse(sut.cadOneWayVehiclesEnabled);
    assert.isTrue(sut.mowsEnabled);
  });

  it("is saved (Esri)", async function() {
    const testItem = mock.departmentWithEsri;
    assert.isObject(testItem);
    const item = new models.Department(testItem);
    const sut = await item.save();
    assert.isObject(sut.esriToken);
    assert.equal(sut.esriToken.access_token, testItem.esriToken.access_token);
    assert.equal(sut.esriToken.refresh_token, testItem.esriToken.refresh_token);
    assert.equal(sut.esriToken.username, testItem.esriToken.username);
    assert.equal(sut.esriToken.expires_in, testItem.esriToken.expires_in);
    assert.isTrue(sut.esriToken.ssl);

    assert.isObject(sut.esriAuth);
    assert.equal(sut.esriAuth.username, testItem.esriAuth.username);
    assert.equal(sut.esriAuth.encrypted.iv, testItem.esriAuth.encrypted.iv);
    assert.equal(sut.esriAuth.encrypted.encryptedData, testItem.esriAuth.encrypted.encryptedData);

    assert.isObject(sut.error);
    assert.equal(sut.error.code, testItem.error.code);
    assert.equal(sut.error.error, testItem.error.error);
    assert.equal(sut.error.error_description, testItem.error.error_description);
    assert.equal(sut.error.message, testItem.error.message);
    assert.equal(sut.esriTokenDateExpiry, testItem.esriTokenDateExpiry);

    assert.isObject(sut.fireMapperAuth);
    assert.equal(sut.fireMapperAuth.username, testItem.fireMapperAuth.username);
    assert.equal(sut.fireMapperAuth.encrypted.iv, testItem.fireMapperAuth.encrypted.iv);
    assert.equal(sut.fireMapperAuth.encrypted.encryptedData, testItem.fireMapperAuth.encrypted.encryptedData);

    assert.equal(sut.esriMaps.length, 1);
    const sutm = sut.esriMaps[0];
    const testItemM = testItem.esriMaps[0];
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
