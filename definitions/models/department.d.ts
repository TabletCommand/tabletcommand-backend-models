/// <reference types="mongoose" />
import { MongooseModule, UnboxPromise } from "./types";
export declare function DepartmentModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: import("bson").ObjectId;
    uuid: string;
    department: string;
    fdid: string;
    city: string;
    state: string;
    contact_name: string;
    contact_phone: string;
    contact_email: string;
    modified_unix_date: number;
    active: boolean;
    pager_number: string;
    apikey: string;
    cadEmailUsername: string;
    cadMonitorEnabled: boolean;
    cadMonitorMinutes: number;
    cadBidirectionalEnabled: boolean;
    heartbeatEnabled: boolean;
    heartbeatMinutes: number;
    pushEnabled: boolean;
    userContributionEnabled: boolean;
    rtsEnabled: boolean;
    rtsChannelPrefix: string;
    rtsAuthKey: string;
    esriTokenDateExpiry: number;
    esriToken: {
        access_token: string;
        refresh_token: string;
        username: string;
        ssl: boolean;
        expires_in: number;
    };
    customWebUrl: string;
    customWebName: string;
    incidentTypes: {
        name: string;
        value: string;
    }[];
    agencies: {
        code: string;
        name: string;
        domain: string;
    }[];
    signupKey: string;
    signupDomains: string[];
}, {}>>;
export default DepartmentModule;
export declare type Department = UnboxPromise<ReturnType<typeof DepartmentModule>>;
