"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _ = require("lodash");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("ArcGISGroup", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.arcGISGroup;
        await mock.cleanup();
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        chai_1.assert.isObject(testItem);
        const item = new models.ArcGISGroup(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(sut._id);
        chai_1.assert.isNotNull(sut.modified);
        chai_1.assert.equal(sut.groupId, testItem.groupId);
        chai_1.assert.equal(sut.title, testItem.title);
        chai_1.assert.deepEqual(sut.externalOrgIds, testItem.externalOrgIds);
        chai_1.assert.equal(sut.access, testItem.access);
        chai_1.assert.equal(sut.owner, testItem.owner);
        chai_1.assert.equal(sut.protected, testItem.protected);
        chai_1.assert.equal(sut.linkedDepartments.length, 1);
        const dept = _.first(sut.linkedDepartments);
        chai_1.assert.equal(dept === null || dept === void 0 ? void 0 : dept.department, "Demo RTS Fire Department");
        chai_1.assert.equal(dept === null || dept === void 0 ? void 0 : dept.departmentId, "558365a198b2fa4278000053");
        chai_1.assert.equal(dept === null || dept === void 0 ? void 0 : dept.authUsername, "tabletcmd");
        chai_1.assert.equal(dept === null || dept === void 0 ? void 0 : dept.users.length, 1);
        const deptUser = _.first(dept === null || dept === void 0 ? void 0 : dept.users);
        chai_1.assert.equal(deptUser === null || deptUser === void 0 ? void 0 : deptUser.username, "tc_someone");
        chai_1.assert.equal(deptUser === null || deptUser === void 0 ? void 0 : deptUser.email, "hello@tc.com");
        chai_1.assert.equal(deptUser === null || deptUser === void 0 ? void 0 : deptUser.userId, "558365a198a2aa42780000aa");
        chai_1.assert.equal(sut.outsiders.length, 1);
        const outsider = _.first(sut.outsiders);
        chai_1.assert.equal(outsider === null || outsider === void 0 ? void 0 : outsider.username, "Michael_Kallum");
        chai_1.assert.equal(outsider === null || outsider === void 0 ? void 0 : outsider.fullName, "Michael Kallum");
        chai_1.assert.equal(outsider === null || outsider === void 0 ? void 0 : outsider.memberType, "member");
        chai_1.assert.equal(outsider === null || outsider === void 0 ? void 0 : outsider.orgId, "MyTOuXKXZoizaaa");
        chai_1.assert.equal(sut.users.length, 1);
        const user = _.first(sut.users);
        chai_1.assert.equal(user === null || user === void 0 ? void 0 : user.username, "jane_tabletcommand");
        chai_1.assert.equal(user === null || user === void 0 ? void 0 : user.fullName, "Jane Serrano");
        chai_1.assert.equal(user === null || user === void 0 ? void 0 : user.memberType, "admin");
        chai_1.assert.equal(user === null || user === void 0 ? void 0 : user.orgId, "zGXMcUaDlMGoAAAg");
    });
});
//# sourceMappingURL=arcgis-group.js.map