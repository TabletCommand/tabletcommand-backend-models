import {
  MongooseModule,
  MongooseDocument,
  currentDate,
} from "../helpers";

import * as uuid from "uuid";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
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
      index: true,
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
      virtuals: true,
      versionKey: false,
    }
  });

  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id.toString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);

  return mongoose.model<CADIncidentStream>("CADIncidentStream", modelSchema, "massive_cad_incident_stream", { overwriteModels: true });
}

export interface CADIncidentStreamModel extends Model<CADIncidentStream> { }