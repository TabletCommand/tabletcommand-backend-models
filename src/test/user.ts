import { assert } from "chai";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mockts";
import { Models, Mongoose, Document } from "mongoose";

describe("User", function() {
  let models: Models, mongoose: Mongoose;
  let testItem: Partial<m.User>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.user;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    if (models.User) {
      const item = new models.User(testItem) as Document<m.User> & m.User;
      const sut = await item.save() as unknown as m.User;
      assert.isNotNull(sut.uuid);
      assert.isNotNull(testItem._id);
      assert.equal(sut.nick, testItem.nick);
      assert.equal(sut.email, testItem.email);
      assert.equal(sut.mapId, testItem.mapId);
      assert.equal(sut.departmentId, testItem.departmentId);
      assert.isFalse(sut.active);
      assert.isFalse(sut.admin);
      assert.isFalse(sut.superuser);
      assert.isTrue(sut.isPro);
      assert.isTrue(sut.mobileAccess);
      assert.isFalse(sut.webAccess);
      assert.isFalse(sut.shareLocationPhone);
      assert.isTrue(sut.shareLocationTablet);
      assert.equal(item.uuid, sut.uuid);
      assert.equal(item.agencyId, sut.agencyId);
      assert.equal(item.offDutyEnabled, sut.offDutyEnabled);
      assert.equal(item.managedAgencies[0], sut.managedAgencies[0]);
      assert.isTrue(sut.offlineMapsEnabled);
      assert.equal(item.webMapSettings.defaultZoomLevel, 10);
      assert.equal(item.webMapSettings.defaultCenter[0], 1);
      assert.equal(item.webMapSettings.defaultCenter[1], 1);
      assert.equal(item.webMapSettings.defaultMap, "Default");
      assert.equal(item.restrictedCommentsEnabled, true);
    }
  });
});
