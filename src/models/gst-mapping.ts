import * as  uuid from "uuid";
import {
  createSchema,
  createModel,
  currentDate,
  MongooseModule,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
  retrieveCurrentUnixTime,
} from "../helpers";

export async function GSTMappingModule(mongoose: MongooseModule) {
  const { Types } = mongoose;

  const modelSchema = createSchema({
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
    modified: {
      type: Date,
      default: currentDate,
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

export interface GSTMapping extends ItemTypeFromTypeSchemaFunction<typeof GSTMappingModule> { }
export interface GSTMappingModel extends ModelTypeFromTypeSchemaFunction<GSTMapping> { }
export default GSTMappingModule as ReplaceModelReturnType<typeof GSTMappingModule, GSTMappingModel>;
