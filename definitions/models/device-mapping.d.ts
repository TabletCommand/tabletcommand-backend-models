/// <reference types="mongoose" />
import { ModelItemType } from "./helpers";
import { MongooseModule, UnboxPromise } from "./helpers";
export declare function DeviceMappingModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
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
}, {}>>;
export default DeviceMappingModule;
export declare type DeviceMappingModel = UnboxPromise<ReturnType<typeof DeviceMappingModule>>;
export declare type DeviceMapping = ModelItemType<DeviceMappingModel>;
//# sourceMappingURL=device-mapping.d.ts.map