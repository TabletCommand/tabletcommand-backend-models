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
import { Model } from "mongoose";
import { MongooseModule } from "../helpers";
import { PersonnelImportType } from "../types/personnel";
export interface PersonnelImport extends PersonnelImportType {
}
export declare function PersonnelImportSchema(mongoose: MongooseModule): import("mongoose").Schema<PersonnelImportType, Model<PersonnelImportType, any, any, any, import("mongoose").Document<unknown, any, PersonnelImportType> & PersonnelImportType & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PersonnelImportType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PersonnelImportType>> & import("mongoose").FlatRecord<PersonnelImportType> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>;
export default function PersonnelImportModule(mongoose: MongooseModule): Promise<Model<PersonnelImport, {}, {}, {}, import("mongoose").Document<unknown, {}, PersonnelImport> & PersonnelImport & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>>;
export interface PersonnelImportModel extends Model<PersonnelImport> {
}
//# sourceMappingURL=personnel-import.d.ts.map