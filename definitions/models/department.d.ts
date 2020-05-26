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
    cadBidirectionalEnabled: boolean;
    connectivity: {
        incident: {
            enabled: boolean;
            staleMinutes: number;
            heartbeatMinutes: number;
        };
        location: {
            enabled: boolean;
            staleMinutes: number;
            heartbeatMinutes: number;
        };
        status: {
            enabled: boolean;
            staleMinutes: number;
            heartbeatMinutes: number;
        };
    };
    selfAssignmentEnabled: boolean;
    userContributionEnabled: boolean;
    vehicleSwapEnabled: boolean;
    personnelStaffingEnabled: boolean;
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
    esriAuth: {
        username: string;
        encrypted: {
            iv: string;
            encryptedData: string;
        };
    };
    esriGeoJSONFilename: string;
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
        agencyApiKey: string;
    }[];
    signupKey: string;
    signupDomains: string[];
    safetyPriorityKeywords: {
        priority: number;
        keywords: string[];
        hexColor: string;
    }[];
    shareLocationPhones: boolean;
    shareLocationTablets: boolean;
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