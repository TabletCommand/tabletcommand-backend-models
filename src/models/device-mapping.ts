import * as  uuid from "uuid";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import { Model, Types } from "mongoose";

export interface DeviceMapping {
  _id: Types.ObjectId,
  departmentId: string,
  userId: string,
  deviceType: string,
  mapId: string,
  deviceId: string,
  location: {
    longitude: number,
    latitude: number,
  },
  modified_unix_date: number,
  modified: Date,
  active: boolean,
  remoteAddress: string,
  uuid: string,
  note: string,
  mapHidden: boolean,
}

export default async function DeviceMappingModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<DeviceMapping>({
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

  return mongoose.model<DeviceMapping>("DeviceMapping", modelSchema);
}

export interface DeviceMappingModel extends Model<DeviceMapping> { }