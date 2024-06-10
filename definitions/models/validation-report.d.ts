/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model, Types } from "mongoose";
import { MongooseModule } from "../helpers";
import { ValidationErrorItemSchemaType } from "./schema/validation-error-item";
export interface ValidationReport {
    _id: Types.ObjectId;
    departmentId: Types.ObjectId;
    location: ValidationErrorItemSchemaType[];
    statusMap: ValidationErrorItemSchemaType[];
    status: ValidationErrorItemSchemaType[];
    vehicleStatus: ValidationErrorItemSchemaType[];
    vehicle: ValidationErrorItemSchemaType[];
    incident: ValidationErrorItemSchemaType[];
    personnel: ValidationErrorItemSchemaType[];
    modified: Date;
}
export declare function ValidationReportSchema(mongoose: MongooseModule): import("mongoose").Schema<ValidationReport, Model<ValidationReport, any, any, any, import("mongoose").Document<unknown, any, ValidationReport> & ValidationReport & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ValidationReport, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ValidationReport>> & import("mongoose").FlatRecord<ValidationReport> & Required<{
    _id: Types.ObjectId;
}>>;
export default function ValidationReportModule(mongoose: MongooseModule): Promise<Model<ValidationReport, {}, {}, {}, import("mongoose").Document<unknown, {}, ValidationReport> & ValidationReport & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface ValidationReportModel extends Model<ValidationReport> {
}
//# sourceMappingURL=validation-report.d.ts.map