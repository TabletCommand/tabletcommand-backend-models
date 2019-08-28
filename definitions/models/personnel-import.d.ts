/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function PersonnelImportModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: import("bson").ObjectId;
    PersonnelID: string;
    PersonnelName: string;
    PersonnelRank: string;
    PersonnelWorkCode: string;
    PersonnelNote: string;
    departmentId: string;
    radioName: string;
    shiftStartTime: number;
    shiftEndTime: number;
    modified_unix_date: number;
}, {}> & {
    __methods?: unknown;
}>;
export interface PersonnelImport extends ItemTypeFromTypeSchemaFunction<typeof PersonnelImportModule> {
}
export interface PersonnelImportModel extends ModelTypeFromTypeSchemaFunction<PersonnelImport> {
}
declare const _default: ReplaceModelReturnType<typeof PersonnelImportModule, PersonnelImportModel>;
export default _default;
//# sourceMappingURL=personnel-import.d.ts.map