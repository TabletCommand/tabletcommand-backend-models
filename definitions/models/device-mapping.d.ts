/// <reference types="mongoose" />
import { MongooseModule, UnboxPromise } from "./types";
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
export declare type DeviceMapping = UnboxPromise<ReturnType<typeof DeviceMappingModule>>;
