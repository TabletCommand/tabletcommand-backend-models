"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
describe("ReleaseNote", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.releaseNote;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        const item = new models.ReleaseNote(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(testItem.title, sut.title);
        chai_1.assert.equal(testItem.notes, sut.notes);
        chai_1.assert.equal(testItem.version, sut.version);
        chai_1.assert.equal(testItem.releaseDate, sut.releaseDate);
        chai_1.assert.equal(testItem.status, sut.status);
    });
});
//# sourceMappingURL=release-note.js.map