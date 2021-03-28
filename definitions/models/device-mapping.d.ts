/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function DeviceMappingModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any, {}> & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    departmentId: string;
    userId: string;
    deviceType: string;
    mapId: string;
    deviceId: string;
    location: {
        longitude: number;
        latitude: number;
    };
    modified_unix_date: number;
    active: boolean;
    remoteAddress: string;
    uuid: string;
    note: string;
    mapHidden: boolean;
}, {}> & {
    __methods?: unknown;
}>;
export interface DeviceMapping extends ItemTypeFromTypeSchemaFunction<typeof DeviceMappingModule> {
}
export interface DeviceMappingModel extends ModelTypeFromTypeSchemaFunction<DeviceMapping> {
}
declare const _default: ReplaceModelReturnType<typeof DeviceMappingModule, DeviceMappingModel>;
export default _default;
//# sourceMappingURL=device-mapping.d.ts.map