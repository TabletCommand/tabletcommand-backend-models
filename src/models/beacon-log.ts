import {
  MongooseModule,
  currentDate,
  retrieveCurrentUnixTime,
} from "../helpers";
import { Types, Model } from "mongoose";

export interface BeaconLog {
  _id: Types.ObjectId,
  departmentId: string,
  userId: string,
  object: object,
  createdAt: Date,
  modified_unix_date: number,
}

export default async function BeaconLogModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<BeaconLog>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      default: "",
      index: true,
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

  return mongoose.model<BeaconLog>("BeaconLog", modelSchema, "massive_beacon_log", { overwriteModels: true });
}

export interface BeaconLogModel extends Model<BeaconLog> { }