/// <reference types="mongoose" />
import { currentDate, MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function DepartmentModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectID;
    uuid: string;
    department: string;
    fdid: string;
    addressDetails: {
        address: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    };
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    contact: {
        department: string;
        name: string;
        phone: string;
        email: string;
    };
    contact_department: string;
    contact_name: string;
    contact_phone: string;
    contact_email: string;
    modified_unix_date: number;
    modified: string;
    active: boolean;
    apikey: string;
    partialApiKey: string;
    cadEmailUsername: string;
    notificationEmails: string[];
    externalNotificationsEnabled: boolean;
    cadBidirectionalEnabled: boolean;
    cadOneWayVehiclesEnabled: boolean;
    cadAllowedIPAddresses: string[];
    cadGetLocationEnabled: boolean;
    cadAllowIgnoreAfterDays: number;
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
    firstArrivingEnabled: boolean;
    simpleSenseEnabled: boolean;
    fireMapperEnabled: boolean;
    incidentVehicleStatusEnabled: boolean;
    fireMapperRefreshInterval: number;
    fireMapperProLicenses: number;
    beansAIEnabled: boolean;
    mowsEnabled: boolean;
    rtsEnabled: boolean;
    rtsChannelPrefix: string;
    pubNubV3: import("../helpers").MongooseInterface<{
        token: {
            type: StringConstructor;
            default: string;
        };
        expireAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        runAt: {
            type: DateConstructor;
            default: string;
        };
    }>;
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
            default: number;
        };
        keywords: {
            type: StringConstructor[];
            default: never[];
        };
        hexColor: {
            type: StringConstructor;
        };
    }>[];
    shareLocationPhones: boolean;
    shareLocationTablets: boolean;
    shareAVL: {
        enabled: boolean;
        opAreaName: string;
        opAreaCode: string;
    };
    speedReportingEnabled: boolean;
    accountType: string;
    timeZone: string;
    remoteLoggingEnabled: boolean;
    logOffEnabled: boolean;
    licensing: any;
    webDisclaimer: import("../helpers").MongooseInterface<{
        message: {
            type: StringConstructor;
            default: string;
        };
        enabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>;
    addUserInstructions: string;
    restrictedComments: import("../helpers").MongooseInterface<{
        enabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        callTypesAllowed: {
            type: StringConstructor[];
            default: never[];
        };
        statusesAllowed: {
            type: StringConstructor[];
            default: never[];
        };
        restrictedFields: {
            type: StringConstructor[];
            default: never[];
        };
        restrictedMessage: {
            type: StringConstructor;
            default: string;
        };
    }>;
    customButtons: import("../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        url: {
            type: StringConstructor;
            default: string;
        };
        order: {
            type: NumberConstructor;
            default: number;
        };
        allowExternal: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultExternal: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowFloating: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    background: {
                        type: StringConstructor;
                        default: string;
                    };
                    text: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            };
            default: null;
        };
    }>[];
    reportNumberEnabled: boolean;
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