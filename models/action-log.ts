import { MongooseModule, UnboxPromise } from "./types";
import { createSchema, createModel } from "./helpers";

export async function ActionLogModule(mongoose: MongooseModule) {
  "use strict";

  var { Schema, Types } = mongoose;

  var modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true
    },
    departmentId: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      default: ""
    },
    action: {
      type: String,
      default: ""
    },
    object: {
      type: Object
    },
    modified_unix_date: {
      type: Number,
      default: new Date().valueOf() / 1000.0
    }
  }, {
    collection: "massive_action_log"
  });
  modelSchema.set("autoIndex", false);
  return createModel(mongoose, "ActionLog", modelSchema);
};

export default ActionLogModule;
export type ActionLog =  UnboxPromise<ReturnType<typeof ActionLogModule>>