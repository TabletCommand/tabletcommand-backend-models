import * as  uuid from "uuid";
import {
  createSchema,
  createModel,
  MongooseModule,
  ItemTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
  retrieveCurrentUnixTime,
} from "../helpers";
import { Document, Model } from "mongoose";

export async function GSTMappingModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      default: "",
    },
    gstAgency: {
      type: String,
      default: "",
    },
    deviceType: {
      type: String,
      default: "gst",
    },
    unitId: {
      type: String,
      default: "",
    },
    location: {
      longitude: {
          type: Number,
      },
      latitude: {
          type: Number,
      },
    },
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
    active: {
      type: Boolean,
      default: true,
    },
    mapHidden: {
      type: Boolean,
      default: false,
    },
    remoteAddress: {
      type: String,
      default: "0.0.0.0",
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },
    note: {
      type: String,
      default: "",
    },
  }, {
    collection: "massive_gst_mapping",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "GSTMapping", modelSchema);
}

export interface GSTMapping extends Document, ItemTypeFromTypeSchemaFunction<typeof GSTMappingModule> { }
export interface GSTMappingModel extends Model<GSTMapping> { }
export default GSTMappingModule as unknown as ReplaceModelReturnType<typeof GSTMappingModule, GSTMappingModel>;
