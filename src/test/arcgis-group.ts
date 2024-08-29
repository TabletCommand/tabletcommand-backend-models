import { assert } from "chai";
import "mocha";
import * as _ from "lodash";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("ArcGISGroup", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.ArcGISGroup>;

  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;
    const mock = mockModule({
      mongoose
    });
    testItem = mock.arcGISGroup;
    await mock.cleanup();
  });

  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
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

    assert.equal(sut.linkedDepartments.length, 1);
    const dept = _.first(sut.linkedDepartments);
    assert.equal(dept?.department, "Demo RTS Fire Department");
    assert.equal(dept?.departmentId, "558365a198b2fa4278000053");
    assert.equal(dept?.authUsername, "tabletcmd");

    assert.equal(dept?.users.length, 1);
    const deptUser = _.first(dept?.users);
    assert.equal(deptUser?.username, "tc_someone");
    assert.equal(deptUser?.email, "hello@tc.com");
    assert.equal(deptUser?.userId, "558365a198a2aa42780000aa");

    assert.equal(sut.outsiders.length, 1);
    const outsider = _.first(sut.outsiders);
    assert.equal(outsider?.username, "Michael_Kallum");
    assert.equal(outsider?.fullName, "Michael Kallum");
    assert.equal(outsider?.memberType, "member");
    assert.equal(outsider?.orgId, "MyTOuXKXZoizaaa");

    assert.equal(sut.users.length, 1);
    const user = _.first(sut.users);
    assert.equal(user?.username, "jane_tabletcommand");
    assert.equal(user?.fullName, "Jane Serrano");
    assert.equal(user?.memberType, "admin");
    assert.equal(user?.orgId, "zGXMcUaDlMGoAAAg");
  });
});
