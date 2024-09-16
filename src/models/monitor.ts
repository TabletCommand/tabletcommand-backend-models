import { Model } from "mongoose";
import {
  currentDate,
  MongooseModule,
  retrieveCurrentUnixTime,
} from "../helpers";
import { MonitorType } from "../types/monitor";

export interface Monitor extends MonitorType { }

export default async function MonitorModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<MonitorType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
    },
    agencyId: {
      type: String,
      default: ""
    },
    notificationType: {
      type: String,
      default: "",
      required: true,
    },
    status: {
      type: String,
      default: "",
      required: true,
    },
    sentUnixDate: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
    sentAt: {
      type: Date,
      default: currentDate,
    },
    ticketId: {
      type: String,
      default: "",
    },
    // Manually incremented when a certain failure has occurred (status = "active")
    // Currently, has no effect for "restored".
    count: {
      type: Number,
      default: 1,
    },
  }, {
    autoIndex: false,
    toJSON: {
      versionKey: false,
    }
  });

  // cspell: words deparmtent
  modelSchema.index({
    departmentId: 1,
    notificationType: 1,
    sentAt: -1,
  }, {
    name: "deparmtentId_1_notificationType_1_sentAt_-1",
  });

  modelSchema.index({
    departmentId: 1,
    notificationType: 1,
    sentUnixDate: -1,
  }, {
    name: "deparmtentId_1_notificationType_1_sentUnixDate_-1",
  });

  return mongoose.model<Monitor>("Monitor", modelSchema, "massive_monitor", { overwriteModels: true });
}

export interface MonitorModel extends Model<Monitor> { }