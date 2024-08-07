// import * as uuid from "uuid";
import { Model } from "mongoose";
import {
  MongooseModule,
} from "../helpers";
import EsriAuthModule from "./schema/esri-auth";
import EsriErrorModule from "./schema/esri-error";
import EsriMapModule from "./schema/esri-map";
import FireMapperAuthModule from "./schema/firemapper-auth";
import { EsriType, MapPropertiesType } from "../types/esri";

export interface Esri extends EsriType { }

export function EsriSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const EsriAuth = EsriAuthModule(mongoose);
  const EsriError = EsriErrorModule(mongoose);
  const EsriMap = EsriMapModule(mongoose);
  const FireMapperAuth = FireMapperAuthModule(mongoose);

  const MapProperties = new Schema<MapPropertiesType>({
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
    id: false,
  });

  const modelSchema = new Schema<EsriType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },

    // last time when cron updated maps
    runAt: {
      type: Date,
      default: new Date("1970-01-01T00:00:00.000Z"),
    },
    departmentId: {
      type: Schema.Types.ObjectId,
      ref: "Department",
      required: true
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

    // Link to ArcGISGroup
    arcGISGroupIds: {
      type: [String],
      default: [],
    },
    // ArcGIS user used for fallback when a new user has no ArcGIS account yet
    arcGISAuth: {
      type: EsriAuth,
      default: null,
    },
    // For new accounts, set the default value to true
    arcGISMigrated: {
      type: Boolean,
      default: true,
    },
    review: {
      type: Object,
      default: null,
    },
    // last time when review cron was run
    // if date is in the past, we should refresh this
    // at run success, update this date to a date in the future
    reviewRunAt: {
      type: Date,
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
    },
    // newest modified for EsriMap
    mapLastUpdated: {
      type: Date,
      default: new Date("1970-01-01T00:00:00.000Z"),
    },
  }, {
  });
  modelSchema.set("autoIndex", false);

  // Deprecated. Check which apps rely on .id instead of using ._id.
  modelSchema.virtual("id").get(function(this: Esri) {
    return this._id.toHexString();
  });

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
  });

  return modelSchema;
}

export default async function EsriModule(mongoose: MongooseModule) {
  const modelSchema = EsriSchema(mongoose);
  return mongoose.model<Esri>("Esri", modelSchema, "massive_esri", { overwriteModels: true });
}

export interface EsriModel extends Model<Esri> { }