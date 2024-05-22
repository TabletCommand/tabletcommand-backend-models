import {
  MongooseModule,
  MongooseDocument,
} from "../helpers";

import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";

import { ReportNumberSchema, ReportNumberSchemaType } from "./schema/shared-incident";
import { Model, Types } from "mongoose";
export interface CADIncidentBlock {
  _id: Types.ObjectId
  departmentId: string,
  source: string,
  IncidentNumber: string,
  AgencyIncidentCallTypeDescription: string,
  EntryDateTime: string,
  ClosedDateTime: string,
  ReportNumber: ReportNumberSchemaType[]
}

export default async function CADIncidentBlockModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const ReportNumber = ReportNumberSchema(mongoose);

  // Simplified schema.
  // Payload should confirm to cad-incident (more or less)

  const modelSchema = new Schema<CADIncidentBlock>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      required: true,
      index: true,
    },
    // callType or admin email
    source: {
      type: String,
      required: true,
    },
    IncidentNumber: {
      type: String,
      required: true,
    },
    AgencyIncidentCallTypeDescription: {
      type: String,
      required: true,
    },
    EntryDateTime: {
      type: String,
      default: "",
    },
    ClosedDateTime: {
      type: String,
      default: "",
    },
    ReportNumber: {
      type: [ReportNumber],
      default: [],
    }
  }, {
    collection: "massive_cad_incident_block",
    timestamps: true,
    autoIndex: false,
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

  return mongoose.model<CADIncidentBlock>("CADIncidentBlock", modelSchema);
}

export interface CADIncidentBlockModel extends Model<CADIncidentBlock> { }