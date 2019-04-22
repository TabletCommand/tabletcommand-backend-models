import { createSchema, createModel } from "./helpers";
import * as uuid from "uuid";
import { MongooseModule, UnboxPromise } from "./types";

export async function IncidentTakeoverModule(mongoose: MongooseModule) {
  
  const { Schema, Types } = mongoose;

  var modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true
    },
    uuid: {
      type: String,
      default: uuid.v4
    },
    incident_id: {
      type: String,
      required: true
    },
    incident_name: {
      type: String,
      required: true
    },

    old_owner: {
      type: String,
      required: true
    },
    new_owner: {
      type: String,
      required: true
    },
    owner: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      required: true,
      default: "request"
    },

    request_time: {
      type: Number,
      required: true,
      default: 0,
      min: 1
    },
    last_response_time: {
      type: Number,
      default: 0
    },
    response_time: {
      type: Number,
      default: 0
    }
  }, {
    collection: "massive_incident_takeover"
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "IncidentTakeover", modelSchema);
};

export default IncidentTakeoverModule;
export type IncidentTakeover = UnboxPromise<ReturnType<typeof IncidentTakeoverModule>>
