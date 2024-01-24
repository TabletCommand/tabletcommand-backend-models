import {
  createModel,
  createSchema,
  currentDate,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseModule,
  ReplaceModelReturnType,
  retrieveCurrentUnixTime,
} from "../helpers";
import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";

export async function MonitorModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
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

  return createModel(mongoose, "Monitor", modelSchema);
}

export interface Monitor extends ItemTypeFromTypeSchemaFunction<typeof MonitorModule> { }
export interface MonitorModel extends ModelTypeFromTypeSchemaFunction<Monitor> { }
export default MonitorModule as ReplaceModelReturnType<typeof MonitorModule, MonitorModel>;
