import * as uuid from "uuid";
import {
  MongooseModule,
} from "../helpers";
import { Model, Types } from "mongoose";

export interface IncidentTakeover {
  _id: Types.ObjectId,
  departmentId: string,
  uuid: string,
  incident_id: string,
  incident_name: string,
  incident_number: string,
  old_owner: string,
  new_owner: string,
  owner: string,
  status: string,
  request_time: number,
  last_response_time: number,
  response_time: number,
}

export default async function IncidentTakeoverModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<IncidentTakeover>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },
    incident_id: {
      type: String,
      required: true,
    },
    incident_name: {
      type: String,
      required: true,
    },
    incident_number: {
      type: String,
      default: "",
    },

    old_owner: {
      type: String,
      required: true,
    },
    new_owner: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      required: true,
      default: "request",
    },

    request_time: {
      type: Number,
      required: true,
      default: 0,
      min: 1,
    },
    last_response_time: {
      type: Number,
      default: 0,
    },
    response_time: {
      type: Number,
      default: 0,
    },
  }, {
  });
  modelSchema.set("autoIndex", false);

  return mongoose.model<IncidentTakeover>("IncidentTakeover", modelSchema, "massive_incident_takeover", { overwriteModels: true });
}

export interface IncidentTakeoverModel extends Model<IncidentTakeover> { }