/// <reference types="mongoose" />
import { MongooseModule, UnboxPromise } from "./types";
export declare function IncidentEventModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: import("bson").ObjectId;
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
export declare type IncidentEvent = UnboxPromise<ReturnType<typeof IncidentEventModule>>;
