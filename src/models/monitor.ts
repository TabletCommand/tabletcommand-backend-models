import {
  createModel,
  createSchema,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseDocument,
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
  }, {
    collection: "massive_monitor",
  });
  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
  });

  // eslint-disable-next-line no-unused-vars
  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    return this._id.toHexString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "Monitor", modelSchema);
}

export interface Monitor extends ItemTypeFromTypeSchemaFunction<typeof MonitorModule> { }
export interface MonitorModel extends ModelTypeFromTypeSchemaFunction<Monitor> { }
export default MonitorModule as ReplaceModelReturnType<typeof MonitorModule, MonitorModel>;
