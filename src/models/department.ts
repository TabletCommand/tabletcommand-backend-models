import { createSchema, createModel, DocumentTypeFromSchema, FieldsOfDocument, ModelItemType } from "./helpers";
import { MongooseModule, UnboxPromise } from "./helpers";
import * as uuid from "uuid";

export async function DepartmentModule(mongoose: MongooseModule) {

  const { Schema, Types } = mongoose;

  const Agency = (await import("./schema/cad-agency")).CADAgency(mongoose);

  const EsriToken = createSchema(Schema, {
    access_token: {
      type: String,
      default: "",
    },
    refresh_token: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      default: "",
    },
    ssl: {
      type: Boolean,
      default: true,
    },
    expires_in: {
      type: Number,
      default: 1800,
    },
  }, {
    _id: false,
  });

  const EsriError = createSchema(Schema, {
    code: {
      type: Number,
      default: 1,
    },
    error: {
      type: String,
      default: "",
    },
    error_description: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
  });

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
      default: new Date().valueOf() / 1000.0,
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
    cadMonitorEnabled: {
      type: Boolean,
      default: false,
    },
    cadMonitorMinutes: {
      type: Number,
      default: 30,
    },
    cadBidirectionalEnabled: {
      type: Boolean,
      default: false,
    },
    heartbeatEnabled: {
      type: Boolean,
      default: false,
    },
    heartbeatMinutes: {
      type: Number,
      default: 5,
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

    // Other features
    pushEnabled: {
      type: Boolean,
      default: true,
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

    // ESRI
    esriTokenDateExpiry: {
      type: Number,
      default: 0,
    },
    esriToken: {
      type: EsriToken,
    },
    error: {
      type: EsriError,
      default: null,
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

    agencies: {
      type: [Agency],
      default: [],
    },

    // Signup
    signupKey: {
      type: String,
      default: "",
    },
    signupDomains: {
      type: [String],
      default: [],
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

  return createModel(mongoose, "Department", modelSchema);

}

export default DepartmentModule;
export type DepartmentModel = UnboxPromise<ReturnType<typeof DepartmentModule>>;
export type Department = ModelItemType<DepartmentModel>;
