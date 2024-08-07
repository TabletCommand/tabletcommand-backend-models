import {
  MongooseModule,
  currentDate,
  retrieveCurrentUnixTime,
} from "../helpers";
import { Model } from "mongoose";
import { ActionLogType } from "../types/action-log";

export interface ActionLog extends ActionLogType { }

export default async function ActionLogModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const modelSchema = new Schema<ActionLogType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    userId: {
      type: String,
      default: "",
    },
    action: {
      type: String,
      default: "",
    },
    object: {
      type: Object,
      default: {},
    },
    before: {
      type: Object,
      default: {},
    },
    after: {
      type: Object,
      default: {},
    },
    delta: {
      type: Object,
      default: {},
    },
    message: {
      type: String,
      default: "",
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
    autoIndex: false
  });
  return mongoose.model<ActionLog>("ActionLog", modelSchema, "massive_action_log", { overwriteModels: true });
}

export interface ActionLogModel extends Model<ActionLog> { }