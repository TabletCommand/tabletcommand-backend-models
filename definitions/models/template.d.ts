/// <reference types="mongoose" />
import * as uuid from "uuid";
import { currentDate, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
export declare function TemplateSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: boolean;
        };
        position: {
            type: NumberConstructor;
            default: number;
        };
        userId: StringConstructor;
        uuid: {
            type: StringConstructor;
            default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
        };
        isMandatory: {
            type: BooleanConstructor;
            default: boolean;
        };
        modified_unix_date: {
            type: NumberConstructor;
            default: typeof retrieveCurrentUnixTime;
        };
        modified: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        departmentId: {
            type: StringConstructor;
            required: boolean;
            index: true;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        name: {
            type: StringConstructor;
            required: boolean;
        };
        checklist: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    name: {
                        type: StringConstructor;
                        default: string;
                    };
                    position: {
                        type: NumberConstructor;
                        default: number;
                    };
                    id: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        group: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    name: {
                        type: StringConstructor;
                        default: string;
                    };
                    position: {
                        type: NumberConstructor;
                        default: number;
                    };
                    uuid: {
                        type: StringConstructor;
                        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        agencyId: {
            type: import("mongoose").Types.ObjectIdConstructor;
            ref: string;
            default: null;
        };
    }>;
    _methods: unknown;
};
export declare function TemplateModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectID;
    position: number;
    userId: string;
    uuid: string;
    isMandatory: boolean;
    modified_unix_date: number;
    modified: string;
    departmentId: string;
    active: boolean;
    name: string;
    checklist: import("../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        position: {
            type: NumberConstructor;
            default: number;
        };
        id: {
            type: StringConstructor;
            default: string;
        };
    }>[];
    group: import("../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        position: {
            type: NumberConstructor;
            default: number;
        };
        uuid: {
            type: StringConstructor;
            default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
        };
    }>[];
    agencyId: import("bson").ObjectID;
}, {}> & {
    __methods?: unknown;
}>;
export interface Template extends ItemTypeFromTypeSchemaFunction<typeof TemplateModule> {
}
export interface TemplateModel extends ModelTypeFromTypeSchemaFunction<Template> {
}
declare const _default: ReplaceModelReturnType<typeof TemplateModule, TemplateModel>;
export default _default;
//# sourceMappingURL=template.d.ts.map