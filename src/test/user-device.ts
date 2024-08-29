import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("UserDevice", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.UserDevice>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.userDevice;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.UserDevice(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(sut.id, sut._id);
    assert.equal(testItem.userId, sut.userId);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(sut.devices.length, 1);
    if (testItem.devices?.length) {
      assert.equal(testItem.devices[0]?.token, sut.devices[0]?.token);
      assert.equal(testItem.devices[0]?.env, sut.devices[0]?.env);
      assert.equal(testItem.devices[0]?.ua, sut.devices[0]?.ua);
      assert.equal(testItem.devices[0]?.time, sut.devices[0]?.time);
      assert.equal(testItem.devices[0]?.drift, sut.devices[0]?.drift);
      assert.equal(testItem.devices[0]?.bundleIdentifier, sut.devices[0]?.bundleIdentifier);
      assert.equal(testItem.devices[0]?.silentEnabled, sut.devices[0]?.silentEnabled);
      assert.equal(testItem.devices[0]?.criticalAlertsEnabled, sut.devices[0]?.criticalAlertsEnabled);
      assert.equal(testItem.devices[0]?.session, sut.devices[0]?.session);
      assert.equal(testItem.devices[0]?.active, sut.devices[0]?.active);
      assert.equal(testItem.devices[0]?.offDuty, sut.devices[0]?.offDuty);
    } else {
      assert.equal(testItem.devices?.length, 1);
    }
    assert.equal(testItem.notificationCount, sut.notificationCount);
    if (testItem.notificationIncidentSettings?.length) {
      assert.equal(JSON.stringify(testItem.notificationIncidentSettings[0]), JSON.stringify(sut.notificationIncidentSettings[0]));
    } else {
      assert.equal(testItem.notificationIncidentSettings?.length, 1);
    }
    if (testItem.notificationUnitSettings?.length) {
      assert.equal(JSON.stringify(testItem.notificationUnitSettings[0]), JSON.stringify(sut.notificationUnitSettings[0]));
    } else {
      assert.equal(testItem.notificationUnitSettings?.length, 1);
    }
    assert.equal(testItem.offDuty, true);
    assert.equal(testItem.criticalAlertsVolume, "MED");
    assert.isObject(sut.notificationSounds);
    assert.deepEqual(sut.notificationSounds, item.notificationSounds);
    assert.isObject(sut.notificationSounds.ios);
    assert.isObject(sut.notificationSounds.android);
  });
});
