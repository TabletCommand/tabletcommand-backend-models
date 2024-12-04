import { Types } from "mongoose";
import { ColorSchemaType } from "./color";
import { PubNubTokenSchemaType } from "./pubnub-token";
import { AccountIndustry } from "../constants";
export interface Mark43StatusConfigType {
    TimeDispatched: string[];
    TimeEnroute: string[];
    TimeStaged: string[];
    TimeCleared: string[];
    TimeAtHospital: string[];
    TimeTransporting: string[];
    TimeArrived: string[];
}
export interface Mark43ProcessLocationConfigType {
    enabled: boolean;
    locationUrl: string;
}
export interface Mark43ProcessCommentConfigType {
    enabled: boolean;
    commentUrl: string;
    usersUrl: string;
    defaultUserId: number;
}
export interface Mark43ProcessVehicleStatusConfigType {
    enabled: boolean;
    vehicleStatusUrl: string;
    vehicleStatusListUrl: string;
}
export interface Mark43ProcessConfigType {
    location: Mark43ProcessLocationConfigType;
    comment: Mark43ProcessCommentConfigType;
    vehicleStatus: Mark43ProcessVehicleStatusConfigType;
}
export interface Mark43ConfigType {
    baseUrl: string;
    authToken: string;
    apiToken: string;
    userId: number;
    enabled: boolean;
    unitStatusCodes: Mark43StatusConfigType;
    process: Mark43ProcessConfigType;
}
export interface IntterraFieldsType {
    key: string;
    value: string;
    transformationRequired: boolean;
    required: boolean;
    enabled: boolean;
}
export interface IntterraConnectionType {
    active: boolean;
    fields: IntterraFieldsType[];
    callTypes: string[];
    authKey: string;
    authKeySecret: string;
    agency: string;
    description: string;
}
export interface IntterraConfigType {
    enabled: boolean;
    connections: IntterraConnectionType[];
    incidentWebhookEnabled: boolean;
}
export interface SkymiraConfigType {
    enabled: boolean;
    token: string;
    locationsUrl: string;
}
export interface SomewearType {
    enabled: boolean;
}
export interface SkytracConfigType {
    enabled: boolean;
    licenseKey: string;
    username: string;
    secret: string;
    serviceUrl: string;
    configTag: string;
}
export interface GSTConfigType {
    enabled: boolean;
    code: string;
}
export interface ReplayOptionType {
    departmentId: string;
    url: string;
}
export interface IncidentReplayType {
    enabled: boolean;
    replays: ReplayOptionType[];
}
export interface SimpleSenseConfigType {
    token: string;
}
export interface StatusMappingObjectConfigType {
    status: string;
    statusCode: string;
}
export interface StatusMappingConfigType {
    TimeDispatched: StatusMappingObjectConfigType;
    TimeEnroute: StatusMappingObjectConfigType;
    TimeStaged: StatusMappingObjectConfigType;
    TimeArrived: StatusMappingObjectConfigType;
    TimeCleared: StatusMappingObjectConfigType;
    TimeAtHospital: StatusMappingObjectConfigType;
    TimePatient: StatusMappingObjectConfigType;
    TimeTransporting: StatusMappingObjectConfigType;
    TimeTransportComplete: StatusMappingObjectConfigType;
}
export interface IncidentVehicleStatusConfigType {
    enabled: boolean;
    statusMappings: StatusMappingConfigType;
    statusExclusions: string[];
}
export interface FirstArrivingConfigType {
    token: string;
    apiUrl: string;
}
export interface SafetyPriorityKeywordType {
    priority: number;
    keywords: string[];
    hexColor: string;
}
export interface WebDisclaimerType {
    message: string;
    enabled: boolean;
}
export interface AudioStreamType {
    description: string;
    channel: string;
    url: string;
    order: number;
}
export interface AudioStreamGroupType {
    group: string;
    streams: AudioStreamType[];
    order: number;
}
export interface RestrictedCommentsType {
    enabled: boolean;
    callTypesAllowed: string[];
    statusesAllowed: string[];
    restrictedFields: string[];
    restrictedMessage: string;
}
export interface CustomButtonsType {
    name: string;
    url: string;
    order: number;
    allowExternal: boolean;
    defaultExternal: boolean;
    allowFloating: boolean;
    color: ColorSchemaType;
}
export interface FireMapperLayerType {
    pathname: string;
    name: string;
}
export interface FireMapperOutlineType {
    uuid: string;
    layer: FireMapperLayerType[];
}
export interface SamsaraConfigurationType {
    enabled: boolean;
    token: string;
}
export interface FireMapperConfigurationType {
    enabled: boolean;
    layerRefreshInterval: number;
    proLicenseCount: number;
    host: string;
    layer: FireMapperLayerType[];
    staticLayer: FireMapperOutlineType[];
}
export interface LicensingType {
    tcPro2Way: number;
    tcPro1Way: number;
    tcMobile: number;
    tcWeb: number;
    fireMapperPro: number;
    sendToCAD: number;
    tcStreams: number;
}
export interface IncidentTypeType {
    name: string;
    value: string;
    allowPartialMatch: boolean;
    callTypeDescription: string[];
    callType: string[];
}
export interface ShareIncidentRuleType {
    ruleType: string;
    departmentId: string;
    departmentName: string;
    configuration: object;
}
export interface ForwardFieldsType {
    key: string;
    value: string;
    transformationRequired: boolean;
    required: boolean;
    enabled: boolean;
}
export interface ForwardingConnectionType {
    active: boolean;
    connectionType: string;
    fields: ForwardFieldsType[];
    callTypes: string[];
    forwardAll: boolean;
    apiUrl: string;
    authType: string;
    authUser: string;
    authKey: string;
    authKeySecret: string;
    label: string;
    description: string;
}
export interface VehicleStatusWebhookConnectionType {
    active: boolean;
    connectionType: string;
    fields: ForwardFieldsType[];
    apiUrl: string;
    apiKey: string;
    authType: string;
    description: string;
}
export interface ForwardingConfigType {
    enabled: boolean;
    connections: ForwardingConnectionType[];
}
export interface VehicleStatusWebhookConfigType {
    enabled: boolean;
    connections: VehicleStatusWebhookConnectionType[];
}
export type AccountContact = {
    department: string;
    name: string;
    phone: string;
    email: string;
};
export type AccountAddress = {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
};
export interface Connectivity {
    enabled: boolean;
    staleMinutes: number;
    heartbeatMinutes: number;
}
export interface StatusConnectivity extends Connectivity {
    ackUnitsCount: number;
}
export type AccountConnectivity = {
    incident: Connectivity;
    location: Connectivity;
    status: StatusConnectivity;
};
export type Coordinate = {
    longitude: number;
    latitude: number;
};
export type AccountConfigurationShareAVL = {
    enabled: boolean;
    opAreaName: string;
    opAreaCode: string;
    fadeZoomLevel: number;
};
export type AccountConfigurationShareIncident = {
    enabled: boolean;
    rules: ShareIncidentRuleType[];
};
export type AccountConfigurationZonehaven = {
    enabled: boolean;
    visible: boolean;
    layerUrl: string;
    fadeZoomLevel: number;
};
export type ManagedIncidentPriorityItem = {
    title: string;
    color: ColorSchemaType;
    position: number;
};
export type ManagedIncidentModeItem = {
    title: string;
    color: ColorSchemaType;
    position: number;
};
export interface DepartmentType {
    _id: Types.ObjectId;
    id?: string;
    accountType: string;
    ackDelimiter: string;
    active: boolean;
    activeUserCount: number;
    addressDetails: AccountAddress;
    addUserInstructions: string;
    agencyIds: Types.ObjectId[];
    apikey: string;
    arcGISMapsEnabled: boolean;
    audioConfiguration: AudioStreamGroupType[];
    authSource: string[];
    beaconEnabled: boolean;
    beansAIEnabled: boolean;
    cadAllowedIPAddresses: string[];
    cadAllowIgnoreAfterDays: number;
    cadBidirectionalEnabled: boolean;
    cadBidirectionalException: boolean;
    cadEmailUsername: string;
    cadGetLocationEnabled: boolean;
    cadIncidentEventType: string[];
    cadIncidentHistoryType: number[];
    cadOneWayVehiclesEnabled: boolean;
    callTypeBlock: string[];
    connectivity: AccountConnectivity;
    contact: AccountContact;
    customButtons: CustomButtonsType[];
    defaultMapPosition: Coordinate;
    department: string;
    esriGeoJSONFilename: string;
    externalNotificationsEnabled: boolean;
    fdid: string;
    fireMapPDFReader: string;
    fireMapper: FireMapperConfigurationType;
    fireMapperProLicenses: number;
    fireMapperRefreshInterval: number;
    firstArriving: FirstArrivingConfigType;
    firstArrivingEnabled: boolean;
    forwarding: ForwardingConfigType;
    gst: GSTConfigType;
    incidentReplay: IncidentReplayType;
    incidentTypes: IncidentTypeType[];
    incidentVehicleStatus: IncidentVehicleStatusConfigType;
    industry: AccountIndustry;
    intterra: IntterraConfigType;
    licensing: LicensingType;
    locationStaleMinutes: number;
    logOffEnabled: boolean;
    mark43: Mark43ConfigType;
    managedIncidentMode: ManagedIncidentModeItem[];
    managedIncidentPriority: ManagedIncidentPriorityItem[];
    minPasswordLength: number;
    modified_unix_date: number;
    modified: Date;
    mowsEnabled: boolean;
    notificationEmails: string[];
    orientationMarkerColor: ColorSchemaType;
    partialApiKey: string;
    personnelStaffingEnabled: boolean;
    pubNubV3: PubNubTokenSchemaType;
    remoteLoggingEnabled: boolean;
    reportNumberEnabled: boolean;
    reportOdometer: string;
    restrictedComments: RestrictedCommentsType;
    rosteringEnabled: boolean;
    rosteringShiftDefault: number;
    rtsChannelPrefix: string;
    rtsEnabled: boolean;
    safetyPriorityKeywords: SafetyPriorityKeywordType[];
    samsara: SamsaraConfigurationType;
    selfAssignmentEnabled: boolean;
    shareAVL: AccountConfigurationShareAVL;
    shareIncident: AccountConfigurationShareIncident;
    shareLocationPhones: boolean;
    shareLocationTablets: boolean;
    signupDomains: string[];
    signupKey: string;
    simpleSense: SimpleSenseConfigType;
    simpleSenseEnabled: boolean;
    skymira: SkymiraConfigType;
    skytrac: SkytracConfigType[];
    socketIO: PubNubTokenSchemaType;
    somewear: SomewearType;
    speedReportingEnabled: boolean;
    timeZone: string;
    userContributionEnabled: boolean;
    uuid: string;
    vehicleRadioNameIsStable: boolean;
    vehicleStatusWebhook: VehicleStatusWebhookConfigType;
    vehicleSwapEnabled: boolean;
    webDisclaimer: WebDisclaimerType;
    zonehaven: AccountConfigurationZonehaven;
}
//# sourceMappingURL=department.d.ts.map