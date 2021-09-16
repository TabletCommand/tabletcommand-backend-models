/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function CSVImportModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectID;
    batchId: string;
    importCreated: string;
    importEnded: string;
    status: string;
    departmentId: string;
    agencyId: string;
    importType: string;
    fileType: string;
    fileName: string;
    fileSize: string;
    fileLastModified: string;
    records: any[];
    modifiedDate: string;
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