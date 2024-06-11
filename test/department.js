const assert = require("chai").assert;

const mongoose = require('mongoose');

describe("Department", function () {
  let models = mongoose.models;
  let mock;

  beforeEach(async function () {

    mock = require("./mock")({
      mongoose
    });
  });



  it("is saved", async function () {
    const testItem = mock.department;
    assert.isObject(testItem);
    const item = new models.Department(testItem);
    const ress = await item.save();
    const result = await models.Department.findOne({ _id: testItem._id }).lean();
    assert.isNotNull(ress._id);
    assert.isNotNull(ress.id);
    assert.equal(ress.department, testItem.department);
    assert.equal(ress.addressDetails.city, testItem.addressDetails.city);
    assert.isTrue(ress.active);
    assert.equal(ress.apikey, testItem.apikey);
    assert.equal(ress.partialApiKey, testItem.partialApiKey);
    assert.isTrue(ress.personnelStaffingEnabled);
    assert.isTrue(ress.rtsEnabled);
    assert.equal(ress.rtsChannelPrefix, testItem.rtsChannelPrefix);
    assert.equal(ress.pubNubV3.token, testItem.pubNubV3.token);
    assert.equal(ress.pubNubV3.expireAt.toISOString(), testItem.pubNubV3.expireAt);
    assert.equal(ress.pubNubV3.runAt.toISOString(), testItem.pubNubV3.runAt);
    assert.equal(ress.signupKey, testItem.signupKey);
    assert.equal(ress.incidentTypes.length, 1);
    assert.equal(ress.agencyIds.length, 1);
    assert.equal(ress.agencyIds[0], testItem.agencyIds[0]);
    assert.equal(ress.safetyPriorityKeywords.length, 3);
    assert.equal(ress.incidentTypes[0].name, testItem.incidentTypes[0].name);
    assert.isFalse(ress.shareLocationPhones);
    assert.isTrue(ress.shareLocationTablets);
    assert.isFalse(ress.cadOneWayVehiclesEnabled);
    assert.isFalse(ress.cadGetLocationEnabled);
    assert.isTrue(ress.mowsEnabled);
    assert.isTrue(ress.shareAVL.enabled);
    assert.equal(ress.shareAVL.opAreaCode, testItem.shareAVL.opAreaCode);
    assert.equal(ress.shareAVL.opAreaName, testItem.shareAVL.opAreaName);
    assert.equal(ress.accountType, testItem.accountType);
    assert.equal(ress.timeZone, testItem.timeZone);
    assert.equal(ress.firstArrivingEnabled, testItem.firstArrivingEnabled);
    assert.equal(ress.simpleSense.token, testItem.simpleSense.token);
    assert.equal(ress.firstArriving.token, testItem.firstArriving.token);
    assert.equal(ress.simpleSenseEnabled, testItem.simpleSenseEnabled);
    assert.equal(ress.webDisclaimer.message, testItem.webDisclaimer.message);
    assert.equal(ress.webDisclaimer.enabled, testItem.webDisclaimer.enabled);
    assert.equal(JSON.stringify(ress.licensing), JSON.stringify(testItem.licensing));
    assert.equal(ress.externalNotificationsEnabled, testItem.externalNotificationsEnabled);
    assert.equal(ress.notificationEmails.length, testItem.notificationEmails.length);
    assert.equal(ress.restrictedComments.callTypesAllowed.length, testItem.restrictedComments.callTypesAllowed.length);
    assert.equal(ress.restrictedComments.statusesAllowed.length, testItem.restrictedComments.statusesAllowed.length);
    assert.equal(ress.restrictedComments.restrictedFields.length, testItem.restrictedComments.restrictedFields.length);
    assert.equal(ress.restrictedComments.restrictedMessage, testItem.restrictedComments.restrictedMessage);
    assert.equal(ress.restrictedComments.enabled, testItem.restrictedComments.enabled);
    assert.equal(ress.customButtons[0].name, testItem.customButtons[0].name);
    assert.equal(ress.customButtons[0].url, testItem.customButtons[0].url);
    assert.equal(ress.customButtons[0].order, testItem.customButtons[0].order);
    assert.equal(ress.customButtons[0].allow_external, testItem.customButtons[0].allow_external);
    assert.equal(ress.customButtons[0].default_to_external, testItem.customButtons[0].default_to_external);
    assert.equal(ress.customButtons[0].allow_floating, testItem.customButtons[0].allow_floating);
    assert.equal(JSON.stringify(ress.customButtons[0].color), JSON.stringify(testItem.customButtons[0].color));
    assert.equal(ress.reportNumberEnabled, testItem.reportNumberEnabled);
    assert.equal(JSON.stringify(ress.samsara), JSON.stringify(testItem.samsara));
  });
});
