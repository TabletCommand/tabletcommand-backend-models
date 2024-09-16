import { Model } from "mongoose";
import {
  MongooseModule,
  currentDate,
  retrieveCurrentUnixTime,
} from "../helpers";
import { MailLogType } from "../types/mail-log";

export interface MailLog extends MailLogType { }

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
    autoIndex: false,
  });

  modelSchema.index({
    modified_unix_date: 1,
  }, {
    name: "modified_unix_date_1",
  });

  return mongoose.model<MailLog>("MailLog", modelSchema, "massive_mail_log", { overwriteModels: true });
}

export interface MailLogModel extends Model<MailLog> { }