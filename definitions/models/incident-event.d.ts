/// <reference types="mongoose" />
/// <reference types="bson" />
import { ModelItemType } from "./helpers";
import { MongooseModule, UnboxPromise } from "./helpers";
export declare function IncidentEventModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
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
    IncidentNumber: string;
    modified_unix_date: number;
    message: string;
    location: {
        longitude: number;
        latitude: number;
    };
    type: string;
    user: {
        username: string;
        email: string;
        radioName: string;
        userId: string;
    };
    serverTime: number;
    userTime: number;
    uuid: string;
}, {}>>;
export default IncidentEventModule;
export declare type IncidentEventModel = UnboxPromise<ReturnType<typeof IncidentEventModule>>;
export declare type IncidentEvent = ModelItemType<IncidentEventModel>;
