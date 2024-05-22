import * as  uuid from "uuid";
import {
  currentDate,
  MongooseModule,
  retrieveCurrentUnixTime,
} from "../helpers";
import { Model, Types } from "mongoose";

export interface GSTMapping {
  _id: Types.ObjectId
  departmentId: string,
  gstAgency: string,
  deviceType: string,
  unitId: string,
  location: {
    longitude: number,
    latitude: number,
  },
  modified_unix_date: number,
  modified: Date,
  active: boolean,
  mapHidden: boolean,
  remoteAddress: string,
  uuid: string,
  note: string,
}

export default async function GSTMappingModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<GSTMapping>({
    _id: {
      type: Schema.Types.ObjectId,
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

  return mongoose.model<GSTMapping>("GSTMapping", modelSchema);
}

export interface GSTMappingModel extends Model<GSTMapping> { }