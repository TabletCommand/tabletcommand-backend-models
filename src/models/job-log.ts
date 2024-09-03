import { Model } from "mongoose";
import {
  MongooseModule,
  currentDate,
} from "../helpers";
import { JobLogType } from "../types/job-log";

export interface JobLog extends JobLogType { }

export default async function JobLogModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<JobLogType>({
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
    autoIndex: false,
    toJSON: {
      versionKey: false,
    }
  });

  return mongoose.model<JobLog>("JobLog", modelSchema, "massive_job_log", { overwriteModels: true });
}

export interface JobLogModel extends Model<JobLog> { }
