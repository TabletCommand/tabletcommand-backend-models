"use strict";

const _ = require("lodash");
const assert = require("chai").assert;

const mongoose = require('mongoose');

describe("CADIncident", function() {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function() {
    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.cadIncident;
    await mock.beforeEach();
  });


  it("is saved", async function() {
    const item = new models.CADIncident(testItem);
    const ress = await item.save();

    assert.isNotNull(testItem._id);
    assert.equal(ress.uuid, testItem.uuid);
    assert.equal(ress.departmentId, testItem.departmentId);
    assert.equal(ress.AgencyID, testItem.AgencyID);
    assert.equal(ress.IncidentNumber, testItem.IncidentNumber);
    assert.equal(ress.TransactionID, testItem.TransactionID);
    assert.equal(ress.AgencyIncidentCallTypeDescription, testItem.AgencyIncidentCallTypeDescription);
    assert.equal(ress.StreetName, testItem.StreetName);
    assert.equal(ress.StreetSuffix, testItem.StreetSuffix);
    assert.equal(ress.Predirectional, testItem.Predirectional);
    assert.equal(ress.Postdirectional, testItem.Postdirectional);
    assert.equal(ress.CityOrLocality, testItem.CityOrLocality);
    assert.equal(ress.Floor, testItem.Floor);
    assert.equal(ress.Suite, testItem.Suite);
    assert.equal(ress.City, testItem.City);
    assert.equal(ress.Building, testItem.Building);
    assert.equal(ress.StateOrProvince, testItem.StateOrProvince);
    assert.equal(ress.CommonPlaceName, testItem.CommonPlaceName);
    assert.equal(ress.LocationComment, testItem.LocationComment);
    assert.equal(ress.CrossStreet1, testItem.CrossStreet1);
    assert.equal(ress.CrossStreet2, testItem.CrossStreet2);
    assert.equal(ress.cross_streets, testItem.cross_streets);
    assert.equal(ress.PostalCode, testItem.PostalCode);
    assert.equal(ress.CallerNumber, testItem.CallerNumber);
    assert.equal(ress.Latitude, testItem.Latitude);
    assert.equal(ress.Longitude, testItem.Longitude);
    assert.equal(ress.preference_location, testItem.preference_location);
    assert.equal(ress.EntryDateTime, testItem.EntryDateTime);
    assert.equal(ress.ClosedDateTime, testItem.ClosedDateTime);
    assert.equal(ress.closed_unix_date, testItem.closed_unix_date);
    assert.equal(ress.start_unix_date, testItem.start_unix_date);
    assert.equal(ress.modified_unix_date, testItem.modified_unix_date);

    assert.isTrue(ress.PriorIncidentChanged);
    assert.equal(ress.PriorIncidentChanged, testItem.PriorIncidentChanged);
    assert.equal(ress.PriorIncident.length, 1);
    if (ress.PriorIncident.length === 1) {
      var pi = ress.PriorIncident[0];
      var pid = testItem.PriorIncident[0];
      assert.equal(pi.IncidentNumber, pid.IncidentNumber);
      assert.equal(pi.IncidentDateTime, pid.IncidentDateTime);
      assert.equal(pi.Problem, pid.Problem);
      assert.equal(pi.Address, pid.Address);
      assert.equal(pi.Suite, pid.Suite);
      assert.equal(pi.Jurisdiction, pid.Jurisdiction);
      assert.equal(pi.Comment[0].Comment, pid.Comment[0].Comment);
      assert.equal(pi.Comment[0].CommentSource, pid.Comment[0].CommentSource);
      assert.equal(pi.Comment[0].CommentDateTime, pid.Comment[0].CommentDateTime);
    }

    assert.equal(ress.units.length, 1);
    assert.equal(ress.units[0].UnitDispatchNumber, testItem.units[0].UnitDispatchNumber);
    assert.equal(ress.units[0].UnitID, testItem.units[0].UnitID);
    assert.equal(ress.units[0].TimeDispatched, testItem.units[0].TimeDispatched);
    
    const unit = _.first(ress.units.filter((x) => x.UnitID === "MA31"));
    assert.equal(unit.Personnel.length, 2);
    const p1 = _.first(unit.Personnel.filter((x) => x.PersonnelID === "X14"));
    assert.equal(p1.PersonnelName, "Mary Smith");
    assert.equal(p1.PersonnelNote, "X");
    assert.equal(p1.PersonnelRank, "Captain");
    assert.equal(p1.PersonnelWorkCode, "TRD");

    assert.equal(ress.Comment.length, 1);
    assert.equal(ress.Comment[0].Comment, testItem.Comment[0].Comment);
    assert.equal(ress.Comment[0].CommentSource, testItem.Comment[0].CommentSource);
    assert.equal(ress.Comment[0].CommentDateTime, testItem.Comment[0].CommentDateTime);

    // Share incident properties
    assert.isArray(ress.ReportNumber);
    assert.equal(ress.ReportNumber.length, 2);
    const rna = _.first(ress.ReportNumber.filter((x) => x.name === "A"));
    assert.isObject(rna);
    assert.equal(rna.number, "07-0351");
    const rnb = _.first(ress.ReportNumber.filter((x) => x.name === "B"));
    assert.isObject(rnb);
    assert.equal(rnb.number, "UM-02210");

    assert.isArray(ress.radioChannels);
    assert.equal(ress.radioChannels.length, 2);
    const rca = _.first(ress.radioChannels.filter((x) => x.name === "CMD"));
    assert.isObject(rca);
    assert.equal(rca.channel, "LOCAL Tone: 3");
    assert.equal(rca.url, "http://example.com/stream1");
    const rcb = _.first(ress.radioChannels.filter((x) => x.name === "TAC"));
    assert.isObject(rcb);
    assert.equal(rcb.channel, "CDF TAC 10");
    assert.equal(rcb.url, "http://example.com/stream2");

    assert.isObject(ress.record);
    assert.equal(ress.record.name, "John");
    assert.equal(ress.record.value, "Smith");

    assert.isObject(ress.sharedSource);
    assert.equal(ress.sharedSource.isExternal, true);
    assert.equal(ress.sharedSource.name, "Demo RTS Fire Department");
    assert.isArray(ress.sharedSource.reasons);
    assert.equal(ress.sharedSource.reasons.length, 1);
    const ssr1 = _.first(ress.sharedSource.reasons);
    assert.isObject(ssr1);
    assert.equal(ssr1.name, "Unit B10 assigned");
    assert.equal(ssr1.date.toISOString(), "2024-05-03T00:00:00.000Z");

    assert.isArray(ress.sharedTo);
    assert.equal(ress.sharedTo.length, 1);
    const st1 = _.first(ress.sharedTo);
    assert.equal(st1.active, true);
    assert.equal(st1.departmentId, "5195426cc4e016a988000965");
    assert.equal(st1.expireAt.toISOString(), "2024-08-01T10:20:30.400Z");
    assert.equal(st1.name, "Test Fire Department");
    assert.equal(st1.startAt.toISOString(), "2024-05-01T01:02:03.040Z");
    assert.equal(st1.reasons.length, 1);
    const str1 = _.first(st1.reasons);
    assert.equal(str1.name, "Unit M10 assigned");
    assert.equal(str1.date.toISOString(), "2024-05-03T01:01:01.010Z");
  });

  it("no virtuals id if _id not present", async function() {
    const item = new models.CADIncident(testItem);
    await item.save();

    const sut = await models.CADIncident.findOne({ _id: item._id }).lean({
      virtuals: true
    });
    assert.equal(sut.units.length, 1);
    assert.isUndefined(sut.units[0].id);

    assert.equal(sut.Comment.length, 1);
    assert.isUndefined(sut.Comment[0].id);
  });
});
