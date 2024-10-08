import * as uuid from "uuid";
import {
  MongooseModule,
  MongooseDocument,
  currentDate,
} from "../helpers";
import EsriAuthSchema from "./schema/esri-auth";
import EsriErrorSchema from "./schema/esri-error";
import PubNubTokenSchema from "./schema/pubnub-token";
import { Model, Types } from "mongoose";
import { UserType, VehicleSchemaType } from "../types/user";

export interface User extends UserType, Record<string, unknown> { }

export function UserSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const EsriAuth = EsriAuthSchema(mongoose);
  const EsriError = EsriErrorSchema(mongoose);
  const PubNubToken = PubNubTokenSchema(mongoose);

  const VehicleSchema = new Schema<VehicleSchemaType>({
    radioName: {
      type: String,
      default: "",
    },
    vehicleId: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const modelSchema = new Schema<UserType>({
    nick: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
    },
    modified_date: {
      type: Date,
      default: currentDate,
    },
    when: {
      type: Date,
    },
    agencyId: {
      type: Schema.Types.ObjectId,
      ref: "Agency",
      default: null,
    },
    managedAgencies: {
      type: [Types.ObjectId],
      ref: "Agency",
      default: []
    },
    active: {
      type: Boolean,
      default: false,
    },

    // These should go to roles
    admin: {
      type: Boolean,
      default: false,
    },
    superuser: {
      type: Boolean,
      default: false,
    },
    superUserReadOnly: {
      type: Boolean,
      default: false,
    },
    isPro: {
      type: Boolean,
      default: false,
    },
    // Allows the user to manage incidents
    isIncidentManager: {
      type: Boolean,
      default: false,
    },
    mobileAccess: {
      type: Boolean,
      default: true,
    },
    webAccess: {
      type: Boolean,
      default: false,
    },
    cadSimulatorAccess: {
      type: Boolean,
      default: false,
    },

    // End fake roles

    // If allowed, a user can add(select)/remove their own vehicle
    // A user can change vehicle regardless of the value of this flag
    canAddRemoveVehicle: {
      type: Boolean,
      default: false,
    },

    beaconEnabled: {
      type: Boolean,
      default: false,
    },
    userContributionEnabled: {
      type: Boolean,
      default: false,
    },
    syncLoggingExpireDate: {
      type: Date,
      default: null
    },
    beacons: {
      type: [String],
      default: [],
    },

    salt: {
      type: String,
      default: "",
      select: false,
    },
    pass: {
      type: String,
      default: "",
      select: false,
    },
    auth: {
      type: [String],
      default: ["password"], // password, saml, o-google, o-microsoft
    },

    mapHidden: {
      type: Boolean,
      default: true,
    },
    mapId: {
      type: String,
      default: "",
    },
    vehicle: {
      type: VehicleSchema,
      default: null,
    },
    sessionCountiPhone: {
      type: Number,
      default: 1,
    },
    sessionCountiPad: {
      type: Number,
      default: 1,
    },

    // PubNub - should go to a different collection
    rtsAuthKey: {
      type: String,
      default: "",
    },
    pubNubV2: {
      type: PubNubToken,
      default: null,
    },
    pubNubV3: {
      type: PubNubToken,
      default: null,
    },
    socketIO: {
      type: PubNubToken,
      default: null,
    },

    // Password Reset
    token: {
      type: String,
      default: "",
    },
    tokenExpireAt: {
      type: Date,
      default: currentDate,
    },

    // Share Phone Location
    shareLocationPhone: {
      type: Boolean,
      default: false,
    },
    shareLocationTablet: {
      type: Boolean,
      default: true,
    },

    offlineMapsEnabled: {
      type: Boolean,
      default: false,
    },
    fireMapperProEnabled: {
      type: Boolean,
      default: false,
    },

    // ArcGIS Auth. These fields is named auth/authError in the main collection
    // These store the users' arcGISAuth (new account)
    arcGISAuth: {
      type: EsriAuth,
      default: null,
    },
    arcGISAuthError: {
      type: EsriError,
      default: null,
    },

    // Off Duty Allowed for this user
    offDutyEnabled: {
      type: Boolean,
      default: false,
    },
    webMapSettings: {
      defaultZoomLevel: {
        type: Number,
      },
      defaultCenter: {
        type: [Number],
        default: [],
      },
      defaultMap: {
        type: String
      },
    },
    locationToCAD: {
      type: Boolean,
      default: false
    },
    logOffEnabled: {
      type: Boolean,
      default: false
    },
    restrictedCommentsEnabled: {
      type: Boolean,
      default: false,
    },

    // UserStealthStatus: prohibited, visible, hidden
    stealthStatus: {
      type: String,
      default: "prohibited",
    },
  }, {
    autoIndex: false,
    toJSON: {
      virtuals: true,
      versionKey: false,
    }
  });

  // NO _id on User schema?
  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    return this._id.toHexString();
  });

  modelSchema.index({
    departmentId: 1,
  }, {
    name: "departmentId_1",
  });

  modelSchema.index({
    departmentId: 1,
    email: 1
  }, {
    name: "departmentId_1_email_1",
  });

  modelSchema.index({
    departmentId: 1,
    vehicle: 1
  }, {
    name: "departmentId_1_vehicle_1_partial",
    partialFilterExpression: {
      "vehicle": {
        "$exists": true
      }
    }
  });

  modelSchema.index({
    email: 1,
  }, {
    name: "email_1_unique",
    unique: true,
  });

  modelSchema.index({
    nick: 1,
  }, {
    name: "nick_1_unique",
    unique: true,
  });

  // A field has to be defined as text and weight  
  modelSchema.index({
    nick: "text",
    email: "text",
    name: "text",
  }, {
    name: "nick_text_email_text_name_text_mapId_text_arcGISAuth.username_text_vehicle.radioName_text",
    weights: {
      email: 10,
      name: 1,
      nick: 9,
    },
    textIndexVersion: 3,
    language_override: "language",
    default_language: "english",
  });

  modelSchema.index({
    token: 1,
    tokenExpireAt: 1
  }, {
    name: "token_1_tokenExpireAt_1",
  });

  return modelSchema;
}

export default async function UserModule(mongoose: MongooseModule) {
  const modelSchema = UserSchema(mongoose);
  return mongoose.model<User>("User", modelSchema, "sys_user", { overwriteModels: true });
}

export interface UserModel extends Model<User> { }
