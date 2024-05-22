import { Mixed, Types } from "mongoose";
import {
  MongooseModule,
  currentDate,
  retrieveCurrentUnixTime,
} from "../helpers";

export interface MailLogType {
  _id: Types.ObjectId,
  mailId: string,
  event: string,
  timestamp: number,
  recipient: string,
  recipientDomain: string,
  tags: string[]
  deliveryStatus: Mixed,
  message: Mixed,
  flags: Mixed,
  envelope: Mixed,
  logLevel: string,
  reason: string,
  severity: string,
  modified_unix_date: number,
  modified: Date,
}

export default async function MailLogModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<MailLogType>({
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
    collection: "massive_mail_log",
  });
  modelSchema.set("autoIndex", false);

  return mongoose.model<MailLogType>("MailLog", modelSchema);
}
