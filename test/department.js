const assert = require("chai").assert;

const m = require("..");
const config = require("./config");

describe("Department", function() {
  let models, mongoose, mock;

  beforeEach(async function() {
    const c = await m.connect(config.url);
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
    const result = await models.Department.findOne({_id: testItem._id}).lean();
    assert.isNotNull(sut._id);
    assert.isNotNull(sut.id);
    assert.equal(sut.department, testItem.department);
    assert.equal(sut.addressDetails.city, testItem.addressDetails.city);
    assert.isTrue(sut.active);
    assert.equal(sut.apikey, testItem.apikey);
    assert.equal(sut.partialApiKey, testItem.partialApiKey);
    assert.isTrue(sut.personnelStaffingEnabled);
    assert.isTrue(sut.rtsEnabled);
    assert.equal(sut.rtsChannelPrefix, testItem.rtsChannelPrefix);
    assert.equal(sut.pubNubV3.token, testItem.pubNubV3.token);
    assert.equal(sut.pubNubV3.expireAt.toISOString(), testItem.pubNubV3.expireAt);
    assert.equal(sut.pubNubV3.runAt.toISOString(), testItem.pubNubV3.runAt);
    assert.equal(sut.signupKey, testItem.signupKey);
    assert.equal(sut.incidentTypes.length, 1);
    assert.equal(sut.agencyIds.length, 1);
    assert.equal(sut.agencyIds[0], testItem.agencyIds[0]);
    assert.equal(sut.safetyPriorityKeywords.length, 3);
    assert.equal(sut.incidentTypes[0].name, testItem.incidentTypes[0].name);
    assert.isFalse(sut.shareLocationPhones);
    assert.isTrue(sut.shareLocationTablets);
    assert.isFalse(sut.cadOneWayVehiclesEnabled);
    assert.isFalse(sut.cadGetLocationEnabled);
    assert.isTrue(sut.mowsEnabled);
    assert.isTrue(sut.shareAVL.enabled);
    assert.equal(sut.shareAVL.opAreaCode, testItem.shareAVL.opAreaCode);
    assert.equal(sut.shareAVL.opAreaName, testItem.shareAVL.opAreaName);
    assert.equal(sut.accountType, testItem.accountType);
    assert.equal(sut.timeZone, testItem.timeZone);
    assert.equal(sut.firstArrivingEnabled, testItem.firstArrivingEnabled);
    assert.equal(sut.simpleSenseEnabled, testItem.simpleSenseEnabled);
    assert.equal(sut.webDisclaimer.message, testItem.webDisclaimer.message);
    assert.equal(sut.webDisclaimer.enabled, testItem.webDisclaimer.enabled);
    assert.equal(JSON.stringify(sut.licensing), JSON.stringify(testItem.licensing));
    assert.equal(sut.externalNotificationsEnabled, testItem.externalNotificationsEnabled);
    assert.equal(sut.notificationEmails.length, testItem.notificationEmails.length);
    assert.equal(sut.restrictedComments.callTypesAllowed.length, testItem.restrictedComments.callTypesAllowed.length);
    assert.equal(sut.restrictedComments.statusesAllowed.length, testItem.restrictedComments.statusesAllowed.length);
    assert.equal(sut.restrictedComments.restrictedFields.length, testItem.restrictedComments.restrictedFields.length);
    assert.equal(sut.restrictedComments.restrictedMessage, testItem.restrictedComments.restrictedMessage);
    assert.equal(sut.restrictedComments.enabled, testItem.restrictedComments.enabled);
    assert.equal(sut.customButtons[0].name, testItem.customButtons[0].name);
    assert.equal(sut.customButtons[0].url, testItem.customButtons[0].url);
    assert.equal(sut.customButtons[0].order, testItem.customButtons[0].order);
    assert.equal(sut.customButtons[0].allow_external, testItem.customButtons[0].allow_external);
    assert.equal(sut.customButtons[0].default_to_external, testItem.customButtons[0].default_to_external);
    assert.equal(sut.customButtons[0].allow_floating, testItem.customButtons[0].allow_floating);
    assert.equal(JSON.stringify(sut.customButtons[0].color), JSON.stringify(testItem.customButtons[0].color));
    assert.equal(sut.reportNumberEnabled, testItem.reportNumberEnabled);
  });
});
