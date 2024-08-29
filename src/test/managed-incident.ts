import { assert } from "chai";
import "mocha";
import * as _ from "lodash";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("ManagedIncident", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.ManagedIncident>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.managedIncident;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.ManagedIncident(testItem);
    const sut = await item.save();


    assert.isNotNull(testItem._id);
    assert.equal(sut.departmentId, testItem.departmentId);
    assert.equal(sut.CallerNumber, testItem.CallerNumber);
    assert.equal(sut.CommandChannel, testItem.CommandChannel);
    assert.equal(sut.TacticalAltChannel, testItem.TacticalAltChannel);
    assert.equal(sut.TacticalChannel, testItem.TacticalChannel);
    assert.equal(sut.active, testItem.active);
    assert.equal(sut.address, testItem.address);
    assert.equal(sut.api_incident_number, testItem.api_incident_number);
    assert.equal(sut.channel, testItem.channel);
    assert.equal(sut.channel_owner, testItem.channel_owner);
    assert.equal(sut.end_time, testItem.end_time);
    assert.equal(sut.end_unix_time, testItem.end_unix_time);
    assert.equal(sut.is_closed, testItem.is_closed);
    assert.equal(sut.location, testItem.location);
    assert.equal(sut.managed, testItem.managed);
    assert.equal(sut.modified_date, testItem.modified_date);
    assert.equal(sut.modified_unix_date, testItem.modified_unix_date);
    assert.equal(sut.name, testItem.name);
    assert.equal(sut.preference_location, testItem.preference_location);
    assert.equal(sut.slave_map_changed, testItem.slave_map_changed);
    assert.equal(sut.source, testItem.source);
    assert.equal(sut.start_time, testItem.start_time);
    assert.equal(sut.start_unix_time, testItem.start_unix_time);
    assert.equal(sut.userId, testItem.userId);
    assert.equal(sut.uuid, testItem.uuid);

    assert.isTrue(sut.active);
    assert.isTrue(sut.is_closed);

    const unit = _.first(sut.units.filter((x) => x.UnitID === "M12"));
    assert.equal(unit?.Personnel.length, 2);
    const p1 = _.first(unit?.Personnel.filter((x) => x.PersonnelID === "X14"));
    assert.equal(p1?.PersonnelName, "Mary Smith");
    assert.equal(p1?.PersonnelNote, "X");
    assert.equal(p1?.PersonnelRank, "Captain");
    assert.equal(p1?.PersonnelWorkCode, "TRD");

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
});
