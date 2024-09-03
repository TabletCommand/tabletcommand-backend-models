import * as  uuid from "uuid";
import {
  currentDate,
  MongooseModule,
  retrieveCurrentUnixTime,
} from "../helpers";
import { Model } from "mongoose";
import { GSTMappingType } from "../types/gst-mapping";

export interface GSTMapping extends GSTMappingType { }

export default async function GSTMappingModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<GSTMappingType>({
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
    autoIndex: false,
  });

  return mongoose.model<GSTMapping>("GSTMapping", modelSchema, "massive_gst_mapping", { overwriteModels: true });
}

export interface GSTMappingModel extends Model<GSTMapping> { }