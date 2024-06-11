"use strict";

const _ = require("lodash");
const assert = require("chai").assert;
const mongoose = require('mongoose');
describe("ManagedIncident", function () {
  let models = mongoose.models;
  let testItem;
  beforeEach(async function () {


    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.managedIncident;
  });


  it("is saved", function () {
    var item = new models.ManagedIncident(testItem);
    item.save().then((ress) => {

      assert.isNotNull(testItem._id);
      assert.equal(ress.departmentId, testItem.departmentId);
      assert.equal(ress.CallerNumber, testItem.CallerNumber);
      assert.equal(ress.CommandChannel, testItem.CommandChannel);
      assert.equal(ress.TacticalAltChannel, testItem.TacticalAltChannel);
      assert.equal(ress.TacticalChannel, testItem.TacticalChannel);
      assert.equal(ress.active, testItem.active);
      assert.equal(ress.address, testItem.address);
      assert.equal(ress.api_incident_number, testItem.api_incident_number);
      assert.equal(ress.channel, testItem.channel);
      assert.equal(ress.channel_owner, testItem.channel_owner);
      assert.equal(ress.end_time, testItem.end_time);
      assert.equal(ress.end_unix_time, testItem.end_unix_time);
      assert.equal(ress.is_closed, testItem.is_closed);
      assert.equal(ress.location, testItem.location);
      assert.equal(ress.managed, testItem.managed);
      assert.equal(ress.modified_date, testItem.modified_date);
      assert.equal(ress.modified_unix_date, testItem.modified_unix_date);
      assert.equal(ress.name, testItem.name);
      assert.equal(ress.preference_location, testItem.preference_location);
      assert.equal(ress.slave_map_changed, testItem.slave_map_changed);
      assert.equal(ress.source, testItem.source);
      assert.equal(ress.start_time, testItem.start_time);
      assert.equal(ress.start_unix_time, testItem.start_unix_time);
      assert.equal(ress.userId, testItem.userId);
      assert.equal(ress.uuid, testItem.uuid);

      assert.isTrue(ress.active);
      assert.isTrue(ress.is_closed);

      const unit = _.first(ress.units.filter((x) => x.UnitID === "M12"));
      assert.equal(unit.Personnel.length, 2);
      const p1 = _.first(unit.Personnel.filter((x) => x.PersonnelID === "X14"));
      assert.equal(p1.PersonnelName, "Mary Smith");
      assert.equal(p1.PersonnelNote, "X");
      assert.equal(p1.PersonnelRank, "Captain");
      assert.equal(p1.PersonnelWorkCode, "TRD");

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

    }).catch((err) => { assert.isNull(err, "Should not err"); });
  });
});
