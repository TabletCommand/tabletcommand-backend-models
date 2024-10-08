import { assert } from "chai";
import "mocha";
import * as m from "../index";
import * as config from "./config";
import mockModule from "./mock";
import { decodeLocationVisibility } from "../models/location";
import { LocationVisibility } from "../constants";

describe("Location", function() {
  let models: m.BackendModels, mongoose: m.MongooseModule;
  let testItem: Partial<m.Location>;
  beforeEach(async function() {
    const c = await m.connect(config.url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = mockModule({
      mongoose
    });
    testItem = mock.location;

    await mock.beforeEach();
  });
  afterEach(async function() {
    await mongoose.disconnect();
  });

  it("is saved", async function() {
    const item = new models.Location(testItem);
    const sut = await item.save();
    assert.isNotNull(testItem._id);
    assert.equal(testItem.departmentId, sut.departmentId);
    assert.equal(testItem.userId, sut.userId);
    assert.equal(testItem.uuid, sut.uuid);
    assert.equal(testItem.username, sut.username);
    assert.equal(testItem.device_type, sut.device_type);
    assert.equal(testItem.session, sut.session);
    assert.equal(testItem.active, sut.active);
    assert.equal(testItem.heading, sut.heading);
    assert.equal(testItem.locationGeoJSON?.coordinates[0], sut.location?.longitude);
    assert.equal(testItem.locationGeoJSON?.coordinates[1], sut.location?.latitude);
    assert.equal(testItem.locationGeoJSON?.type, "Point");
    assert.equal(testItem.locationGeoJSON?.coordinates[0], sut.locationGeoJSON.coordinates[0]);
    assert.equal(testItem.locationGeoJSON?.coordinates[1], sut.locationGeoJSON.coordinates[1]);
    assert.equal(testItem.opAreaCode, sut.opAreaCode);
    assert.equal(testItem.opAreaName, sut.opAreaName);
    assert.equal(testItem.shared, sut.shared);
    assert.equal(testItem.state, sut.state);
    assert.equal(testItem.sendToCAD, sut.sendToCAD);
    assert.equal(testItem.color?.text, sut.color.text);
    assert.equal(testItem.color?.background, sut.color.background);
    assert.isTrue(sut.uuid !== "");

    const { longitude, latitude } = sut.location ?? { latitude: 0, longitude: 0 };
    const maxDistance = 10000;
    const geoQuery = {
      locationGeoJSON: {
        $nearSphere: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          $maxDistance: maxDistance
        }
      }
    };

    try {
      await models.Location.findOne(geoQuery);
      assert.isFalse(true, "Expecting above to fail.");
    } catch (error) {
      assert.isNotNull(error, "Expecting above to fail");
    }

    await models.Location.createIndexes();

    const found = await models.Location.findOne(geoQuery);
    assert.isObject(found);
  });

  it("decodes .visibility", async function() {
    const item = new models.Location(testItem);
    const sut = await item.save();

    const sutVis = decodeLocationVisibility(sut.visibility);

    assert.equal(sutVis.length, 4);
    assert.notEqual(sutVis.indexOf(LocationVisibility.Hidden), -1);
    assert.notEqual(sutVis.indexOf(LocationVisibility.Visible), -1);
    assert.notEqual(sutVis.indexOf(LocationVisibility.CAD), -1);
    assert.notEqual(sutVis.indexOf(LocationVisibility.Shared), -1);
  });
});
