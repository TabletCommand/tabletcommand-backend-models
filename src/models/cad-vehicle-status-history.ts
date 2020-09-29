import {
  createModel,
  createSchema,
  createSchemaDefinition,
  MongooseModule,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";
import CADStatusOptionSelectedModule from "./schema/cad-status-option-selected";

export async function CADVehicleStatusHistoryModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const CADStatusOptionSelected = CADStatusOptionSelectedModule(mongoose);

  const modelSchemaConfig = createSchemaDefinition({
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    vehicleId: {
      type: String,
      default: "",
      required: true,
      index: true,
      minlength: 1,
    },
    radioName: {
      type: String,
      default: "",
      required: true,
      minlength: 1,
    },
    status: {
      type: String,
      default: "",
      minlength: 1,
    },
    statusCode: {
      type: String,
      default: "",
      minlength: 1,
    },
    requestedAt: {
      type: Number,
      default: 0,
      min: 1,
    },
    requestDelay: {
      type: Number,
      default: 0,
    },
    requestedBy: {
      type: String,
      default: "",
    },
    incidentNumber: {
      type: String,
      default: "",
    },
    options: {
      type: [CADStatusOptionSelected],
      default: [],
    },
  });

  const modelSchema = createSchema(Schema, modelSchemaConfig, {
    collection: "massive_cad_vehicle_status_history",
  });

  modelSchema.set("autoIndex", false);
  return createModel(mongoose, "CADVehicleStatusHistory", modelSchema);
}

export interface CADVehicleStatusHistory extends ItemTypeFromTypeSchemaFunction<typeof CADVehicleStatusHistoryModule> { }
export interface CADVehicleStatusHistoryModel extends ModelTypeFromTypeSchemaFunction<CADVehicleStatusHistory> { }
export default CADVehicleStatusHistoryModule as ReplaceModelReturnType<typeof CADVehicleStatusHistoryModule, CADVehicleStatusHistoryModel>;
