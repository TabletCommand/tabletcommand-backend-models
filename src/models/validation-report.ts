import {
  createModel,
  createSchema,
  currentDate,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseModule,
  ReplaceModelReturnType,
} from "../helpers";
import ValidationErrorItemModule from "./schema/validation-error-item";

export function ValidationReportSchema(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;
  const ValidationErrorItem = ValidationErrorItemModule(mongoose);

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: Types.ObjectId,
      ref: "Department",
      required: true,
      unique: true,
    },
    location: {
      type: [ValidationErrorItem],
      default: [],
    },
    statusMap: {
      type: [ValidationErrorItem],
      default: [],
    },
    status: {
      type: [ValidationErrorItem],
      default: [],
    },
    vehicleStatus: {
      type: [ValidationErrorItem],
      default: [],
    },
    vehicle: {
      type: [ValidationErrorItem],
      default: [],
    },
    incident: {
      type: [ValidationErrorItem],
      default: [],
    },
    personnel: {
      type: [ValidationErrorItem],
      default: [],
    },
    modified: {
      type: Date,
      default: currentDate,
    },
  }, {
    collection: "massive_validation_report",
  });
  modelSchema.set("autoIndex", false);

  return modelSchema;
}

export async function ValidationReportModule(mongoose: MongooseModule) {
  const modelSchema = ValidationReportSchema(mongoose);
  return createModel(mongoose, "ValidationReport", modelSchema);
}

export interface ValidationReport extends ItemTypeFromTypeSchemaFunction<typeof ValidationReportModule> { }
export interface ValidationReportModel extends ModelTypeFromTypeSchemaFunction<ValidationReport> { }
export default ValidationReportModule as ReplaceModelReturnType<typeof ValidationReportModule, ValidationReportModel>;
