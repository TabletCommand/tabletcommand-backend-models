import {
  MongooseModule,
  createSchema,
  createModel,
  currentDate,
  retrieveCurrentUnixTime,
  ModelTypeFromTypeSchemaFunction,
  ItemTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";

export async function ActionLogModule(mongoose: MongooseModule) {
  const { Types } = mongoose;

  const modelSchema = createSchema({
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
      default: {},
    },
    before: {
      type: Object,
      default: {},
    },
    after: {
      type: Object,
      default: {},
    },
    delta: {
      type: Object,
      default: {},
    },
    message: {
      type: String,
      default: "",
    },
    createdAt: {
      type: Date,
      default: currentDate,
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
