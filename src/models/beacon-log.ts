import {
  MongooseModule,
  currentDate,
  retrieveCurrentUnixTime,
} from "../helpers";
import { Model } from "mongoose";
import { BeaconLogType } from "../types/beacon-log";

export interface BeaconLog extends BeaconLogType { }

export default async function BeaconLogModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<BeaconLogType>({
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
    object: {
      type: Object,
    },
    createdAt: {
      type: Date,
      default: currentDate,
    },
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
  }, {
    autoIndex: false,
  });

  modelSchema.index({
    departmentId: 1,
  }, {
    name: "departmentId_1",
  });

  return mongoose.model<BeaconLog>("BeaconLog", modelSchema, "massive_beacon_log", { overwriteModels: true });
}

export interface BeaconLogModel extends Model<BeaconLog> { }