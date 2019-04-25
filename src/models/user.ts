import { createSchema, createModel, DocumentTypeFromSchema, FieldsOfDocument } from "./helpers";
import { MongooseModule, MongooseDocument, UnboxPromise } from "./helpers";

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
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    modified_date: {
      type: Date,
      default: new Date(),
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

export default UserModule;
export type User = UnboxPromise<ReturnType<typeof UserModule>>;
