import {
  MongooseModule,
  MongooseDocument,
  currentDate,
} from "../helpers";

import * as uuid from "uuid";
import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";
import { Types, Model } from "mongoose";
export interface CADIncidentStream {
  _id: Types.ObjectId,
  id?: string,
  uuid: string,
  tag: string,
  departmentId: string,
  incidentNumber: string,
  createdAt: Date,
  payload: object,
}

export default async function CADIncidentStreamModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  // Simplified schema.
  // Payload should confirm to cad-incident (more or less)

  const modelSchema = new Schema<CADIncidentStream>({
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
    collection: "massive_cad_incident_stream",
    toJSON: {
      virtuals: true,
      versionKey: false,
    }
  });

  modelSchema.virtual("id").get(function (this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id.toString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);

  return mongoose.model<CADIncidentStream>("CADIncidentStream", modelSchema);
}

export interface CADIncidentStreamModel extends Model<CADIncidentStream> { }