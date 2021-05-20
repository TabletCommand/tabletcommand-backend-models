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
    
    assert.equal(sut.departments.length, 1);
    const dept = _.first(sut.departments);
    assert.equal(dept.department, "Demo RTS Fire Department");
    assert.equal(dept.departmentId, "558365a198b2fa4278000053");
    assert.equal(dept.authUsername, "tabletcmd");
    assert.equal(dept.tokenUsername, "tc_ContraCostaCountyFire");

    assert.equal(dept.users.length, 1);
    const deptUser = _.first(dept.users);
    assert.equal(deptUser.username, "tc_someone");
    assert.equal(deptUser.email, "hello@tc.com");
    assert.equal(deptUser.userId, "558365a198a2aa42780000aa");

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
