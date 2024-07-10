import { Model } from "mongoose";
import {
  MongooseModule,
} from "../helpers";

import { CADIncidentSchema, CADIncidentSchemaType } from "./schema/cad-incident";

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

  return mongoose.model<CADIncidentSchemaType>("CADIncident", modelSchema, "massive_incident_cad", { overwriteModels: true });
}

export interface CADIncident extends CADIncidentSchemaType { }
export interface CADIncidentModel extends Model<CADIncidentSchemaType> { }