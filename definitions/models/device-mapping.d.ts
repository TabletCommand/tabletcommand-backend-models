/// <reference types="mongoose" />
/// <reference types="bson" />
import { MongooseModule, UnboxPromise } from "./helpers";
export declare function DeviceMappingModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: {
        type: {
            prototype: {} | {
                [x: string]: {} | any | {}[];
            } | {}[];
            cacheHexString?: undefined;
            createFromHexString: {};
            createFromTime: {};
            isValid: {};
            generate: {};
        };
        auto: never;
    };
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
