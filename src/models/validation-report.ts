import { Model, Types } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import ValidationErrorItemModule, { ValidationErrorItemSchemaType } from "./schema/validation-error-item";

export interface ValidationReport {
  _id: Types.ObjectId,
  departmentId: Types.ObjectId,
  location: ValidationErrorItemSchemaType[],
  statusMap: ValidationErrorItemSchemaType[],
  status: ValidationErrorItemSchemaType[],
  vehicleStatus: ValidationErrorItemSchemaType[],
  vehicle: ValidationErrorItemSchemaType[],
  incident: ValidationErrorItemSchemaType[],
  personnel: ValidationErrorItemSchemaType[],
  modified: Date,
}

export function ValidationReportSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const ValidationErrorItem = ValidationErrorItemModule(mongoose);

  const modelSchema = new Schema<ValidationReport>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: Schema.Types.ObjectId,
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

export default async function ValidationReportModule(mongoose: MongooseModule) {
  const modelSchema = ValidationReportSchema(mongoose);
  return mongoose.model<ValidationReport>("ValidationReport", modelSchema);
}

export interface ValidationReportModel extends Model<ValidationReport> { }