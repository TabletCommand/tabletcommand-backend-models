/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { MongooseModule } from "../helpers";
import { ColorSchemaType } from "./schema/color";
import { PubNubTokenSchemaType } from "./schema/pubnub-token";
import { Model, Types } from "mongoose";
interface Mark43StatusConfigType {
    TimeDispatched: string[];
    TimeEnroute: string[];
    TimeStaged: string[];
    TimeCleared: string[];
    TimeAtHospital: string[];
    TimeTransporting: string[];
    TimeArrived: string[];
}
interface Mark43ConfigType {
    baseUrl: string;
    authToken: string;
    apiToken: string;
    userId: number;
    enabled: boolean;
    unitStatusCodes: Mark43StatusConfigType;
}
interface IntterraFieldsType {
    key: string;
    value: string;
    transformationRequired: boolean;
    required: boolean;
    enabled: boolean;
}
interface IntterraConnectionType {
    active: boolean;
    fields: IntterraFieldsType[];
    callTypes: string[];
    authKey: string;
    authKeySecret: string;
    agency: string;
    description: string;
}
interface IntterraConfigType {
    enabled: boolean;
    connections: IntterraConnectionType[];
}
interface SimpleSenseConfigType {
    token: string;
}
interface FirstArrivingConfigType {
    token: string;
}
interface SafetyPriorityKeywordType {
    priority: number;
    keywords: string[];
    hexColor: string;
}
interface WebDisclaimerType {
    message: string;
    enabled: boolean;
}
interface AudioStreamType {
    description: string;
    channel: string;
    url: string;
    order: number;
}
interface AudioStreamGroupType {
    group: string;
    streams: AudioStreamType[];
    order: number;
}
interface RestrictedCommentsType {
    enabled: boolean;
    callTypesAllowed: string[];
    statusesAllowed: string[];
    restrictedFields: string[];
    restrictedMessage: string;
}
interface CustomButtonsType {
    name: string;
    url: string;
    order: number;
    allowExternal: boolean;
    defaultExternal: boolean;
    allowFloating: boolean;
    color: ColorSchemaType;
}
interface FireMapperLayerType {
    pathname: string;
    name: string;
}
interface FireMapperOutlineType {
    uuid: string;
    layer: FireMapperLayerType[];
}
interface SamsaraConfigurationType {
    enabled: boolean;
    token: string;
}
interface FireMapperConfigurationType {
    enabled: boolean;
    layerRefreshInterval: number;
    proLicenseCount: number;
    host: string;
    layer: FireMapperLayerType[];
    staticLayer: FireMapperOutlineType[];
}
interface LicensingType {
    tcPro2Way: number;
    tcPro1Way: number;
    tcMobile: number;
    tcWeb: number;
    fireMapperPro: number;
    sendToCAD: number;
    tcStreams: number;
}
interface IncidentTypeType {
    name: string;
    value: string;
    allowPartialMatch: boolean;
    callTypeDescription: string[];
    callType: string[];
}
interface ShareIncidentRuleType {
    ruleType: string;
    departmentId: string;
    departmentName: string;
    configuration: object;
}
export interface Department {
    _id: Types.ObjectId;
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
    contact: {
        department: string;
        name: string;
        phone: string;
        email: string;
    };
    modified_unix_date: number;
    modified: Date;
    active: boolean;
    apikey: string;
    partialApiKey: string;
    cadEmailUsername: string;
    notificationEmails: string[];
    rosteringEnabled: boolean;
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
    authSource: string[];
    defaultMapPosition: {
        longitude: number;
        latitude: number;
    };
    fireMapPDFReader: string;
    locationStaleMinutes: number;
    beaconEnabled: boolean;
    firstArrivingEnabled: boolean;
    firstArriving: FirstArrivingConfigType;
    simpleSenseEnabled: boolean;
    simpleSense: SimpleSenseConfigType;
    incidentVehicleStatusEnabled: boolean;
    fireMapperEnabled: boolean;
    fireMapperRefreshInterval: number;
    fireMapperProLicenses: number;
    fireMapper: FireMapperConfigurationType;
    arcGISMapsEnabled: boolean;
    beansAIEnabled: boolean;
    mowsEnabled: boolean;
    rtsEnabled: boolean;
    rtsChannelPrefix: string;
    pubNubV3: PubNubTokenSchemaType;
    socketIO: PubNubTokenSchemaType;
    esriGeoJSONFilename: string;
    incidentTypes: IncidentTypeType[];
    ackDelimiter: string;
    callTypeBlock: string[];
    agencyIds: Types.ObjectId[];
    signupKey: string;
    signupDomains: string[];
    safetyPriorityKeywords: SafetyPriorityKeywordType[];
    shareLocationPhones: boolean;
    shareLocationTablets: boolean;
    shareAVL: {
        enabled: boolean;
        opAreaName: string;
        opAreaCode: string;
        fadeZoomLevel: number;
    };
    shareIncident: {
        enabled: boolean;
        rules: ShareIncidentRuleType[];
    };
    speedReportingEnabled: boolean;
    accountType: string;
    timeZone: string;
    remoteLoggingEnabled: boolean;
    logOffEnabled: boolean;
    licensing: LicensingType;
    webDisclaimer: WebDisclaimerType;
    addUserInstructions: string;
    restrictedComments: RestrictedCommentsType;
    customButtons: CustomButtonsType[];
    reportNumberEnabled: boolean;
    audioConfiguration: AudioStreamGroupType[];
    minPasswordLength: number;
    zonehaven: {
        enabled: boolean;
        visible: boolean;
        layerUrl: string;
        fadeZoomLevel: number;
    };
    activeUserCount: number;
    samsara: SamsaraConfigurationType;
    mark43: Mark43ConfigType;
    intterra: IntterraConfigType;
}
export default function DepartmentModule(mongoose: MongooseModule): Promise<Model<Department, {}, {}, {}, import("mongoose").Document<unknown, {}, Department> & Department & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface DepartmentModel extends Model<Department> {
}
export {};
//# sourceMappingURL=department.d.ts.map