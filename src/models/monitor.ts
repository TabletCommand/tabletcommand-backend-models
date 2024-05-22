import { Types } from "mongoose";
import {
  currentDate,
  MongooseModule,
  retrieveCurrentUnixTime,
} from "../helpers";
import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";

export interface MonitorType {
  _id: Types.ObjectId,
  departmentId: string,
  agencyId: string,
  notificationType: string,
  status: string,
  sentUnixDate: number,
  sentAt: Date,
  ticketId: string,
  count: number,
}

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
      index: true,
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
    collection: "massive_monitor",
  });
  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
  });

  modelSchema.plugin(mongooseLeanVirtuals);
  modelSchema.set("autoIndex", false);

  return mongoose.model<MonitorType>("Monitor", modelSchema);
}
