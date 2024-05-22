import {
  MongooseModule,
  currentDate,
  retrieveCurrentUnixTime,
} from "../helpers";
import { Types, Mixed } from "mongoose";

export interface BeaconLogType {
  _id: Types.ObjectId,
  departmentId: string,
  userId: string,
  object: Mixed,
  createdAt: Date,
  modified_unix_date: number,
}

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
    collection: "massive_beacon_log",
  });
  modelSchema.set("autoIndex", false);

  return mongoose.model<BeaconLogType>("BeaconLog", modelSchema);
}
