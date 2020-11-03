import {
  createSchema,
  createModel,
  MongooseModule,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
  retrieveCurrentUnixTime,
} from "../helpers";

export async function IncidentNotifiedModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    IncidentNumber: {
      type: String,
      required: true,
    },
    incidentTypes: {
      type: [String],
      default: [],
    },
    units: {
      type: [String],
      default: [],
    },
    date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
  }, {
    collection: "massive_incident_notified",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "IncidentNotified", modelSchema);
}

export interface IncidentNotified extends ItemTypeFromTypeSchemaFunction<typeof IncidentNotifiedModule> { }
export interface IncidentNotifiedModel extends ModelTypeFromTypeSchemaFunction<IncidentNotified> { }
export default IncidentNotifiedModule as ReplaceModelReturnType<typeof IncidentNotifiedModule, IncidentNotifiedModel>;
