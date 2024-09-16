import * as  uuid from "uuid";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import { Model } from "mongoose";
import { DeviceMappingType } from "../types/device-mapping";

export interface DeviceMapping extends DeviceMappingType { }

export default async function DeviceMappingModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<DeviceMappingType>({
    _id: {
      type: Schema.Types.ObjectId,
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
      trim: true,
      default: "",
    },
    deviceId: {
      type: String,
      trim: true,
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
      trim: true,
      default: "0.0.0.0",
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },
    note: {
      type: String,
      trim: true,
      default: "",
    },
    mapHidden: {
      type: Boolean,
      default: false,
    },
  }, {
    autoIndex: false,
  });

  modelSchema.index({
    departmentId: 1,
    modified_unix_date: 1
  }, {
    name: "departmentId_1_modified_unix_date_1",
  });

  modelSchema.index({
    deviceId: 1,
  }, {
    name: "deviceId_1",
  });

  modelSchema.index({
    remoteAddress: 1,
  }, {
    name: "remoteAddress_1",
  });

  return mongoose.model<DeviceMapping>("DeviceMapping", modelSchema, "massive_device_mapping", { overwriteModels: true });
}

export interface DeviceMappingModel extends Model<DeviceMapping> { }