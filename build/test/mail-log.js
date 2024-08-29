"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("MailLog", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.mailLog;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        var _a, _b;
        const item = new models.MailLog(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(testItem.mailId, sut.mailId);
        chai_1.assert.equal(testItem.event, sut.event);
        chai_1.assert.equal(testItem.timestamp, sut.timestamp);
        chai_1.assert.equal(testItem.recipient, sut.recipient);
        chai_1.assert.equal(testItem.recipientDomain, sut.recipientDomain);
        if ((_a = testItem.tags) === null || _a === void 0 ? void 0 : _a.length) {
            chai_1.assert.equal(testItem.tags[0], sut.tags[0]);
        }
        else {
            chai_1.assert.equal((_b = testItem.tags) === null || _b === void 0 ? void 0 : _b.length, 1);
        }
        chai_1.assert.equal(testItem.deliveryStatus, sut.deliveryStatus);
        chai_1.assert.equal(testItem.message, sut.message);
        chai_1.assert.equal(testItem.deliveryStatus, sut.deliveryStatus);
        chai_1.assert.equal(testItem.flags, sut.flags);
        chai_1.assert.equal(testItem.envelope, sut.envelope);
        chai_1.assert.equal(testItem.logLevel, sut.logLevel);
        chai_1.assert.equal(testItem.reason, sut.reason);
        chai_1.assert.equal(testItem.severity, sut.severity);
        const expectedDate = new Date().valueOf() / 1000.0;
        const timeDelta = expectedDate - sut.modified_unix_date;
        chai_1.assert.isTrue(timeDelta < 1);
    });
});
//# sourceMappingURL=mail-log.js.map