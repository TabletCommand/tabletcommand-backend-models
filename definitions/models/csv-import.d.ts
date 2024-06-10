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
export interface CSVImport {
    _id: Types.ObjectId;
    batchId: string;
    importCreated: Date;
    importEnded: Date;
    status: string;
    departmentId: string;
    agencyId: string;
    importType: string;
    fileType: string;
    fileName: string;
    fileSize: string;
    fileLastModified: Date;
    records: object[];
    modifiedDate: Date;
    userId: string;
    sendNotification: boolean;
}
export default function CSVImportModule(mongoose: MongooseModule): Promise<Model<CSVImport, {}, {}, {}, import("mongoose").Document<unknown, {}, CSVImport> & CSVImport & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface CSVImportModel extends Model<CSVImport> {
}
//# sourceMappingURL=csv-import.d.ts.map