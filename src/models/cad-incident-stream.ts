import {
  MongooseModule,
  currentDate,
} from "../helpers";

import * as uuid from "uuid";
import { Model } from "mongoose";
import { CADIncidentStreamType } from "../types/cad";

export interface CADIncidentStream extends CADIncidentStreamType { }

export default async function CADIncidentStreamModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  // Simplified schema.
  // Payload should confirm to cad-incident (more or less)

  const modelSchema = new Schema<CADIncidentStreamType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },
    tag: {
      type: String,
      default: uuid.v4,
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
    },
    incidentNumber: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: currentDate,
    },
    // Partial cad-incident
    payload: {
      type: Object,
      default: {}
    },
  }, {
    autoIndex: false,
    toJSON: {
      versionKey: false,
    }
  });

  modelSchema.index({
    departmentId: 1,
    incidentNumber: 1,
    createdAt: -1,
    _id: -1
  }, {
    name: "departmentId_1_incidentNumber_1_createdAt_-1__id_-1",
  });

  modelSchema.index({
    departmentId: 1,
    createdAt: -1
  }, {
    name: "departmentId_createdAt",
  });

  modelSchema.index({
    departmentId: 1,
    incidentNumber: 1,
    createdAt: 1
  }, {
    name: "departmentId_incidentNumber_createdAt",
  });

  modelSchema.index({
    createdAt: -1,
  }, {
    name: "ttl_90d_createdAt_-1",
    expireAfterSeconds: 7786800,
  });

  return mongoose.model<CADIncidentStream>("CADIncidentStream", modelSchema, "massive_cad_incident_stream", { overwriteModels: true });
}

export interface CADIncidentStreamModel extends Model<CADIncidentStream> { }