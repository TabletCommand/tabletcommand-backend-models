/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function LocationModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    departmentId: string;
    userId: string;
    uuid: string;
    username: string;
    device_type: string;
    active: boolean;
    modified_unix_date: number;
    modified: string;
    movedAt: string;
    version: number;
    session: string;
    heading: number;
    esriId: number;
    location: {
        longitude: number;
        latitude: number;
    };
    locationGeoJSON: import("../helpers").MongooseInterface<{
        type: {
            type: StringConstructor;
            required: boolean;
            enum: string[];
            default: string;
        };
        coordinates: {
            type: NumberConstructor[];
            required: boolean;
            default: never[];
        };
    }>;
    opAreaCode: string;
    opAreaName: string;
    shared: boolean;
    state: string;
}, {}> & {
    __methods?: unknown;
}>;
export interface Location extends ItemTypeFromTypeSchemaFunction<typeof LocationModule> {
}
export interface LocationModel extends ModelTypeFromTypeSchemaFunction<Location> {
}
declare const _default: ReplaceModelReturnType<typeof LocationModule, LocationModel>;
export default _default;
//# sourceMappingURL=location.d.ts.map