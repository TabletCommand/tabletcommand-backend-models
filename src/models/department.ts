import * as uuid from "uuid";
import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";

import {
  currentDate,
  DocumentTypeFromSchema,
  FieldsOfDocument,
  MongooseModule,
  retrieveCurrentUnixTime,
} from "../helpers";
import ColorModule from "./schema/color";
import PubNubTokenSchema from "./schema/pubnub-token";
import { Mixed, Types } from "mongoose";

interface Mark43StatusConfigType {
  TimeDispatched: string[],
  TimeEnroute: string[],
  TimeStaged: string[],
  TimeCleared: string[],
  TimeAtHospital: string[],
  TimeTransporting: string[],
  TimeArrived: string[],
}

interface Mark43ConfigType {
  baseUrl: string,
  authToken: string,
  apiToken: string,
  userId: number,
  enabled: boolean,
  unitStatusCodes: Mark43StatusConfigType,
}

interface IntterraFieldsType {
  key: string,
  value: string,
  transformationRequired: boolean,
  required: boolean,
  enabled: boolean,
}

interface IntterraConnectionType {
  active: boolean,
  fields: IntterraFieldsType[],
  callTypes: string[],
  authKey: string,
  authKeySecret: string,
  agency: string,
  description: string,
}

interface IntterraConfigType {
  enabled: boolean,
  connections: IntterraConnectionType[],
}

interface SimpleSenseConfigType {
  token: string,
}

interface FirstArrivingConfigType {
  token: string,
}

interface SafetyPriorityKeywordType {
  priority: number,
  keywords: string[],
  hexColor: string,
}

interface WebDisclaimerType {
  message: string,
  enabled: boolean,
}

interface AudioStreamType {
  description: string,
  channel: string,
  url: string,
  order: number,
}

interface AudioStreamGroupType {
  group: string,
  streams: AudioStreamType[],
  order: number,
}

interface RestrictedCommentsType {
  enabled: boolean,
  callTypesAllowed: string[],
  statusesAllowed: string[],
  restrictedFields: string[],
  restrictedMessage: string,
}

interface CustomButtonsType {
  name: string,
  url: string,
  order: number,
  allowExternal: boolean,
  defaultExternal: boolean,
  allowFloating: boolean,
  color: ColorType,
}

interface FireMapperLayerType {
  pathname: string,
  name: string,
}

interface FireMapperOutlineType {
  uuid: string,
  layer: FireMapperLayerType[],
}

interface SamsaraConfigurationType {
  enabled: boolean,
  token: string,
}

interface FireMapperConfigurationType {
  enabled: boolean,
  layerRefreshInterval: number,
  proLicenseCount: number,
  host: string,
  layer: FireMapperLayerType[],
  staticLayer: FireMapperOutlineType[],
}

interface LicensingType {
  tcPro2Way: number,
  tcPro1Way: number,
  tcMobile: number,
  tcWeb: number,
  fireMapperPro: number,
  sendToCAD: number,
  tcStreams: number,
}

interface IncidentTypeType {
  name: string,
  value: string,
  allowPartialMatch: boolean,
  callTypeDescription: string[],
  callType: string[],
}

interface ShareIncidentRuleType {
  ruleType: string,
  departmentId: string,
  departmentName: string,
  configuration: Mixed,
}

interface DepartmentType {
  _id: Types.ObjectId,
  uuid: string,
  department: string,
  fdid: string,
  addressDetails: {
    address: string,
    city: string,
    state: string,
    zipCode: string,
    country: string,
  },
  contact: {
    department: string,
    name: string,
    phone: string,
    email: string,
  },
  modified_unix_date: number,
  modified: Date,
  active: boolean,
  apikey: string,
  partialApiKey: string,
  cadEmailUsername: string,
  notificationEmails: string[]
  rosteringEnabled: boolean,
  externalNotificationsEnabled: boolean,
  cadBidirectionalEnabled: boolean,
  cadOneWayVehiclesEnabled: boolean,
  cadAllowedIPAddresses: string[]
  cadGetLocationEnabled: boolean,
  cadAllowIgnoreAfterDays: number,
  connectivity: {
    incident: {
      enabled: boolean,
      staleMinutes: number,
      heartbeatMinutes: number,
    },
    location: {
      enabled: boolean,
      staleMinutes: number,
      heartbeatMinutes: number,
    },
    status: {
      enabled: boolean,
      staleMinutes: number,
      heartbeatMinutes: number,
      ackUnitsCount: number,
    }
  },
  selfAssignmentEnabled: boolean,
  userContributionEnabled: boolean,
  vehicleSwapEnabled: boolean,
  personnelStaffingEnabled: boolean,
  authSource: string[],
  defaultMapPosition: {
    longitude: number,
    latitude: number,
  },
  fireMapPDFReader: string,
  locationStaleMinutes: number,
  beaconEnabled: boolean,
  firstArrivingEnabled: boolean,
  firstArriving: FirstArrivingConfigType,
  simpleSenseEnabled: boolean,
  simpleSense: SimpleSenseConfigType,
  incidentVehicleStatusEnabled: boolean,
  fireMapperEnabled: boolean,
  fireMapperRefreshInterval: number,
  fireMapperProLicenses: number,
  fireMapper: FireMapperConfigurationType,
  arcGISMapsEnabled: boolean,
  beansAIEnabled: boolean,
  mowsEnabled: boolean,
  rtsEnabled: boolean,
  rtsChannelPrefix: string,
  pubNubV3: PubNubTokenType,
  socketIO: PubNubTokenType,
  esriGeoJSONFilename: string,
  incidentTypes: IncidentTypeType[],
  ackDelimiter: string,
  callTypeBlock: string[]
  agencyIds: Types.ObjectId[],
  signupKey: string,
  signupDomains: string[],
  safetyPriorityKeywords: SafetyPriorityKeywordType[],
  shareLocationPhones: boolean,
  shareLocationTablets: boolean,
  shareAVL: {
    enabled: boolean,
    opAreaName: string,
    opAreaCode: string,
    fadeZoomLevel: number,
  },
  shareIncident: {
    enabled: boolean,
    rules: ShareIncidentRuleType[],
  },
  speedReportingEnabled: boolean,
  accountType: string,
  timeZone: string,
  remoteLoggingEnabled: boolean,
  logOffEnabled: boolean,
  licensing: LicensingType,
  webDisclaimer: WebDisclaimerType,
  addUserInstructions: string,
  restrictedComments: RestrictedCommentsType,
  customButtons: CustomButtonsType[],
  reportNumberEnabled: boolean,
  audioConfiguration: AudioStreamGroupType[]
  minPasswordLength: number,
  zonehaven: {
    enabled: boolean,
    visible: boolean,
    layerUrl: string,
    fadeZoomLevel: number,
  },
  activeUserCount: number,
  samsara: SamsaraConfigurationType
  mark43: Mark43ConfigType
  intterra: IntterraConfigType
}

const Mark43StatusConfigDefault = {
  TimeDispatched: ["D"],
  TimeEnroute: ["EN"],
  TimeStaged: ["ST"],
  TimeCleared: ["AV", "AVF", "AOR"],
  TimeAtHospital: ["AH"],
  TimeTransporting: ["T", "EH"],
  TimeArrived: ["ATS", "A"],
};

const IntterraFieldsDefault = [
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
const FireMapperConfigurationDefault = {
  enabled: false,
  layerRefreshInterval: 15,
  proLicenseCount: 0,
  host: "",
  layerURL: [
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
  outline: [],
};

const LicensingDefault = {
  "tcPro2Way": 0,
  "tcPro1Way": 0,
  "tcMobile": 0,
  "tcWeb": 0,
  "fireMapperPro": 0,
  "sendToCAD": 0,
  "tcStreams": 0
};

const SafetyPriorityKeywordDefault = [
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

const FirstArrivingConfigDefault = {
  "token": "",
};

const IntterraConfigDefault = {
  "enabled": false,
  "connections": [],
};

const Mark43ConfigDefault = {
  "baseUrl": "",
  "authToken": "",
  "apiToken": "",
  "userId": 0,
  "enabled": false,
};

const SimpleSenseConfigDefault = {
  "token": "",
};

const WebDisclaimerDefault = {
  "message": "",
  "enabled": false
};

const RestrictedCommentsDefault = {
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

const SamsaraConfigurationDefault = {
  enabled: false,
  token: "",
};


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
    }
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

  const IntterraConfig = new Schema<IntterraConfigType>({
    enabled: {
      type: Boolean,
      default: false,
    },
    connections: {
      type: [IntterraConnection],
      default: [],
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

  const FirstArrivingConfig = new Schema<FirstArrivingConfigType>({
    token: {
      type: String,
      default: "",
    },
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
      type: String,
      default: "", // when empty, portal.firefront.com.au
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
    rosteringEnabled: {
      type: Boolean,
      default: false,
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
    incidentVehicleStatusEnabled: {
      type: Boolean,
      default: false
    },

    // Legacy FireMapper fields, remove after migrating the endpoints/code to use the new object
    fireMapperEnabled: {
      type: Boolean,
      default: false,
    },
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
  }, {
    collection: "massive_admin",
  });

  modelSchema.set("autoIndex", false);
  modelSchema.set("timestamps", {
    updatedAt: "modified",
  });

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform(doc: DocumentTypeFromSchema<typeof modelSchema>, ret: FieldsOfDocument<DocumentTypeFromSchema<typeof modelSchema>>) {
      ret.id = ret._id;
    },
  });

  modelSchema.virtual("id").get(function (this: DocumentTypeFromSchema<typeof modelSchema>) {
    return this._id.toHexString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);

  return mongoose.model<DepartmentType>("Department", modelSchema);
}
