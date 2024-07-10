import { Model, Types } from "mongoose";
import {
  MongooseModule,
  currentDate,
  retrieveCurrentUnixTime,
} from "../helpers";

export interface MailLog {
  _id: Types.ObjectId,
  mailId: string,
  event: string,
  timestamp: number,
  recipient: string,
  recipientDomain: string,
  tags: string[]
  deliveryStatus: object,
  message: object,
  flags: object,
  envelope: object,
  logLevel: string,
  reason: string,
  severity: string,
  modified_unix_date: number,
  modified: Date,
}

export default async function MailLogModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<MailLog>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    mailId: {
      type: String,
      default: ""
    },
    event: {
      type: String,
      default: "",
    },
    timestamp: {
      type: Number,
    },
    recipient: {
      type: String,
      default: "",
    },
    recipientDomain: {
      type: String,
      default: "",
    },
    tags: {
      type: [String],
      default: [],
    },
    deliveryStatus: {
      type: Object,
      default: {},
    },
    message: {
      type: Object,
      default: {},
    },
    flags: {
      type: Object,
      default: {},
    },
    envelope: {
      type: Object,
      default: {},
    },
    logLevel: {
      type: String,
      default: ""
    },
    reason: {
      type: String,
      default: ""
    },
    severity: {
      type: String,
      default: ""
    },
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
    modified: {
      type: Date,
      default: currentDate,
    },
  }, {
  });
  modelSchema.set("autoIndex", false);

  return mongoose.model<MailLog>("MailLog", modelSchema, "massive_mail_log", { overwriteModels: true });
}

export interface MailLogModel extends Model<MailLog> { }