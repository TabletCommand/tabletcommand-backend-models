import * as uuid from "uuid";
import {
  createModel,
  createSchema,
  createSchemaDefinition,
  currentDate,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseDocument,
  MongooseModule,
  ReplaceModelReturnType,
  retrieveCurrentUnixTime,
} from "../helpers";
import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";
import GeoJSONPointModule from "./schema/geojson-point";

export async function LocationModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;
  const GeoJSONPoint = GeoJSONPointModule(mongoose);

  const modelSchemaDefinition = createSchemaDefinition({
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    userId: {
      type: String,
      default: "",
      required: true,
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },
    username: {
      type: String,
      default: "",
      required: true,
    },
    device_type: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
    modified: {
      type: Date,
      default: currentDate,
    },
    // Date provided by CAD
    movedAt: {
      type: Date,
      default: currentDate,
    },
    version: {
      type: Number,
      default: 2,
    },
    session: {
      type: String,
      default: "",
    },
    // in meters
    altitude: {
      type: Number,
      default: 0,
    },
    // in degrees
    heading: {
      type: Number,
      default: 0,
    },
    // meters/sec (* 2.237 to convert to MPH)
    speed: {
      type: Number,
      default: 0,
    },

    // Unsigned 32 Int that gets exposed as OBJECTID to ArcGIS Feature Services
    esriId: {
      type: Number,
      default: 0,
    },

    location: {
      longitude: {
        type: Number,
        required: true,
        default: 0,
      },
      latitude: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    // Shared AVL
    locationGeoJSON: {
      type: GeoJSONPoint,
      default: null,
    },
    // opAreaCode for shared AVL unit
    opAreaCode: {
      type: String,
      default: "",
    },
    opAreaName: {
      type: String,
      default: "",
    },
    // Copied from the department setting
    shared: {
      type: Boolean,
      default: false,
    },
    state: {
      type: String,
      default: "",
    },
    sendToCAD: {
      type: Boolean,
      default: false,
    },
  });

  const modelSchema = createSchema(Schema, modelSchemaDefinition, {
    collection: "massive_location",
  });

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
  });

  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    return this._id.toHexString();
  });

  // Create GeoJSON index
  modelSchema.index({
    locationGeoJSON: "2dsphere",
    shared: 1,
    departmentId: 1,
    modified_unix_date: 1,
  });
  modelSchema.index({
    locationGeoJSON: "2dsphere",
    shared: 1,
    departmentId: 1,
    modified: 1,
  });
  modelSchema.plugin(mongooseLeanVirtuals);
  modelSchema.set("autoIndex", false);
  return createModel(mongoose, "Location", modelSchema);
}

export interface Location extends ItemTypeFromTypeSchemaFunction<typeof LocationModule> { }
export interface LocationModel extends ModelTypeFromTypeSchemaFunction<Location> { }
export default LocationModule as ReplaceModelReturnType<typeof LocationModule, LocationModel>;
