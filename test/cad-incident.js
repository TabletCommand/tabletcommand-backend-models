"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("CADIncident", function() {
  let models, connection;
  let testData;
  beforeEach(function() {
    return m.connect(url, (err, mongoose, conn, mods) => {
      if (err) {
        console.log("Error connecting to mongo", err);
        process.exit();
      }
      models = mods;
      connection = conn;

      const mock = require("./mock")({
        mongoose
      });
      testData = mock.cadIncident;
    });
  });
  afterEach(function() {
    connection.close();
  });

  it("is saved", function(done) {
    var item = new models.CADIncident(testData);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(testData._id);
      assert.equal(sut.uuid, testData.uuid);
      assert.equal(sut.departmentId, testData.departmentId);
      assert.equal(sut.AgencyID, testData.AgencyID);
      assert.equal(sut.IncidentNumber, testData.IncidentNumber);
      assert.equal(sut.TransactionID, testData.TransactionID);
      assert.equal(sut.AgencyIncidentCallTypeDescription, testData.AgencyIncidentCallTypeDescription);
      assert.equal(sut.StreetName, testData.StreetName);
      assert.equal(sut.StreetSuffix, testData.StreetSuffix);
      assert.equal(sut.Predirectional, testData.Predirectional);
      assert.equal(sut.Postdirectional, testData.Postdirectional);
      assert.equal(sut.CityOrLocality, testData.CityOrLocality);
      assert.equal(sut.Floor, testData.Floor);
      assert.equal(sut.Suite, testData.Suite);
      assert.equal(sut.City, testData.City);
      assert.equal(sut.Building, testData.Building);
      assert.equal(sut.StateOrProvince, testData.StateOrProvince);
      assert.equal(sut.CommonPlaceName, testData.CommonPlaceName);
      assert.equal(sut.LocationComment, testData.LocationComment);
      assert.equal(sut.CrossStreet1, testData.CrossStreet1);
      assert.equal(sut.CrossStreet2, testData.CrossStreet2);
      assert.equal(sut.cross_streets, testData.cross_streets);
      assert.equal(sut.PostalCode, testData.PostalCode);
      assert.equal(sut.CallerNumber, testData.CallerNumber);
      assert.equal(sut.Latitude, testData.Latitude);
      assert.equal(sut.Longitude, testData.Longitude);
      assert.equal(sut.preference_location, testData.preference_location);
      assert.equal(sut.EntryDateTime, testData.EntryDateTime);
      assert.equal(sut.ClosedDateTime, testData.ClosedDateTime);
      assert.equal(sut.closed_unix_date, testData.closed_unix_date);
      assert.equal(sut.start_unix_date, testData.start_unix_date);
      assert.equal(sut.modified_unix_date, testData.modified_unix_date);

      assert.isTrue(sut.PriorIncidentChanged);
      assert.equal(sut.PriorIncidentChanged, testData.PriorIncidentChanged);
      assert.equal(sut.PriorIncident.length, 1);
      if (sut.PriorIncident.length === 1) {
        var pi = sut.PriorIncident[0];
        var pid = testData.PriorIncident[0];
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
      assert.equal(sut.units[0].UnitDispatchNumber, testData.units[0].UnitDispatchNumber);
      assert.equal(sut.units[0].UnitID, testData.units[0].UnitID);
      assert.equal(sut.units[0].TimeDispatched, testData.units[0].TimeDispatched);

      assert.equal(sut.Comment.length, 1);
      assert.equal(sut.Comment[0].Comment, testData.Comment[0].Comment);
      assert.equal(sut.Comment[0].CommentSource, testData.Comment[0].CommentSource);
      assert.equal(sut.Comment[0].CommentDateTime, testData.Comment[0].CommentDateTime);

      // assert.equal(sut.incidentTypes[0].name, testData.incidentTypes[0].name);

      return done();
    });
  });
});
