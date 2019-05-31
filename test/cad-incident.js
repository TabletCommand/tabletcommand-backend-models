"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("CADIncident", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.cadIncident;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", function(done) {
    var item = new models.CADIncident(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

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
        var pi = sut.PriorIncident[0];
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

      assert.equal(sut.units.length, 1);
      assert.equal(sut.units[0].UnitDispatchNumber, testItem.units[0].UnitDispatchNumber);
      assert.equal(sut.units[0].UnitID, testItem.units[0].UnitID);
      assert.equal(sut.units[0].TimeDispatched, testItem.units[0].TimeDispatched);

      assert.equal(sut.Comment.length, 1);
      assert.equal(sut.Comment[0].Comment, testItem.Comment[0].Comment);
      assert.equal(sut.Comment[0].CommentSource, testItem.Comment[0].CommentSource);
      assert.equal(sut.Comment[0].CommentDateTime, testItem.Comment[0].CommentDateTime);

      // assert.equal(sut.incidentTypes[0].name, testItem.incidentTypes[0].name);

      return done();
    });
  });
});
