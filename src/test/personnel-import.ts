import { assert } from "chai";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";

describe("PersonnelImport", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.PersonnelImport>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.personnelImport;
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });


  it("is saved", async function() {
    const item = new models.PersonnelImport(testItem);
    const sut = await item.save();
    assert.equal(testItem._id, sut._id);
    assert.equal(testItem.PersonnelID, sut.PersonnelID);
    assert.equal(testItem.PersonnelName, sut.PersonnelName);
    assert.equal(testItem.PersonnelRank, sut.PersonnelRank);
    assert.equal(testItem.PersonnelWorkCode, sut.PersonnelWorkCode);
    assert.equal(testItem.PersonnelNote, sut.PersonnelNote);
    assert.equal(testItem.departmentId, sut.departmentId);
    if (testItem.radioNames?.length) {
      assert.equal(testItem.radioNames[0], sut.radioNames[0]);
      assert.equal(testItem.radioNames[1], sut.radioNames[1]);
    } else {
      assert.equal(testItem.radioNames?.length, 1);
    }
    assert.equal(sut.radioNames.length, 2);
    assert.equal(testItem.shiftStartTime, sut.shiftStartTime);
    assert.equal(testItem.shiftEndTime, sut.shiftEndTime);
    assert.equal(testItem.modified_unix_date, sut.modified_unix_date);
    assert.equal(testItem.active, sut.active);
    assert.equal(testItem.agencyName, sut.agencyName);
    assert.equal(testItem.agencyCode, sut.agencyCode);
    assert.equal(testItem.agencyId, sut.agencyId);
    assert.equal(testItem.importNotes, sut.importNotes);
    assert.equal(testItem.modified?.toISOString(), sut.modified.toISOString());
    assert.equal(testItem.shiftStart?.toISOString(), sut.shiftStart.toISOString());
    assert.equal(testItem.shiftEnd?.toISOString(), sut.shiftEnd.toISOString());
  });
});

