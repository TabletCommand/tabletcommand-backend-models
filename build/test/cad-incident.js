"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _ = require("lodash");
const m = require("../index");
const config = require("./config");
const mock_1 = require("./mock");
require("mocha");
describe("CADIncident", function () {
    let models, mongoose;
    let testItem;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
        const mock = (0, mock_1.default)({
            mongoose
        });
        testItem = mock.cadIncident;
        await mock.beforeEach();
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("is saved", async function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        const item = new models.CADIncident(testItem);
        const sut = await item.save();
        chai_1.assert.isNotNull(testItem._id);
        chai_1.assert.equal(sut.uuid, testItem.uuid);
        chai_1.assert.equal(sut.departmentId, testItem.departmentId);
        chai_1.assert.equal(sut.AgencyID, testItem.AgencyID);
        chai_1.assert.equal(sut.IncidentNumber, testItem.IncidentNumber);
        chai_1.assert.equal(sut.TransactionID, testItem.TransactionID);
        chai_1.assert.equal(sut.AgencyIncidentCallTypeDescription, testItem.AgencyIncidentCallTypeDescription);
        chai_1.assert.equal(sut.StreetName, testItem.StreetName);
        chai_1.assert.equal(sut.StreetSuffix, testItem.StreetSuffix);
        chai_1.assert.equal(sut.Predirectional, testItem.Predirectional);
        chai_1.assert.equal(sut.Postdirectional, testItem.Postdirectional);
        chai_1.assert.equal(sut.CityOrLocality, testItem.CityOrLocality);
        chai_1.assert.equal(sut.Floor, testItem.Floor);
        chai_1.assert.equal(sut.Suite, testItem.Suite);
        chai_1.assert.equal(sut.City, testItem.City);
        chai_1.assert.equal(sut.Building, testItem.Building);
        chai_1.assert.equal(sut.StateOrProvince, testItem.StateOrProvince);
        chai_1.assert.equal(sut.CommonPlaceName, testItem.CommonPlaceName);
        chai_1.assert.equal(sut.LocationComment, testItem.LocationComment);
        chai_1.assert.equal(sut.CrossStreet1, testItem.CrossStreet1);
        chai_1.assert.equal(sut.CrossStreet2, testItem.CrossStreet2);
        chai_1.assert.equal(sut.cross_streets, testItem.cross_streets);
        chai_1.assert.equal(sut.PostalCode, testItem.PostalCode);
        chai_1.assert.equal(sut.CallerNumber, testItem.CallerNumber);
        chai_1.assert.equal(sut.Latitude, testItem.Latitude);
        chai_1.assert.equal(sut.Longitude, testItem.Longitude);
        chai_1.assert.equal(sut.preference_location, testItem.preference_location);
        chai_1.assert.equal(sut.EntryDateTime, testItem.EntryDateTime);
        chai_1.assert.equal(sut.ClosedDateTime, testItem.ClosedDateTime);
        chai_1.assert.equal(sut.closed_unix_date, testItem.closed_unix_date);
        chai_1.assert.equal(sut.start_unix_date, testItem.start_unix_date);
        chai_1.assert.equal(sut.modified_unix_date, testItem.modified_unix_date);
        chai_1.assert.isTrue(sut.PriorIncidentChanged);
        chai_1.assert.equal(sut.PriorIncidentChanged, testItem.PriorIncidentChanged);
        chai_1.assert.equal(sut.PriorIncident.length, 1);
        if (sut.PriorIncident.length === 1) {
            const pi = sut.PriorIncident[0];
            const pid = ((_a = testItem.PriorIncident) === null || _a === void 0 ? void 0 : _a.length) ? testItem.PriorIncident[0] : null;
            chai_1.assert.isNotNull(pid);
            chai_1.assert.equal(pi === null || pi === void 0 ? void 0 : pi.IncidentNumber, pid === null || pid === void 0 ? void 0 : pid.IncidentNumber);
            chai_1.assert.equal(pi === null || pi === void 0 ? void 0 : pi.IncidentDateTime, pid === null || pid === void 0 ? void 0 : pid.IncidentDateTime);
            chai_1.assert.equal(pi === null || pi === void 0 ? void 0 : pi.Problem, pid === null || pid === void 0 ? void 0 : pid.Problem);
            chai_1.assert.equal(pi === null || pi === void 0 ? void 0 : pi.Address, pid === null || pid === void 0 ? void 0 : pid.Address);
            chai_1.assert.equal(pi === null || pi === void 0 ? void 0 : pi.Suite, pid === null || pid === void 0 ? void 0 : pid.Suite);
            chai_1.assert.equal(pi === null || pi === void 0 ? void 0 : pi.Jurisdiction, pid === null || pid === void 0 ? void 0 : pid.Jurisdiction);
            chai_1.assert.equal((_b = pi === null || pi === void 0 ? void 0 : pi.Comment[0]) === null || _b === void 0 ? void 0 : _b.Comment, (_c = pid === null || pid === void 0 ? void 0 : pid.Comment[0]) === null || _c === void 0 ? void 0 : _c.Comment);
            chai_1.assert.equal((_d = pi === null || pi === void 0 ? void 0 : pi.Comment[0]) === null || _d === void 0 ? void 0 : _d.CommentSource, (_e = pid === null || pid === void 0 ? void 0 : pid.Comment[0]) === null || _e === void 0 ? void 0 : _e.CommentSource);
            chai_1.assert.equal((_f = pi === null || pi === void 0 ? void 0 : pi.Comment[0]) === null || _f === void 0 ? void 0 : _f.CommentDateTime, (_g = pid === null || pid === void 0 ? void 0 : pid.Comment[0]) === null || _g === void 0 ? void 0 : _g.CommentDateTime);
        }
        if ((_h = testItem.units) === null || _h === void 0 ? void 0 : _h.length) {
            chai_1.assert.equal((_j = sut === null || sut === void 0 ? void 0 : sut.units[0]) === null || _j === void 0 ? void 0 : _j.UnitDispatchNumber, (_k = testItem === null || testItem === void 0 ? void 0 : testItem.units[0]) === null || _k === void 0 ? void 0 : _k.UnitDispatchNumber);
            chai_1.assert.equal((_l = sut === null || sut === void 0 ? void 0 : sut.units[0]) === null || _l === void 0 ? void 0 : _l.UnitID, (_m = testItem === null || testItem === void 0 ? void 0 : testItem.units[0]) === null || _m === void 0 ? void 0 : _m.UnitID);
            chai_1.assert.equal((_o = sut === null || sut === void 0 ? void 0 : sut.units[0]) === null || _o === void 0 ? void 0 : _o.TimeDispatched, (_p = testItem === null || testItem === void 0 ? void 0 : testItem.units[0]) === null || _p === void 0 ? void 0 : _p.TimeDispatched);
        }
        else {
            chai_1.assert.equal(sut.units.length, 1);
        }
        const unit = _.first(sut.units.filter((x) => x.UnitID === "MA31"));
        chai_1.assert.equal(unit === null || unit === void 0 ? void 0 : unit.Personnel.length, 2);
        const p1 = _.first(unit === null || unit === void 0 ? void 0 : unit.Personnel.filter((x) => x.PersonnelID === "X14"));
        chai_1.assert.equal(p1 === null || p1 === void 0 ? void 0 : p1.PersonnelName, "Mary Smith");
        chai_1.assert.equal(p1 === null || p1 === void 0 ? void 0 : p1.PersonnelNote, "X");
        chai_1.assert.equal(p1 === null || p1 === void 0 ? void 0 : p1.PersonnelRank, "Captain");
        chai_1.assert.equal(p1 === null || p1 === void 0 ? void 0 : p1.PersonnelWorkCode, "TRD");
        chai_1.assert.equal(sut.Comment.length, 1);
        if ((_q = testItem.Comment) === null || _q === void 0 ? void 0 : _q.length) {
            chai_1.assert.equal((_r = sut === null || sut === void 0 ? void 0 : sut.Comment[0]) === null || _r === void 0 ? void 0 : _r.Comment, (_s = testItem === null || testItem === void 0 ? void 0 : testItem.Comment[0]) === null || _s === void 0 ? void 0 : _s.Comment);
            chai_1.assert.equal((_t = sut === null || sut === void 0 ? void 0 : sut.Comment[0]) === null || _t === void 0 ? void 0 : _t.CommentSource, (_u = testItem === null || testItem === void 0 ? void 0 : testItem.Comment[0]) === null || _u === void 0 ? void 0 : _u.CommentSource);
            chai_1.assert.equal((_v = sut === null || sut === void 0 ? void 0 : sut.Comment[0]) === null || _v === void 0 ? void 0 : _v.CommentDateTime, (_w = testItem === null || testItem === void 0 ? void 0 : testItem.Comment[0]) === null || _w === void 0 ? void 0 : _w.CommentDateTime);
        }
        else {
            chai_1.assert.equal(sut.Comment.length, 1);
        }
        // Share incident properties
        chai_1.assert.isArray(sut.ReportNumber);
        chai_1.assert.equal(sut.ReportNumber.length, 2);
        const rna = _.first(sut.ReportNumber.filter((x) => x.name === "A"));
        chai_1.assert.isObject(rna);
        chai_1.assert.equal(rna === null || rna === void 0 ? void 0 : rna.number, "07-0351");
        const rnb = _.first(sut.ReportNumber.filter((x) => x.name === "B"));
        chai_1.assert.isObject(rnb);
        chai_1.assert.equal(rnb === null || rnb === void 0 ? void 0 : rnb.number, "UM-02210");
        chai_1.assert.isArray(sut.radioChannels);
        chai_1.assert.equal(sut.radioChannels.length, 2);
        const rca = _.first(sut.radioChannels.filter((x) => x.name === "CMD"));
        chai_1.assert.isObject(rca);
        chai_1.assert.equal(rca === null || rca === void 0 ? void 0 : rca.channel, "LOCAL Tone: 3");
        chai_1.assert.equal(rca === null || rca === void 0 ? void 0 : rca.url, "http://example.com/stream1");
        const rcb = _.first(sut.radioChannels.filter((x) => x.name === "TAC"));
        chai_1.assert.isObject(rcb);
        chai_1.assert.equal(rcb === null || rcb === void 0 ? void 0 : rcb.channel, "CDF TAC 10");
        chai_1.assert.equal(rcb === null || rcb === void 0 ? void 0 : rcb.url, "http://example.com/stream2");
        chai_1.assert.isObject(sut.record);
        chai_1.assert.equal(sut.record.name, "John");
        chai_1.assert.equal(sut.record.value, "Smith");
        chai_1.assert.isObject(sut.sharedSource);
        chai_1.assert.equal(sut.sharedSource.isExternal, true);
        chai_1.assert.equal(sut.sharedSource.name, "Demo RTS Fire Department");
        chai_1.assert.isArray(sut.sharedSource.reasons);
        chai_1.assert.equal(sut.sharedSource.reasons.length, 1);
        const ssr1 = _.first(sut.sharedSource.reasons);
        chai_1.assert.isObject(ssr1);
        chai_1.assert.equal(ssr1 === null || ssr1 === void 0 ? void 0 : ssr1.name, "Unit B10 assigned");
        chai_1.assert.equal(ssr1 === null || ssr1 === void 0 ? void 0 : ssr1.date.toISOString(), "2024-05-03T00:00:00.000Z");
        chai_1.assert.isArray(sut.sharedTo);
        chai_1.assert.equal(sut.sharedTo.length, 1);
        const st1 = _.first(sut.sharedTo);
        chai_1.assert.equal(st1 === null || st1 === void 0 ? void 0 : st1.active, true);
        chai_1.assert.equal(st1 === null || st1 === void 0 ? void 0 : st1.departmentId, "5195426cc4e016a988000965");
        chai_1.assert.equal(st1 === null || st1 === void 0 ? void 0 : st1.expireAt.toISOString(), "2024-08-01T10:20:30.400Z");
        chai_1.assert.equal(st1 === null || st1 === void 0 ? void 0 : st1.name, "Test Fire Department");
        chai_1.assert.equal(st1 === null || st1 === void 0 ? void 0 : st1.startAt.toISOString(), "2024-05-01T01:02:03.040Z");
        chai_1.assert.equal(st1 === null || st1 === void 0 ? void 0 : st1.reasons.length, 1);
        const str1 = _.first(st1 === null || st1 === void 0 ? void 0 : st1.reasons);
        chai_1.assert.equal(str1 === null || str1 === void 0 ? void 0 : str1.name, "Unit M10 assigned");
        chai_1.assert.equal(str1 === null || str1 === void 0 ? void 0 : str1.date.toISOString(), "2024-05-03T01:01:01.010Z");
    });
    it("no virtuals id if _id not present", async function () {
        var _a, _b;
        const item = new models.CADIncident(testItem);
        await item.save();
        const sut = await models.CADIncident.findOne({ _id: item._id }).lean({
            virtuals: true
        });
        chai_1.assert.equal(sut === null || sut === void 0 ? void 0 : sut.units.length, 1);
        chai_1.assert.isUndefined((_a = sut === null || sut === void 0 ? void 0 : sut.units[0]) === null || _a === void 0 ? void 0 : _a.id);
        chai_1.assert.equal(sut === null || sut === void 0 ? void 0 : sut.Comment.length, 1);
        chai_1.assert.isUndefined((_b = sut === null || sut === void 0 ? void 0 : sut.Comment[0]) === null || _b === void 0 ? void 0 : _b.id);
    });
});
//# sourceMappingURL=cad-incident.js.map