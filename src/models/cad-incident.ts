import { Model } from "mongoose";
import {
  MongooseModule,
} from "../helpers";

import { CADIncidentSchema } from "./schema/cad-incident";
import { CADIncidentSchemaType } from "../types/cad-incident";

export interface CADIncident extends CADIncidentSchemaType, Record<string, unknown> { }

export default async function CADIncidentModule(mongoose: MongooseModule) {
  const modelSchema = CADIncidentSchema(mongoose);
  modelSchema.set("strict", false); // Because we accept all kind of data in

  // Indexes
  modelSchema.index({
    departmentId: 1,
    IncidentNumber: 1
  }, {
    name: "departmentId_1_IncidentNumber_1_unique",
    unique: true,
  });

  return mongoose.model<CADIncident>("CADIncident", modelSchema, "massive_incident_cad", { overwriteModels: true });
}


export interface CADIncidentModel extends Model<CADIncident> { }