/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function LocationModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    departmentId: string;
    userId: string;
    uuid: string;
    username: string;
    device_type: string;
    active: boolean;
    deleteAfterDate: string;
    modified: string;
    movedAt: string;
    propsChangedAt: string;
    version: number;
    session: string;
    altitude: number;
    heading: number;
    speed: number;
    esriId: number;
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
    agencyCode: string;
    agencyName: string;
    shared: boolean;
    state: string;
    sendToCAD: boolean;
    color: import("../helpers").MongooseInterface<{
        background: {
            type: StringConstructor;
            default: string;
        };
        text: {
            type: StringConstructor;
            default: string;
        };
    }>;
    colorChangedAt: string;
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