import * as uuid from "uuid";
import {
  MongooseModule,
  MongooseDocument,
  currentDate,
} from "../helpers";
import EsriAuthSchema, { EsriAuthSchemaType } from "./schema/esri-auth";
import EsriErrorSchema, { EsriErrorSchemaType } from "./schema/esri-error";
import PubNubTokenSchema, { PubNubTokenSchemaType } from "./schema/pubnub-token";
import { Model, Types } from "mongoose";

interface VehicleSchemaType {
  radioName: string,
  vehicleId: string,
}

export interface User {
  nick: string,
  email: string,
  name: string,
  uuid: string,
  departmentId: string,
  modified_date: Date,
  when: Date,
  agencyId: Types.ObjectId,
  managedAgencies: Types.ObjectId[],
  active: boolean,
  admin: boolean,
  superuser: boolean,
  isPro: boolean,
  isIncidentManager: boolean,
  mobileAccess: boolean,
  webAccess: boolean,
  cadSimulatorAccess: boolean,
  canAddRemoveVehicle: boolean,
  beaconEnabled: boolean,
  userContributionEnabled: boolean,
  syncLoggingExpireDate: Date,
  beacons: string[],
  salt: string,
  pass: string,
  auth: string[],
  mapHidden: boolean,
  mapId: string,
  vehicle: VehicleSchemaType,
  sessionCountiPhone: number,
  sessionCountiPad: number,
  rtsAuthKey: string,
  pubNubV2: PubNubTokenSchemaType
  pubNubV3: PubNubTokenSchemaType
  socketIO: PubNubTokenSchemaType,
  token: string,
  tokenExpireAt: Date,
  shareLocationPhone: boolean,
  shareLocationTablet: boolean,
  offlineMapsEnabled: boolean,
  fireMapperProEnabled: boolean,
  arcGISAuth: EsriAuthSchemaType,
  arcGISAuthError: EsriErrorSchemaType,
  offDutyEnabled: boolean,
  webMapSettings: {
    defaultZoomLevel: number,
    defaultCenter: number[],
    defaultMap: string,
  },
  locationToCAD: boolean,
  logOffEnabled: boolean,
  restrictedCommentsEnabled: boolean,
}

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

  const modelSchema = new Schema<User>({
    nick: {
      type: String,
      default: "",
      index: true,
    },
    email: {
      type: String,
      default: "",
      index: true,
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
      index: true,
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
    }
  }, {
    collection: "sys_user",
  });
  modelSchema.set("autoIndex", false);

  // NO _id on User schema?
  modelSchema.virtual("id").get(function (this: MongooseDocument) {
    return this._id.toHexString();
  });

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
  });


  return modelSchema;
}

export default async function UserModule(mongoose: MongooseModule) {
  const modelSchema = UserSchema(mongoose);
  return mongoose.model<User>("User", modelSchema);
}

export interface UserModel extends Model<User> { }