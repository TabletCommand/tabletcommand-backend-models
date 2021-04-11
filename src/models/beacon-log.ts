import {
  MongooseModule,
  createSchema,
  createModel,
  retrieveCurrentUnixTime,
  ItemTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";
import { Document, Model } from "mongoose";

export async function BeaconLogModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
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
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
  }, {
    collection: "massive_beacon_log",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "BeaconLog", modelSchema);
}

export interface BeaconLog extends Document, ItemTypeFromTypeSchemaFunction<typeof BeaconLogModule> { }
export interface BeaconLogModel extends Model<BeaconLog> { }
export default BeaconLogModule as unknown as ReplaceModelReturnType<typeof BeaconLogModule, BeaconLogModel>;
