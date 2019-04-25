/// <reference types="mongoose" />
import { MongooseModule, UnboxPromise } from "./helpers";
export declare function UserModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    nick: string;
    email: string;
    name: string;
    departmentId: string;
    modified_date: string;
    when: string;
    agency: {
        code: string;
        name: string;
        domain: string;
    };
    active: boolean;
    admin: boolean;
    superuser: boolean;
    isPro: boolean;
    outsider: boolean;
    remoteLoggingEnabled: boolean;
    salt: string;
    pass: string;
    mapHidden: boolean;
    mapId: string;
    vehicle: {
        radioName: string;
        vehicleId: string;
    };
    sessionCountiPhone: number;
    sessionCountiPad: number;
    rtsAuthKey: string;
    token: string;
    tokenExpireDate: number;
}, {}>>;
export default UserModule;
export declare type User = UnboxPromise<ReturnType<typeof UserModule>>;
