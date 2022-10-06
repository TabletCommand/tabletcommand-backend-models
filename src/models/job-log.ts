import {
  createModel,
  createSchema,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseDocument,
  MongooseModule,
  ReplaceModelReturnType,
  currentDate,
} from "../helpers";
import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";

export async function JobLogModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true,
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
    collection: "massive_job_log",
  });
  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
  });

  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    return this._id.toHexString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "JobLog", modelSchema);
}

export interface JobLog extends ItemTypeFromTypeSchemaFunction<typeof JobLogModule> { }
export interface JobLogModel extends ModelTypeFromTypeSchemaFunction<JobLog> { }
export default JobLogModule as ReplaceModelReturnType<typeof JobLogModule, JobLogModel>;