/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function CSVImportModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    batchId: string;
    entryDateTime: string;
    closedDateTime: string;
    departmentId: string;
    agencyId: string;
    importType: string;
    fileType: string;
    fileName: string;
    fileSize: string;
    fileLastModified: number;
    records: any[];
    modified_unix_date: number;
    userId: string;
}, {}> & {
    __methods?: unknown;
}>;
export interface CSVImport extends ItemTypeFromTypeSchemaFunction<typeof CSVImportModule> {
}
export interface CSVImportModel extends ModelTypeFromTypeSchemaFunction<CSVImport> {
}
declare const _default: ReplaceModelReturnType<typeof CSVImportModule, CSVImportModel>;
export default _default;
//# sourceMappingURL=csv-import.d.ts.map