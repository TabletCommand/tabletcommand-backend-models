import {
  MongooseModule,
} from "../helpers";

import { ReportNumberSchema } from "./schema/shared-incident";
import { Model } from "mongoose";
import { CADIncidentBlockType } from "../types/cad";

export interface CADIncidentBlock extends CADIncidentBlockType { }

export default async function CADIncidentBlockModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const ReportNumber = ReportNumberSchema(mongoose);

  // Simplified schema.
  // Payload should confirm to cad-incident (more or less)

  const modelSchema = new Schema<CADIncidentBlockType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      required: true,
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
    timestamps: true,
    autoIndex: false,
    toJSON: {
      virtuals: true,
      versionKey: false,
    }
  });

  modelSchema.index({
    departmentId: 1,
    IncidentNumber: 1,
  }, {
    name: "departmentId_1_IncidentNumber_1_unique",
    unique: true,
  });

  return mongoose.model<CADIncidentBlock>("CADIncidentBlock", modelSchema, "massive_cad_incident_block", { overwriteModels: true });
}

export interface CADIncidentBlockModel extends Model<CADIncidentBlock> { }