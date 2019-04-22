/// <reference types="mongoose" />
import { MongooseModule, UnboxPromise } from "./types";
export declare function SessionModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: string;
    nick: string;
    email: string;
    user: string;
    active: boolean;
    token: string;
    source: string;
    departmentId: string;
    why: string;
    when: string;
    ended: string;
    userAgent: string;
    remoteAddress: string;
    deviceId: string;
}, {}>>;
export default SessionModule;
export declare type Session = UnboxPromise<ReturnType<typeof SessionModule>>;
