import { Model, Types } from "mongoose";
import {
  MongooseDocument,
  MongooseModule,
  currentDate,
} from "../helpers";
import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";

export interface JobLog {
  _id: Types.ObjectId,
  id?: string,
  jobName: string,
  host: string,
  bidDate: Date,
  startDate: Date,
  completedDate: Date,
  state: string
  forceClosed: boolean,
}

export default async function JobLogModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<JobLog>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    jobName: {
      type: String,
      default: "",
    },
    host: {
      type: String,
      default: "",
    },
    bidDate: {
      type: Date,
      default: currentDate,
    },
    startDate: {
      type: Date,
    },
    completedDate: {
      type: Date,
    },
    state: {
      type: String,
    },
    forceClosed: {
      type: Boolean,
      default: false,
    },
  }, {
  });
  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
  });

  modelSchema.virtual("id").get(function (this: MongooseDocument) {
    return this._id.toHexString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);
  modelSchema.set("autoIndex", false);

  return mongoose.model<JobLog>("JobLog", modelSchema, "massive_job_log", { overwriteModels: true });
}

export interface JobLogModel extends Model<JobLog> { }
