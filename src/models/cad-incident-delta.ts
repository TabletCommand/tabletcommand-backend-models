import {
  createModel,
  createSchema,
  currentDate,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseModule,
  ReplaceModelReturnType,
} from "../helpers";

// Temporary collection to incident delta
export async function CADIncidentDeltaModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = createSchema(Schema, {
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    incidentNumber: {
      type: String,
      default: "",
      required: true,
    },
    createdAt: {
      type: Date,
      default: currentDate,
    },
    toLegacy: {
      type: Object,
    },
    toFlat: {
      type: Object,
    },
  }, {
    autoIndex: false,
    collection: "massive_cad_incident_delta",
  });

  return createModel(mongoose, "CADIncidentDelta", modelSchema);
}

export interface CADIncidentDelta extends ItemTypeFromTypeSchemaFunction<typeof CADIncidentDeltaModule> { }
export interface CADIncidentDeltaModel extends ModelTypeFromTypeSchemaFunction<CADIncidentDelta> { }
export default CADIncidentDeltaModule as ReplaceModelReturnType<typeof CADIncidentDeltaModule, CADIncidentDeltaModel>;
