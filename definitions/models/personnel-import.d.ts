/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function PersonnelImportModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectID;
    PersonnelID: string;
    PersonnelName: string;
    PersonnelRank: string;
    PersonnelWorkCode: string;
    PersonnelNote: string;
    departmentId: string;
    radioNames: string[];
    shiftStartTime: number;
    shiftEndTime: number;
    shiftStart: string;
    shiftEnd: string;
    modified_unix_date: number;
    modified: string;
    active: boolean;
    agencyName: string;
    agencyCode: string;
    agencyId: {
        type: never;
        ref: never;
        default: never;
    };
    importNotes: string;
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