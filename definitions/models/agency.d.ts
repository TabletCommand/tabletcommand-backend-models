/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function AgencyModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: import("bson").ObjectId;
    code: string;
    name: string;
    domain: string;
    personnelApiKey: string;
    agencyApiKey: string;
    uuid: string;
    modified_unix_date: number;
    active: boolean;
    departmentId: {
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
        required: never;
    };
    administrators: {
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
        }[];
        ref: never;
        default: unknown[];
    };
}, {}> & {
    __methods?: unknown;
}>;
export interface Agency extends ItemTypeFromTypeSchemaFunction<typeof AgencyModule> {
}
export interface AgencyModel extends ModelTypeFromTypeSchemaFunction<Agency> {
}
declare const _default: ReplaceModelReturnType<typeof AgencyModule, AgencyModel>;
export default _default;
//# sourceMappingURL=agency.d.ts.map