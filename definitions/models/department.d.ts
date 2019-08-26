/// <reference types="mongoose" />
import { ModelItemType, MongooseModule, UnboxPromise } from "../helpers";
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
    selfAssignmentEnabled: boolean;
    userContributionEnabled: boolean;
    vehicleSwapEnabled: boolean;
    pushEnabled: boolean;
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
    error: {
        code: number;
        error: string;
        error_description: string;
        message: string;
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
export declare type DepartmentModel = UnboxPromise<ReturnType<typeof DepartmentModule>>;
export declare type Department = ModelItemType<DepartmentModel>;
//# sourceMappingURL=department.d.ts.map