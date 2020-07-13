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
    radioNames: string[];
    shiftStartTime: number;
    shiftEndTime: number;
    modified_unix_date: number;
    active: boolean;
    agencyName: string;
    agencyCode: string;
    agencyId: {
        type: {
            prototype: {
                auto: {};
                checkRequired: {};
                default: any;
                get: {};
                index: import("mongoose").Schema.Types.ObjectId;
                required: {};
                select: {};
                set: {};
                sparse: {};
                text: {};
                unique: {};
                validate: {};
            };
            schemaName: never;
        };
        ref: never;
        default: never;
    };
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