import { Types } from "mongoose";

export interface ValidationErrorItemSchemaType {
  message: string,
  firstSeenAt: Date,
  lastSeenAt: Date,
  clearedAt: Date,
  payload: object,
}


export interface ValidationReportType {
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
