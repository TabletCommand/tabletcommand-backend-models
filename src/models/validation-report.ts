import { Types } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import ValidationErrorItemModule from "./schema/validation-error-item";

export interface ValidationReportType {
  _id: Types.ObjectId,
  departmentId: Types.ObjectId,
  location: ValidationErrorItemType[],
  statusMap: ValidationErrorItemType[],
  status: ValidationErrorItemType[],
  vehicleStatus: ValidationErrorItemType[],
  vehicle: ValidationErrorItemType[],
  incident: ValidationErrorItemType[],
  personnel: ValidationErrorItemType[],
  modified: Date,
}

export function ValidationReportSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const ValidationErrorItem = ValidationErrorItemModule(mongoose);

  const modelSchema = new Schema<ValidationReportType>({
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

export default async function ValidationReportModule(mongoose: MongooseModule) {
  const modelSchema = ValidationReportSchema(mongoose);
  return mongoose.model<ValidationReportType>("ValidationReport", modelSchema);
}
