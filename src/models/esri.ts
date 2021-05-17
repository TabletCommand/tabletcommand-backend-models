// import * as uuid from "uuid";
import {
  createModel,
  createSchema,
  currentDate,
  DocumentTypeFromSchema,
  FieldsOfDocument,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseModule,
  ReplaceModelReturnType,
  retrieveCurrentUnixTime,
} from "../helpers";
import EsriAuthModule from "./schema/esri-auth";
import EsriErrorModule from "./schema/esri-error";
import EsriMapModule from "./schema/esri-map";
import EsriTokenModule from "./schema/esri-token";
import FireMapperAuthModule from "./schema/firemapper-auth";
import EsriGroupModule from "./schema/esri-group";

export async function EsriModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;
  const EsriAuth = EsriAuthModule(mongoose);
  const EsriError = EsriErrorModule(mongoose);
  const EsriMap = EsriMapModule(mongoose);
  const EsriToken = EsriTokenModule(mongoose);
  const FireMapperAuth = FireMapperAuthModule(mongoose);
  const EsriGroup = EsriGroupModule(mongoose);

  const MapProperties = createSchema(Schema, {
    // ArcGIS Item id
    itemId: {
      type: String,
      default: "",
    },
    download: {
      type: Boolean,
      default: false,
    },
  }, {
    _id: false,
  });

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
    modified: {
      type: Date,
      default: currentDate,
    },
    departmentId: {
      type: Types.ObjectId,
      ref: "Department",
      required: true
    },

    tokenDateExpiry: {
      type: Number,
      default: 0,
    },
    token: {
      type: EsriToken,
      default: null,
    },
    tokenError: {
      type: EsriError,
      default: null,
    },

    auth: {
      type: EsriAuth,
      default: null,
    },
    authError: {
      type: EsriError,
      default: null,
    },
    fireMapperAuth: {
      type: FireMapperAuth,
      default: null,
    },

    arcGISGroup: {
      type: EsriGroup,
      default: null,
    },

    // maps
    maps: {
      type: [EsriMap],
      default: []
    },
    // Properties set by user.
    // These are applied by the sync on top of the EsriMap properties
    // saved as { itemId, download, ... }
    mapsProperties: {
      type: [MapProperties],
      default: [],
    }
  }, {
    collection: "massive_esri",
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

  return createModel(mongoose, "Esri", modelSchema);
}

export interface Esri extends ItemTypeFromTypeSchemaFunction<typeof EsriModule> { }
export interface EsriModel extends ModelTypeFromTypeSchemaFunction<Esri> { }
export default EsriModule as ReplaceModelReturnType<typeof EsriModule, EsriModel>;
