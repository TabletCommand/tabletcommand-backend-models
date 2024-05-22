import {
  MongooseModule,
  currentDate,
  retrieveCurrentUnixTime,
} from "../helpers";
import { Mixed, Types } from "mongoose";

export interface ActionLogType {
  _id: Types.ObjectId,
  departmentId: string,
  email: string,
  userId: string,
  emai: string,
  action: string,
  object: Mixed,
  before: Mixed,
  after: Mixed,
  delta: Mixed,
  message: string,
  createdAt: Date,
  modified_unix_date: number,

}

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
    collection: "massive_action_log",
  });
  modelSchema.set("autoIndex", false);
  return mongoose.model<ActionLogType>("ActionLog", modelSchema);
}