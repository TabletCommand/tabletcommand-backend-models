import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("Department", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.Department>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;
    const mock = mockModule({
      mongoose
    });
    testItem = mock.department;
  });

  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    assert.isObject(testItem);
    const item = new models.Department(testItem);
    const sut = await item.save();
    await models.Department.findOne({ _id: testItem._id }).lean();
    assert.isNotNull(sut._id);
    assert.isNotNull(sut.id);
    assert.equal(sut.department, testItem.department);
    assert.equal(sut.addressDetails.city, testItem.addressDetails?.city);
    assert.isTrue(sut.active);
    assert.equal(sut.apikey, testItem.apikey);
    assert.equal(sut.partialApiKey, testItem.partialApiKey);
    assert.isTrue(sut.personnelStaffingEnabled);
    assert.isTrue(sut.rtsEnabled);
    assert.equal(sut.rtsChannelPrefix, testItem.rtsChannelPrefix);
    assert.equal(sut.pubNubV3.token, testItem.pubNubV3?.token);
    assert.equal(sut.pubNubV3.expireAt.toISOString(), testItem.pubNubV3?.expireAt.toISOString());
    assert.equal(sut.pubNubV3.runAt.toISOString(), testItem.pubNubV3?.runAt.toISOString());
    assert.equal(sut.pubNubV3.env, testItem.pubNubV3?.env);
    assert.equal(sut.pubNubV3.refreshInStaging, testItem.pubNubV3?.refreshInStaging);
    assert.equal(sut.signupKey, testItem.signupKey);
    assert.equal(sut.incidentTypes.length, 1);
    assert.equal(sut.agencyIds.length, 1);
    if (testItem.agencyIds?.length) {
      assert.equal(sut.agencyIds[0], testItem.agencyIds[0]);
    } else {
      assert.equal(testItem.agencyIds?.length, 1);
    }
    assert.equal(sut.safetyPriorityKeywords.length, 3);
    if (testItem.incidentTypes?.length) {
      assert.equal(sut.incidentTypes[0]?.name, testItem.incidentTypes[0]?.name);
    } else {
      assert.equal(testItem.incidentTypes?.length, 1);
    }
    assert.isFalse(sut.shareLocationPhones);
    assert.isTrue(sut.shareLocationTablets);
    assert.isFalse(sut.cadOneWayVehiclesEnabled);
    assert.isFalse(sut.cadGetLocationEnabled);
    assert.isTrue(sut.mowsEnabled);
    assert.isTrue(sut.shareAVL.enabled);
    assert.equal(sut.shareAVL.opAreaCode, testItem.shareAVL?.opAreaCode);
    assert.equal(sut.shareAVL.opAreaName, testItem.shareAVL?.opAreaName);
    assert.equal(sut.accountType, testItem.accountType);
    assert.equal(sut.timeZone, testItem.timeZone);
    assert.equal(sut.firstArrivingEnabled, testItem.firstArrivingEnabled);
    assert.equal(sut.simpleSense.token, testItem.simpleSense?.token);
    assert.equal(sut.firstArriving.token, testItem.firstArriving?.token);
    assert.equal(sut.simpleSenseEnabled, testItem.simpleSenseEnabled);
    assert.equal(sut.webDisclaimer.message, testItem.webDisclaimer?.message);
    assert.equal(sut.webDisclaimer.enabled, testItem.webDisclaimer?.enabled);
    assert.equal(JSON.stringify(sut.licensing), JSON.stringify(testItem.licensing));
    assert.equal(sut.externalNotificationsEnabled, testItem.externalNotificationsEnabled);
    assert.equal(sut.notificationEmails.length, testItem.notificationEmails?.length);
    assert.equal(sut.restrictedComments.callTypesAllowed.length, testItem.restrictedComments?.callTypesAllowed.length);
    assert.equal(sut.restrictedComments.statusesAllowed.length, testItem.restrictedComments?.statusesAllowed.length);
    assert.equal(sut.restrictedComments.restrictedFields.length, testItem.restrictedComments?.restrictedFields.length);
    assert.equal(sut.restrictedComments.restrictedMessage, testItem.restrictedComments?.restrictedMessage);
    assert.equal(sut.restrictedComments.enabled, testItem.restrictedComments?.enabled);
    if (testItem.customButtons?.length) {
      assert.equal(sut.customButtons[0]?.name, testItem.customButtons[0]?.name);
      assert.equal(sut.customButtons[0]?.url, testItem.customButtons[0]?.url);
      assert.equal(sut.customButtons[0]?.order, testItem.customButtons[0]?.order);
      assert.equal(sut.customButtons[0]?.allowExternal, testItem.customButtons[0]?.allowExternal);
      assert.equal(sut.customButtons[0]?.defaultExternal, testItem.customButtons[0]?.defaultExternal);
      assert.equal(sut.customButtons[0]?.allowFloating, testItem.customButtons[0]?.allowFloating);
      assert.equal(JSON.stringify(sut.customButtons[0]?.color), JSON.stringify(testItem.customButtons[0]?.color));
    } else {
      assert.equal(testItem.customButtons?.length, 1);
    }
    assert.equal(sut.reportNumberEnabled, testItem.reportNumberEnabled);
    assert.equal(JSON.stringify(sut.samsara), JSON.stringify(testItem.samsara));
    assert.equal(sut.reportOdometer, "status");
  });
});
