/// <reference types="mongoose" />
import * as uuid from "uuid";
import { MongooseModule, currentDate, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
export declare function BattalionModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectID;
    name: string;
    active: boolean;
    modified_date: string;
    modified_unix_date: number;
    modified: string;
    isMandatory: boolean;
    userId: string;
    uuid: string;
    departmentId: string;
    agencyId: {
        type: never;
        ref: never;
        default: never;
    };
    agencyName: string;
    agencyCode: string;
    position: number;
    units: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: boolean;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        friendly_id: {
            type: StringConstructor;
            default: string;
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
            default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
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
        agencyId: {
            type: typeof import("mongoose").Schema.Types.ObjectId;
            ref: string;
            default: null;
        };
        agencyName: {
            type: StringConstructor;
        };
        agencyCode: {
            type: StringConstructor;
        };
    }>[];
}, {}> & {
    __methods?: unknown;
}>;
export interface Battalion extends ItemTypeFromTypeSchemaFunction<typeof BattalionModule> {
}
export interface BattalionModel extends ModelTypeFromTypeSchemaFunction<Battalion> {
}
declare const _default: ReplaceModelReturnType<typeof BattalionModule, BattalionModel>;
export default _default;
//# sourceMappingURL=battalion.d.ts.map