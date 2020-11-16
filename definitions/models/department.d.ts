/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function DepartmentModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
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
    cadOneWayVehiclesEnabled: boolean;
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
            ackUnitsCount: number;
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
    fireMapperRefreshInterval: number;
    beansAIEnabled: boolean;
    pushEnabled: boolean;
    mowsEnabled: boolean;
    rtsEnabled: boolean;
    rtsChannelPrefix: string;
    rtsAuthKey: string;
    esriGeoJSONFilename: string;
    customWebUrl: string;
    customWebName: string;
    incidentTypes: import("../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        value: {
            type: StringConstructor;
            default: string;
        };
    }>[];
    agencyIds: never;
    signupKey: string;
    signupDomains: string[];
    safetyPriorityKeywords: import("../helpers").MongooseInterface<{
        priority: {
            type: NumberConstructor;
        };
        keywords: {
            type: StringConstructor[];
        };
        hexColor: {
            type: StringConstructor;
        };
    }>[];
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