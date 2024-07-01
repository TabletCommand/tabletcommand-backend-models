/// <reference types="mongoose" />
import * as uuid from "uuid";
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType, currentDate } from "../helpers";
export declare function PersonnelKnownSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
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
        modified: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        departmentId: {
            type: StringConstructor;
        };
        uuid: {
            type: StringConstructor;
            default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
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
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        jurisdiction: {
            type: StringConstructor;
            default: string;
        };
        agencyId: {
            type: import("mongoose").Types.ObjectIdConstructor;
            ref: string;
            default: null;
        };
        source: {
            type: StringConstructor;
            default: string;
        };
    }>;
    _methods: unknown;
};
export declare function PersonnelKnownModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    PersonnelID: string;
    PersonnelName: string;
    PersonnelRank: string;
    PersonnelWorkCode: string;
    modified: string;
    departmentId: string;
    uuid: string;
    radios: import("../helpers").MongooseInterface<{
        radioName: {
            type: StringConstructor;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>[];
    active: boolean;
    jurisdiction: string;
    agencyId: import("mongoose").Types.ObjectId;
    source: string;
}, {}> & {
    __methods?: unknown;
}>;
export interface PersonnelKnown extends ItemTypeFromTypeSchemaFunction<typeof PersonnelKnownModule> {
}
export interface PersonnelKnownModel extends ModelTypeFromTypeSchemaFunction<PersonnelKnown> {
}
declare const _default: ReplaceModelReturnType<typeof PersonnelKnownModule, PersonnelKnownModel>;
export default _default;
//# sourceMappingURL=personnel-known.d.ts.map