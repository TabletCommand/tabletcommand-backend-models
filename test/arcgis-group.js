"use strict";

const assert = require("chai").assert;
const _ = require("lodash");

const m = require("..");
const config = require("./config");

describe("ArcGISGroup", function() {
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
    const testItem = mock.arcGISGroup;
    assert.isObject(testItem);
    const item = new models.ArcGISGroup(testItem);
    const sut = await item.save();

    assert.isNotNull(sut._id);
    assert.isNotNull(sut.modified);

    assert.equal(sut.groupId, testItem.groupId);
    assert.equal(sut.title, testItem.title);
    assert.deepEqual(sut.externalOrgIds, testItem.externalOrgIds);
    assert.equal(sut.access, testItem.access);
    assert.equal(sut.owner, testItem.owner);
    assert.equal(sut.protected, testItem.protected);
    assert.deepEqual(sut.departmentIds, testItem.departmentIds);

    assert.equal(sut.outsiders.length, 1);
    const outsider = _.first(sut.outsiders);
    assert.equal(outsider.username, "Michael_Kallum");
    assert.equal(outsider.fullName, "Michael Kallum");
    assert.equal(outsider.memberType, "member");
    assert.equal(outsider.orgId, "MyTOuXKXZoizaaa");

    assert.equal(sut.users.length, 1);
    const user = _.first(sut.users);
    assert.equal(user.username, "jane_tabletcommand");
    assert.equal(user.fullName, "Jane Serrano");
    assert.equal(user.memberType, "admin");
    assert.equal(user.orgId, "zGXMcUaDlMGoAAAg");
  });
});
