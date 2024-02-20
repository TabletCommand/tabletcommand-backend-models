import {
  createModel,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseModule,
  ReplaceModelReturnType,
} from "../helpers";

import { CADIncidentSchema } from "./schema/cad-incident";

export async function CADIncidentModule(mongoose: MongooseModule) {
  const modelSchema = CADIncidentSchema(mongoose);
  modelSchema.set("collection", "massive_incident_cad");
  modelSchema.set("strict", false); // Because we accept all kind of data in

  // Indexes
  modelSchema.index({
    departmentId: 1,
    IncidentNumber: 1
  }, {
    name: "departmentId_1_IncidentNumber_1_unique",
    unique: true,
  });

  // Search index as alternative to Atlas Search
  modelSchema.index({
    departmentId: 1,
    AgencyIncidentCallTypeDescription: "text",
    CityOrLocality: "text",
    CommonPlaceName: "text",
    cross_streets: "text",
    full_address: "text",
    IncidentNumber: "text",
    LocationComment: "text",
    "units.UnitID": "text",
  }, {
    name: "departmentId_1_search_text",
  });

  return createModel(mongoose, "CADIncident", modelSchema);
}

export interface CADIncident extends ItemTypeFromTypeSchemaFunction<typeof CADIncidentModule> { }
export interface CADIncidentModel extends ModelTypeFromTypeSchemaFunction<CADIncident> { }
export default CADIncidentModule as ReplaceModelReturnType<typeof CADIncidentModule, CADIncidentModel>;
