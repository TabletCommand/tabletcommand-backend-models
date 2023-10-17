/// <reference types="mongoose" />
import { currentDate, MongooseModule, retrieveCurrentUnixTime, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function PersonnelImportSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: boolean;
        };
        PersonnelID: {
            type: StringConstructor;
            required: boolean;
        };
        PersonnelName: {
            type: StringConstructor;
            required: boolean;
        };
        PersonnelRank: {
            type: StringConstructor;
            default: string;
        };
        PersonnelWorkCode: {
            type: StringConstructor;
            default: string;
        };
        PersonnelNote: {
            type: StringConstructor;
            default: string;
        };
        departmentId: {
            type: StringConstructor;
        };
        radioNames: {
            type: StringConstructor[];
            default: never[];
        };
        radios: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    radioName: {
                        type: StringConstructor;
                    };
                    active: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        shiftStartTime: {
            type: NumberConstructor;
            default: number;
        };
        shiftEndTime: {
            type: NumberConstructor;
            default: number;
        };
        shiftStart: {
            type: DateConstructor;
            default: string;
        };
        shiftEnd: {
            type: DateConstructor;
            default: string;
        };
        modified_unix_date: {
            type: NumberConstructor;
            default: typeof retrieveCurrentUnixTime;
        };
        modified: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        agencyName: {
            type: StringConstructor;
            default: string;
        };
        agencyCode: {
            type: StringConstructor;
            default: string;
        };
        agencyId: {
            type: import("mongoose").Types.ObjectIdConstructor;
            ref: string;
            default: null;
        };
        importNotes: {
            type: StringConstructor;
            default: string;
        };
    }>;
    _methods: unknown;
};
export declare function PersonnelImportModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    PersonnelID: string;
    PersonnelName: string;
    PersonnelRank: string;
    PersonnelWorkCode: string;
    PersonnelNote: string;
    departmentId: string;
    radioNames: string[];
    radios: import("../helpers").MongooseInterface<{
        radioName: {
            type: StringConstructor;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>[];
    shiftStartTime: number;
    shiftEndTime: number;
    shiftStart: string;
    shiftEnd: string;
    modified_unix_date: number;
    modified: string;
    active: boolean;
    agencyName: string;
    agencyCode: string;
    agencyId: import("mongoose").Types.ObjectId;
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