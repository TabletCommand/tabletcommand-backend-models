import { Types } from "mongoose";
import { ColorSchemaType } from "./color";
import { PubNubTokenSchemaType } from "./pubnub-token";
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
    apiUrl: string;
    authType: string;
    authUser: string;
    authKey: string;
    authKeySecret: string;
    label: string;
    description: string;
}
export interface ForwardingConfigType {
    enabled: boolean;
    connections: ForwardingConnectionType[];
}
export interface DepartmentType {
    _id: Types.ObjectId;
    id?: string;
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
    vehicleRadioNameIsStable: boolean;
    cadIncidentHistoryType: number[];
    cadIncidentEventType: string[];
    incidentVehicleStatus: IncidentVehicleStatusConfigType;
    skymira: SkymiraConfigType;
    skytrac: SkytracConfigType[];
    gst: GSTConfigType;
    incidentReplay: IncidentReplayType;
    somewear: SomewearType;
    cadBidirectionalException: boolean;
    forwarding: ForwardingConfigType;
    reportOdometer: string;
}
//# sourceMappingURL=department.d.ts.map