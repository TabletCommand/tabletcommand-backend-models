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

export async function UserModule(mongoose: MongooseModule) {
  const Schema = mongoose.Schema;

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
  const soundSchema = createSchema(Schema, {
        sound: {
            type: String,
        },
        soundType: {
            type: String,
        },
    }, {
        _id: false,
  });
  const Agency = (await import("./schema/cad-agency")).CADAgency(mongoose);
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
    agency: {
      type: Agency,
      default: null,
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
    outsider: {
      type: Boolean,
      default: false,
    },

    remoteLoggingEnabled: {
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
    notificationSounds: {
      type: [soundSchema],
      default: []
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
