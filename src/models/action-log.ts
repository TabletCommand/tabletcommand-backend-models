import {
  MongooseModule,
  createSchema,
  createModel,
  retrieveCurrentUnixTime,
  ModelTypeFromTypeSchemaFunction,
  ItemTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";

export async function ActionLogModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    userId: {
      type: String,
      default: "",
    },
    action: {
      type: String,
      default: "",
    },
    object: {
      type: Object,
    },
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
  }, {
    collection: "massive_action_log",
  });
  modelSchema.set("autoIndex", false);
  return createModel(mongoose, "ActionLog", modelSchema);
}

export interface ActionLog extends ItemTypeFromTypeSchemaFunction<typeof ActionLogModule> { }
export interface ActionLogModel extends ModelTypeFromTypeSchemaFunction<ActionLog> { }
export default ActionLogModule as ReplaceModelReturnType<typeof ActionLogModule, ActionLogModel>;
