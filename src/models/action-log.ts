import { MongooseModule, UnboxPromise, ModelItemType } from "./helpers";
import { createSchema, createModel, retrieveCurrentUnixTime } from "./helpers";

export async function ActionLogModule(mongoose: MongooseModule) {
  "use strict";

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

export default ActionLogModule;
export type ActionLogModel =  UnboxPromise<ReturnType<typeof ActionLogModule>>;
export type ActionLog = ModelItemType<ActionLogModel>;
