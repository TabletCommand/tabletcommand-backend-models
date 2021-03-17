import * as  uuid from "uuid";
import {
  createSchema,
  createModel,
  currentDate,
  MongooseModule,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";

export async function DeviceMappingModule(mongoose: MongooseModule) {
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
    userId: {
      type: String,
      default: "",
    },
    deviceType: {
      type: String,
      default: "truck",
    },
    mapId: {
      type: String,
      default: "",
    },
    deviceId: {
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
      default: 0,
    },
    modified: {
      type: Date,
      default: currentDate,
    },
    active: {
      type: Boolean,
      default: true,
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
    mapHidden: {
      type: Boolean,
      default: false,
    },
  }, {
    collection: "massive_device_mapping",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "DeviceMapping", modelSchema);
}

export interface DeviceMapping extends ItemTypeFromTypeSchemaFunction<typeof DeviceMappingModule> { }
export interface DeviceMappingModel extends ModelTypeFromTypeSchemaFunction<DeviceMapping> { }
export default DeviceMappingModule as ReplaceModelReturnType<typeof DeviceMappingModule, DeviceMappingModel>;
