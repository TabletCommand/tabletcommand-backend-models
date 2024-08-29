import { assert } from "chai";
import * as _ from "lodash";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";
import "mocha";

describe("CADIncident", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.CADIncident>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.cadIncident;
    await mock.beforeEach();
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.CADIncident(testItem);
    const sut = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(sut.uuid, testItem.uuid);
    assert.equal(sut.departmentId, testItem.departmentId);
    assert.equal(sut.AgencyID, testItem.AgencyID);
    assert.equal(sut.IncidentNumber, testItem.IncidentNumber);
    assert.equal(sut.TransactionID, testItem.TransactionID);
    assert.equal(sut.AgencyIncidentCallTypeDescription, testItem.AgencyIncidentCallTypeDescription);
    assert.equal(sut.StreetName, testItem.StreetName);
    assert.equal(sut.StreetSuffix, testItem.StreetSuffix);
    assert.equal(sut.Predirectional, testItem.Predirectional);
    assert.equal(sut.Postdirectional, testItem.Postdirectional);
    assert.equal(sut.CityOrLocality, testItem.CityOrLocality);
    assert.equal(sut.Floor, testItem.Floor);
    assert.equal(sut.Suite, testItem.Suite);
    assert.equal(sut.City, testItem.City);
    assert.equal(sut.Building, testItem.Building);
    assert.equal(sut.StateOrProvince, testItem.StateOrProvince);
    assert.equal(sut.CommonPlaceName, testItem.CommonPlaceName);
    assert.equal(sut.LocationComment, testItem.LocationComment);
    assert.equal(sut.CrossStreet1, testItem.CrossStreet1);
    assert.equal(sut.CrossStreet2, testItem.CrossStreet2);
    assert.equal(sut.cross_streets, testItem.cross_streets);
    assert.equal(sut.PostalCode, testItem.PostalCode);
    assert.equal(sut.CallerNumber, testItem.CallerNumber);
    assert.equal(sut.Latitude, testItem.Latitude);
    assert.equal(sut.Longitude, testItem.Longitude);
    assert.equal(sut.preference_location, testItem.preference_location);
    assert.equal(sut.EntryDateTime, testItem.EntryDateTime);
    assert.equal(sut.ClosedDateTime, testItem.ClosedDateTime);
    assert.equal(sut.closed_unix_date, testItem.closed_unix_date);
    assert.equal(sut.start_unix_date, testItem.start_unix_date);
    assert.equal(sut.modified_unix_date, testItem.modified_unix_date);

    assert.isTrue(sut.PriorIncidentChanged);
    assert.equal(sut.PriorIncidentChanged, testItem.PriorIncidentChanged);
    assert.equal(sut.PriorIncident.length, 1);
    if (sut.PriorIncident.length === 1) {
      const pi = sut.PriorIncident[0];
      const pid = testItem.PriorIncident?.length ? testItem.PriorIncident[0] : null;
      assert.isNotNull(pid);
      assert.equal(pi?.IncidentNumber, pid?.IncidentNumber);
      assert.equal(pi?.IncidentDateTime, pid?.IncidentDateTime);
      assert.equal(pi?.Problem, pid?.Problem);
      assert.equal(pi?.Address, pid?.Address);
      assert.equal(pi?.Suite, pid?.Suite);
      assert.equal(pi?.Jurisdiction, pid?.Jurisdiction);
      assert.equal(pi?.Comment[0]?.Comment, pid?.Comment[0]?.Comment);
      assert.equal(pi?.Comment[0]?.CommentSource, pid?.Comment[0]?.CommentSource);
      assert.equal(pi?.Comment[0]?.CommentDateTime, pid?.Comment[0]?.CommentDateTime);
    }

    if (testItem.units?.length) {
      assert.equal(sut?.units[0]?.UnitDispatchNumber, testItem?.units[0]?.UnitDispatchNumber);
      assert.equal(sut?.units[0]?.UnitID, testItem?.units[0]?.UnitID);
      assert.equal(sut?.units[0]?.TimeDispatched, testItem?.units[0]?.TimeDispatched);
    } else {
      assert.equal(sut.units.length, 1);
    }

    const unit = _.first(sut.units.filter((x) => x.UnitID === "MA31"));
    assert.equal(unit?.Personnel.length, 2);
    const p1 = _.first(unit?.Personnel.filter((x: { PersonnelID: string; }) => x.PersonnelID === "X14"));
    assert.equal(p1?.PersonnelName, "Mary Smith");
    assert.equal(p1?.PersonnelNote, "X");
    assert.equal(p1?.PersonnelRank, "Captain");
    assert.equal(p1?.PersonnelWorkCode, "TRD");

    assert.equal(sut.Comment.length, 1);
    if (testItem.Comment?.length) {
      assert.equal(sut?.Comment[0]?.Comment, testItem?.Comment[0]?.Comment);
      assert.equal(sut?.Comment[0]?.CommentSource, testItem?.Comment[0]?.CommentSource);
      assert.equal(sut?.Comment[0]?.CommentDateTime, testItem?.Comment[0]?.CommentDateTime);
    } else {
      assert.equal(sut.Comment.length, 1);
    }

    // Share incident properties
    assert.isArray(sut.ReportNumber);
    assert.equal(sut.ReportNumber.length, 2);
    const rna = _.first(sut.ReportNumber.filter((x) => x.name === "A"));
    assert.isObject(rna);
    assert.equal(rna?.number, "07-0351");
    const rnb = _.first(sut.ReportNumber.filter((x) => x.name === "B"));
    assert.isObject(rnb);
    assert.equal(rnb?.number, "UM-02210");

    assert.isArray(sut.radioChannels);
    assert.equal(sut.radioChannels.length, 2);
    const rca = _.first(sut.radioChannels.filter((x) => x.name === "CMD"));
    assert.isObject(rca);
    assert.equal(rca?.channel, "LOCAL Tone: 3");
    assert.equal(rca?.url, "http://example.com/stream1");
    const rcb = _.first(sut.radioChannels.filter((x) => x.name === "TAC"));
    assert.isObject(rcb);
    assert.equal(rcb?.channel, "CDF TAC 10");
    assert.equal(rcb?.url, "http://example.com/stream2");

    assert.isObject(sut.record);
    assert.equal(sut.record.name, "John");
    assert.equal(sut.record.value, "Smith");

    assert.isObject(sut.sharedSource);
    assert.equal(sut.sharedSource.isExternal, true);
    assert.equal(sut.sharedSource.name, "Demo RTS Fire Department");
    assert.isArray(sut.sharedSource.reasons);
    assert.equal(sut.sharedSource.reasons.length, 1);
    const ssr1 = _.first(sut.sharedSource.reasons);
    assert.isObject(ssr1);
    assert.equal(ssr1?.name, "Unit B10 assigned");
    assert.equal(ssr1?.date.toISOString(), "2024-05-03T00:00:00.000Z");

    assert.isArray(sut.sharedTo);
    assert.equal(sut.sharedTo.length, 1);
    const st1 = _.first(sut.sharedTo);
    assert.equal(st1?.active, true);
    assert.equal(st1?.departmentId, "5195426cc4e016a988000965");
    assert.equal(st1?.expireAt.toISOString(), "2024-08-01T10:20:30.400Z");
    assert.equal(st1?.name, "Test Fire Department");
    assert.equal(st1?.startAt.toISOString(), "2024-05-01T01:02:03.040Z");
    assert.equal(st1?.reasons.length, 1);
    const str1 = _.first(st1?.reasons);
    assert.equal(str1?.name, "Unit M10 assigned");
    assert.equal(str1?.date.toISOString(), "2024-05-03T01:01:01.010Z");
  });

  it("no virtuals id if _id not present", async function() {
    const item = new models.CADIncident(testItem);
    await item.save();

    const sut = await models.CADIncident.findOne({ _id: item._id }).lean({
      virtuals: true
    });
    assert.equal(sut?.units.length, 1);
    assert.isUndefined(sut?.units[0]?.id);

    assert.equal(sut?.Comment.length, 1);
    assert.isUndefined(sut?.Comment[0]?.id);
  });
});
