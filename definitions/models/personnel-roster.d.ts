/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType, currentDate } from "../helpers";
export declare function PersonnelRosterSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
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
        PersonnelUUID: {
            type: StringConstructor;
            default: string;
        };
        departmentId: {
            type: StringConstructor;
        };
        modified: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        action: {
            type: StringConstructor;
            default: string;
        };
        radioName: {
            type: StringConstructor;
            default: string;
        };
        shiftStart: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        shiftEnd: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>;
    _methods: unknown;
};
export declare function PersonnelRosterModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    PersonnelID: string;
    PersonnelName: string;
    PersonnelRank: string;
    PersonnelWorkCode: string;
    PersonnelUUID: string;
    departmentId: string;
    modified: string;
    action: string;
    radioName: string;
    shiftStart: string;
    shiftEnd: string;
    active: boolean;
}, {}> & {
    __methods?: unknown;
}>;
export interface PersonnelRoster extends ItemTypeFromTypeSchemaFunction<typeof PersonnelRosterModule> {
}
export interface PersonnelRosterModel extends ModelTypeFromTypeSchemaFunction<PersonnelRoster> {
}
declare const _default: ReplaceModelReturnType<typeof PersonnelRosterModule, PersonnelRosterModel>;
export default _default;
//# sourceMappingURL=personnel-roster.d.ts.map