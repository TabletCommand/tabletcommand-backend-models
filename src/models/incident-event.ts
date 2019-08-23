import { createSchema, createModel, ModelItemType } from "./helpers";
import { MongooseModule, UnboxPromise } from "./helpers";

export async function IncidentEventModule(mongoose: MongooseModule) {
  "use strict";

  const { Schema, Types} = mongoose;

  const EventUser = createSchema(Schema, {
    username: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    radioName: {
      type: String,
      default: "",
    },
    userId: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
  });

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
    IncidentNumber: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    modified_unix_date: {
      type: Number,
      default: Date.now,
    },
    message: {
      type: String,
      default: "",
    },
    location: {
      longitude: {
        type: Number,
      },
      latitude: {
        type: Number,
      },
    },
    type: {
      type: String,
      default: "",
    },
    user: {
      type: EventUser,
    },
    serverTime: {
      type: Number,
      default: Date.now,
      min: 1,
    },
    userTime: {
      type: Number,
      required: true,
      default: 0,
      min: 1,
    },
    uuid: {
      type: String,
      require: true,
    },
  }, {
    collection: "massive_incident_event",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "IncidentEvent", modelSchema);
}

export default IncidentEventModule;
export type IncidentEventModel = UnboxPromise<ReturnType<typeof IncidentEventModule>>;
export type IncidentEvent = ModelItemType<IncidentEventModel>;
