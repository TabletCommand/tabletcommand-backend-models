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
interface RadioType {
    radioName: string;
    active: boolean;
    source: string;
}
export interface PersonnelImport {
    _id: Types.ObjectId;
    PersonnelID: string;
    PersonnelName: string;
    PersonnelRank: string;
    PersonnelWorkCode: string;
    PersonnelNote: string;
    departmentId: string;
    radioNames: string[];
    radios: RadioType[];
    shiftStartTime: number;
    shiftEndTime: number;
    shiftStart: Date | string;
    shiftEnd: Date | string;
    modified_unix_date: number;
    modified: Date;
    active: boolean;
    agencyName: string;
    agencyCode: string;
    agencyId: Types.ObjectId;
    importNotes: string;
}
export declare function PersonnelImportSchema(mongoose: MongooseModule): import("mongoose").Schema<PersonnelImport, Model<PersonnelImport, any, any, any, import("mongoose").Document<unknown, any, PersonnelImport> & PersonnelImport & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PersonnelImport, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PersonnelImport>> & import("mongoose").FlatRecord<PersonnelImport> & Required<{
    _id: Types.ObjectId;
}>>;
export default function PersonnelImportModule(mongoose: MongooseModule): Promise<Model<PersonnelImport, {}, {}, {}, import("mongoose").Document<unknown, {}, PersonnelImport> & PersonnelImport & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface PersonnelImportModel extends Model<PersonnelImport> {
}
export {};
//# sourceMappingURL=personnel-import.d.ts.map