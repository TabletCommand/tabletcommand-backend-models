import {
  createModel,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseModule,
  ReplaceModelReturnType,
} from "../helpers";

import { CADIncidentSchema } from "./schema/cad-incident";

export async function CADIncidentFlatModule(mongoose: MongooseModule) {
  const modelSchema = CADIncidentSchema(mongoose);
  modelSchema.set("collection", "massive_cad_incident_flat");
  modelSchema.set("strict", true);
  return createModel(mongoose, "CADIncidentFlat", modelSchema);
}

export interface CADIncidentFlat extends ItemTypeFromTypeSchemaFunction<typeof CADIncidentFlatModule> { }
export interface CADIncidentFlatModel extends ModelTypeFromTypeSchemaFunction<CADIncidentFlat> { }
export default CADIncidentFlatModule as ReplaceModelReturnType<typeof CADIncidentFlatModule, CADIncidentFlatModel>;
