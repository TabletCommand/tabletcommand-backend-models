import * as uuid from "uuid";
import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";

import {
  createSchema,
  createModel,
  DocumentTypeFromSchema,
  FieldsOfDocument,
  MongooseModule,
  retrieveCurrentUnixTime,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";

export async function DepartmentModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const SafetyPriorityKeyword = createSchema(Schema, {
    priority: {
      type: Number,
    },
    keywords: {
      type: [String],
    },
    hexColor: {
      type: String,
    },
  }, {
    _id: false,
  });

  const SafetyPriorityKeywordDefault = [ 
      {
          "keywords" : [],
          "priority" : 0,
          "hexColor" : "FF3B30"
      }, 
      {
          "keywords" : [],
          "priority" : 1,
          "hexColor" : "FEC309"
      }, 
      {
          "keywords" : [],
          "priority" : 2,
          "hexColor" : "0A60FF"
      }
  ];

  const IncidentType = createSchema(Schema, {
    name: {
      type: String,
      default: "Any",
    },
    value: {
      type: String,
      default: "any",
    },
  }, {
    _id: false,
  });

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
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
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    contact_name: {
      type: String,
      default: "",
    },
    contact_phone: {
      type: String,
      default: "",
    },
    contact_email: {
      type: String,
      default: "",
    },
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
    active: {
      type: Boolean,
      default: false,
    },
    pager_number: {
      type: String,
      default: "",
    },
    apikey: {
      type: String,
      default: "",
    },
    cadEmailUsername: {
      type: String,
      default: "",
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
    fireMapperEnabled: {
      type: Boolean,
      default: false,
    },
    fireMapperRefreshInterval: {
      type: Number,
      default: 15,
    },
    beansAIEnabled: {
      type: Boolean,
      default: false,
    },

    // Other features
    pushEnabled: {
      type: Boolean,
      default: true,
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
    rtsAuthKey: {
      type: String,
      default: "",
    },

    // Move this to a different collection
    esriGeoJSONFilename: {
      type: String,
      default: ""
    },

    // Custom Button
    customWebUrl: {
      type: String,
      default: "",
    },
    customWebName: {
      type: String,
      default: "",
    },

    // Incident Type APN
    incidentTypes: {
      type: [IncidentType],
    },

    agencyIds: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agency",
      default: []
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
  }, {
    collection: "massive_admin",
  });
  modelSchema.set("autoIndex", false);

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform(doc: DocumentTypeFromSchema<typeof modelSchema>, ret: FieldsOfDocument<DocumentTypeFromSchema<typeof modelSchema>>) {
      ret.id = ret._id;
    },
  });

  modelSchema.virtual("id").get(function(this: DocumentTypeFromSchema<typeof modelSchema>) {
    return this._id.toHexString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);

  return createModel(mongoose, "Department", modelSchema);
}

export interface Department extends ItemTypeFromTypeSchemaFunction<typeof DepartmentModule> { }
export interface DepartmentModel extends ModelTypeFromTypeSchemaFunction<Department> { }
export default DepartmentModule as ReplaceModelReturnType<typeof DepartmentModule, DepartmentModel>;
