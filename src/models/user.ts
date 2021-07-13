import * as uuid from "uuid";
import {
  createSchema,
  createModel,
  DocumentTypeFromSchema,
  FieldsOfDocument,
  MongooseModule,
  MongooseDocument,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
  currentDate,
} from "../helpers";
import EsriAuthModule from "./schema/esri-auth";
import EsriErrorModule from "./schema/esri-error";

export async function UserModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const EsriAuth = EsriAuthModule(mongoose);
  const EsriError = EsriErrorModule(mongoose);

  const vehicleSchema = createSchema(Schema, {
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
  });
  const modelSchema = createSchema(Schema, {
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agency",
      default: null,
    },
    managedAgencies: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Agency",
      default: []
    },
    active: {
      type: Boolean,
      default: false,
    },
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
    mobileAccess: {
      type: Boolean,
      default: true,
    },
    webAccess: {
      type: Boolean,
      default: false,
    },
    outsider: {
      type: Boolean,
      default: false,
    },

    // Share Phone Location
    shareLocationEnabled: {
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

    mapHidden: {
      type: Boolean,
      default: true,
    },
    mapId: {
      type: String,
      default: "",
    },
    vehicle: {
      type: vehicleSchema,
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

    rtsAuthKey: {
      type: String,
      default: "",
    },
    token: {
      type: String,
      default: "",
    },
    tokenExpireDate: {
      type: Number,
      default: 0,
    },
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
    arcGISAuth: {
      type: EsriAuth,
      default: null,
    },
    arcGISAuthError: {
      type: EsriError,
      default: null,
    },
  }, {
    collection: "sys_user",
  });
  modelSchema.set("autoIndex", false);

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform(doc: DocumentTypeFromSchema<typeof modelSchema>, ret: FieldsOfDocument<DocumentTypeFromSchema<typeof modelSchema>>) {
      ret.id = ret._id;
    },
  });

  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    return this._id.toHexString();
  });

  return createModel(mongoose, "User", modelSchema);
}

export interface User extends ItemTypeFromTypeSchemaFunction<typeof UserModule> { }
export interface UserModel extends ModelTypeFromTypeSchemaFunction<User> { }
export default UserModule as ReplaceModelReturnType<typeof UserModule, UserModel>;
