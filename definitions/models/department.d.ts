/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
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
    defaultMapPosition: {
        longitude: number;
        latitude: number;
    };
    fireMapPDFReader: string;
    locationStaleMinutes: number;
    beaconEnabled: boolean;
    fireMapperEnabled: boolean;
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
        personnelApiKey: string;
    }[];
    signupKey: string;
    signupDomains: string[];
}, {}> & {
    __methods?: unknown;
}>;
export interface Department extends ItemTypeFromTypeSchemaFunction<typeof DepartmentModule> {
}
export interface DepartmentModel extends ModelTypeFromTypeSchemaFunction<Department> {
}
declare const _default: ReplaceModelReturnType<typeof DepartmentModule, DepartmentModel>;
export default _default;
//# sourceMappingURL=department.d.ts.map