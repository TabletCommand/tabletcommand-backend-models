import { Model } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import ValidationErrorItemModule from "./schema/validation-error-item";
import { ValidationReportType } from "../types/validation";

export interface ValidationReport extends ValidationReportType { }

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
    autoIndex: false,
  });

  return modelSchema;
}

export default async function ValidationReportModule(mongoose: MongooseModule) {
  const modelSchema = ValidationReportSchema(mongoose);
  return mongoose.model<ValidationReport>("ValidationReport", modelSchema, "massive_validation_report", { overwriteModels: true });
}

export interface ValidationReportModel extends Model<ValidationReport> { }