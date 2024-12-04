import * as uuid from "uuid";
import { Model } from "mongoose";
import { mongooseLeanVirtuals } from "mongoose-lean-virtuals";

import {
  AccountIndustry,
} from "../constants";

import {
  currentDate,
  MongooseModule,
  retrieveCurrentUnixTime,
} from "../helpers";
import ColorModule from "./schema/color";
import PubNubTokenSchema from "./schema/pubnub-token";
import { ColorSchemaType } from "../types/color";
import {
  AudioStreamGroupType,
  AudioStreamType,
  CustomButtonsType,
  DepartmentType,
  FireMapperConfigurationType,
  FireMapperLayerType,
  FireMapperOutlineType,
  FirstArrivingConfigType,
  ForwardFieldsType,
  ForwardingConfigType,
  ForwardingConnectionType,
  GSTConfigType,
  IncidentReplayType,
  IncidentTypeType,
  IncidentVehicleStatusConfigType,
  IntterraConfigType,
  IntterraConnectionType,
  IntterraFieldsType,
  LicensingType,
  ManagedIncidentModeItem,
  ManagedIncidentPriorityItem,
  Mark43ConfigType,
  Mark43ProcessCommentConfigType,
  Mark43ProcessConfigType,
  Mark43ProcessLocationConfigType,
  Mark43ProcessVehicleStatusConfigType,
  Mark43StatusConfigType,
  ReplayOptionType,
  RestrictedCommentsType,
  SafetyPriorityKeywordType,
  SamsaraConfigurationType,
  ShareIncidentRuleType,
  SimpleSenseConfigType,
  SkymiraConfigType,
  SkytracConfigType,
  SomewearType,
  StatusMappingConfigType,
  StatusMappingObjectConfigType,
  VehicleStatusWebhookConfigType,
  VehicleStatusWebhookConnectionType,
  WebDisclaimerType,
} from "../types/department";

export interface Department extends DepartmentType, Record<string, unknown> { }

export const Mark43StatusConfigDefault = {
  TimeDispatched: ["D"],
  TimeEnroute: ["EN"],
  TimeStaged: ["ST"],
  TimeCleared: ["AV", "AVF", "AOR"],
  TimeAtHospital: ["AH"],
  TimeTransporting: ["T", "EH"],
  TimeArrived: ["ATS", "A"],
};

export const IntterraFieldsDefault = [
  {
    "key": "IncidentNumber",
    "value": "incidentId",
    "required": true,
    "enabled": true,
    "transformationRequired": false,
  },
  {
    "key": "AgencyIncidentCallTypeDescription",
    "value": "incidentTypeDescription",
    "required": false,
    "enabled": true,
    "transformationRequired": false,
  },
  {
    "key": "units",
    "value": "assignedUnits",
    "required": false,
    "enabled": true,
    "transformationRequired": true,
  },
  {
    "key": "Longitude",
    "value": "longitude",
    "required": false,
    "enabled": true,
    "transformationRequired": false,
  },
  {
    "key": "Latitude",
    "value": "latitude",
    "required": false,
    "enabled": true,
    "transformationRequired": false,
  },
  {
    "key": "full_address",
    "value": "fullAddress",
    "required": false,
    "enabled": true,
    "transformationRequired": false,
  },
  {
    "key": "EntryDateTime",
    "value": "alarmDatetime", // cspell:disable-line
    "required": false,
    "enabled": true,
    "transformationRequired": false,
  }
];

// If any of the following fields are updated/added/deleted,
// make sure to update the database records, before/after release (script/query)
export const FireMapperConfigurationDefault = {
  enabled: false,
  layerRefreshInterval: 15,
  proLicenseCount: 0,
  host: "",
  layer: [
    {
      name: "FireMapper - Symbols",
      pathname: "/api/rest/services/features/FeatureServer/0",
    },
    {
      name: "FireMapper - Lines",
      pathname: "/api/rest/services/features/FeatureServer/1",
    },
    {
      name: "FireMapper - Photos",
      pathname: "/api/rest/services/features/FeatureServer/2",
    },
    {
      name: "FireMapper - Areas",
      pathname: "/api/rest/services/features/FeatureServer/3",
    },
    {
      name: "FireMapper - PDFs",
      pathname: "/api/rest/services/features/FeatureServer/4",
    },
    {
      name: "FireMapper - Labels",
      pathname: "/api/rest/services/features/FeatureServer/5",
    },
  ],
  staticLayer: [],
};

export const LicensingDefault = {
  "tcPro2Way": 0,
  "tcPro1Way": 0,
  "tcMobile": 0,
  "tcWeb": 0,
  "fireMapperPro": 0,
  "sendToCAD": 0,
  "tcStreams": 0
};

export const SafetyPriorityKeywordDefault = [
  {
    "keywords": [],
    "priority": 0,
    "hexColor": "FF3B30"
  },
  {
    "keywords": [],
    "priority": 1,
    "hexColor": "FEC309"
  },
  {
    "keywords": [],
    "priority": 2,
    "hexColor": "0A60FF"
  }
];

export const FirstArrivingConfigDefault = {
  "token": "",
  "apiUrl": "",
};

export const IntterraConfigDefault = {
  "enabled": false,
  "connections": [],
  "incidentWebhookEnabled": false,
};

export const ForwardingConfigDefault = {
  "enabled": false,
  "connections": [],
};

export const VehicleStatusWebhookConfigDefault = {
  "enabled": false,
  "connections": [],
};

export const IncidentReplayDefault = {
  "enabled": false,
  "replays": [],
};

export const SomewearDefault = {
  "enabled": false,
};

export const GSTConfigDefault = {
  "enabled": false,
  "code": "",
};

export const SkymiraConfigDefault = {
  "enabled": false,
  "token": "",
  "locationsUrl": "",
};

export const Mark43ConfigDefault = {
  "baseUrl": "",
  "authToken": "",
  "apiToken": "",
  "userId": 0,
  "enabled": false,
};

export const SimpleSenseConfigDefault = {
  "token": "",
};

export const WebDisclaimerDefault = {
  "message": "",
  "enabled": false
};

export const RestrictedCommentsDefault = {
  enabled: false,
  callTypesAllowed: [],
  statusesAllowed: [],
  restrictedFields: [
    "LocationComment",
    "AgencyIncidentCallTypeDescription",
    "Comment"
  ],
  restrictedMessage: "RESTRICTED"
};

export const StatusMappingConfigDefault = {
  TimeDispatched: {
    "status": "Unit Dispatched",
    "statusCode": "DSP"
  },
  TimeEnroute: {
    "status": "Unit is Enroute",
    "statusCode": "ENR"
  },
  TimeStaged: {
    "status": "Unit is Staging",
    "statusCode": "STG"
  },
  TimeArrived: {
    "status": "Unit is On Scene",
    "statusCode": "ONS"
  },
  TimeCleared: {
    "status": "Available on Radio",
    "statusCode": "AOR"
  },
  TimeAtHospital: {
    "status": "Transport Arrive",
    "statusCode": "TAR"
  },
  // added to exclusions unused
  TimePatient: {
    "status": "Available",
    "statusCode": "AV"
  },
  TimeTransporting: {
    "status": "Transporting",
    "statusCode": "TRN"
  },
  TimeTransportComplete: {
    "status": "Transport Complete",
    "statusCode": "TCM"
  }
};

export const ForwardFieldsDefault = [
  {
    "key": "IncidentNumber",
    "value": "IncidentNumber",
    "required": true,
    "enabled": true,
    "transformationRequired": false,
  },
  {
    "key": "AgencyIncidentCallTypeDescription",
    "value": "AgencyIncidentCallTypeDescription",
    "required": false,
    "enabled": true,
    "transformationRequired": false,
  },
  {
    "key": "units",
    "value": "units",
    "required": false,
    "enabled": true,
    "transformationRequired": true,
  },
  {
    "key": "Longitude",
    "value": "Longitude",
    "required": false,
    "enabled": true,
    "transformationRequired": false,
  },
  {
    "key": "Latitude",
    "value": "Latitude",
    "required": false,
    "enabled": true,
    "transformationRequired": false,
  },
  {
    "key": "full_address",
    "value": "full_address",
    "required": false,
    "enabled": true,
    "transformationRequired": false,
  },
  {
    "key": "EntryDateTime",
    "value": "EntryDateTime", // cspell:disable-line
    "required": false,
    "enabled": true,
    "transformationRequired": false,
  }
];

export const VehicleStatusWebhookFieldsDefault = [
  {
    "key": "responseTime",
    "value": "responseTime",
    "required": true,
    "enabled": true,
    "transformationRequired": false,
  },
  {
    "key": "responseTimeAt",
    "value": "responseTimeAt",
    "required": true,
    "enabled": true,
    "transformationRequired": false,
  },
  {
    "key": "radioName",
    "value": "radioName",
    "required": true,
    "enabled": true,
    "transformationRequired": false,
  },
  {
    "key": "vehicleId",
    "value": "vehicleId",
    "required": true,
    "enabled": true,
    "transformationRequired": false,
  },
  {
    "key": "statusCode",
    "value": "statusCode",
    "required": true,
    "enabled": true,
    "transformationRequired": false,
  },
  {
    "key": "status",
    "value": "status",
    "required": true,
    "enabled": true,
    "transformationRequired": false,
  }
];

export const SamsaraConfigurationDefault = {
  enabled: false,
  token: "",
};

export const OrientationMarkerColorDefault: ColorSchemaType = {
  background: "#FC2125",
  text: "#FFFFFF",
};

export const ManagedIncidentModeDefault: ManagedIncidentModeItem[] = [
  { title: "Investigative", color: { background: "#283593", text: "#F5F5F5" }, position: 1 },
  { title: "Offensive", color: { background: "#00695C", text: "#F5F5F5" }, position: 2 },
  { title: "Defensive", color: { background: "#827717", text: "#F5F5F5" }, position: 3 },
  { title: "Combination", color: { background: "#F57F17", text: "#F5F5F5" }, position: 4 },
  { title: "Marginal", color: { background: "#1B5E20", text: "#F5F5F5" }, position: 5 },
  { title: "Transitional", color: { background: "#4E342E", text: "#F3E5F5" }, position: 6 },
];

export const ManagedIncidentPriorityDefault: ManagedIncidentModeItem[] = [
  { title: "Life", color: { background: "#6A1B9A", text: "#F5F5F5" }, position: 1 },
  { title: "Stabilization", color: { background: "#EDE7F6", text: "#00695C" }, position: 2 },
  { title: "Property", color: { background: "#FFF3E0", text: "#BF360C" }, position: 3 },
  { title: "Environment", color: { background: "#DCEDC8", text: "#424242" }, position: 4 },
];

export default async function DepartmentModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const PubNubToken = PubNubTokenSchema(mongoose);
  const Color = ColorModule(mongoose);

  const Mark43StatusConfig = new Schema<Mark43StatusConfigType>({
    TimeDispatched: {
      type: [String],
      default: []
    },
    TimeEnroute: {
      type: [String],
      default: []
    },
    TimeStaged: {
      type: [String],
      default: []
    },
    TimeCleared: {
      type: [String],
      default: []
    },
    TimeAtHospital: {
      type: [String],
      default: []
    },
    TimeTransporting: {
      type: [String],
      default: []
    },
    TimeArrived: {
      type: [String],
      default: []
    },
  }, {
    _id: false,
    id: false,
  });

  const Mark43ProcessLocationConfig = new Schema<Mark43ProcessLocationConfigType>({
    enabled: {
      type: Boolean,
      default: false,
    },
    locationUrl: {
      type: String,
      default: "",
    }
  }, {
    _id: false,
    id: false,
  });

  const Mark43ProcessCommentConfig = new Schema<Mark43ProcessCommentConfigType>({
    enabled: {
      type: Boolean,
      default: false,
    },
    commentUrl: {
      type: String,
      default: ""
    },
    usersUrl: {
      type: String,
      default: "",
    },
    defaultUserId: {
      type: Number,
      default: 0,
    },
  }, {
    _id: false,
    id: false,
  });

  const Mark43ProcessVehicleStatusConfig = new Schema<Mark43ProcessVehicleStatusConfigType>({
    enabled: {
      type: Boolean,
      default: false,
    },
    vehicleStatusUrl: {
      type: String,
      default: ""
    },
    vehicleStatusListUrl: {
      type: String,
      default: ""
    },
  }, {
    _id: false,
    id: false,
  });

  const Mark43ProcessConfig = new Schema<Mark43ProcessConfigType>({
    location: {
      type: Mark43ProcessLocationConfig,
    },
    comment: {
      type: Mark43ProcessCommentConfig,
    },
    vehicleStatus: {
      type: Mark43ProcessVehicleStatusConfig,
    },
  }, {
    _id: false,
    id: false,
  });

  const Mark43Config = new Schema<Mark43ConfigType>({
    baseUrl: {
      type: String,
      default: "",
    },
    authToken: {
      type: String,
      default: "",
    },
    apiToken: {
      type: String,
      default: "",
    },
    userId: {
      type: Number,
      default: 0,
    },
    enabled: {
      type: Boolean,
      default: false,
    },
    unitStatusCodes: {
      type: Mark43StatusConfig,
      default: Mark43StatusConfigDefault,
    },
    process: {
      type: Mark43ProcessConfig,
    },
  }, {
    _id: false,
    id: false,
  });

  const IntterraFields = new Schema<IntterraFieldsType>({
    key: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    transformationRequired: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
  }, {
    _id: false,
    id: false,
  });

  const IntterraConnection = new Schema<IntterraConnectionType>({
    active: {
      type: Boolean,
      default: false,
    },
    fields: {
      type: [IntterraFields],
      default: IntterraFieldsDefault,
    },
    callTypes: {
      type: [String],
      default: [],
    },
    authKey: {
      type: String,
      default: "",
    },
    authKeySecret: {
      type: String,
      default: ""
    },
    agency: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const ForwardFields = new Schema<ForwardFieldsType>({
    key: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    transformationRequired: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
  }, {
    _id: false,
    id: false,
  });

  const ForwardingConnection = new Schema<ForwardingConnectionType>({
    active: {
      type: Boolean,
      default: false,
    },
    connectionType: {
      type: String,
      default: "",
    },
    fields: {
      type: [ForwardFields],
      default: ForwardFieldsDefault,
    },
    callTypes: {
      type: [String],
      default: [],
    },
    forwardAll: {
      type: Boolean,
      default: false,
    },
    apiUrl: {
      type: String,
      default: "",
    },
    authType: {
      type: String,
      default: "",
    },
    authUser: {
      type: String,
      default: "",
    },
    authKey: {
      type: String,
      default: "",
    },
    authKeySecret: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const VehicleStatusWebhookConnection = new Schema<VehicleStatusWebhookConnectionType>({
    active: {
      type: Boolean,
      default: false,
    },
    connectionType: {
      type: String,
      default: "",
    },
    fields: {
      type: [ForwardFields],
      default: VehicleStatusWebhookFieldsDefault,
    },
    apiUrl: {
      type: String,
      default: "",
    },
    apiKey: {
      type: String,
      default: "",
    },
    authType: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const IntterraConfig = new Schema<IntterraConfigType>({
    enabled: {
      type: Boolean,
      default: false,
    },
    connections: {
      type: [IntterraConnection],
      default: [],
    },
    incidentWebhookEnabled: {
      type: Boolean,
      default: false,
    },
  }, {
    _id: false,
    id: false,
  });

  const ForwardingConfig = new Schema<ForwardingConfigType>({
    enabled: {
      type: Boolean,
      default: false,
    },
    connections: {
      type: [ForwardingConnection],
      default: [],
    },
  }, {
    _id: false,
    id: false,
  });

  const VehicleStatusWebhookConfig = new Schema<VehicleStatusWebhookConfigType>({
    enabled: {
      type: Boolean,
      default: false,
    },
    connections: {
      type: [VehicleStatusWebhookConnection],
      default: [],
    },
  }, {
    _id: false,
    id: false,
  });

  const SkymiraConfig = new Schema<SkymiraConfigType>({
    enabled: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
      default: "",
    },
    locationsUrl: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const GSTConfig = new Schema<GSTConfigType>({
    enabled: {
      type: Boolean,
      default: false,
    },
    code: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const ReplayOption = new Schema<ReplayOptionType>({
    departmentId: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const IncidentReplay = new Schema<IncidentReplayType>({
    enabled: {
      type: Boolean,
      default: false,
    },
    replays: {
      type: [ReplayOption],
      default: [],
    },
  }, {
    _id: false,
    id: false,
  });

  const Somewear = new Schema<SomewearType>({
    enabled: {
      type: Boolean,
      default: false,
    },
  }, {
    _id: false,
    id: false,
  });

  const SkytracConfig = new Schema<SkytracConfigType>({
    enabled: {
      type: Boolean,
      default: false,
    },
    licenseKey: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      default: "",
    },
    secret: {
      type: String,
      default: "",
    },
    serviceUrl: {
      type: String,
      default: "",
    },
    configTag: {
      type: String,
      default: ""
    },
  }, {
    _id: false,
    id: false,
  });

  const SimpleSenseConfig = new Schema<SimpleSenseConfigType>({
    token: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const StatusMappingObjectConfig = new Schema<StatusMappingObjectConfigType>({
    status: {
      type: String,
      default: "",
    },
    statusCode: {
      type: String,
      default: "",
    }
  }, {
    _id: false,
    id: false,
  });

  const StatusMappingConfig = new Schema<StatusMappingConfigType>({
    TimeDispatched: {
      type: StatusMappingObjectConfig,
    },
    TimeEnroute: {
      type: StatusMappingObjectConfig,
    },
    TimeStaged: {
      type: StatusMappingObjectConfig,
    },
    TimeArrived: {
      type: StatusMappingObjectConfig,
    },
    TimeCleared: {
      type: StatusMappingObjectConfig,
    },
    TimeAtHospital: {
      type: StatusMappingObjectConfig,
    },
    TimePatient: {
      type: StatusMappingObjectConfig,
    },
    TimeTransporting: {
      type: StatusMappingObjectConfig,
    },
    TimeTransportComplete: {
      type: StatusMappingObjectConfig,
    },
  }, {
    _id: false,
    id: false,
  });

  const IncidentVehicleStatusConfig = new Schema<IncidentVehicleStatusConfigType>({
    enabled: {
      type: Boolean,
      default: false,
    },
    statusMappings: {
      type: StatusMappingConfig,
      default: StatusMappingConfigDefault,
    },
    statusExclusions: {
      type: [String],
      default: [],
    }
  }, {
    _id: false,
    id: false,
  });

  const FirstArrivingConfig = new Schema<FirstArrivingConfigType>({
    token: {
      type: String,
      default: "",
    },
    apiUrl: {
      type: String,
      default: ""
    }
  }, {
    _id: false,
    id: false,
  });

  const SafetyPriorityKeyword = new Schema<SafetyPriorityKeywordType>({
    priority: {
      type: Number,
      default: 6,
    },
    keywords: {
      type: [String],
      default: [],
    },
    hexColor: {
      type: String,
    },
  }, {
    _id: false,
    id: false,
  });

  const WebDisclaimer = new Schema<WebDisclaimerType>({
    message: {
      type: String,
      default: "",
    },
    enabled: {
      type: Boolean,
      default: false,
    },
  }, {
    _id: false,
    id: false,
  });

  const AudioStream = new Schema<AudioStreamType>({
    // eg. Central Dispatch Talk Group or also Available on 89.5 MHz
    description: {
      type: String,
      default: "",
    },
    // e.g. B2 or CH99
    channel: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    order: {
      type: Number,
      default: 0,
    }
  }, {
    _id: false,
    id: false,
  });

  const AudioStreamGroup = new Schema<AudioStreamGroupType>({
    group: {
      type: String,
      default: "",
    },
    streams: {
      type: [AudioStream],
      default: [],
    },
    order: {
      type: Number,
      default: 0,
    }
  }, {
    _id: false,
    id: false,
  });

  const RestrictedComments = new Schema<RestrictedCommentsType>({
    enabled: {
      type: Boolean,
      default: false,
    },
    callTypesAllowed: {
      type: [String],
      default: [],
    },
    statusesAllowed: {
      type: [String],
      default: [],
    },
    restrictedFields: {
      type: [String],
      default: [],
    },
    restrictedMessage: {
      type: String,
      default: ""
    },
  }, {
    _id: false,
    id: false,
  });

  const CustomButtons = new Schema<CustomButtonsType>({
    name: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    order: {
      type: Number,
      default: 0,
    },
    allowExternal: {
      type: Boolean,
      default: false,
    },
    defaultExternal: {
      type: Boolean,
      default: false,
    },
    allowFloating: {
      type: Boolean,
      default: false,
    },
    color: {
      type: Color,
      default: null,
    },
  }, {
    _id: false,
    id: false,
  });

  const FireMapperLayer = new Schema<FireMapperLayerType>({
    pathname: {
      type: String,
      default: "", // Eg. /api/rest/services/features/FeatureServer/0 (including 0)
    },
    name: {
      type: String, // eg. FireMapper - Symbols
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const FireMapperOutline = new Schema<FireMapperOutlineType>({
    uuid: {
      type: String,
      default: "",
    },
    layer: {
      type: [FireMapperLayer],
      default: [],
    },
  }, {
    _id: false,
    id: false,
  });

  const SamsaraConfiguration = new Schema<SamsaraConfigurationType>({
    enabled: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const FireMapperConfiguration = new Schema<FireMapperConfigurationType>({
    enabled: {
      type: Boolean,
      default: false,
    },
    layerRefreshInterval: {
      type: Number,
      default: 15,
    },
    // Number of available FM Pro licenses for this department
    proLicenseCount: {
      type: Number,
      default: 0,
    },
    host: {
      // when empty, portal.firefront.com.au
      // when staging, staging.firefront.com.au
      // when us, us.firemapper.app
      type: String,
      default: "",
    },
    layer: {
      type: [FireMapperLayer],
      default: [],
    },

    // A list of items that will be added to each map
    staticLayer: {
      type: [FireMapperOutline],
      default: [],
    },
  }, {
    _id: false,
    id: false,
  });

  const Licensing = new Schema<LicensingType>({
    tcPro2Way: {
      type: Number,
      default: 0,
    },
    tcPro1Way: {
      type: Number,
      default: 0,
    },
    tcMobile: {
      type: Number,
      default: 0,
    },
    tcWeb: {
      type: Number,
      default: 0,
    },
    fireMapperPro: {
      type: Number,
      default: 0,
    },
    sendToCAD: {
      type: Number,
      default: 0,
    },
    tcStreams: {
      type: Number,
      default: 0,
    },
  }, {
    _id: false,
    id: false,
  });

  const IncidentType = new Schema<IncidentTypeType>({
    name: {
      type: String,
      default: "Any",
    },
    value: {
      type: String,
      default: "any",
    },
    // If true, instead of exact match (===), use title.includes(value)
    allowPartialMatch: {
      type: Boolean,
      default: false,
    },
    // For AgencyIncidentCallTypeDescription
    callTypeDescription: {
      type: [String],
      default: [],
    },
    // For AgencyIncidentCallType
    callType: {
      type: [String],
      default: [],
    }
  }, {
    _id: false,
    id: false,
  });

  const ShareIncidentRule = new Schema<ShareIncidentRuleType>({
    ruleType: {
      type: String,
      default: "",
    },
    departmentId: {
      type: String,
      default: "",
    },
    departmentName: {
      type: String,
      default: "",
    },
    configuration: {
      type: Object,
      default: null,
    },
  }, {
    _id: false,
    id: false,
  });

  const ManagedIncidentModeItemSchema = new Schema<ManagedIncidentModeItem>({
    title: {
      type: String,
    },
    color: {
      type: Color,
    },
    position: {
      type: Number,
      default: 1,
    },
  });

  const ManagedIncidentPriorityItemSchema = new Schema<ManagedIncidentPriorityItem>({
    title: {
      type: String,
    },
    color: {
      type: Color,
    },
    position: {
      type: Number,
      default: 1,
    },
  });

  // Main schema
  const modelSchema = new Schema<DepartmentType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },

    department: {
      type: String,
      default: "",
    },
    fdid: {
      type: String,
      default: "",
    },
    addressDetails: {
      address: {
        type: String,
        default: "",
      },
      city: {
        type: String,
        default: "",
      },
      state: {
        type: String,
        default: "",
      },
      zipCode: {
        type: String,
        default: "",
      },
      country: {
        type: String,
        default: "",
      },
    },
    contact: {
      department: {
        type: String,
        default: "",
      },
      name: {
        type: String,
        default: "",
      },
      phone: {
        type: String,
        default: "",
      },
      email: {
        type: String,
        default: "",
      },
    },
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
    modified: {
      type: Date,
      default: currentDate,
    },
    active: {
      type: Boolean,
      default: false,
    },
    apikey: {
      type: String,
      default: "",
      select: false,
    },
    partialApiKey: {
      type: String,
      default: "",
    },
    cadEmailUsername: {
      type: String,
      default: "",
    },
    notificationEmails: {
      type: [String],
      default: []
    },
    orientationMarkerColor: {
      type: Color,
      default: OrientationMarkerColorDefault,
    },
    rosteringEnabled: {
      type: Boolean,
      default: false,
    },
    rosteringShiftDefault: {
      type: Number,
      default: 777600,
    },
    externalNotificationsEnabled: {
      type: Boolean,
      default: false
    },
    // CAD Features
    cadBidirectionalEnabled: {
      type: Boolean,
      default: false,
    },
    cadOneWayVehiclesEnabled: {
      type: Boolean,
      default: false,
    },
    cadBidirectionalException: {
      type: Boolean,
      default: false,
    },
    cadAllowedIPAddresses: {
      type: [String],
      default: [],
    },
    cadGetLocationEnabled: {
      type: Boolean,
      default: false
    },
    cadAllowIgnoreAfterDays: {
      type: Number,
      default: 21,
    },
    // Incident History Item Type sent back to CAD
    // These correspond to IncidentHistoryType from iOS
    cadIncidentHistoryType: {
      type: [Number],
      default: [],
    },

    // Incident Event Item Type sent back to CAD
    // These correspond to IncidentEvent.type from backend/iOS
    cadIncidentEventType: {
      type: [String],
      default: [
        "userackcomment",
        "usercomment",
      ],
    },

    connectivity: {
      incident: {
        enabled: {
          type: Boolean,
          default: false,
        },
        staleMinutes: {
          type: Number,
          default: 30,
        },
        heartbeatMinutes: {
          type: Number,
          default: 5
        }
      },
      location: {
        enabled: {
          type: Boolean,
          default: false,
        },
        staleMinutes: {
          type: Number,
          default: 30,
        },
        heartbeatMinutes: {
          type: Number,
          default: 5
        }
      },
      status: {
        enabled: {
          type: Boolean,
          default: false,
        },
        staleMinutes: {
          type: Number,
          default: 30,
        },
        heartbeatMinutes: {
          type: Number,
          default: 5
        },
        ackUnitsCount: {
          type: Number,
          default: 3
        }
      }
    },
    selfAssignmentEnabled: {
      type: Boolean,
      default: false,
    },
    userContributionEnabled: {
      type: Boolean,
      default: false,
    },
    vehicleSwapEnabled: {
      type: Boolean,
      default: false,
    },
    personnelStaffingEnabled: {
      type: Boolean,
      default: false,
    },
    // values: password, saml, o-google, later o-microsoft, etc
    authSource: {
      type: [String],
      default: ["password"],
    },
    defaultMapPosition: {
      longitude: {
        type: Number,
        default: 0,
      },
      latitude: {
        type: Number,
        default: 0,
      },
    },
    fireMapPDFReader: {
      type: String,
      default: "",
    },
    locationStaleMinutes: {
      type: Number,
      default: 1440, // 24h
    },
    beaconEnabled: {
      type: Boolean,
      default: false,
    },
    firstArrivingEnabled: {
      type: Boolean,
      default: false,
    },
    firstArriving: {
      type: FirstArrivingConfig,
      default: FirstArrivingConfigDefault,
    },
    simpleSenseEnabled: {
      type: Boolean,
      default: false,
    },
    simpleSense: {
      type: SimpleSenseConfig,
      default: SimpleSenseConfigDefault,
    },
    incidentVehicleStatus: {
      type: IncidentVehicleStatusConfig,
    },
    // When set to true, a vehicle update will propagate to user.vehicle using the radioName (changing the vehicleId)
    // By default (false), a vehicleId change will keep the same user.vehicle vehicleId and update the radioName
    vehicleRadioNameIsStable: {
      type: Boolean,
      default: false
    },

    // Legacy FireMapper fields, remove after migrating the endpoints/code to use the new object
    fireMapperRefreshInterval: {
      type: Number,
      default: 15,
    },
    // Number of available FM Pro licenses for this department
    fireMapperProLicenses: {
      type: Number,
      default: 0,
    },

    fireMapper: {
      type: FireMapperConfiguration,
      default: FireMapperConfigurationDefault,
    },

    // Uses ArcGIS maps, requires ArcGIS accounts
    // Set this to default=enabled until we figure out why we need the flag.
    arcGISMapsEnabled: {
      type: Boolean,
      default: true,
    },

    beansAIEnabled: {
      type: Boolean,
      default: false,
    },

    // MOWS - Mobile Only Web Security
    mowsEnabled: {
      type: Boolean,
      default: false
    },

    // RTS
    rtsEnabled: {
      type: Boolean,
      default: true,
    },
    rtsChannelPrefix: {
      type: String,
      default: "",
    },
    pubNubV3: {
      type: PubNubToken,
      default: null,
    },
    socketIO: {
      type: PubNubToken,
      default: null,
    },

    // Move this to a different collection
    esriGeoJSONFilename: {
      type: String,
      default: ""
    },

    // Incident Type APN
    incidentTypes: {
      type: [IncidentType],
      default: [],
    },

    ackDelimiter: {
      type: String,
      default: ""
    },

    // incident. AgencyIncidentCallTypeDescription  OR AgencyIncidentCallType
    callTypeBlock: {
      type: [String],
      default: [],
    },

    agencyIds: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agency",
      default: [],
    }],

    // Signup
    signupKey: {
      type: String,
      default: "",
    },
    signupDomains: {
      type: [String],
      default: [],
    },
    safetyPriorityKeywords: {
      type: [SafetyPriorityKeyword],
      default: SafetyPriorityKeywordDefault,
    },
    shareLocationPhones: {
      type: Boolean,
      default: false,
    },
    shareLocationTablets: {
      type: Boolean,
      default: true,
    },
    shareAVL: {
      enabled: {
        type: Boolean,
        default: false,
      },
      opAreaName: {
        type: String,
        default: "",
      },
      opAreaCode: {
        type: String,
        default: "",
      },
      fadeZoomLevel: {
        type: Number,
        default: 45000,
      },
    },
    shareIncident: {
      enabled: {
        type: Boolean,
        default: false,
      },
      rules: {
        type: [ShareIncidentRule],
        default: [],
      },
    },
    speedReportingEnabled: {
      type: Boolean,
      default: false,
    },
    accountType: {
      type: String,
      default: "production"
    },
    timeZone: {
      type: String,
      default: "America/Los_Angeles"
    },
    remoteLoggingEnabled: {
      type: Boolean,
      default: false,
    },
    logOffEnabled: {
      type: Boolean,
      default: false,
    },
    licensing: {
      type: Licensing,
      default: LicensingDefault,
    },
    webDisclaimer: {
      type: WebDisclaimer,
      default: WebDisclaimerDefault,
    },
    addUserInstructions: {
      type: String,
      default: "",
    },
    // Other values, status, comment, status-comment
    reportOdometer: {
      type: String,
      default: "",
    },
    restrictedComments: {
      type: RestrictedComments,
      default: RestrictedCommentsDefault,
    },
    customButtons: {
      type: [CustomButtons],
      default: []
    },
    reportNumberEnabled: {
      type: Boolean,
      default: false,
    },
    audioConfiguration: {
      type: [AudioStreamGroup],
      default: [],
    },
    minPasswordLength: {
      type: Number,
      default: 8,
    },

    zonehaven: {
      enabled: {
        type: Boolean,
        default: false,
      },
      visible: {
        type: Boolean,
        default: true,
      },
      layerUrl: {
        type: String,
        default: "",
      },
      fadeZoomLevel: {
        type: Number,
        default: 45000,
      },
    },
    activeUserCount: {
      type: Number,
      default: 0,
    },
    samsara: {
      type: SamsaraConfiguration,
      default: SamsaraConfigurationDefault,
    },
    mark43: {
      type: Mark43Config,
      default: Mark43ConfigDefault
    },
    intterra: {
      type: IntterraConfig,
      default: IntterraConfigDefault,
    },
    skymira: {
      type: SkymiraConfig,
      default: SkymiraConfigDefault,
    },
    skytrac: {
      type: [SkytracConfig],
      default: [],
    },
    gst: {
      type: GSTConfig,
      default: GSTConfigDefault,
    },
    incidentReplay: {
      type: IncidentReplay,
      default: IncidentReplayDefault,
    },
    somewear: {
      type: Somewear,
      default: SomewearDefault,
    },
    forwarding: {
      type: ForwardingConfig,
      default: ForwardingConfigDefault,
    },
    vehicleStatusWebhook: {
      type: VehicleStatusWebhookConfig,
      default: VehicleStatusWebhookConfigDefault,
    },

    managedIncidentMode: {
      type: [ManagedIncidentModeItemSchema],
      default: ManagedIncidentModeDefault,
    },
    managedIncidentPriority: {
      type: [ManagedIncidentPriorityItemSchema],
      default: ManagedIncidentPriorityDefault,
    },

    industry: {
      type: String,
      default: AccountIndustry.Fire,
    },
  }, {
    autoIndex: false,
    timestamps: {
      updatedAt: "modified",
    },
    toJSON: {
      virtuals: true,
      versionKey: false,
    }
  });

  modelSchema.index({
    apikey: 1,
  }, {
    name: "apikey_1",
    unique: true,
  });

  modelSchema.index({
    department: 1,
  }, {
    name: "department_1_unique",
    unique: true,
  });

  modelSchema.index({
    rtsChannelPrefix: 1,
  }, {
    name: "rtsChannelPrefix_1_unique",
    unique: true,
  });

  // TODO: Create this
  // modelSchema.index({
  //   uuid: 1,
  // }, {
  //   name: "uuid_1_unique",
  //   unique: true,
  // });

  modelSchema.virtual("id").get(function(this: Department) {
    return this._id.toHexString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);

  return mongoose.model<Department>("Department", modelSchema, "massive_admin", { overwriteModels: true });
}

export interface DepartmentModel extends Model<Department> { }
