/// <reference types="mongoose" />
<<<<<<< HEAD
import { MongooseModule, currentDate, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
export declare function BattalionModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
=======
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
export declare function BattalionModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any> & Record<string, unknown> & {
>>>>>>> 3af52d1 (Upgraded mongoose uuid and ts packages.)
    _id: import("bson").ObjectId;
    name: string;
    active: boolean;
    modified_date: string;
    modified_unix_date: number;
    isMandatory: boolean;
    userId: string;
    uuid: string;
    departmentId: string;
    agencyId: import("mongoose").Schema.Types.ObjectId;
    position: number;
    units: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: true;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        friendly_id: {
            type: StringConstructor;
            default: string;
        };
        local_id: {
            type: NumberConstructor;
        };
        personnel: {
            type: NumberConstructor;
            default: number;
        };
        position: {
            type: NumberConstructor;
            default: number;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        isMandatory: {
            type: BooleanConstructor;
            default: boolean;
        };
        modified_date: {
            type: StringConstructor;
        };
        modified_unix_date: {
            type: NumberConstructor;
            default: typeof retrieveCurrentUnixTime;
        };
        modified: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        uuid: {
            type: StringConstructor;
            default: () => string;
        };
        departmentId: {
            type: StringConstructor;
        };
        userId: {
            type: StringConstructor;
        };
        api_battalion_id: {
            type: StringConstructor;
        };
        battalion_uuid: {
            type: StringConstructor;
        };
        battalion_name: {
            type: StringConstructor;
        };
        unit_type_id: {
            type: NumberConstructor;
        };
    }>[];
}> & {
    __methods?: unknown;
}>;
export interface Battalion extends ItemTypeFromTypeSchemaFunction<typeof BattalionModule> {
}
export interface BattalionModel extends ModelTypeFromTypeSchemaFunction<Battalion> {
}
declare const _default: ReplaceModelReturnType<typeof BattalionModule, BattalionModel>;
export default _default;
//# sourceMappingURL=battalion.d.ts.map